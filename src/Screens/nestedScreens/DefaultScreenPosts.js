import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";

import { useSelector } from "react-redux";

import { getDatabase, ref, child, get } from "firebase/database";

import { getUserInfo } from "../../redux/auth/authSelector";



const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  const userInfo = useSelector(getUserInfo);

  useEffect(() => {
    const getPosts = async ()=>{
      await get(child(ref(getDatabase()), `posts/${userInfo.uid}`)).then( async (snapshot) => {
        if (snapshot.exists()) {
          const data = await snapshot.val();
          setPosts(Object.values(data));
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    }


    getPosts();
    
  }, [route.params]);







  const onPressComents = (postId) => {
    navigation.navigate("CommentsScreen", {postId, userId: userInfo.uid, name: userInfo.displayName });
  };
  const onPressLocation = (location, name) => {
    navigation.navigate("MapScreen",  {location, name} );
  };

  const shemaItem = ({ item }) => {
    return (
      <View style={styles.postWrapper}>
        <Image style={styles.image} source={{ uri: item.pictureUrl }} />
        <Text style={styles.imageName}>{item.pictureName}</Text>
        <View style={styles.postInfoWrapper}>
          <TouchableOpacity
            style={styles.comentsWrapper}
            activeOpacity={0.7}
            onPress={()=>onPressComents(item.postId)}
          >
            <Feather name="message-circle" size={24} color="#BDBDBD" />
            <Text style={styles.comentsText}>{item?.comments?  Object.keys(item.comments).length :0}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.locationWrapper}
            activeOpacity={0.7}
            onPress={()=>onPressLocation(item.location, item.pictureName)}
          >
            <Feather name="map-pin" size={24} color="#BDBDBD" />
            <Text style={styles.locationText}>{item.pictureLocationName}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(el, idx) => idx.toString()}
        renderItem={shemaItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 25,
  },

  postWrapper: {
    marginTop: 32,
  },

  image: {
    marginHorizontal: 16,
    height: 240,
    borderRadius: 8,
  },
  imageName: {
    color: "#212121",
    fontFamily: "RobotoMedium",
    fontSize: 16,
    lineHeight: 19,
    marginHorizontal: 16,
    marginTop: 8,
  },
  postInfoWrapper: {
    marginHorizontal: 16,
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  comentsWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  comentsText: {
    color: "#BDBDBD",
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 6,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: "#212121",
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 6,
    textDecorationLine: "underline",
  },
});

export default DefaultScreenPosts;
