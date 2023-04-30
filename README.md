# Create an NPM package for React Native

- Create a new project which includes a `package.json`

In this case we're using expo.

```sh
npx create-expo-app npm-rn-counter
```

- Define the module we want to expose to other projects inside of `./index.js`.

```js
import Counter from "./src/lib/components/Counter";

export { Counter };
```

- Add necessary keys to package.json so that `npm` can properly include correct files and information.

Most importantly here we're including the `./src` folder where we define our `Counter` component.
We also include a `README.md` for information about the project.
Lastly we have some repo information which shows up on the npm.com registry web page.

```json
"main": "index.js",
"files": [
    "src",
    "README.md"
],
"repository": {
    "type": "git",
    "url": "git+https://github.com/PrimeTimeTran/npm-counter"
},
```
