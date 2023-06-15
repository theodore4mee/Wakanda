export class Crud {

    //Selectors
    static addEmployeeBtn = (): string => { return "//*[@id='root']/div/header/div/button[1]" }
    static firstName = (): string => { return '//*[@id="firstName"]' }
    static lastName = (): string => { return '//*[@id="lastName"]' }
    static email = (): string => { return '//*[@id="email"]' }
    static salary = (): string => { return '//*[@id="salary"]' }
    static date = (): string => { return '//*[@id="date"]' }
    static addBtn = (): string => { return '//*[@id="root"]/div/div/form/div/input[1]' }
    static delete = (): string => { return '//*[@id="root"]/div/div/table/tbody/tr[1]/td[8]/button' }
    static confirm = (): string => { return '//html/body/div[2]/div/div[6]/button[1]' }
    static deletedEmployee = (): string => { return '//*[@id="root"]/div/div/table/tbody/tr[10]/td[2]' }
    static newEmployee = (): string => { return '//*[@id="swal2-html-container"]'};

    //Action methods
    static GotoAddNewEmployee() {
        cy.xpath(this.addEmployeeBtn()).click();
    }

    static InputEmployeeDetails() {
        cy.wait(1200);
        cy.xpath(this.firstName()).type("Eli");
        cy.xpath(this.lastName()).type("Khoza");
        cy.xpath(this.email()).type("test@gmail.com");
        cy.xpath(this.salary()).type("100.00");
        cy.xpath(this.date()).type("2023-06-15");
        cy.xpath(this.addBtn()).click();
    }

    static checkNewEmployee() {
        cy.xpath(this.newEmployee()).contains('Eli');
    }
    
    static RemoveEmployeeRow() {
        cy.xpath(this.delete()).click();
        cy.xpath(this.confirm()).click().wait(500);
    }

    static checkRemoveEmployeeRow() {
        cy.xpath(this.deletedEmployee()).should('not.exist');
    }
}