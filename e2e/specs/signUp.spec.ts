import { SignUp } from '../page-objects/signUp.po';
import { browser } from "protractor/built";

export class SignUpSpec {

  signUpPage = () => {

    describe('SignUp Test Cases: ', () => {
      let RegisterPage: SignUp;

      beforeAll(() => {
        RegisterPage = new SignUp();
        RegisterPage.navigateTo();

      });

      afterEach(() => {
        // browser.refresh();
        browser.sleep(500);
      });

      it('01 - Verify text not is Welcome', () => {
        expect(RegisterPage.gettitle().getText()).not.toEqual('Welcome');
      });

      it('02 - Verify text is Welcome to the Ionic Super Starter', () => {
        expect(RegisterPage.gettitle().getText()).toEqual('Welcome to the Ionic Super Starter');
      });

      it('03 - Register user', () => {
        RegisterPage.getButtonSkip().click();
        browser.sleep(1000);
        RegisterPage.getButtonSignUp().click();
        browser.sleep(1000);
        RegisterPage.operation('Ahemenson Fernandes', 'ahemenson@gmail.com', '1234');
        browser.sleep(1000);
        RegisterPage.getButtonRegister().click();
        browser.sleep(5000);
        //expect(loginPage.gettitle().getText()).toEqual('Welcome to the Ionic Super Starter');
      });


    });
  }
}