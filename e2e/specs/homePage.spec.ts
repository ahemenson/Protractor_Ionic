import { HomePage } from '../page-objects/homePage.po';
import { browser } from 'protractor/built';

export class HomePageSpec {

    homePage = () => {

        describe('HomePage Test Cases: ', () => {
            let homepage: HomePage;

            beforeAll(() => {
                homepage = new HomePage();
                //homepage.navigateTo();

            });

            afterEach(() => {
                //browser.refresh();
                browser.sleep(1000)
            });

            xit('01 - Change on tabs', () => {
                homepage.getTabSearch().click();
                browser.sleep(1000);
                homepage.getTabCog().click();
                browser.sleep(1000);
                homepage.getTabHome().click();

            });

            xit('02 - click on item', () => {
                //homepage.getAddIcon().click();
                browser.sleep(1000);
                // homepage.getTab().click();      
                homepage.getItem().click();
                browser.sleep(1000);
                homepage.getButtonBack().click();
                // homepage.getButtonBack().click();
                // homepage.getItem2().click();
                // browser.sleep(1000);
            });

            xit('03 - get info about first item', () => {
                browser.sleep(1000);
                //console log
                homepage.getFirstItemLabels().getText().then(function (text) {
                    console.log(text);
                });
                expect(homepage.getFirstItemLabels().getText()).toContain('Burt Bear');
            });

            xit('04 - Cancel the add new Item', () => {
                browser.sleep(1000);
                homepage.getAddIcon().click();
                browser.sleep(1000);
                homepage.operation('Ahemenson', 'About');
                homepage.getButtonCancel().click();
                browser.sleep(1000);
                expect(homepage.getItemLabelName().getText()).not.toBe('Ahemenson');
            });

            it('05 - Add new Item', () => {
                browser.sleep(3000);
                homepage.getAddIcon().click();
                browser.sleep(1000);
                homepage.operation('Ahemenson', 'About');
                homepage.getButtonDone().click();
                browser.sleep(1000);
                expect(homepage.getItemLabelName().getText()).toBe('Ahemenson');
            });

            it('06 - check name on new item detail', () => {
                homepage.getLastItem().click();
                browser.sleep(1000);
                expect(homepage.getItemNameDetails().getText()).toBe('Ahemenson');
            });

            it('06 - check about on new item detail', () => {             
                
                expect(homepage.getItemAboutDetails().getText()).toBe('About');
            });




        });
    }
}