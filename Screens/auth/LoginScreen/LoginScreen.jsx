import React, { useState } from "react";

import {
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import MainButton from "../../../shared/components/MainButton";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [showPassword, setShowPassword] = useState(true);

  const onLoginSubmit = () => {
    console.log({ email, password });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={require("../../../assets/img/registerBg.png")}
      >
        <View style={styles.form}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <Text style={styles.formTitle}>Sign in</Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="email@gmail.com"
              textContentType="emailAddress"
              style={emailFocus ? styles.inputFocus : styles.input}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <View style={styles.passwordWrapper}>
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="password"
                secureTextEntry={showPassword}
                textContentType="password"
                style={passwordFocus ? styles.inputFocus : styles.input}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
              />
              <Text
                onPress={() => setShowPassword(!showPassword)}
                style={styles.showPasswordButton}
              >
                {showPassword ? "Show" : "Hide"}
              </Text>
            </View>
            <MainButton onPress={onLoginSubmit} style={styles.button} text='Sign in'/>
            <Text
              onPress={() => navigation.navigate("Registration")}
              style={styles.altButton}
            >
              Don't have an account? <Text style={ {color: "#FF6C00", fontSize: 18, fontFamily: 'RobotoMedium'}}>Sign Up</Text> 
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};



const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 20,
  },
  formTitle: {
    textAlign: "center",
    marginBottom: 32,
    marginTop: 32,

    fontFamily: "RobotoMedium",
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
  },
  input: {
    marginHorizontal: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginBottom: 16,
    borderRadius: 8,
  },
  passwordWrapper: {
    position: "relative",
  },
  showPasswordButton: {
    position: "absolute",
    right: 32,
    top: 6,
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    marginTop: 16,
  },
  inputFocus: {
    marginHorizontal: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginBottom: 16,
    borderRadius: 8,
  },
  button: {
    marginTop: 40,
    marginHorizontal: 16,
  },

  altButton: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    marginTop: 16,
    textAlign: "center",
  },
});

export default LoginScreen;
