CREATE TABLE Member(
	MemberId				INT NOT NULL AUTO_INCREMENT,
	Name					VARCHAR(30) NOT NULL, 
	DOB						DATE,
	Languages				VARCHAR(100) NOT NULL,
	IsAssigned				INT,
	HourlyRate				FLOAT,
	Role					VARCHAR(20),
	Experience				INT,
	SkillScore				INT,
	AvailableHoursPerWeek	INT,
	PRIMARY KEY (MemberId)
);

CREATE TABLE Project(
	ProjectId				INT NOT NULL AUTO_INCREMENT,
	Name					VARCHAR(30) NOT NULL,
	EndDate					DATE,
	IsAssigned				INT,
	Size					INT,
	Budget					FLOAT,
	Tools					VARCHAR(100),
	SkillWeight				INT,
	ExperienceWeight		INT,
	HoursWeight				INT,
	LanguageWeight			INT,
	BudgetWeight			INT,
	IsAssignmentComplete	INT,
	Priority				INT,
	PRIMARY KEY (ProjectId)
);

CREATE TABLE Team(
	ProjectId	INT NOT NULL REFERENCES Member(MemberId),
	MemberId	INT NOT NULL REFERENCES Project(ProjectId)
);

CREATE TABLE Requirements(
	ProjectId				INT NOT NULL REFERENCES Project(ProjectId),
	MemberNumber			INT,
	Language 				VARCHAR(20) NOT NULL,
	Skill					INT NOT NULL,
	Role					VARCHAR(20),
	AvailableHoursPerWeek	INT
);