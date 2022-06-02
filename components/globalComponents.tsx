import styled from "styled-components/native";

export const PostContainer = styled.TouchableOpacity`
  padding: 5px;
  flex-direction: row;
  border: 1px solid red;
  background: white;
  border-radius: 4;
  margin: 4px;
`;

export const AvatarImage = styled.Image`
  //flex: 1;
  resize-mode: contain;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: red;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 15;
  //text-align: center;
`;

export const ContentView = styled.View`
  flex-direction: column;
  aligitems: center;
  flex: 6;
  padding: 4px;
`;
