import {} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import DefaultScreenPosts from "../../nestedScreens/DefaultScreenPosts";
import CommentsScreen from "../../nestedScreens/CommentsScreen/CommentsScreen";
import MapScreen from "../../nestedScreens/MapScreen"

const NestedScreenStack = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreenStack.Navigator initialRouteName="DefaultScreenPosts">
      <NestedScreenStack.Screen
        options={{
          headerShown: false,
        }}
        name="DefaultScreenPosts"
        component={DefaultScreenPosts}
      />

      <NestedScreenStack.Screen
        options={{
          headerShown: false,
        }}
        name="CommentsScreen"
        component={CommentsScreen}
      />
      <NestedScreenStack.Screen
        options={{
          headerShown: false,
        }}
        name="MapScreen"
        component={MapScreen}
      />
    </NestedScreenStack.Navigator>
  );
};

export default PostsScreen;
