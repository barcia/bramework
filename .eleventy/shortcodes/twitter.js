// Twitter shortcode
// {% twitter "20" %}
const fetch = require('node-fetch');

module.exports = async function(id) {
	return await fetch(`https://api.twitter.com/1/statuses/oembed.json?id=${id}&maxwidth=500`)
	.then(response => response.json())
  .then(myJson => {
		if (myJson.html) {
			return myJson.html
		} else {
			return "Este tweet ya no está disponible.";
		}
	})
	.catch(err => console.log(err));
};
