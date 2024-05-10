# Car Inspection AI App - Guia de Configuração

Este guia fornece instruções claras e concisas para configurar o ambiente de desenvolvimento e implantação do frontend Car Inspection AI App, uma aplicação Angular desenvolvida para interagir com a API Car Inspection AI.

## Requisitos do Sistema
- [Node.js 20.12.2](https://nodejs.org/en/blog/release/v20.12.2) ou [superior](https://nodejs.org/en/download)
- [Angular 17](https://v17.angular.io/guide/setup-local)
- [NPM (Node Package Manager)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Configuração do Ambiente

1. **Instalação do Node.js e NPM:** Se você ainda não tem o Node.js instalado, faça o download e instale a versão 20.12.2 ou superior a partir do [site oficial do Node.js](https://nodejs.org/).

2. **Instalação do Angular CLI:** Após instalar o Node.js, abra o terminal ou prompt de comando e instale o Angular CLI globalmente utilizando o seguinte comando:

    ```
    npm install -g @angular/cli@17
    ```

3. **Clonagem do Repositório:** Clone o repositório do frontend Car Inspection AI App do GitHub para sua máquina local:

    ```
    git clone https://github.com/programecomguedes/InspecaoVeicularPythonGoogleGemini.git
    ```

4. **Instalação das Dependências:** Navegue até o diretório onde o repositório foi clonado e execute o seguinte comando para instalar as dependências do projeto:

    ```
    cd car-inspection-ai-app
    npm install
    ```

5. **Execução do Servidor de Desenvolvimento:** Após instalar as dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

    ```
    npm start
    ```

    O servidor será iniciado e estará acessível em `http://localhost:4200`.

## Configuração do Backend

Para configurar e executar o backend do Car Inspection AI, consulte as instruções fornecidas no [README](../car-inspection-ai-api/README.md) do diretório car-inspection-ai-api.

---

Com essas instruções simples, você estará pronto para configurar e utilizar o frontend Car Inspection AI App em seu ambiente de desenvolvimento.
