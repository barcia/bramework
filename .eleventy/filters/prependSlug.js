// Limit filter to nunjucks.
// Slice the number of elements in an array
// {{ myArray | limit(3) }}

module.exports = (relativeUrl, slug) => (slug ? slug : '') + relativeUrl;
