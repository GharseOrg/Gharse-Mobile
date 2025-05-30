import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LiveRoutingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Routing</Text>
      <Text style={styles.subtitle}>View real-time routes here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#555" },
});
