import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";

import { Alert } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const AuthStack = createStackNavigator();

import { getErrorAndLoadingAuth } from "../../redux/auth/authSelector";
import { useEffect } from "react";

const AuthScreen = () => {
  const { loading, error } = useSelector(getErrorAndLoadingAuth);

  useEffect(() => {
    if (error) {
      Alert.alert("Oops!", `${error}`);
    }
  }, [error]);

  return (
    <>
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={{ color: "#FFF" }}
      />
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    </>
  );
};

export default AuthScreen;
