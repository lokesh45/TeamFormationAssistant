# Data Mocker
The data mocker can be used to create mock members, projects, and requirements in an automated way.

## Usage
The mocker can be called like this:
```
node mock_data.js <numMembers> <numProjects>
```

## Implementation
Part of the mocking process is determining the number of team members the project will require. As such, a corresponding number of requirements will automatically be created for each project.

A few notes on the implementation:
- The mock data that is created is deployed directly to the database.
- Use with caution. The script automatically drops and recreates all related tables to guarantee a fresh set of data.
    - It does this by using a stored procedure in the database called `reset()`.