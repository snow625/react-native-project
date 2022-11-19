import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import HomeScreen from "./Screens/main/HomeScreen";
import AuthScreen from "./Screens/auth/AuthScreen";

import db from "./firebase/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import isAuth from "./shared/hooks/isAuth";
import Spinner from "react-native-loading-spinner-overlay";

import { userCurrent } from "./redux/auth/authReducer";


const Router = () => {
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(getAuth(db), (user) => {
      if (user) {
        dispatch(
          userCurrent({
            token: user.accessToken,
            email: user.email,
            displayName: user.displayName,
            uid: user.uid,
          })
        );
      }
    });
  }, [dispatch]);

  if (loader) {
    return (
      <Spinner
        visible={loader}
        textContent={"Loading..."}
        textStyle={{ color: "#FFF" }}
      />
    );
  }

  return isAuth() ? <HomeScreen /> : <AuthScreen />;
};

export default Router;
