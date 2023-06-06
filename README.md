# Create an NPM package for React Native

An example repo of how to create an NPM package for use in other projects.
In this case, React Native.

## Steps

- Create a new project which includes a `package.json`. In this case we're using expo so we can test then release.

  ```sh
  npx create-expo-app npm-rn-counter
  ```

- Define then export the `components`, `functions`, `constants` we want to expose from our package.
  - This package exports from `./src/lib/Counter.js` which exports 1 component, constant, function each.

- Add necessary **keys** to package.json to configure `npm`.
  - Version package `"version": "1.0.51"`.
  - Include the `./src` and `./README.md` with `"files": []`.
  - Define entry point for modules in this package `"main": "index.js"`.
  - Info which shows up on the npm.com registry web page `"repository": {}`.

  Semantic version which we increment each time we want to publish a new version of our package.

  ```json
  "main": "./src/lib/Counter.js",
  "version": "1.0.51",
  "files": [
      "src",
      "README.md"
  ],
  "repository": {
      "type": "git",
      "url": "git+https://github.com/PrimeTimeTran/npm-counter"
  },
  ```

- Login to NPM from CLI, then publish it.

  `npm publish`

## FAQ

- Do I have to commit before publishing? No, npm is [it's own thing](https://stackoverflow.com/questions/36371416/does-npm-publish-command-commit-changes#:~:text=The%20act%20of%20publishing%20to,will%20not%20commit%20for%20you.).
- If expo hangs when importing your package, it might be because of [this issue](https://stackoverflow.com/questions/72092719/expo-freezes-if-using-reactnatives-stylesheet).
