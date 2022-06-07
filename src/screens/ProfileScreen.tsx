import React from "react";

// Components
import { Text, View, StyleSheet } from "react-native";
import { Container, UserView, UserImage, Row } from "./screenComponents";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

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
      <Row>
        <Entypo name="user" size={24} color="#d3aea5" style={styles.icon} />
        <Text style={styles.title}>{postData.name}</Text>
      </Row>
      <Row>
        <Feather name="mail" size={24} color="#d3aea5" style={styles.icon} />
        <Text>{postData.email}</Text>
      </Row>
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
  icon: {
    marginRight: 12,
  },
});
