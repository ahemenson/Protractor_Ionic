import { browser, by, element, $ } from 'protractor';

export class SearchPage {



    navigateTo() {
        //return browser.get('/#/tabs/items/list-master');
    }

    public getTabSearch() {
        return element(by.id('tab-t0-1'));
    }

    public getInput() {

        return element(by.tagName('ion-content'))


            .element(by.css('div.scroll-content'))

            .element(by.xpath('//*[@id="search"]'));

        //  .element(by.tagName('div'))

        //.element(by.css('input.searchbar-input'))


    }



}