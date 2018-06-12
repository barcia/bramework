# Bramework
A web starter kit


## ℹ️ About
- Repository: https://github.com/barcia/bramework
- Support: https://barcia.gal/contacto

Bramework is a web starter kit that offers a set of tools and basic files for a quick start of a web development project. It is more oriented to develop with [Sass](http://sass-lang.com), but also offers a basic HTML template system with [Nunjucks](https://mozilla.github.io/nunjucks/) and facilities to create [WordPress](https://wordpress.org) themes with PHP.


## 🛫 Getting Started

1. [Download the last release](https://github.com/barcia/bramework/archive/master.zip) or clone the project
2. Install all development dependencies with `npm install`
3. Put *gulp* to *watch* with `gulp` command
4. Write your code

All source code must go in`/src/` and all tasks put the distributable code in `/dist/`.


## 💻 Developing

### Prerequisites
You must have installed [Node](https://nodejs.org/en/download/), [NPM](https://www.npmjs.com/get-npm) and [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

### Setting up development environment
Normally, you only must have Gulp *watching* with the `gulp` command, and write your code in all files inside */src/*

**Main directory tree:**
```
bramework/
├── dist/     All processed files are here
├── docs/     Documentation
└── src/
    ├── html/     Put here your NJK and HTML files with Nunjucks (if you want). All files inside `html/partials/`, `html/layouts/` and `html/macros/` are not processed.
    ├── js/       Put here all you JavaScript files
    ├── php/      Put here all your PHP files. They are literally copied to /dist/
    ├── scss/     Put here all your Sass code.
    ├── stuff/    All files here are literally copied to /dist/
    └── svg/      Files here are not processed. Only save here your SVG to copy them and put it inline.
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
This project use [Gulp](https://gulpjs.com) as task runner.

Soon…


### Deploying
You only need copy the content of */dist/* folder to your server root path.

> Remember save the source code for deploy for build your project again in the future.

### Built With
- [Standarize](https://github.com/barcia/standarize)



## 🤓 Credits
Developed by Iván Barcia  
[Web](https://barcia.gal) · [Email](mailto:ivan@barcia.gal) · [Twitter](http://www.twitter.com/bartzia) · [GitHub](http://www.github.com/barcia)



## 📄 License
This project is under [MIT License](https://github.com/barcia/bramework/blob/master/LICENSE)
