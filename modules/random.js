module.exports = function(items) {
    if (Array.isArray(items)) return items[Math.floor(Math.random() * items.length)];

    if (typeof(items) == "number") return Math.floor(Math.random() * items);
    
    return null
}
