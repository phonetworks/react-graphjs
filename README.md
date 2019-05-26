# react-graphjs

react-graphjs is the official React integration for [GraphJS](https://github.com/phonetworks/graphjs/) as Components

# About GraphJS

GraphJS is a Javascript client-side library to help developers easily enable social features on their web sites. GraphJS is built upon the [Phở framework](https://github.com/phonetworks/pho-microkernel), and it's open source. With only a few lines of code, you can easily add authentication, comments, messages, forum, groups, profiles etc. to your static web pages or React application. 

## Installation

react-graphjs is available as an npm package.

```
npm install --save react-graphjs

or 

yarn add react-graphjs
```

To get started with Graph.js, you need to include graph.js file to your project. Then you have to initiate it with GraphJS.init function in your html file like shown below example.

```html
<html>
  <head>
    <title>GraphJS for React</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="./app.js"></script>
    <script src="https://graphjs.com/graph.js"></script>
    <script>
      GraphJS.init("{{YOUR-PUBLIC-ID}}", {
        host:  "{{URL-OF-GRAPHJS-INSTANCE}}",
        theme: "{{YOUR-THEME-PREFERENCE}}",
        color: "{{YOUR-COLOR-PREFERENCE}}",
        language: "{{YOUR-LANGUAGE-OF-CHOICE}}",
        defaultAvatar: "{{URL-TO-YOUR-DEFAULT-AVATAR}}"
      })
    </script>
  </body>
</html>
```

The ```init``` function comes with three options:
* **host**: a URL pointing to your instance of [GraphJS-Server](https://github.com/phonetworks/graphjs-server)
* **theme**: either 'light' or 'dark'
* **color**: a string representing any color of your preference in HEX format
* **language**: current available options are en-US (English), fr-FR (French) in beta and tr-TR (Turkish). For more translations and languages, see Translations section below.
* **defaultAvatar**: either "gravatar" so all no-avatar accounts show with their [Gravatar](https://en.gravatar.com/) counterparts (if it exists) or a URL that points to your default avatar in png, gif or jpeg formats.

## Usage 

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { GraphJSAuthRegister } from 'react-graphjs';

function App() {
  return (
    <GraphJSAuthRegister 
        title="Register"
    >
    </GraphJSAuthRegister>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

For all the GraphJS tags, just capitalize the tag name in **PascalCase** and use it as a Component

Example:
`graphjs-profile-card` to `GraphJSProfileCard`

#### For more Information/Options/Examples, please go to [GraphJS official Documentation](https://graphjs.com/docs)

## Testing

To test this module in your local, clone this repo and run 

```
npm install

or
 
yarn install
```
then run
```
npm run build
```
Now open the `test/index.html` in your browser to check all the components available.

## License

GNU Affero General Public License v3.0, see [LICENSE](https://github.com/phonetworks/react-graphjs/blob/master/LICENSE).