import mysql.connector


def search(seq):
    cnx = mysql.connector.connect(host='mysqlserver.cz1ji5phheqm.us-east-2.rds.amazonaws.com',
                                  user='Lab_carolSL', password='mb028001', database="lab_carol")
    cursor = cnx.cursor()
    cursor.execute(f"SELECT store, sequencia, tipo, situation, previsao, box FROM services "
                   f"WHERE sequencia = '{seq}'")
    result = cursor.fetchone()

    if result is None:
        return {"Services": "0"}
    else:
        data = {"store": result[0], "seq": result[1], "type": result[2], "situation": result[3], "prev": result[4],
                "box": result[5]}
    return data
