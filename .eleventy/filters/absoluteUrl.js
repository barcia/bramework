// Convert a URL to absolute
// {{ page.url | absoluteUrl }}

const site = require("../../src/_data/site");

module.exports = (relativeUrl, slug) => site.baseURL + relativeUrl;
