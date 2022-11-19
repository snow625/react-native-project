import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider} from "react-redux";
import {store} from "./redux/store"

import { useFonts } from "expo-font";

import Router from "./router";


export default function App() {

  const [loaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
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
