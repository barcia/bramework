// Get the navigator language
// Not use this if you use the 'lang' atributte
const lang = navigator.language;
document.documentElement.dataset.lang = lang;


module.exports = lang;
