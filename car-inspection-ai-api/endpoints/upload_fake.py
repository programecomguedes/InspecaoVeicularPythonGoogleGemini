from flask import Blueprint

upload_fakebp = Blueprint('upload_fake', __name__)

@upload_fakebp.route('/uploadfake', methods=['POST'])
def upload_fake():
    return {"success": "true"}, 200
