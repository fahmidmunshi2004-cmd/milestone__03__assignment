//=========== Problem-01: New Price for Eid Sale =============//
function newPrice(currentPrice, discount) {
    if (typeof currentPrice !== ("number")) {
        return "Invalid"
    }
    if (typeof discount !== ("number")) {
        return "Invalid"
    }
    if (discount < 0 || discount > 100) {
        return "Invalid"
    }
    let price = currentPrice - (currentPrice * discount / 100)
    return price.toFixed(3)
}