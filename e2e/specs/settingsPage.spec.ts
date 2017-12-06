import { SettingsPage } from '../page-objects/settingsPage.po';
import { browser } from 'protractor/built';

export class SettingsPageSpec {

    settingsPage = () => {

        describe('Settings Test Cases: ', () => {
            let settingsPage: SettingsPage;

            beforeAll(() => {
                settingsPage = new SettingsPage();
                // settingsPage.navigateTo();
                settingsPage.getTabCog().click();
                browser.sleep(1000);
            });

            afterEach(() => {
                browser.sleep(500)
            });

            it('01 - disable toggle', () => {
                settingsPage.getToggle().click();
            });

            it('02 - insert on input 2', () => {
                settingsPage.getOption2().clear();
                browser.sleep(500);
                settingsPage.getOption2().sendKeys('123456');
            });

            /** 

            it('03 - open list, select radio button 2 and cancel', () => {
                let numlist: number[] = [0, 1, , 2, 0, 2];
                settingsPage.openRadioList(numlist);
                browser.sleep(500);
                settingsPage.getOptionCancel().click();
                browser.sleep(500);
                expect(settingsPage.getSelectorIndicator().getText()).not.toEqual('2');
            });

            */

            it('03 - open list, select radio button 3,2 and 1 and press OK', () => {
                let numlist: number[] = [2, 1, 0];
                settingsPage.openRadioList(numlist);
                browser.sleep(500);
                settingsPage.getOptionOK().click();
                browser.sleep(500);
                expect(settingsPage.getSelectorIndicator().getText()).toEqual('1');
            });


        });
    }
}