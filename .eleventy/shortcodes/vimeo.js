// Vimeo shortcode.
// {% vimeo "13dfnsksa" %}

module.exports = function(id) {
	return `
<figure class="Embed">
	<iframe src="https://player.vimeo.com/video/${id}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</figure>
	`
};
