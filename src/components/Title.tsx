import { Text, StyleSheet } from "react-native";

export default function Title({ title }: { title: string }) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "blue",
    marginBottom: 16,
  },
});
