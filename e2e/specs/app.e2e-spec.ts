import { SignUpSpec } from '../specs/signUp.spec';
import { HomePageSpec } from '../specs/homePage.spec';

/**
 * The test specialist in realize login page.
 * @type {SignInSpec} the test specialist in conversation page.
 */
const signUpSpec = new SignUpSpec();
const homePageSpec = new HomePageSpec();


describe('All tests', () => {

  signUpSpec.signUpPage();
  homePageSpec.homePage();
    
});