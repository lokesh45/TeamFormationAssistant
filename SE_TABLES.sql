USE teamformationassistant;
CREATE TABLE Member(
	MemberId				INT NOT NULL AUTO_INCREMENT,
	MemberName					VARCHAR(30) NOT NULL, 
	DOB						DATE,
	Languages				VARCHAR(100) NOT NULL,
	IsAssigned				INT,
	HourlyRate				FLOAT,
	MemberRole					VARCHAR(20),
	Experience				INT,
	SkillScore				INT,
	AvailableHoursPerWeek	INT,
	PRIMARY KEY (MemberId)
);

CREATE TABLE Project(
	ProjectId				INT NOT NULL AUTO_INCREMENT,
	ProjectName					VARCHAR(30) NOT NULL,
	ProjectEndDate					DATE,
	ProjectTeamSize					INT,
	Budget					FLOAT,
	Tools					VARCHAR(100),
	IsAssignmentComplete	INT,
	Priority				INT,
	PRIMARY KEY (ProjectId)
);

CREATE TABLE Team(
	ProjectId	INT NOT NULL REFERENCES Member(MemberId),
	ProjectName varchar(30),
	MemberId	INT NOT NULL REFERENCES Project(ProjectId),
    	MemberName		VARCHAR(30) NOT NULL
);

CREATE TABLE Requirements(
	JobId					INT NOT NULL AUTO_INCREMENT,
	ProjectId				INT NOT NULL REFERENCES Project(ProjectId),
	LanguagePreferred 				VARCHAR(20) NOT NULL,
	Skill					INT NOT NULL,
	MemberRole					VARCHAR(20),
	AvailableHoursPerWeek	INT,
	SkillWeight				INT,
	ExperienceWeight		INT,
	HoursWeight				INT,
	LanguageWeight			INT,
	BudgetWeight			INT,
	PRIMARY KEY (JobId)
);
