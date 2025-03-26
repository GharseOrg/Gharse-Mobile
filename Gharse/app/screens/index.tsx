import { Redirect } from "expo-router";
import { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";

export default function Index() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Simulating authentication check (Replace with actual authentication logic)
    setTimeout(() => {
      const userLoggedIn = false; // Change this dynamically based on auth state
      setIsAuthenticated(userLoggedIn);
    }, 1500);
  }, []);

  if (isAuthenticated === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return isAuthenticated ? <Redirect href="/home" /> : <Redirect href="/login" />;
}
