import { SearchPage } from '../page-objects/searchPage.po';
import { browser } from 'protractor/built';

export class SearchPageSpec {

    homePage = () => {

        describe('HomePage Test Cases: ', () => {
            let searchpage: SearchPage;

            beforeAll(() => {
                searchpage = new SearchPage();
                //homepage.navigateTo();
                browser.sleep(1000);


            });

            afterEach(() => {
                //browser.refresh();
                browser.sleep(500);
                //homepage.navigateTo();
            });

            it('01 - Search', () => {
                searchpage.getTabSearch().click();
                searchpage.getInput().sendKeys('duck');

                //expect(homepage.getHomeTitle().getText()).toBe('Items');
            });

        });
    }
}