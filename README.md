#### vue-cli

```sh
vue create project-name
```

`vue-cli默认只能添加vuex`

一、Default配置（不推荐）

不合适大多的项目，default(Vue2/3)均没有router、没有vuex

二、Manually

:one: vue2-js

- 选择`Babel(默认选中)`、`Router`、`Vuex`、`CSS Pre-processors`、`Linter/Formatter(默认选中)`
- 选择**vue2**
- 选择`history mode`？--yes
- pick a `CSS Pre-processors` -- `Sass/SCSS`  or  `Less`  or `Stylus`
- 最终：vue2-js-router-vuex-(style)

:two: vue3-js

- 选择`Babel(默认选中)`、`Router`、`Vuex`、`CSS Pre-processors`、`Linter/Formatter(默认选中)`
- 选择**vue3**
- 选择`history mode`？--yes
- pick a `CSS Pre-processors` -- `Sass/SCSS`  or  `Less`  or `Stylus`
- 最终：vue3-js-router-vuex-(style)

:three: vue3-ts（不推荐）

- 选择`Babel(默认选中)`、**TypeScript**、`Router`、`Vuex`、`CSS Pre-processors`、`Linter/Formatter(默认选中)`
- 选择**vue3**
- Use class-style component syntax？-- yes
- Use Babel alongside Typescript -- yes
- 选择`history mode`？--yes
- pick a `CSS Pre-processors` -- `Sass/SCSS`  or  `Less`  or `Stylus`
- 最终：vue3-ts-router-vuex-(style)



#### create-vue

```sh
npm init vue@3
npm create vue@3
```

`create-vue默认添加pinia`

不推荐使用`create-vue`创建`vue2`项目

🏆 vue3-ts

- project-name
- Add TypeScript -- yes
- Add JSX Support -- no/yes
- Add Router -- yes
- Add Pinia -- yes
- Add Vitest/Cypress -- no（测试）
- Add ESLint -- yes
- Add Prettier -- no/yes
- 最终：vue3-ts-router-pinia-css



#### create-react-app

```sh
npx create-react-app project-name
```

`create-react-app构建的项目没有react-router、没有store`

最终：🏆 react-js(默认js，只有react、react-dom)

需要自己手动添加 react-router、redux/mobx



#### vite

```sh
npm create vite@latest
```

`vite构建的项目没有router、没有store`

支持多种框架、有多种模板

|             JavaScript              |                TypeScript                 |
| :---------------------------------: | :---------------------------------------: |
| [vanilla](https://vite.new/vanilla) | [vanilla-ts](https://vite.new/vanilla-ts) |
|     [vue](https://vite.new/vue)     |     [vue-ts](https://vite.new/vue-ts)     |
|   [react](https://vite.new/react)   |   [react-ts](https://vite.new/react-ts)   |
|  [preact](https://vite.new/preact)  |  [preact-ts](https://vite.new/preact-ts)  |
|     [lit](https://vite.new/lit)     |     [lit-ts](https://vite.new/lit-ts)     |
|  [svelte](https://vite.new/svelte)  |  [svelte-ts](https://vite.new/svelte-ts)  |

推荐用来构建 🏆 react-ts

- project-name
- Select a framework -- React
- Select a variant -- TypeScript

最终：react-ts(只有react、react-dom)

需要自己手动添加 react-router、redux/mobx



#### 总结

|       | JavaScript       | TypeScript          |
| ----- | ---------------- | ------------------- |
| vue2  | vue-cli（vuex）  | ——                  |
| vue3  | vue-cli（vuex）  | create-vue（pinia） |
| react | create-react-app | vite                |

