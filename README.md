# Bramework
A web starter kit


## ℹ️ About
- Repository: https://github.com/barcia/bramework
- Support: https://barcia.gal/contacto

Bramework is a web starter kit that offers a set of tools and basic files for a quick start of a web development project. It is more oriented to develop with [Sass](http://sass-lang.com).


## 🛫 Getting Started

### Prerequisites
You must have installed [Node](https://nodejs.org/en/download/) and [NPM](https://www.npmjs.com/get-npm)

### Start
1. [Download the last release](https://github.com/barcia/bramework/archive/master.zip) or clone the project
2. Install all development dependencies with `npm install`
3. Type `npm run dev:html` to run develop tasks of `css`, `js`, `img` and `html` files and *watch* then.
4. Write your code

- Bramework is ready for *WordPress* themes development. Put all your theme files in `src/wp/` and run `npm run dev:wp` to run develop tasks of `css`, `js`, `img` and `wp` files and *watch* them.

## 💻 Developing

### Development environment
All source code must go in`/src/` and all tasks put the distributable code in `/dist/`.

**Main directory tree:**
```
bramework/
├── dist/     Processed files
├── docs/     Documentation
└── src/
    └── assets/
        ├── js/     JavaScript files
        ├── scss/   Scss files
        ├── img/    Images
        ├── svg/    Files here are not processed. Only save here your SVG to copy them and put it inline.
    ├── html/       HTML files.
    └── wp/         WordPress themes related files.     
```

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
| build:html     | Build all your HTML project |
| build:wp     | Build all your WordPress theme |
| dev:html     | HTML development. Start server and watch all files |
| dev:wp     | WordPress theme development. Start server* and watch all files |

> *Is ready to work with docker containers and by default does a proxy at `localhost:8080`


### Deploying
You only need copy the content of */dist/* folder to your server root path.

> Remember save the source code for build your project again in the future.

### Built With
- [Standarize](https://github.com/barcia/standarize)



## 🤓 Credits
Developed by Iván Barcia  
[Web](https://barcia.gal) · [Email](mailto:ivan@barcia.gal) · [Twitter](http://www.twitter.com/bartzia) · [GitHub](http://www.github.com/barcia)



## 📄 License
This project is under [MIT License](https://github.com/barcia/bramework/blob/master/LICENSE)
