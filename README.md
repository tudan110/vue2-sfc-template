# Vue2 + JS + Webpack For SFC template

Vue2PluginTemplate

> A template example for Vue.js single-file component supporting Vue 2

<p align='center'>
<b>English</b> | <a href="https://github.com/tudan110/vue2-plugin-template/blob/main/README.zh-CN.md">简体中文</a>
</p>

## Features

- Provides a library mode development environment for Vue 2
- Adapts scripts in package.json for publishing

## Using the Template

要直接使用此模板，请执行以下命令:

```bash
npx degit tudan110/vue2-plugin-template my-component
```

And replace vue2-plugin-template and Vue2PluginTemplate globally with the name of your component library.

## Installation

Make sure to install the dependencies first:

```bash
# sh
npm install
```

## Development

Start the development server:

```sh
npm run dev
```

## Build

Build the library for production or publishing:

```sh
npm run lib
```

Build the example project for production or publishing:

```sh
npm run build
```

## Check and Fix Files
```
npm run lint
```

## Publish Package to npm

Log in to the npm registry
```sh
npm login
```

Publish
```sh
npm publish --access public
```

## How to Use the lib File?

### npm Installation

```sh
npm i @tudan110/vue2-plugin-template
```

### Global Import
Import and register the component in main.js
```js
import Vue from 'vue'
import Vue2PluginTemplate from '@tudan110/vue2-plugin-template'

Vue.use(Vue2PluginTemplate)
```

### Manual Import
```js
import Vue2PluginTemplate from '@tudan110/vue2-plugin-template'

export default {
    components: {
        Vue2PluginTemplate
    }
}
```

### Without a Build Tool or via `CDN`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
    <!-- 确保你的当前目录有该产物 -->
    <script src="/lib/vue2-plugin-template.umd.js"></script>
</head>
<body>
<div id="app">
    <vue2-plugin-template></vue2-plugin-template>
</div>
</body>
<script>
    var app = new Vue({
        el: '#app'
    })
</script>
</html>
```

## License

Made with ❤️

Published under [MIT License](./LICENSE).
