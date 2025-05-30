import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SubscriptionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscription Page</Text>
      <Text style={styles.subtitle}>Manage your Gharse subscriptions here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#555" },
});
