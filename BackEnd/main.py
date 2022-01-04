from flask import Flask, request
from flask import jsonify

# imports functions
from src.search_serv import search
from src.search_vta import search_vta
from src.search_late import search_late
from src.login import user_login
from src.search_stock import search_stock
from src.search_rework import search_rework
from src.init_user import init_user

app = Flask(__name__)
if __name__ == '__main__':
    app.run(debug=True)


@app.route('/search', methods=["POST"])
def src_serv():
    """
    body: Received from FrontEnd.
    data: Send to services search function.
    :return: JSON object with data.
    """
    body = request.get_json()
    print(f"\033[31mStore: {body['store']}, Seq: {body['seq']}\033[m")
    data = search(body['store'], body['seq'])
    print(f"\033[33mData = {data}\033[m")
    return jsonify(data)


@app.route('/vta', methods=['POST'])
def src_vta():
    """
    body: Received from FrontEnd.
    data: Send to services search function.
    :return: JSON object with data.
    """
    body = request.get_json()
    print(f"\033[31mStore: {body['store']}\033[m")
    data = search_vta(body['store'])
    print(f"\033[33mData = {data}\033[m")
    return jsonify(data)


@app.route('/late', methods=['POST'])
def src_late():
    """
    body: Received from FrontEnd.
    data: Send to services search function.
    :return: JSON object with data.
    """
    body = request.get_json()
    print(f"\033[31mStore: {body['store']}\033[m")
    data = search_late(body['store'])
    print(f"\033[33mData = {data}\033[m")
    return jsonify(data)


@app.route('/login', methods=['POST'])
def src_login():
    body = request.get_json()
    data = user_login(body['user'], body['password'])
    return jsonify(data)


@app.route('/src_stock', methods=['POST'])
def src_stcock():
    body = request.get_json()
    data = search_stock(body['sphe'], body['cyl'], body['add'])
    return jsonify(data)


@app.route('/src_rework', methods=['POST'])
def src_rework():
    body = request.get_json()
    data = search_rework(body['store'])
    return jsonify(data)


@app.route('/init_user', methods=['POST'])
def cad_user():
    body = request.get_json()
    data = init_user(body['f_name'], body['s_name'], body['store'], body['ocupation'], body['e_mail'],
                     body['password'], body['c_password'], body['key_word'])
    return jsonify(data)
