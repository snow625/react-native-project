import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider} from "react-redux";
import {store} from "./src/redux/store"

import { useFonts } from "expo-font";

import Router from "./src/router";


export default function App() {

  const [loaded] = useFonts({
    RobotoRegular: require("./src/assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./src/assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("./src/assets/fonts/Roboto-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }


  return (
    <Provider store={store}>
      <NavigationContainer>
     <Router/>
      </NavigationContainer>
    </Provider>
  );
}
