import GoodsPage from '../pages/GoodsPage'
import ItemCard from '../pages/ItemCard'
import Utils from '../../utils/utils'
import { t } from 'testcafe'

class GoodsPageSteps {
    constructor() {
        this.GoodsPage = new GoodsPage()
    }

    getItemCard(itemNumber) {
        return new ItemCard(this.GoodsPage.goodsList.nth(itemNumber))
    }

    async getItemProperties(itemNumber) {
        const itemProperties = {}
        const currentItem = this.getItemCard(itemNumber)
        itemProperties.name = (await currentItem.title.textContent).trim()
        itemProperties.description = (await currentItem.description.textContent).trim()
        itemProperties.price = Utils.parsePrice(await currentItem.price.textContent)
        itemProperties.offersNumber = Number((await currentItem.offers.textContent).split(' ')[0])
        itemProperties.reviewsNumber = Number(await currentItem.reviewsNumber.textContent)

        return itemProperties
    }

    async getFilterBlocksContent() {
        const filterBlocks = {}
        filterBlocks.manufacturers = await Utils.extractValuesList(this.GoodsPage.manufacturerNames)
        filterBlocks.shops = await Utils.extractValuesList(this.GoodsPage.shopsNames)

        return filterBlocks
    }
    
    async selectHotItem() {
        await t
            .click(this.GoodsPage.superpriceCheckbox)
            .wait(1000)
        const firstHotItem = this.getItemCard(0)
        await t
            .click(firstHotItem.title)
    }

    async headerContains(word) {
        await t
            .expect(this.GoodsPage.title.textContent).contains(word)
    }

    async checkItemContents(itemNumber, itemName, descriptionContent) {
        let currentItem = await this.getItemProperties(itemNumber)
        await t
            .expect(currentItem.name).contains(itemName)
            .expect(currentItem.description).contains(descriptionContent)
            .expect(currentItem.offersNumber).gt(0)
            .expect(currentItem.reviewsNumber).gt(0)
    }

    async checkFirstFiveGoods(itemName, descriptionContent) {
        await t
            .expect(this.GoodsPage.goodsList.count).gt(5)
    
        for (let i = 0; i < 5; i++) {
            await this.checkItemContents(i, itemName, descriptionContent) 
        }
    }

    async checkFilterPanelBlocks() {
        await t
            .expect(this.GoodsPage.minimalPriceBlock.exists).ok()
            .expect(this.GoodsPage.manufacturerBlock.exists).ok()
            .expect(this.GoodsPage.shopsBlock.exists).ok()
            .expect(this.GoodsPage.isAvailableCheckbox.exists).ok()
            .expect(this.GoodsPage.withDeliveryCheckbox.exists).ok()
            .expect(this.GoodsPage.superpriceCheckbox.exists).ok()
            .expect(this.GoodsPage.bonusesList.count).gt(1)
            .expect(this.GoodsPage.additionalBlocksNames.count).gt(0)
    }

    async compareDifferentItems(item1, item2) {
        await t
            .expect(item1.name).notEql(item2.name)
            .expect(item1.description).notEql(item2.description)
            .expect(item1.price).notEql(item2.price)
    }

    async compareDifferentFilterPanels(panel1, panel2) {
        await t
            .expect(panel1.manufacturers).notEql(panel2.manufacturers)
            .expect(panel1.shops).notEql(panel2.shops)
    }
}

export default new GoodsPageSteps()