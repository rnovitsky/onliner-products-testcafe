import { Selector } from 'testcafe'

class BasePage {
    constructor() {
        this.navigationPane = Selector('div.catalog-navigation > ul.catalog-navigation-classifier')
        this.navigationSidebar = Selector('div.catalog-navigation-list__aside-list')
        this.navigationGoods = Selector('div.catalog-navigation-list__aside-item_active')
    }
}

export default BasePage