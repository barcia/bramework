// const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
// const pluginRss = require('@11ty/eleventy-plugin-rss');
// const now = new Date();

config = {
  dir: {
		input: 'src/',
		output: 'dist/',
		layouts: '_layouts',
  }
}

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy({
      'src/assets/img': 'img'
    });

    return {
        dir: {
						input: config.dir.input,
            output: config.dir.output,
            layouts: config.dir.layouts,
        }
    }
}
