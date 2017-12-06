import { browser, by, element } from 'protractor';

export class SignUp {

    navigateTo() {
        return browser.get('/');
    };

    public getButtonBack() {
        browser.sleep(500);
        return element.all(by.tagName('button')).first();
    }

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
        return element.all(by.id('msg_title')).first();
    }

    public gettitle2(position: number) {
        return element.all(by.tagName('ion-slide')).all(by.css('div.slide-zoom')).all(by.tagName('h2')).get(position);
    }

    public gettitle3(position: number) {
        return element.all(by.tagName('ion-slide')).all(by.css('div.slide-zoom')).all(by.tagName('p')).get(position);
    }

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

    public getSlider() {
        return element(by.className('swiper-pagination swiper-pagination-clickable swiper-pagination-bullets'))
            .all(by.tagName('button'));
    }

    public operation(name: string, email: string, password: string) {
        this.getNameField().clear();
        this.getNameField().sendKeys(name);
        this.getEmailField().clear();
        this.getEmailField().sendKeys(email);
        this.getPasswordField().clear();
        this.getPasswordField().sendKeys(password);
    }

    public operationSlider(position: number) {
        browser.sleep(100);
        this.getSlider().get(position).click();
    }

}