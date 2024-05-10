from flask import Flask
from flask_cors import CORS

from endpoints.hello_world import hello_world_bp
from endpoints.upload_fake import upload_fakebp
from endpoints.risk_analysis import risk_analysis_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(hello_world_bp)
app.register_blueprint(upload_fakebp)
app.register_blueprint(risk_analysis_bp)

if __name__ == '__main__':
    app.run(debug=True)
