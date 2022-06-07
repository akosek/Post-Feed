import React from "react";

// Components
import {
  PostContainer,
  AvatarImage,
  ContentView,
  Title,
  Description,
  Author,
  AvatarContainer,
} from "./globalComponents";

import { useNavigation } from "@react-navigation/native";

export type Props = {
  onClick: () => void;
  id?: string;
  avatar?: number;
  author: string;
  title: string;
  image?: {};
  text?: string;
};

export default function PostCard(props: Props) {
  const navigation = useNavigation();

  return (
    <>
      <PostContainer onPress={props.onClick}>
        <AvatarContainer onPress={() => navigation.navigate("Profile")}>
          <AvatarImage source={props.image} resizeMode="cover" />
          <Author>{props.author}</Author>
        </AvatarContainer>
        <ContentView>
          <Title>{props.title}</Title>
          <Description>{props.text?.substring(0, 100)}</Description>
        </ContentView>
      </PostContainer>
    </>
  );
}
