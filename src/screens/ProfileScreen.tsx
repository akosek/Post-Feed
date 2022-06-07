import React from "react";

// Components
import { Image, Text, View, StyleSheet } from "react-native";
import { Container, UserView, UserImage } from "./screenComponents";

// Redux
import { RootState } from "../redux/rootReducer";
import { useSelector } from "react-redux";

export default function ProfileScreen() {
  const postData = useSelector((state: RootState) => state.posts.postDetails);

  return (
    <Container>
      <UserView>
        <UserImage source={{ uri: postData.img }} />
        <Text style={styles.userName}>{postData.username}</Text>
      </UserView>
      <Text style={styles.title}>{postData.name}</Text>
      <View style={styles.postInfo}>
        <Text>{postData.email}</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  userName: {
    marginVertical: 6,
    fontWeight: "bold",
    fontSize: 18,
    color: "#d3aea5",
  },
  title: {
    fontWeight: "bold",
    textTransform: "capitalize",
    paddingVertical: 14,
    fontSize: 18,
  },
  postInfo: {
    paddingVertical: 7,
  },
});
