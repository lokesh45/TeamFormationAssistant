import pandas as pd
from sklearn.preprocessing import StandardScaler
import numpy as np
import scipy
import matplotlib.pyplot as plt
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score
import mysql.connector
import sys


connection = mysql.connector.connect(
    host="sefall2021.cosnmrdyk6wi.us-east-2.rds.amazonaws.com",
    database='teamformationassistant',
    user="root",
    password="SEFall2021"
)

def main():
    #verifyDatabaseConnection()
    loadEmployeeDataFromCSV()

def verifyDatabaseConnection():
    if connection.is_connected():
        db_Info = connection.get_server_info()
        print("Connected to MySQL Server version ", db_Info)
        cursor = connection.cursor()
        cursor.execute("select database();")
        record = cursor.fetchone()
        print("You're connected to database: ", record)
        connection.commit()
        cursor.close()
        connection.close()

def loadEmployeeDataFromCSV():
    EmployeeData     = pd.read_csv("../DataSet/Employee.csv")
    df = pd.DataFrame(EmployeeData, columns= ['MemberID','Name','TeamID',
                     'Languages','Role','HourlyRate','DOB','Experience',
                     'SkillScore','Availibility','isAssigned'])

    if connection.is_connected():
        cursor = connection.cursor()
        #cursor.execute('CREATE TABLE Employee(MemberID int, Name nvarchar(50), TeamID int, Languages nvarchar(50), Role nvarchar(50), HourlyRate int, DOB nvarchar(50), Experience int,SkillScore int,Availibility int,isAssigned int)')
        for row in df.itertuples():
            sql = "INSERT INTO Employee(MemberID,Name,TeamID,Languages,Role,HourlyRate,DOB,Experience,SkillScore,Availibility,isAssigned) VALUES(%d,%s,%d,%s,%s,%d,%s,%d,%d,%d,%d);"
            cursor.executemany(sql, (row.MemberID,row.Name,row.TeamID,row.Languages,row.Role,row.HourlyRate,row.DOB,row.Experience,row.SkillScore,row.Availibility,row.isAssigned))
        connection.commit()

if __name__=="__main__": 
    main() 



  
         
        



    
    



