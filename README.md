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
