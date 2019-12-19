// BrowserDOM
import BrowserDOM from 'browserdom';

const myBrowserDOM = new BrowserDOM();

window.addEventListener('load', () => {
	myBrowserDOM.print();
});

window.addEventListener('scroll', () => {
	myBrowserDOM.print();
});
