export function formattedPrice(price) {
    return Number((Number(price) * 10).toFixed(2)).toLocaleString("en-US");
}
