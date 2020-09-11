import mysql.connector
import sys

def executeScriptsFromFile(filename):
    fd = open(filename, 'r')
    sqlFile = fd.read()
    fd.close()
    sqlCommands = sqlFile.split(';')

    for command in sqlCommands:
        try:
            if command.strip() != '':
                cursor.execute(command) 
        except OSError as msg:
            print("Command skipped: "+ msg)



connection = mysql.connector.connect(
    host="85.10.205.173",
    database='unithmallavaram',
    user="unithm",
    password="password"
)

if connection.is_connected():
    db_Info = connection.get_server_info()
    print("Connected to MySQL Server version ", db_Info)
    cursor = connection.cursor()
    cursor.execute("select database();")
    record = cursor.fetchone()
    print("You're connected to database: ", record)
    executeScriptsFromFile('SE_TABLES.sql')
    connection.commit()
    cursor.close()
    connection.close()
