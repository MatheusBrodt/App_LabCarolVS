import mysql.connector


def r_password(key_word, new_pass, r_pass):
    # connection database
    cnx = mysql.connector.connect(host='mysqlserver.cz1ji5phheqm.us-east-2.rds.amazonaws.com',
                                  user='Lab_carolSL', password='mb028001', database="lab_carol")
    cursor = cnx.cursor()


