import { HomePage } from '../page-objects/homePage.po';
import { browser } from 'protractor/built';

export class HomePageSpec {

    homePage = () => {

        describe('HomePage Test Cases: ', () => {
            let homepage: HomePage;

            beforeAll(() => {
                homepage = new HomePage();
                //homepage.navigateTo();
                browser.sleep(1000);
                homepage.getTabHome().click();

            });

            afterEach(() => {
                //browser.refresh();
                browser.sleep(500);
                //homepage.navigateTo();
            });

            it('01 - Change on tabs', () => {
                homepage.getTabSearch().click();
                browser.sleep(500);
                homepage.getTabCog().click();
                browser.sleep(500);
                homepage.getTabHome().click();
                browser.sleep(500);
                expect(homepage.getHomeTitle().getText()).toBe('Items');
            });


            it('02 - Cancel the add new Item', () => {

                browser.sleep(500);
                homepage.getAddIcon().click();
                browser.sleep(500);
                homepage.operation('Ahemenson', 'About');
                homepage.getButtonCancel().click();
                browser.sleep(500);
                expect(homepage.getItemLabelName().getText()).not.toBe('Ahemenson');
            });

            it('03 - Add new Item', () => {
                browser.sleep(500);
                homepage.getAddIcon().click();
                browser.sleep(500);
                homepage.operation('Ahemenson', 'abcde 123');
                homepage.getButtonDone().click();
                browser.sleep(500);
                expect(homepage.getItemLabelName().getText()).toBe('Ahemenson');
            });

            it('04 - check name on new item detail', () => {
                homepage.getLastItem().click();
                browser.sleep(500);
                expect(homepage.getItemNameDetails().getText()).toBe('Ahemenson');
                expect(homepage.getItemAboutDetails().getText()).toBe('abcde 123');
            });
            

            it('07 - click on item (02)', () => {

                browser.sleep(500);
                homepage.getTabHome().click();
                browser.sleep(500);
                homepage.getItem(1).click();
                browser.sleep(500);
                //  console.log(elementToBePresent);                   
                expect(homepage.getDetailTitle().getText()).toContain('Charlie Cheetah');
            });

            /** 

            xit('08 - click on item 0 and get info about', () => {

                browser.sleep(500);
                homepage.getButtonBack().click();
                browser.sleep(500);
                homepage.getItem(0).click();
                browser.sleep(500);
                //console log
                homepage.getItemNameDetails().getText().then(function (text) {
                    console.log(text);
                });
                expect(homepage.getItemNameDetails().getText()).toContain('Burt Bear');
            });

              */


        });
    }
}