# Create an NPM package for React Native

- Create a new project which includes a `package.json`

In this case we're using expo.

```sh
npx create-expo-app npm-rn-counter
```

- Export modules we want to expose to other projects inside of `./index.js`.

```js
import Counter from "./src/lib/components/Counter";

export { Counter };
```

> We have to define the React Native UI component inside of `./src/lib/components/Counter`

Here's the code.

```jsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>Counter {count}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCount(count - 1)}>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Counter;
```

- Add necessary **keys** to package.json so that `npm` will include correct files and display appropriate info.
  - Define entry point for modules in this package `"main": "index.js"`.
  - Define package version `"version": "1.0.14"`.
  - Include the `./src` and `./README.md` from `"files": []`.
  - Repo info which shows up on the npm.com registry web page `"repository": {}`.

Semantic version which we increment each time we want to publish a new version of our package.

```json
"main": "index.js",
"version": "1.0.17",
"files": [
    "src",
    "README.md"
],
"repository": {
    "type": "git",
    "url": "git+https://github.com/PrimeTimeTran/npm-counter"
},
```
