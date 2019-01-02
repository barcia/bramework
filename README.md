# Bramework
A web starter kit


## About
- Repository: https://github.com/barcia/bramework
- Support: https://barcia.gal/contacto

Bramework is a web starter kit that offers a set of tools and basic files for a quick start of a web development project.


## Getting Started

### Prerequisites
You must have installed [Node](https://nodejs.org/en/download/) and [NPM](https://www.npmjs.com/get-npm)

### Start
1. [Download the last release](https://github.com/barcia/bramework/archive/master.zip) or clone the project
2. Install all development dependencies with `npm install`
3. Type `npm start` to run develop tasks of `css`, `js` and `web` files and *watch* then.
4. Write your code. Your output code is ind `/dist/`.


## Developing

### Development environment
All source code must go in`/src/` and all tasks put the distributable code in `/dist/`.

**Main directory tree:**
```
bramework/
├── dist/     Processed files
├── docs/     Documentation
└── src/
    ├── js/     JavaScript files
    ├── scss/   Scss files
    ├── svg/    Files here are not processed. Only save here your SVG to copy them and put it inline.
    ├── web/    HTML/WP files.
```

### WordPress
Bramework is also intended for *WordPress* themes development, but you should make twi changes in `package.json` file:

1. In the `start` task change `npm run server` to `npm run server:wp`
2. In the `server:wp` task put the url where your WordPress is proxied. By default `localhost:8080`.
3. Put all your theme files in `src/web/` and run `npm start`.

### Style Guide
This project use the guidelines indicated by [Suit CSS](https://suitcss.github.io) with some very small changes.

Examples of the **naming convention** applied to **selectors** and **mixins**:
- ComponentName
- ComponentName--modifierName
- ComponentName-descendentName
- namespace-ComponentName
- ComponentName.is-state
- ComponentName.has-state
- h-helperName

**Variables**:
- ComponentName[-descendant|--modifier][-onState]-(cssProperty|variableName)



### Building
All command must be writted with `npm run COMMAND`

| Command       | Description  |
| ------------- | ------------- |
| build     | Build all your HTML/WP project |
| dev       | HTML development. Start server and watch all files |
| dev:wp    | WordPress theme development. Start server* and watch all files |
| lint    | Run all configured linter and output `*.logs` in the main path |
| docs    | Update the docs |

> *Is ready to work with docker containers and by default does a proxy at `localhost:8080`


### Deploying
You only need copy the content of */dist/* folder to your server root path.

> Remember save the source code for build your project again in the future.

### Built With
- [Standarize](https://github.com/barcia/standarize)



## Credits
Developed by Iván Barcia
[Web](https://barcia.gal) · [Email](mailto:ivan@barcia.gal) · [Twitter](http://www.twitter.com/bartzia) · [GitHub](http://www.github.com/barcia)

Project tested on [BrowserStack](https://www.browserstack.com/)



## License
This project is under [MIT License](https://github.com/barcia/bramework/blob/master/LICENSE)
