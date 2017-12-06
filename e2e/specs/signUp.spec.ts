import { SignUp } from '../page-objects/signUp.po';
import { browser } from "protractor/built";

export class SignUpSpec {

  signUpPage = () => {

    describe('SignUp Test Cases: ', () => {
      let RegisterPage: SignUp;

      beforeAll(() => {
        RegisterPage = new SignUp();
        RegisterPage.navigateTo();
        browser.sleep(500);

      });

      afterEach(() => {
        // browser.refresh();
        browser.sleep(500);
      });

      it('01 - Slider to screen 2 and verify the message ', () => {
        RegisterPage.operationSlider(1);
        expect(RegisterPage.gettitle2(1).getText()).toEqual('How to use the Super Starter');
        expect(RegisterPage.gettitle3(1).getText()).toEqual("Assemble the various page types you want and remove the ones you don't. We've provided many common mobile app page layouts, like login and signup pages, tabs, and this tutorial page.");
      });

      it('02 - Slider to screen 3 and verify the message ', () => {
        RegisterPage.operationSlider(2);
        expect(RegisterPage.gettitle2(2).getText()).toEqual('Getting Started');
        expect(RegisterPage.gettitle3(2).getText()).toEqual('Need help? Check out the Super Starter README for a full tutorial');
      });

      it('03 - Slider to screen 4 and verify the message ', () => {
        RegisterPage.operationSlider(3);
        expect(RegisterPage.gettitle2(3).getText()).toEqual('Ready to Play?');
      });

      it('04 - Slider to screen 1 and verify the message ', () => {
        RegisterPage.operationSlider(0);
         browser.sleep(100);
        expect(RegisterPage.gettitle2(0).getText()).toEqual('Welcome to the Ionic Super Starter');
      });

      it('05 - Verify text is Welcome to the Ionic Super Starter', () => {
        expect(RegisterPage.gettitle().getText()).toEqual('Welcome to the Ionic Super Starter');
      });

      it('03 - Register user', () => {
        RegisterPage.getButtonSkip().click();
        browser.sleep(500);
        RegisterPage.getButtonSignUp().click();
        browser.sleep(500);
        RegisterPage.operation('Ahemenson Fernandes', 'ahemenson@gmail.com', '1234');
        browser.sleep(500);       
        RegisterPage.getButtonRegister().click();
        browser.sleep(2000);
        //expect(RegisterPage.gettitle().getText()).toEqual('Welcome to the Ionic Super Starter');
      });


    });
  }
}