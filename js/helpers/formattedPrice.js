export function formattedPrice(price) {
    return (price / 100).toLocaleString("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

// Example usage:
let formatted = formattedPrice(17999); // "179,99"
