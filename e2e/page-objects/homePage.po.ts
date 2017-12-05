import { browser, by, element, $ } from 'protractor';

export class HomePage {

    public getItem(position: number) {
        return element.all(by.css('ion-item-sliding.item-wrapper')).get(position);

    }

    navigateTo() {
        return browser.get('/#/tabs/items/list-master');
    }

    public getLastItem() {
        return element.all(by.css('ion-item-sliding.item-wrapper')).last();
    }

    public getItemNameDetails() {
        return element(by.className('item-detail')).element(by.tagName('h2'));
    }

    public getItemAboutDetails() {
        return element(by.className('item-detail')).element(by.tagName('p'));
    }

    public getHomeTitle() {
        return element(by.id('page-title'));
    }

    public getTabHome() {
        return element(by.id('tab-t0-0'));
    }

    public getDetailTitle() {
        return element(by.id('item-name'));
    }

    public getTabSearch() {
        return element(by.id('tab-t0-1'));
    }

    public getTabCog() {
        return element(by.id('tab-t0-2'));
    }

    public getItemLabelName() {
        return element.all(by.css('ion-item-sliding.item-wrapper'))
            .last()
            .element(by.tagName('h2'));
    }

    public getItemLabelAbout() {
        return element.all(by.css('ion-item-sliding.item-wrapper'))
            .last()
            .element(by.tagName('p'));
    }

    public getButtonBack() {
       // return element(by.tagName('ion-header'))
        //    .element(by.className('toolbar toolbar-md'))
       //     .element(by.css('button back-button button-inner'));

       return element.all(by.tagName('button'));

    }

    public getFirstItemLabels() {
        return element.all(by.css('ion-item-sliding.item-wrapper')).first().element(by.tagName('ion-label'));
    }

    public getNewtemLabels() {
        return element.all(by.css('ion-item-sliding.item-wrapper')).last().element(by.tagName('ion-label'));
    }

    public getAddIcon() {
        return element(by.id('btn_add'));
    }

    public getNameField() {
        return element(by.css("input[formControlName=name]"));
    }

    public getAboutField() {
        return element(by.css("input[formControlName=about]"));
    }

    public getButtonDone() {
        return element(by.id('btn_done'));
    }

    public getButtonCancel() {
        return element(by.id('btn_cancel'));
    }

    public operation(name: string, about: string) {
        this.getNameField().sendKeys(name);
        this.getAboutField().sendKeys(about);
    }

}