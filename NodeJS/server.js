const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var mysql = require('mysql');
 
// create a connection variable
var con = mysql.createConnection({
  host: "sefall2021.cosnmrdyk6wi.us-east-2.rds.amazonaws.com", // server ip address
  user: "root", // user name
  password: "SEFall2021", // password
  database: "teamformationassistant" // database name
});
 
// connect to the database.
con.connect(function(err) {
  if (err) throw err;
  // if connection successful
  console.log('connection successful!!!');
});

app.get('/',(req,res)=>{
  res.json('Server is Up... OK');
})

app.get('/getResults', (req, res) => {
    con.query('SELECT * from Team', function(err, rows, fields) {
        if (!err) {
            res.send(rows);
        } else {
            console.log('Error while performing Query.');
        }	
    });
});

app.post('/Signup',(req,res)=>{
	var records = [[req.body.name,req.body.hourlyrate,req.body.dob,req.body.languages,0,req.body.memberrole,req.body.experience,req.body.skillscore,req.body.availablehoursperweek]];
	if(records[0][0]!=null)
	{
		con.query("INSERT INTO Member (MemberName,HourlyRate,DOB,Languages,IsAssigned,MemberRole,Experience,SkillScore,AvailableHoursPerWeek) VALUES ?",[records],function(err,res,fields){

		if(err) throw err;

			console.log(res);
		});
	}
	//res.json('Form received...Thank You for signing up :D');
	return res.redirect('http://localhost:3000/Signup/Success');
})

app.post('/ProjectDetails',(req,res)=>{
	var records = [[req.body.name,req.body.enddate,req.body.teamsize,req.body.budget,req.body.tools,req.body.priority,0]];
	if(records[0][0]!=null)
	{
		con.query("INSERT INTO Project (ProjectName,ProjectEndDate,ProjectTeamSize,Budget,Tools,Priority,IsAssignmentComplete) VALUES ?",[records],function(err,res,fields){

			if(err) throw err;

			console.log(res);
		});
	}
	
	//res.json('Form received...Thank You for signing up :D');
	return res.redirect('http://localhost:3000/ProjectDetails/Success');
})

app.listen(3001,()=>{
  console.log("Port 3001");
})


