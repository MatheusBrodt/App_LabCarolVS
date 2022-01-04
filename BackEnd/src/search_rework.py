import mysql.connector


def search_rework(store):
    # connection database
    cnx = mysql.connector.connect(host='mysqlserver.cz1ji5phheqm.us-east-2.rds.amazonaws.com',
                                  user='Lab_carolSL', password='mb028001', database="lab_carol")
    cursor = cnx.cursor()

    # store verification
    if str(store).isdigit():
        cursor.execute(f"SELECT * FROM services WHERE store = '{store}' AND situation = 'Retrabalho'")
    else:
        cursor.execute(f"SELECT * FROM services WHERE situation = 'Retrabalho'")

    # result list
    result = cursor.fetchall()
    if not result:
        return {"Services": "0"}
    else:
        lista = []
        for value in result:
            data = {"a_id": value[1], "data": value[2], "store": value[3], "seq": value[4], "type": value[5],
                    "situation": value[6], "prev": value[7], "obs": value[8], "warrant": value[9], "status": value[10],
                    "cod_bars": value[11], "box": value[12]}
            lista.append(data)
        return lista
