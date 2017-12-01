import { SettingsPage } from '../page-objects/settingsPage.po';
import { browser } from 'protractor/built';

export class SettingsPageSpec {

    settingsPage = () => {

        describe('Settings Test Cases: ', () => {
            let settingsPage: SettingsPage;

            beforeAll(() => {
                settingsPage = new SettingsPage();
                settingsPage.navigateTo();

            });

            afterEach(() => {
                browser.sleep(1000)
            });

            it('01 - disable toggle', () => {
                browser.sleep(3000);
                settingsPage.getTabCog().click();
                settingsPage.getToggle().click();

            });

            it('02 - insert on input 2', () => {
                browser.sleep(1000);
                settingsPage.getOption2().clear();
                settingsPage.getOption2().sendKeys('123456');
            });

            it('03 - open list, select radio button 2 and cancel', () => {
                browser.sleep(500);
                let numlist: number[] = [0,0,1,1,2,2,0,1,2];
                settingsPage.openRadioList(numlist);
                settingsPage.getOptionCancel().click();
                browser.sleep(500);
                expect(settingsPage.getSelectorIndicator().getText()).not.toEqual('2');
            });

            it('03 - open list, select radio button 3,2 and 1 and press OK', () => {
                browser.sleep(500);
                let numlist: number[] = [2,1,0];
                settingsPage.openRadioList(numlist);
                settingsPage.getOptionOK().click();
                browser.sleep(500);
                expect(settingsPage.getSelectorIndicator().getText()).toEqual('1');
            });


        });
    }
}