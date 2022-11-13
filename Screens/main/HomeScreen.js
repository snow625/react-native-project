import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";

import LogOutIconButton from "../../shared/components/LogOutIconButton";
import {
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import { View } from "react-native";

const MainTab = createBottomTabNavigator();

const HomeScreen = () => {
  const logOut = () => {
    console.log(`LogOut`);
  };

  const optionsPosts = {
    title: "Posts",
    headerRight: () => (
      <LogOutIconButton style={{ marginRight: 25 }} onPressProp={logOut} />
    ),
    tabBarIcon: ({ focused, color, size }) => (
      <View
        style={{
          backgroundColor: focused ? "#FF6C00" : "transparent",
          padding: 5,
          borderRadius: 10,
        }}
      >
        <MaterialCommunityIcons
          name="home-circle"
          size={focused ? 35 : 30}
          color={focused ? "#ffffff" : color}
        />
      </View>
    ),
  };

  const optionsCreatePostsScreen = {
    title: "Create new posts",
    tabBarIcon: ({ focused, color, size }) => (
      <View
        style={{
          backgroundColor: focused ? "#FF6C00" : "transparent",
          padding: 5,
          borderRadius: 10,
        }}
      >
        <Ionicons
          name="ios-add-circle-outline"
          size={focused ? 35 : 30}
          color={focused ? "#ffffff" : color}
        />
      </View>
    ),
  };
  const optionsProfileScreen = {
    title: "Profile",
    tabBarIcon: ({ focused, color, size }) => (
      <View
        style={{
          backgroundColor: focused ? "#FF6C00" : "transparent",
          padding: 5,
          borderRadius: 10,
        }}
      >
        <AntDesign
          name="user"
          size={focused ? 35 : 30}
          color={focused ? "#ffffff" : color}
        />
      </View>
    ),
  };

  return (
    <MainTab.Navigator
    screenOptions ={{tabBarShowLabel:false}}
      initialRouteName="PostsScreen"
    >
      <MainTab.Screen
        options={optionsPosts}
        name="PostsScreen"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={optionsCreatePostsScreen}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={optionsProfileScreen}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

export default HomeScreen;
