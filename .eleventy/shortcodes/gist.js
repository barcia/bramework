// GitHub Gist shortcode
// {% gist "e9b2ac2a4c12b7cff4589e7e97fb72a4" %}

module.exports = function(id) {
	return `<script src="https://gist.github.com/barcia/${id}.js"></script>`;
};
