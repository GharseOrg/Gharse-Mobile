import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SubscriptionScreen from "../screens/SubscriptionScreen";
import LiveRoutingScreen from "../screens/LiveRoutingScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Subscription" component={SubscriptionScreen} />
      <Tab.Screen name="Live Routing" component={LiveRoutingScreen} />
    </Tab.Navigator>
  );
}
