import { browser, by, element } from 'protractor';

export class SignUp {

    navigateTo() {
        return browser.get('/');
    };

    public getNameField() {
        return element(by.id('input_name')).element(by.css('.text-input'));
    }

    public getEmailField() {
        return element(by.id('input_email')).element(by.css('.text-input'));
    }

    public getPasswordField() {
        return element(by.id('input_passord')).element(by.css('.text-input'));
    }

    public gettitle() {
        return element(by.id('msg_title'));
    };

    public getButtonSkip() {
        return element(by.id('btn_skip'));
    }

    public getButtonLogin() {
        return element(by.id('btn_login'));
    }

    public getButtonSignUp() {
        return element(by.id('btn_signup'));
    }

    public getButtonRegister() {
        return element(by.id('btn_password'));
    }
    public operation(name: string, email: string, password: string) {
        this.getNameField().clear();
        this.getNameField().sendKeys(name);
        this.getEmailField().clear();
        this.getEmailField().sendKeys(email);
        this.getPasswordField().clear();
        this.getPasswordField().sendKeys(password);
    }




}