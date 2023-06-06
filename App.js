
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Counter, { add, LIFE } from "./src/lib/Counter";

console.log({ LIFE, foo: add(LIFE) });

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Counter life={LIFE} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
