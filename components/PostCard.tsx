import React, { useState } from "react";

// UI & Styles
import { Text, View, TouchableOpacity } from "react-native";
import {
  PostContainer,
  AvatarImage,
  ContentView,
  Title,
} from "./globalComponents";

export type Props = {
  id?: string;
  avatar?: number;
  author: string;
  title: string;
  image?: {};
  text?: string;
};

export default function PostCard(props: Props) {
  const [open, setOpen] = useState(false);

  const toogleCard = () => {
    setOpen(!open);
  };

  return (
    <>
      <PostContainer onPress={() => console.log("Go to Post Page")}>
        <TouchableOpacity
          onPress={() => console.log("Go to Author page")}
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 4,
          }}
        >
          <AvatarImage source={props.image} resizeMode="cover" />
          <Text>{props.author}</Text>
        </TouchableOpacity>
        <ContentView>
          <Title>{props.title}</Title>
          <Text>{props.text?.substring(0, 100)}</Text>
        </ContentView>
      </PostContainer>
    </>
  );
}
