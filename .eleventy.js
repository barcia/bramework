module.exports = function(eleventyConfig) {
		eleventyConfig.setBrowserSyncConfig({
			files: "dist/assets/**/*"
		});

    return {
        dir: {
            input: "src/web",
            output: "dist"
        }
    };
};
