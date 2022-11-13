import { View, StyleSheet, Text } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
  title: {},
});

export default PostsScreen;
