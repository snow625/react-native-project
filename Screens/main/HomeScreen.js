import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";

const MainTab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <MainTab.Navigator initialRouteName="PostsScreen">
      <MainTab.Screen name="PostsScreen" component={PostsScreen} />
      <MainTab.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <MainTab.Screen name="ProfileScreen" component={ProfileScreen} />
    </MainTab.Navigator>
  );
};

export default HomeScreen;
