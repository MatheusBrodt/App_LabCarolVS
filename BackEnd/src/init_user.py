import mysql.connector


def init_user(f_name, s_name, store, ocup, e_mail, password, c_password, key_word):
    # connection database
    cnx = mysql.connector.connect(host='mysqlserver.cz1ji5phheqm.us-east-2.rds.amazonaws.com',
                                  user='Lab_carolSL', password='mb028001', database="lab_carol")
    cursor = cnx.cursor()

    f_name = str(f_name).strip().isalpha()
    s_name = str(s_name).strip().isalpha()
    store = str(store).strip().isnumeric()
    ocup = str(ocup).strip().isalpha()
    email = str(e_mail).strip()
    password = str(password).strip()
    c_password = str(c_password).strip()
    key_word = str(key_word).strip().isalpha()

    if cursor and f_name and s_name and store and ocup and key_word and password == c_password:
        print('OK')
        cursor.close()
        return {"result": "ok"}
    else:
        cursor.close()
        return {"msg": "Insert user error"}
