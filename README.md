# Create an NPM package for React Native

- Create a new project which includes a `package.json`. In this case we're using expo.

  ```sh
  npx create-expo-app npm-rn-counter
  ```

- Export `Components`, `functions`, `constants` we want to expose to other projects inside of `./index.js`.

  - This package exports:
    - 1 component
    - 1 constant
    - 1 function
  - They're exported from from `"./src/lib/components/Counter"`

  ```js
  export { Counter, LIFE, add } from "./components/Counter";
  ```



- Add necessary **keys** to package.json to configure `npm`.
  - Version package `"version": "1.0.18"`.
  - Include the `./src` and `./README.md` with `"files": []`.
  - Define entry point for modules in this package `"main": "index.js"`.
  - Repo info which shows up on the npm.com registry web page `"repository": {}`.

  Semantic version which we increment each time we want to publish a new version of our package.

  ```json
  "main": "index.js",
  "version": "1.0.18",
  "files": [
      "src",
      "README.md"
  ],
  "repository": {
      "type": "git",
      "url": "git+https://github.com/PrimeTimeTran/npm-counter"
  },
  ```
