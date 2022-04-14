---
home: true
title: Home
icon: home
heroImage: /logo.svg
heroText: vuepress-plugin-redirect2
tagline: Redirect Plugin for VuePress2
action:
  - text: Guide 💡
    link: /guide.html
    type: primary

  - text: Config 🛠
    link: /config.html

footer: MIT Licensed | Copyright © 2019-present Mr.Hope
copyrightText: false
---

## How to use

### Install

:::: code-group

::: code-group-item yarn

```bash
yarn add -D vuepress-plugin-redirect2@next
```

:::

::: code-group-item npm

```bash
npm i -D vuepress-plugin-redirect2@next
```

:::

::::

### Usage

:::: code-group

::: code-group-item TS

```ts
// .vuepress/config.ts
import { redirect } from "vuepress-plugin-redirect2";

export default {
  plugins: [
    redirect({
      // your options
    }),
  ],
};
```

:::

::: code-group-item JS

```js
// .vuepress/config.js
const { redirect } = require("vuepress-plugin-redirect2");

module.exports = {
  plugins: [
    redirect({
      // your options
    }),
  ],
};
```

:::

::::