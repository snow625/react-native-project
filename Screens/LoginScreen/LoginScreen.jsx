import React, { useState } from "react";
import PropTypes from "prop-types";
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

const LoginScreen = ({onPressProp}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const onLoginSubmit = () => {
    console.log({ email, password });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={require("../../assets/img/registerBg.png")}
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
              textAlign="center"
              textContentType="emailAddress"
              style={emailFocus ? styles.inputFocus : styles.input}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="password"
              secureTextEntry={true}
              textContentType="password"
              textAlign="center"
              style={passwordFocus ? styles.inputFocus : styles.input}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onLoginSubmit}>
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            <Text onPress={()=>onPressProp('register')} style={styles.altButton}>Don't have an account? Register</Text>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

LoginScreen.defaultProps = {
  onPressProp: ()=>{},
};

LoginScreen.propTypes = {
  onPressProp: PropTypes.func
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    // flex: 0.5,
    backgroundColor: "#FFFFFF",
    // alignItems: "center",
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
    marginTop:40,
    backgroundColor:'#FF6C00',
    marginHorizontal: 16,
    padding: 16,
    borderRadius:100,
  },
  buttonText:{
    textAlign:'center',
    color:'#FFFFFF',
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
  },
  altButton:{
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color:'#1B4371',
    marginTop:16,
    textAlign:'center',
  },
});

export default LoginScreen;
