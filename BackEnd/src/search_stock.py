import mysql.connector


def search_stock(sphe, cylin, add):
    cnx = mysql.connector.connect(host='mysqlserver.cz1ji5phheqm.us-east-2.rds.amazonaws.com',
                                  user='Lab_carolSL', password='mb028001', database="lab_carol")
    cursor = cnx.cursor()

    var_sphe = str(sphe).replace(',', '.').strip()
    var_cylin = str(cylin).replace(',', '.').strip()
    var_add = str(add).replace(',', '.').strip()

    cursor.execute(f"SELECT * FROM stock WHERE spherical = '{var_sphe}' AND cylindrical = '{var_cylin}' "
                   f"AND adicao = '{var_add}'")

    # result list
    result = cursor.fetchall()
    cursor.close()
    print(result)

    if not result:
        return {"lens": "0"}
    else:
        lista = []
        for value in result:
            data = {"sphe": value[2], "cyl": value[3], "add": value[4], "eye": value[5], "lab": value[6],
                    "mat": value[1], "amount": value[7]}
            lista.append(data)
        return lista
