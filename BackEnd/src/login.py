import mysql.connector


def user_login(user, password):
    cnx = mysql.connector.connect(host='mysqlserver.cz1ji5phheqm.us-east-2.rds.amazonaws.com',
                                  user='Lab_carolSL', password='mb028001', database="lab_carol")
    cursor = cnx.cursor()
    cursor.execute(f"SELECT name, store FROM users WHERE usuario = '{user}' AND senha = '{password}'")
    value = cursor.fetchone()
    print(value)

    if value is None:
        print('Incorrect user or password')
        return {"Return": "False"}
    else:
        print('Correct')
        return {"user": value[0], "store": value[1]}
