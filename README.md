# Bramework
Web starter kit

## Description
Bramework is a **web starter kit** to build simple websites. You can build only the assets or build full websites, also integrate it with other tools like [Eleventy](https://www.11ty.io) or [barcia/wp](https://github.com/barcia/wp).

## Getting started
1. Clone the repository: `git clone https://github.com/barcia/bramework.git`
2. Install the NPM packages: `npm install`
3. Start to develop with `npm start` or build your project with `npm run build`.

## Configuration
### Assets
By default, bramework only build the **assets** (`/src/scss/`, `/src/js/` and `/src/img/`) and can work with other static site generators like [Eleventy](https://www.11ty.io).

#### Add more entries
By default build only one *css* and one *js* file, but you can pass more entry files in `gulpfile.js`



### Live server
If you want to enable live server with live reload, you should execute the `npm start` task.



## Tasks
* ***start***: **Build** all **assets** in **development** mode and **watch** changes on then.

* ***build*:** **Build** all **assets** in **production** mode.


## Credits
Developed by Iván Barcia
* [barcia.dev](https://barcia.dev)
* [Twitter](http://www.twitter.com/bartzia)
* [GitHub](http://www.github.com/barcia)

Project tested on [BrowserStack](https://www.browserstack.com/)



## License
This project is under [MIT License](https://github.com/barcia/bramework/blob/master/LICENSE)
