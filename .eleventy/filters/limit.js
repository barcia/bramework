// Limit filter to nunjucks.
// Slice the number of elements in an array
// {{ myArray | limit(3) }}

module.exports = (arr, limit) => arr.slice(0, limit);
