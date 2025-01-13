import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Game } from "./src/components/Game";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Auto Tests React Native</Text>
      <StatusBar style="auto" />

      <Text style={styles.title}>App Contador</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={() => setCounter(counter - 1)}>
          <Text>-</Text>
        </TouchableOpacity>

        <Text testID="counter">{counter}</Text>

        <TouchableOpacity onPress={() => setCounter(counter + 1)}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <Game />
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
  mainTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  title: {
    fontSize: 16,
    marginTop: 12,
    fontWeight: "semibold",
  },
  counterContainer: {
    flexDirection: "row",
    gap: 14,
    marginVertical: 14,
  },
});
