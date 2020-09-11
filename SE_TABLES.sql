CREATE TABLE Member(
	MemberId	INT NOT NULL AUTO_INCREMENT,
	Name		VARCHAR(30) NOT NULL, 
	DOB			DATE,
	Languages	VARCHAR(100) NOT NULL,
	IsAssigned	INT,
	HourlyRate	FLOAT,
	PRIMARY KEY (MemberId)
);

CREATE TABLE Project(
	ProjectId	INT NOT NULL AUTO_INCREMENT,
	Name		VARCHAR(30) NOT NULL,
	IsAssigned	INT,
	Size		INT,
	Budget		FLOAT,
	Tools		VARCHAR(100),
	PRIMARY KEY (ProjectId)
);

CREATE TABLE Team(
	ProjectId	INT NOT NULL REFERENCES Member(MemberId),
	MemberId	INT NOT NULL REFERENCES Project(ProjectId)
);

CREATE TABLE Requirements(
	ProjectId	INT NOT NULL REFERENCES Project(ProjectId),
	Language 	VARCHAR(20) NOT NULL,
	Skill		INT NOT NULL,
	PRIMARY KEY(ProjectId)
);