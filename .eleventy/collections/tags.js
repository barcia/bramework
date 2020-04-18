// https://github.com/11ty/eleventy-base-blog/blob/master/_11ty/getTagList.js

module.exports = function(collection) {
	let tagSet = new Set();

	// For each item in website (page, post, etc)
  collection.getAll().forEach(function(item) {

		// If has tags metadata in frontmatter
    if( 'tags' in item.data ) {

      let tags = item.data.tags;

			// Tags list removing some words
      // tags = tags.filter(function(item) {
      //   switch(item) {
      //     // this list should match the `filter` list in tags.njk
      //     case "nav":
      //       return false;
      //   }

      //   return true;
      // });

      for (const tag of tags) {
        tagSet.add(tag);
      }
    }
  });

  // returning an array in addCollection works in Eleventy 0.5.3
  return [...tagSet];
};
