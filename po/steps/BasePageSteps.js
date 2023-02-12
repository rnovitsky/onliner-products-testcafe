import BasePage from '../pages/BasePage'
import { t } from 'testcafe'

class BasePageSteps {
    constructor() {
        this.BasePage = new BasePage()
    }

    async selectCategory(category, group, goods) {
        await t
            .click(this.BasePage.navigationPane.child().withText(category))
            .hover(this.BasePage.navigationSidebar.find('div.catalog-navigation-list__aside-title').withText(group), {offsetX: -1})
            .click(this.BasePage.navigationGoods.find('span.catalog-navigation-list__dropdown-title').withText(goods))
        }
}

export default new BasePageSteps()