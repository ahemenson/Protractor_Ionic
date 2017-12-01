import { browser, by, element, $ } from 'protractor';

export class HomePage {

    public getItem() {
        return element.all(by.css('ion-item-sliding.item-wrapper')).get(2);
    }

    public getItem2() {

    }

    public getTabHome() {
        return element(by.id('tab-t0-0'));
    }

    public getTabSearch() {
        return element(by.id('tab-t0-1'));
    }

    public getTabCog() {
        return element(by.id('tab-t0-2'));
    }

    public getButtonBack() {
        return element.all(by.css('ion-header.header'))
            // .element(by.css('ion-navbar.toolbar toolbar-md'))
            .element(by.css('button.back-button'));
    }

    public getAddIcon() {
        return element(by.id('btn_add'));
    }

    public getNameField() {
        // return element(by.className('list list-md'))
        // .element(by.css('div.item-inner'))       
        // .element(by.id('inputname')); 

        return element(by.css("input[formControlName=name]"));
    }

    public getAboutField() {
        return element(by.css("input[formControlName=about]"));
    }

    public getButtonDone() {
        return element(by.id('btn_done'));
    }


    public operation(name: string, about: string) {
        this.getNameField().sendKeys(name);
        this.getAboutField().sendKeys(about);
    }




}