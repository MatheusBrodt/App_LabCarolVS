from flask import Flask, request
from flask import jsonify

# imports functions
from src.search_serv import search


app = Flask(__name__)
app.run(debug=True)


@app.route('/search', methods=["POST"])
def src_serv():
    body = request.get_json()
    print(f"\033[31mBody = {body['seq']}\033[m")
    data = search(body['seq'])
    return jsonify(data)
