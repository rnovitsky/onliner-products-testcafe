class ItemCard {
    constructor(product) {
        this.title = product.find('a.js-product-title-link')
        this.description = product.find('div.schema-product__description')
        this.offers = product.find('div.schema-product__offers')
        this.reviewsNumber = product.find('.schema-product__review-count > span[data-bind="text: product.reviews.count"]')
        this.price = product.find('a.schema-product__price-value_primary')
    }
}

export default ItemCard