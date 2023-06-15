Feature: Login Functionality

    This Feature tests login scenarios

    Background: 
        Given the user on the react-app landing page

    Scenario: As a react-app user, I want to login with valid creds in order to see the dashboard
        Given the user is on the login screen
        When the user executes a login
        Then the user shall see the employee dashboard

    Scenario: As a ReactApp user , I want to enter invalid details in order to login data in order to see an error
        Given the user is on the login screen
        When the user inputs incorrect login details and executes a login
        Then the user shall see a login error

    Scenario: As a ReactApp user , I want to add a new employee with valid credential in order to see the employee on the dashboard
        Given the user is on the Add Employee screen
        When the user inputs correct employee details and executes add
        Then the user should see the new employee added

    Scenario: As a ReactApp user , I want to remove a employee in order to no longer see the employee name on the dashboard
        Given the user is on the Employee Management Software
        When the user select delete employee from the list of employees 
        Then the user should not see the deleted employee

    Scenario: As a ReactApp user , I want to add an employee in order to see the employee name on the dashboard
        Given the user is on the Employee Management Software
        When the user inputs correct employee details and executes add
        Then the user should see the employee name on the employee list