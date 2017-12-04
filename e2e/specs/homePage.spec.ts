import { HomePage } from '../page-objects/homePage.po';
import { browser } from 'protractor/built';

export class HomePageSpec {

    homePage = () => {

        describe('HomePage Test Cases: ', () => {
            let homepage: HomePage;

            beforeAll(() => {
                homepage = new HomePage();
                //homepage.navigateTo();
                browser.sleep(3000)

            });

            afterEach(() => {
                //browser.refresh();
                browser.sleep(1000);
                //homepage.navigateTo();
            });

            xit('01 - Change on tabs', () => {
                homepage.getTabSearch().click();
                browser.sleep(500);
                homepage.getTabCog().click();
                browser.sleep(500);
                homepage.getTabHome().click();
                expect(homepage.getHomeTitle().getText()).toBe('Items');
            });

            it('02 - click on item (02)', () => {
                browser.sleep(500);
                homepage.getItem(1).click();
                browser.sleep(500);
                let itemDetail = homepage.getDetailTitle();
                homepage.getButtonBack().click();
                //console.log(homepage.getButtonBack().getAttribute('class'));
                expect(itemDetail.getText()).toContain('Charlie Cheetah');
            });

            xit('03 - click on item 0 and get info about', () => {
                browser.sleep(1000);
                homepage.getItem(0).click();
                //console log
                homepage.getFirstItemLabels().getText().then(function (text) {
                    console.log(text);
                });
                expect(homepage.getFirstItemLabels().getText()).toBe('Burt Bear Burt is a Bear.');
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

            xit('05 - Add new Item', () => {
                browser.sleep(3000);
                homepage.getAddIcon().click();
                browser.sleep(1000);
                homepage.operation('Ahemenson', 'About');
                homepage.getButtonDone().click();
                browser.sleep(1000);
                expect(homepage.getItemLabelName().getText()).toBe('Ahemenson');
            });

            xit('06 - check name on new item detail', () => {
                homepage.getItem(3).click();
                browser.sleep(1000);
                expect(homepage.getItemNameDetails().getText()).toBe('Ahemenson');
            });

            xit('06 - check about on new item detail', () => {
                expect(homepage.getItemAboutDetails().getText()).toBe('About');
            });


        });
    }
}