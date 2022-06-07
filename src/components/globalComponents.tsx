import styled from "styled-components/native";

export const PostContainer = styled.TouchableOpacity`
  padding: 6px;
  flex-direction: row;
  border: 1px solid #E1C0B7;
  background: #FFFCF9;
  border-radius: 6px;
  margin: 6px;
  shadow-color: #D3D3D3;
  shadow-offset: {width: 0, height: 1};
  shadow-opacity: 0.30;
  elevation: 2;
`;

export const AvatarContainer = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
`;

export const AvatarImage = styled.Image`
  resize-mode: contain;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  margin-bottom: 4px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 15px;
  margin: 5px;
  text-transform: capitalize;
`;

export const Author = styled.Text`
  font-size: 12px;
  color: #ad7f74;
`;

export const ContentView = styled.View`
  flex-direction: column;
  aligitems: center;
  flex: 7;
`;

export const Description = styled.Text`
  margin: 5px;
`;
