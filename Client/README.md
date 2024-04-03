# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

npm i @uiw/react-codemirror - For support code editor
npm i @codemirror/lang-javascript - for js
npm i code-mirror-themes - For mirror
npm i @uiw/codemirror-theme-dracula - for dracula theme
npm i @uiw/codemirror-extensions-langs - so that it support all language
npm install lucide-react - react icon
npm i react-redux @reduxjs/toolkit
npm i axios

Server:
npm install typescript -g
tsc --init
npm init -y

- Changes in the tsconfig.json : open root and add "rootDir":"./src" and "outDir": "./dist",  
  "target": "ES2020",

npm i express
npm i @types/express
npm i cors @types/cors
npm i nodemon
npm i -D ts-node
npm i dotenv mongoose

npm i bcrypt
npm i @types/bcrypt
npm i jsonwebtoken @types/jsonwebtoken
