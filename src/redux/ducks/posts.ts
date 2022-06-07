import { createAction, ActionType, getType } from "typesafe-actions";
import { AppThunk, TPostDetails } from "../../../types";

import { posts } from "../../../db.json";
// For network connection
import axios from "axios";
import { POST_API, USER_API, POST_API_TEST } from "../../api";

// Action creators
export const setPostList = createAction("setPostList/SET_POST_LIST")<
  TPostDetails[]
>();
export const isFetchingPostList = createAction(
  "isFetchingPostList/IS_FETCHING_POST_LIST"
)<boolean>();
export const setOffset = createAction("setOffset/SET_OFFSET")<number>();
export const setPostDetails = createAction("setPostDetails/SET_POST_DETAILS")<
  TPostDetails
>();
export const setDataLimit = createAction("setOffset/SET_DATA_LIMIT")<number>();

const actionCreators = {
  setPostList,
  isFetchingPostList,
  setDataLimit,
  setPostDetails,
};

// Initial State
export type TPostState = Readonly<{
  postList: TPostDetails[];
  isFetching: boolean;
  postDetails: TPostDetails;
  dataLimit: number;
}>;

const initialState: TPostState = {
  postList: [],
  isFetching: false,
  postDetails: {
    id: 1,
    name: "",
    body: "",
    title: "",
    username: "",
    img: "",
    adress: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
    email: "",
  },
  dataLimit: 10,
};

// Reducer
export type TRepoTypes = ActionType<typeof actionCreators>;
export default function reducer(
  state: TPostState = initialState,
  action: TRepoTypes
): TPostState {
  switch (action.type) {
    case getType(setPostList):
      return { ...state, postList: action.payload };
    case getType(isFetchingPostList):
      return { ...state, isFetching: action.payload };
    case getType(setPostDetails):
      return { ...state, postDetails: action.payload };
    case getType(setDataLimit):
      return { ...state, dataLimit: action.payload };

    default:
      return state;
  }
}

export const getPostsData = (dataLimit: number): AppThunk => {
  return function (dispatch) {
    dispatch(setPostList(posts.slice(0, dataLimit)));

    // Network Call
    // let url = `${POST_API}` + `?_limit=${dataLimit}`;

    // axios
    //   .get(url)
    //   .then((response) => {
    //     dispatch(isFetchingPostList(true));

    //     dispatch(setDataLimit(dataLimit));
    //     dispatch(setPostList(response.data));
    //     dispatch(isFetchingPostList(false));
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
};

export const actions = {
  ...actionCreators,
};
