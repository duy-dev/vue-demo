# AO-Online

## Requirement

- NodeJS 14+
- Vue CLI 5+
- Typescript 4.1.5 ~

## Project setup

Run `npm install` or `yarn install` to install the dependencies

### Compiles and hot-reloads for development

Run `yarn dev` for a dev server. Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

### Compiles and minifies for productionß

Run `yarn run build` to build the project.

### Lints and fixes files

`yarn run lint`

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Dependencies

- [vue-router](https://github.com/vuejs/router) - Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze
- [vuex](https://github.com/vuejs/vuex) - Vuex is a state management pattern + library for Vue.js applications
- [ant-design-vue](https://github.com/vueComponent/ant-design-vue) - An enterprise-class UI design system for Vue applications.
- [tailwind](https://github.com/ngneat/tailwind) - [Tailwind CSS](https://tailwindcss.com/) for Vue application.
- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [dayjs](https://github.com/iamkun/dayjs) - Day.js is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.

### Folders

- `src/` - Source files for the root-level application project.
- `src/assets` - Contains multimedia files such as images, fonts,... and projetc style files.
- `src/components` - Contains shared components for the project.
- `src/layouts` - Contains the project's layouts and the components that make up those layouts.
- `src/pages` - Organized modularized according to each folder, each folder will contain pages, repositories, ... related to that module
- `src/router` - Contains the project's routing configuration
- `src/services` - Contains services used throughout the project.
- `src/store` - Contains the project's store configuration
- `src/uses` - The place where the project's constans, enum,... files are stored
- `src/utils` - Is a place where you can place small snippets you can use throughout the application, contains import files of functions used throughout the project.

### Files configuration

- `.env.development` - Where to store environment variables in development environment (development)
- `.env.production` - Where to store environment variables in production environment (production)
- `babel.config.js` - Configure javascript compilation for babel
- `postcss.config.js` - PostCSS plugins configuration setting file
- `tailwind.config.js` - Where to install new profiles, edit, overwrite existing tailwindCSS configurations
- `vue-svg-loader.js` - A supported Webpack loader to read svg image file contents
- `vue.config.js` - is an optional config file that will be automatically loaded by `@vue/cli-service` if it's present in your project root
