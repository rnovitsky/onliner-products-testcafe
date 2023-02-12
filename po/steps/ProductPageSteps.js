import ProductPage from '../pages/ProductPage'
import Utils from '../../utils/utils'
import { t } from 'testcafe'

class ProductPageSteps {
    constructor() {
        this.ProductPage = new ProductPage()
    }

    async compareSalePriceWithRegular() {
        const actualPrice = Utils.parsePrice(await this.ProductPage.actualPrice.textContent)
        const regularPrice = Utils.parsePrice(await this.ProductPage.basePrice.textContent)
        await t.expect(actualPrice).lt(regularPrice)
    }
}

export default new ProductPageSteps()