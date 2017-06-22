# Bramework

A simple Scss framework


## Table of contents
<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Table of contents](#table-of-contents)
- [About](#about)
- [Getting Started](#getting-started)
- [Usage](#usage)
	- [Gulp commands](#gulp-commands)
- [Support](#support)
- [Contributing](#contributing)
	- [Code of conduct](#code-of-conduct)
- [Changelog](#changelog)
- [Credits](#credits)
- [License](#license)

<!-- /TOC -->

## About

* Project site: [bramework.barcia.cc](https://bramework.barcia.cc)
* Download: [.zip](https://github.com/barcia/bramework/archive/master.zip)
* Code: [github.com/barcia/bramework](https://github.com/barcia/bramework)
* Docs: [README.md](https://github.com/barcia/swibe/blob/master/README.md)
  * Components: [github.com/barcia/bramework/wiki](https://github.com/barcia/bramework/wiki)
  * Scss reference: [bramework.barcia.cc/reference](https://bramework.barcia.cc/reference)
* Issues: [github.com/barcia/bramework/issues](https://github.com/barcia/bramework/issues)

*Bramework* is a simple, extensible and general-purpose **Scss framework** that I build and use to make websites. The main objective is to have a minimal but powerful base that is easily extensible.

In web development I always try to use the lastest web standards, that's why I can't guarantee that framework property works in old and obsolete browsers.



## Getting Started

1. [Download it](https://github.com/barcia/bramework/archive/master.zip)
2. Install all dependencies with `npm install`
3. Put *gulp* to *watch* with `gulp` command
4. Write Scss :sunglasses:



## Usage

### Gulp commands

* **`gulp`** - Default command. Active gulp *watch* and when any `.scss` or `.js` file changes, execute the following tasks: `gulp css`, `gulp js`, `gulp svg`
* **`gulp sync`** - Create a local server for sync and test files in many devices in real time.
* **`gulp css`** - Process the `style.scss` and the PostCSS tasks creating `style.min.css` in `dist/` path
* **`gulp js`** - Join and minify all `.js` files in one file creating `script.min.js` in `dist/` path
* **`gulp svg`** - Join and minify all `.svg` files in one file creating `icons.min.svg` in `dist/` path
* **`gulp all`** - Execute `gulp css`, `gulp js` and `gulp svg` tasks
* **`gulp docs`** - Create the Scss reference in `ref` path



## Support
Visit the project [issues](https://github.com/barcia/bramework/issues)



## Contributing
See [CONTRIBUTING.md](https://github.com/barcia/bramework/blob/master/CONTRIBUTING.md) for more info.


### Code of conduct
See [CODE_OF_CONDUCT.md](https://github.com/barcia/bramework/blob/master/CODE_OF_CONDUCT.md) for more info.


## Changelog
See [CHANGELOG.md](https://github.com/barcia/bramework/blob/master/CHANGELOG.md) for more info.



## Credits
Developed with ❤ by Iván Barcia in Galiza, SPAIN.   
[Web](https://barcia.cc) · [Email](mailto:ivan@barcia.cc) · [Twitter](http://www.twitter.com/bartzia) · [GitHub](http://www.github.com/barcia) · [Google+](https://plus.google.com/+IvanBarcia)



## License
Under **MIT License**. See [LICENSE](https://github.com/barcia/bramework/blob/master/LICENSE) for more info.

If this project has **third party libraries** or code parts, probably they have their own license. Explore about it before use this code.
