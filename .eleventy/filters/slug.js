// Limit filter to nunjucks.
// Slice the number of elements in an array
// {{ myUrl | slug('/myPath') }}

const site = require("../../src/_data/site");

module.exports = (relativeUrl, type = 'absolute', slug) => {
	if (type === 'relative') {
		return `${slug}${relativeUrl}`;
	}

	else if (type === 'absolute') {
		if (slug) {
			return `${site.baseURL}${slug}${relativeUrl}`;
		}
		else {
			return `${site.baseURL}${relativeUrl}`;
		}
	}
}
