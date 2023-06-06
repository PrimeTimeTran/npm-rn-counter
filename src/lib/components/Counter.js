import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity
} from "react-native";

export default function Counter({ LIFE = 1 }) {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Counter</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text style={styles.count}>{count * LIFE}</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text style={{ color: "green", fontSize: 20 }}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCount(count - 1)}>
        <Text style={{ color: "red", fontSize: 20 }}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    width: '100%',
    height: '50%',
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
  }
})

const LIFE = 42

const add = n => n + LIFE

export { Counter, LIFE, add };
