// Figure shortcode.
// {% figure "Figcaption text" %}
// 	![alt text](src.png)
// {% endfigure %}

module.exports = function(img, figcaption) {
	return `
	<figure>
		${img}
		<figcaption>${figcaption}</figcaption>
	</figure>
	`
};
