class Utils {
    static parsePrice(price) {
        return Number(price
            .match(/\d{1,6},\d{2}/)[0]
            .replace(',', '.'))
    }

    static async extractValuesList(selector) {
        const valuesList = []
        for (let i = 0; i < await selector.count; i++) {
            valuesList.push((await selector.nth(i).textContent).trim())
        }

        return valuesList
    }
}

export default Utils