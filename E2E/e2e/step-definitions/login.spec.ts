import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { Login } from "../page-objects/Login";
import { Crud } from "../page-objects/crud";

Given(/^the user on the react-app landing page$/, () => {
	cy.visit("http://localhost:3000/");
});

Given(/^the user is on the login screen$/, () => {
	return true;
});

When(/^the user executes a login$/, () => {
	Login.ClickLoginButton();
});

Then(/^the user shall see the employee dashboard$/, () => {
	return true;
});
/////
Given(/^the user is on the login screen$/, () => {
	return true;
});

When(/^the user inputs incorrect login details and executes a login$/, () => {
	Login.InputLoginDetails();
});

Then(/^the user shall see a login error$/, () => {
	Login.CheckLoginError();
});

Given(/^the user is on the Add Employee screen$/, () => {
	Login.ClickLoginButton();
});

When(/^the user inputs correct employee details and executes add$/, () => {
	Crud.GotoAddNewEmployee();
	Crud.InputEmployeeDetails();
});

Then(/^the user should see the new employee added$/, () => {
	Crud.checkNewEmployee();
});

Given(/^the user is on the Employee Management Software$/, () => {
	Login.ClickLoginButton();
});

When(/^the user select delete employee from the list of employees$/, () => {
	Crud.RemoveEmployeeRow();
});

Then(/^the user should not see the deleted employee$/, () => {
	Crud.checkRemoveEmployeeRow();
});

Given(/^the user is on the Employee Management Software$/, () => {
	Login.ClickLoginButton();
});

When(/^the user inputs correct employee details and executes add$/, () => {
	Crud.GotoAddNewEmployee();
	Crud.InputEmployeeDetails();	
});

Then(/^the user should see the employee name on the employee list$/, () => {
	Crud.checkNewEmployee();
});

