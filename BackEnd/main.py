import mysql.connector
from flask import Flask
from flask import jsonify

# connection database
cnx = mysql.connector.connect(host='mysqlserver.cz1ji5phheqm.us-east-2.rds.amazonaws.com',
                              user='Lab_carolSL', password='mb028001', database="lab_carol")
command = cnx.cursor()


app = Flask(__name__)


@app.route('/pesq/services', methods=['GET'])
def pesq_serv():
    command.execute(f"SELECT store, sequencia, tipo, situation, previsao, box FROM services WHERE sequencia = '14400'")
    result = command.fetchall()
    return jsonify(result)


@app.route('/todo/create', methods=['POST'])
def createtask():
    return 'Create New Task'


@app.route('/todo/update', methods=['UPDATE'])
def updatetask():
    return 'Update Task'


@app.route('/todo/delete', methods=['DELETE'])
def deletetask():
    return 'Delete Task'
