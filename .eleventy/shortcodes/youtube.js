// Youtube shortcode.
// {% youtube "3RqqnbmG58A" %}

module.exports = function(id) {
	return `
<figure class="Embed">
	<iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>
	`
};
