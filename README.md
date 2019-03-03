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
By default, bramework only build the **assets** (`/src/scss/`, `/src/js/` and `/src/img/`) and can work with other static site generators like [Eleventy](https://www.11ty.io) (included by default).

#### Add more entries
By default build only one *css* and one *js* file, but you can pass more entry files in `gulpfile.js`


### Web
If you add the option `--web` in the *start* or *build* task in `package.json`, also copy the content in `/src/web/` to `/dist/`. This is useful to use it with simple html (without site generators) or to build, for example, WordPress templates.

> Use it only if you are not using a static site generator.

```js
"scripts": {
  "start": "gulp watch --web",
  "build": "gulp build --web",
  "test": "gulp test"
},
```

> You can also pass the options directly when call the task: `npm run build -- --web`

### Live server
If you want to enable live server with live reload, you should pass the `--server` option in the *start* task.

> The `--serve` option already includes the `--web` option.

#### Proxy
Can also sync with a existing host (For example, if you are building a WordPress theme with [barcia/wp](https://github.com/barcia/wp)) passing the proxy url: `--proxy=localhost:8080`.

```js
"scripts": {
  "start": "gulp watch --serve --proxy=localhost:8080",
  "build": "gulp build",
  "test": "gulp test"
},
```

## Tasks
* ***start***: **Build** all **assets** in **development** mode and **watch** changes on then.
  * `--web`: Works also with the content in `/src/web/`
  * `--serve`: Start a **live server**. Already includes the `--web` option.
  * `--proxy=localhost:8080`: Redirect the live server to passed URL.

* ***build*:** **Test** and **build** all **assets** in **production** mode.
  * `--web`: Works also with the content in `/src/web/`
  * `--force`: Force the build without **ignoring the tests**

* ***test*:** Pass all **linters** and **tests** indicated in `gulpfile.js`

## Eleventy
By default this project installs [Eleventy](https://www.11ty.io), a simple Node based **static site generator**. Read his [documentation](https://www.11ty.io/docs/) if you want to work with him.

Eleventy creates his own live server, so you must configure it in his configuration file, `.eleventy.js`.

> IMPORTANT. If you use Eleventy, you can not use the `--web` or `--serve` options.

Change the *start* and *build* tasks to work with Eleventy.

```js
"scripts": {
  "start": "gulp watch & eleventy --serve",
  "build": "gulp build & eleventy",
  "test": "gulp test"
},
```


## Credits
Developed by Iván Barcia
* [barcia.dev](https://barcia.dev)
* [Twitter](http://www.twitter.com/bartzia)
* [GitHub](http://www.github.com/barcia)

Project tested on [BrowserStack](https://www.browserstack.com/)



## License
This project is under [MIT License](https://github.com/barcia/bramework/blob/master/LICENSE)
