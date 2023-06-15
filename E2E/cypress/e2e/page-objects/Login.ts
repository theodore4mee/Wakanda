export class Login{

    //Selectors
    static loginBtn = ():string => {return "//input[@type='submit']"}
    static loginEmail = ():string => {return "//input[@type='email']"}
    static loginPwd = ():string => {return "//input[@type='password']"}
    static loginError = ():string => {return "//*[@id='swal2-html-container']"}
    static loginErrorOk = ():string => {return "/html/body/div[2]/div/div[6]/button[1]"}

    //Action methods
    static ClickLoginButton(){
        cy.xpath(this.loginBtn())
        .click();
    }

    static InputLoginDetails(){
        cy.xpath(this.loginEmail()).clear();
        cy.xpath(this.loginPwd()).clear();
        cy.xpath(this.loginEmail()).type("test@gmail.com");
        cy.xpath(this.loginPwd()).type("test@gmail.com").wait(2000);
        cy.xpath(this.loginBtn()).click();
        
        cy.wait(2000);
    }

    static CheckLoginError(){
        cy.xpath(this.loginError()).contains("Incorrect email or password.").wait(2000);
        cy.xpath(this.loginErrorOk()).contains("OK");
    }
}