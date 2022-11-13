import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";

import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();


const AuthScreen = () => {
  return (
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
  );
};

export default AuthScreen;
