import pandas as pd
from sklearn.preprocessing import StandardScaler
import numpy as np
import scipy
import matplotlib.pyplot as plt
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score

EmployeeData     = pd.read_csv("../DataSet/Employee.csv")
EmployeeData.columns = ['MemberID','Name','TeamID',
                     'Languages','Role','HourlyRate','DOB','Experience',
                     'Skill Score','Availibility','isAssigned']

ProjectData      = pd.read_csv ("../DataSet/Project.csv")
RequirementsData = pd.read_csv ("../DataSet/Requirements.csv")
RequirementsData.columns = ['JobID','ProjectID','TeamMemberNo',
                     'Role','Language','AvailableHours','LanguagesWeight','SkillWeight',
                     'HoursWeight','ExperienceWeight','BudgetWeight']

TeamMappingData  = pd.read_csv ("../DataSet/TeamMapping.csv")

jobIDs = RequirementsData['JobID'].tolist()
employee = EmployeeData.loc[EmployeeData['isAssigned'] == 0]
employee = employee['MemberID'].tolist()

teamAssignment = {}

for jobID in jobIDs:
    Req         = RequirementsData.loc[RequirementsData['JobID'] == jobID]
    reqLanguage = Req['Language'].tolist()[0]
    skillweight = float(Req['SkillWeight'])
    experienceWeight = float(Req['ExperienceWeight'])
    hoursWeight = float(Req['HoursWeight'])
    languageWeight =  float(Req['LanguagesWeight'])
    budgetWeight =  float(Req['BudgetWeight'])
    highScore = 0
    selectedEmploy = ''
    for employ in employee:
        employData = EmployeeData.loc[EmployeeData['MemberID'] == employ]
        skillScore = float(employData['Skill Score'])
        expScore = float(employData['Experience'])
        availableHours = float(employData['Availibility'])
        hourlyRate = float(employData['HourlyRate'])
        languageScore = 0

        if reqLanguage in employData['Languages'].tolist()[0].split(","):
            languageScore = 1
       
        memscore = 0
        memscore = (skillweight*skillScore)/100+(experienceWeight*expScore)/10+(hoursWeight*availableHours)/40+(languageWeight*languageScore)/5+(budgetWeight*hourlyRate)/100

        if (memscore > highScore):
            selectedEmploy = employ
            highScore = memscore
    
    employee.remove(selectedEmploy)
    teamAssignment[jobID] = selectedEmploy

print(teamAssignment)







  
         
        



    
    



