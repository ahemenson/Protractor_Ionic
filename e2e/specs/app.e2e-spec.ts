import { SignUpSpec } from '../specs/signUp.spec';
import { HomePageSpec } from '../specs/homePage.spec';
import { SettingsPageSpec } from '../specs/settingsPage.spec';
import { SearchPageSpec } from '../specs/searchPage.spec';

/**
 * The test specialist in realize all page.
 * @type {SignUpSpec} the test specialist in conversation page.
 */
const signUpSpec = new SignUpSpec();
const homePageSpec = new HomePageSpec();
const settingsPageSpec = new SettingsPageSpec();
const searchPageSpec = new SearchPageSpec();


describe('All tests', () => {

  signUpSpec.signUpPage();

  settingsPageSpec.settingsPage();

  homePageSpec.homePage();

  //searchPageSpec.homePage();

});