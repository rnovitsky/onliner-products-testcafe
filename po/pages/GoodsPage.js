import { Selector } from 'testcafe'
import BasePage from './BasePage'

class GoodsPage extends BasePage {
    constructor() {
        super()
        this.title = Selector('h1.schema-header__title')
        this.goodsList = Selector('div#schema-products > div.schema-product__group')
        //elements from the left filter panel
        this.minimalPriceBlock = Selector('div.schema-filter__fieldset').withText('Минимальная цена в предложениях магазинов')
        this.manufacturerBlock = Selector('div.schema-filter__fieldset').withText('Производитель')
        this.manufacturerNames = this.manufacturerBlock.find('ul.schema-filter__list > li')
        this.shopsBlock = Selector('div.schema-filter__fieldset').withText('Магазины')
        this.shopsNames = this.shopsBlock.find('ul.schema-filter__list > li')
        this.isAvailableCheckbox = this.shopsBlock.nextSibling().withExactText('В наличии на складе магазина')
        this.withDeliveryCheckbox = this.manufacturerBlock.prevSibling().withExactText('С доставкой по Беларуси')
        this.superpriceCheckbox = Selector('div.schema-filter__bonus-list').withExactText('Суперцена')
        this.bonusesList = Selector('label.schema-filter__bonus-item')
        this.additionalBlocksNames = this.shopsBlock.nextSibling().child('div.schema-filter__label')
    }
}

export default GoodsPage