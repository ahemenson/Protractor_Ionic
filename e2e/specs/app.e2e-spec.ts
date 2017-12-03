import { SignUpSpec } from '../specs/signUp.spec';
import { HomePageSpec } from '../specs/homePage.spec';
import { SettingsPageSpec } from '../specs/settingsPage.spec';

/**
 * The test specialist in realize login page.
 * @type {SignInSpec} the test specialist in conversation page.
 */
const signUpSpec = new SignUpSpec();
const homePageSpec = new HomePageSpec();
const settingsPageSpec = new SettingsPageSpec();


describe('All tests', () => {

  signUpSpec.signUpPage();
  homePageSpec.homePage();
  //settingsPageSpec.settingsPage();
    
});