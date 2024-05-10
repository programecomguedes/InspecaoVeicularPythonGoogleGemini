from flask import Blueprint, request
from PIL import Image
from IPython.display import Markdown

import google.generativeai as genai
import os
import json

risk_analysis_bp = Blueprint('post_image', __name__)

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def to_markdown(text):
  text = text.replace('•', '  *')
  return Markdown(text.indent(text, '> ', predicate=lambda _: True))

@risk_analysis_bp.route('/risk-analysis', methods=['POST'])
def risk_analysis():
    # Verifica se a requisição contém arquivos
    if 'file[]' not in request.files:
        return 'Nenhum arquivo enviado', 400

    files = request.files.getlist('file[]')

    print(len(files))

    # Verifica se algum arquivo foi enviado
    if len(files) == 0:
        return 'Nenhum arquivo enviado', 400

    # Lista para armazenar as imagens carregadas
    images = []

    # Loop sobre cada arquivo enviado
    for file in files:
        # Verifica se o nome do arquivo está vazio
        if file.filename == '':
            return 'Nome de arquivo vazio', 400

        # Verifica se a extensão do arquivo é permitida
        if not allowed_file(file.filename):
            return 'Extensão de arquivo não permitida', 400

        # Se tudo estiver correto, carrega a imagem
        if file and allowed_file(file.filename):
            img = Image.open(file)
            images.append(img)

    # Verifica se alguma imagem foi carregada
    if len(images) == 0:
        return 'Nenhuma imagem válida carregada', 400

    # Cria uma nova imagem na vertical
    new_image = Image.new('RGB', (max(img.width for img in images), sum(img.height for img in images)))
    y_offset = 0
    for img in images:
        new_image.paste(img, (0, y_offset))
        y_offset += img.height

    genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

    for m in genai.list_models():
        if 'generateContent' in m.supported_generation_methods:
            print(m.name)

    generation_config = {
        "temperature": 0.2,
        "max_output_tokens": 500,
        "stop_sequences": ["\n```", ],
    }

    model = genai.GenerativeModel(
        model_name='gemini-pro-vision',
        generation_config=generation_config,
    )

    prompt = '''
        haja como um inspetor de seguros cuja responsabilidade é realizar inspeções detalhadas, tirar fotos e gerar laudos para auxiliar na avaliação de riscos para uma seguradora de veículos.\n
        sua conclusão deve fornecer um lado com maior detalhe possível que deve conter apenas informações nas quais você tenha, pelo menos, 90% de certeza com base na avaliação das fotos.\n
        escreva um relatório de análise de risco para uma seguradora que está para fechar um contrato com um cliente, cujo veículo encontra-se nas condições destaw fotos.\n"
        sua resposta deve estar em formato json com as seguintes informações:\n
        maca, modelo(se não se aplicar, retorne N/A), ano_veiculo (se não tiver certeza, responda Não Identificado), cor, condicoes_gerais, frente_veiculo (se não se aplicar, retorne N/A),
        para_brisa (se não se aplicar, retorne N/A), traseira_veiculo (se não se aplicar, retorne N/A), danos_nao_visiveis (se não se aplicar, retorne N/A), 
        quilometragem (se não se aplicar, retorne N/A), pneus (se não se aplicar, retorne N/A), painel (se não se aplicar, retorne N/A), risco_seguradora (de 0% a 100% com base nas condições do veiculo), conclusao (caso não haja dados suficientes para gerar o laudo, retorne dados insuficientes para gerar um lado.)
    '''
    response = model.generate_content([prompt, new_image], stream=True)
    response.resolve()

    if (len(response.parts) > 0):
        resultText = ''.join(['    ' + line for line in response.parts[0].text.split('\n')])
    else:
        resultText = response.text

    jsonResult = json.loads(resultText.replace('```json ', ''))

    return jsonResult, 200

