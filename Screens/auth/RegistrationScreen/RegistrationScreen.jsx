import React, { useState } from "react";
import { useDispatch } from "react-redux";


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
} from "react-native";

import {createNewUser} from "../../../redux/auth/authOperations"

import AddIconButton from "../../../shared/components/iconButtons/AddIconButton";
import MainButton from "../../../shared/components/MainButton";


const RegistrationScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [userNameFocus, setUserNameFocus] = useState(false);

  const [showPassword, setShowPassword] = useState(true);

  const dispath = useDispatch()

  const onRegistrationSubmit =  () => {
   dispath(createNewUser({ userName, email, password }))
  };

  const onAddImagePress = () => {
    console.log(`onAddImagePress`);
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
            <View style={styles.formTitleWrapper}>
              <View style={styles.userImage}>
                <AddIconButton style={styles.iconButton} onPressProp={onAddImagePress} />
              </View>
              <Text style={styles.formTitle}>Sign Up</Text>
            </View>

            <TextInput
              value={userName}
              onChangeText={(text) => setUserName(text)}
              placeholder="Jon Richard"
              textContentType="name"
              style={userNameFocus ? styles.inputFocus : styles.input}
              onFocus={() => setUserNameFocus(true)}
              onBlur={() => setUserNameFocus(false)}
            />
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
            <MainButton onPress={onRegistrationSubmit} style={styles.button} text='Sign Up'/>
            <Text onPress={() => navigation.navigate("Login")} style={styles.altButton}>
              Already have an account? <Text style={ {color: "#FF6C00", fontSize: 18, fontFamily: 'RobotoMedium'}}>Sign in</Text>
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
  formTitleWrapper: {
    position: "relative",
   
  },
  userImage: {
    position: "absolute",
    top: -60,

    left: '50%',
    transform: [{ translateX: -60 }],
  
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
   
  },
  iconButton:{
    position:"absolute",
    right:-12,
    bottom:14,
  },
  formTitle: {
    textAlign: "center",
    marginBottom: 32,
    marginTop: 92,

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

export default RegistrationScreen;
