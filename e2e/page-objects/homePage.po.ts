import { browser, by, element, $ } from 'protractor';

export class HomePage {

    public getItem() {
       return element.all(by.css('ion-item-sliding.item-wrapper')).get(1); 
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
        return element(by.css('back-button bar-button bar-button-md back-button-md bar-button-default bar-button-default-md show-back-button'));
    }

    public getAddIcon() {
        return element(by.id('btn_add'));
    }

    public getNameField() {
        return element(by.className('show-page'));
       // return element(by.css('div.profile-image-wrapper')).element(by.id('input_name'));    
       //return element(by.Css('ion-list')).element(by.id('input_name')); 
    }

    public getAboutField() {
        return element(by.id('input_about'));
    }

    public getButtonDone() {
        return element(by.css('.list list-ios')).element(by.id('btn_done'));
    }

    public operation(name: string, about: string) {
        //this.getNameField().clear();
        this.getNameField().click(); //.sendKeys(name);
       // this.getAboutField().clear();
       // this.getAboutField().sendKeys(about);       
    }




}