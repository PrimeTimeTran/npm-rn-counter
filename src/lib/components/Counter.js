import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity
} from "react-native";

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

export { Counter };

const styles = StyleSheet.create({ 
  container: {
    width: '100%',
    height: '50%',
    maxHeight: '50%',
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontWeight: 300,
    fontSize: 30
  },
  count: {
    fontSize: 30,
    color: "gold"
  },
  line: { 
    flex: 1, 
    height: 1, 
    backgroundColor: "black" 
  }
})
