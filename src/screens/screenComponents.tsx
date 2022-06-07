import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: #fffcf9;
  padding-horizontal: 14px;
`;

export const UserView = styled.View`
  margin-top: 25px;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const UserImage = styled.Image`
  resize-mode: contain;
  height: 75px;
  width: 75px;
  border-radius: 50px;
`;

export const Loader = styled.View`
  display: flex;
  flex: 1;
  height: 50px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;
