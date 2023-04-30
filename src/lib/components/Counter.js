import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>Counter {count}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text style={{ color: "green", fontSize: 20 }}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCount(count - 1)}>
        <Text style={{ color: "red", fontSize: 20 }}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Counter;
export { Counter };
