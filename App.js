import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";


import HomeScreen from "./Screens/main/HomeScreen";
import AuthScreen from "./Screens/auth/AuthScreen";

export default function App() {
  const [isAuth, setIsAuth] = useState(true);

  const [loaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {isAuth ? <HomeScreen /> : <AuthScreen />}
    </NavigationContainer>
  );
}


