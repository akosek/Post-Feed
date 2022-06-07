/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import { ThunkAction } from "redux-thunk";

import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootState } from "./src/redux/rootReducer";
import { Action } from "redux";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: NavigatorScreenParams<RootTabParamList> | undefined;
  Post: undefined;
  Profile: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<
  Screen extends keyof RootStackParamList
> = NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  Profile: undefined;
  Post: undefined;
};

export type TPostItem = {
  id: number;
  name: string;
};

export type TPostDetails = {
  id: number;
  body: string;
  title: string;
  username: string;
  name: string;
  img: string;
  email: string;
  adress: TUserAdress;
};

export type TUserAdress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
