import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useSelector } from "react-redux";

import * as Location from 'expo-location';

import { useState, useEffect } from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { getDatabase, set, ref as DataBaseRef } from "firebase/database";
import fireBaseApp from "../../../firebase/firebaseConfig"


import Spinner from "react-native-loading-spinner-overlay";

import PhotoMaker from "../../../shared/components/PhotoMaker";
import MainButton from "../../../shared/components/MainButton";

import { getUserInfo } from "../../../redux/auth/authSelector";

const CreatePostsScreen = ({ navigation }) => {

const [loader, setLoader] = useState(false)

  const [cameraOpen, setCameraOpen] = useState(false);
  const [photo, setPhoto] = useState("empty");

  const [namePlace, setNamePlace] = useState("");
  const [namePlaceFocus, setNamePlaceFocus] = useState(false);

  const [nameLocation, setNameLocation] = useState("");
  const [nameLocationFocus, setNameLocationFocus] = useState(false);

  const [hasPermission, setHasPermission] = useState(null);

  const userInfo = useSelector(getUserInfo);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to your Location</Text>;
  }






  const setPostOnServer= async(fotoUrl, location)=>{
    const postId = String(Date.now())
    set(DataBaseRef(getDatabase(fireBaseApp), `posts/${userInfo.uid}/` + postId), {
      username: userInfo.displayName,
      email: userInfo.email,
      pictureUrl : fotoUrl,
      postId,
      pictureName: namePlace,
      pictureLocationName: nameLocation,
      location: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
      
    });

  }

  const onDeletePost = () => {
    setPhoto("empty");
    setNamePlace("");
    setNameLocation('');
    setNamePlaceFocus(false);
    setNameLocationFocus(false);
  };

  const onPublishPost = async () => {
    setLoader(true)
    let location = await Location.getCurrentPositionAsync({});
  //  PHOTO
    const respons = await fetch(photo);
    const file = await respons.blob();
    const storage = getStorage();
    const starsRef = ref(storage, `posts/${Date.now()}`);
    const result= await uploadBytes(starsRef, file);
    const fotoUrl = await getDownloadURL(starsRef);
// *********
  
     await setPostOnServer(fotoUrl, location)
    onDeletePost();
    setLoader(false)
    navigation.navigate("DefaultScreenPosts", {start: true});
  };


  if (loader) {
    return (
      <Spinner
        visible={loader}
        textContent={"Loading..."}
        textStyle={{ color: "#FFF" }}
      />
    );
  }
 

  return (
    <>
      {!cameraOpen && (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <ImageBackground
              source={{ uri: photo }}
              style={
                namePlaceFocus || nameLocationFocus
                  ? styles.hidden
                  : styles.image
              }
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setCameraOpen(true)}
                style={
                  photo === "empty"
                    ? styles.imageButton
                    : { ...styles.imageButton, opacity: 0.4 }
                }
              >
                <MaterialIcons name="photo-camera" size={24} color="#E8E8E8" />
              </TouchableOpacity>
            </ImageBackground>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                value={namePlace}
                onChangeText={(text) => setNamePlace(text)}
                placeholder="What's this?"
                style={
                  namePlaceFocus
                    ? { ...styles.input, ...styles.inputFocus }
                    : styles.input
                }
                onFocus={() => setNamePlaceFocus(true)}
                onBlur={() => setNamePlaceFocus(false)}
              />
              <TextInput
                value={nameLocation}
                onChangeText={(text) => setNameLocation(text)}
                placeholder="Where is that place?"
                style={
                  nameLocationFocus
                    ? { ...styles.input, ...styles.inputFocus }
                    : styles.input
                }
                onFocus={() => setNameLocationFocus(true)}
                onBlur={() => setNameLocationFocus(false)}
              />

              <MainButton
                onPress={onPublishPost}
                style={styles.publishButton}
                text="Publish"
                disabled={photo!=='empty' && namePlace && nameLocation ? false: true}
              />

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={onDeletePost}
                style={styles.deleteButton}
              >
                <MaterialCommunityIcons
                  name="delete-outline"
                  size={35}
                  color="#E8E8E8"
                />
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      )}
      {cameraOpen && (
        <PhotoMaker setPhoto={setPhoto} goBack={() => setCameraOpen(false)} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    height: 230,
    backgroundColor: "#E8E8E8",
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  imageButton: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  input: {
    marginHorizontal: 16,
    padding: 10,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "transparent",
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginTop: 15,
  },
  hidden: { display: "none" },
  inputFocus: {
    borderColor: "#FF6C00",
  },
  publishButton: {
    marginTop: 40,
    marginHorizontal: 16,
  },

  deleteButton: {
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default CreatePostsScreen;
