import { Selector } from 'testcafe'
import BasePage from './BasePage';

class ProductPage extends BasePage {
    constructor() {
        super()
        this.actualPrice = Selector('div.offers-description__price_secondary')
        this.basePrice = Selector('div.offers-description__price_additional')
    }
}

export default ProductPage