// Instagram shortcode
// {% instagram "B84NMNKgXg2" %}
const fetch = require('node-fetch');

module.exports = async function(id) {
	return await fetch(`https://api.instagram.com/oembed/?url=https://instagram.com/p/${id}&hidecaption=true&maxwidth=500`)
	.then(response => response.json())
  .then(myJson => {
		if (myJson.html) {
			return myJson.html
		} else {
			return "Este post de Instagram ya no está disponible.";
		}
	})
	.catch(err => console.log(err));
};
