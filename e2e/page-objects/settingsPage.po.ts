import { browser, by, element, $ } from 'protractor';

export class SettingsPage {


    public navigateTo() {
        browser.get('/#/tabs/items/list-master/');
    };

    public getTabCog() {
        return element(by.id('tab-t0-2'));
    }

    public getToggle() {       
        return element(by.css("toggle[formControlName=option1]"));
        //return element(by.id('toggle'));


    }

    public getOption2() {
        return element(by.css('input[formControlName=option2]'));
    }

    public getOptionOK() {
        return element.all(by.css('button.alert-button')).get(1);
    }

    public getOptionCancel() {
        return element.all(by.css('button.alert-button')).get(0);
    }

    public getRadioItem1() {
        return element.all(by.css('div.alert-radio-icon')).get(0);
    }

    public getRadioItem2() {
       return element.all(by.css('div.alert-radio-icon')).get(1);
    }

    public getRadioItem3() {
        return element.all(by.css('div.alert-radio-icon')).get(2);
    }

    public openRadioList(radio: number[]) {
        element.all(by.tagName('ion-select')).each(function (eachElement, index) {
            eachElement.click();// select the <select>
            browser.driver.sleep(500);// wait for the renderings to take effect   
        });

        for (let i of radio) {
            browser.sleep(1000);
            if (i == 0 ){
                this.getRadioItem1().click();
            }
            else if (i == 1) {
                this.getRadioItem2().click();
            }
            else if (i == 2) {
                this.getRadioItem3().click();
            }

        }

        //this.getOptionOK();
    }

    public getSelectorIndicator() {
        return element(by.css('div.select-text'));
    }


}