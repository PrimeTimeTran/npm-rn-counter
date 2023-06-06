import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Counter({ life = 1 }) {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Counter</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.line} />
        <View>
          <Text
            style={{ fontSize: 30, color: "gold" }}
          >
            My Count is: {count * life }
          </Text>
        </View>
        <View style={styles.line} />
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

const LIFE = 42;

const add = (n) => n + LIFE;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "50%",
    maxHeight: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontWeight: 300,
    fontSize: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
});

export default Counter;

export { Counter, add, LIFE };
