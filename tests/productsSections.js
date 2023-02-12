import BasePageSteps from '../po/steps/BasePageSteps'
import GoodsPageSteps from '../po/steps/GoodsPageSteps'
import ProductPageSteps from '../po/steps/ProductPageSteps'

fixture('Content of different products sections')

test('Check Headphones section content', async () => {
    await BasePageSteps.selectCategory('Электроника', 'Аудиотехника', 'Наушники')
    await GoodsPageSteps.headerContains('Наушники')
    await GoodsPageSteps.checkFirstFiveGoods('Наушники', 'наушники')
    await GoodsPageSteps.checkFilterPanelBlocks()
    await GoodsPageSteps.selectHotItem()
    await ProductPageSteps.compareSalePriceWithRegular()
})

test('Check Trimmers section content', async () => {
    await BasePageSteps.selectCategory('Дом и\u00a0сад', 'Садовая техника и\u00a0инструменты', 'Триммеры')
    await GoodsPageSteps.headerContains('Триммер')
    await GoodsPageSteps.checkFirstFiveGoods('Триммер', 'оснастка')
    await GoodsPageSteps.checkFilterPanelBlocks()
    await GoodsPageSteps.selectHotItem()
    await ProductPageSteps.compareSalePriceWithRegular()
})

test('Compare Headphones and Trimmers sections', async () => {
    await BasePageSteps.selectCategory('Электроника', 'Аудиотехника', 'Наушники')
    const headphonesInfo = await GoodsPageSteps.getItemProperties(0)
    const headphonesFilter = await GoodsPageSteps.getFilterBlocksContent()
    await BasePageSteps.selectCategory('Дом и\u00a0сад', 'Садовая техника и\u00a0инструменты', 'Триммеры')
    const trimmersInfo = await GoodsPageSteps.getItemProperties(0)
    const trimmersFilter = await GoodsPageSteps.getFilterBlocksContent()

    await GoodsPageSteps.compareDifferentItems(headphonesInfo, trimmersInfo)
    await GoodsPageSteps.compareDifferentFilterPanels(headphonesFilter, trimmersFilter)
})