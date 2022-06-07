import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, ActivityIndicator } from "react-native";

// For Network Call
import axios from "axios";
import { POST_API_TEST } from "../api";

// Components
import { View } from "../components/Themed";
import PostCard from "../components/PostCard";
import { Loader } from "./screenComponents";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import {
  getPostsData,
  getUserData,
  setPostDetails,
} from "../redux/ducks/posts";

// Assets
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const postData = useSelector((state: RootState) => state.posts.postList);
  const userData = useSelector((state: RootState) => state.posts.userData);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentLimit, setCurrentLimit] = useState<number>(10);
  //const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const fetchData = () => {
    setIsLoading(true);

    dispatch(getPostsData(currentLimit));
    dispatch(getUserData());
    setIsLoading(false);
  };

  // const fetchDataTest = async () => {
  //   const options = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   try {
  //     const res = await axios.get(POST_API_TEST, options);
  //     setData(res.data);
  //   } catch (e) {
  //     console.log(e.response);
  //   }
  // };

  const handleRefresh = () => {
    setIsLoading(true);
    setCurrentLimit(10);
    fetchData();
  };

  const handleLoadMore = () => {
    setIsLoading(true);

    setCurrentLimit(currentLimit + 10);
    fetchData();
  };

  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, [currentLimit]);

  const renderItem = ({ item }) => {
    return (
      <PostCard
        author={item.username}
        text={item.body}
        title={item.title}
        onClick={() => {
          dispatch(setPostDetails(item));
          navigation.navigate("Post");
        }}
        image={{ uri: item.img }}
      />
    );
  };

  const renderFooter = () => {
    return (
      <Loader>
        <ActivityIndicator size="large" />
      </Loader>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader>
          <ActivityIndicator size="large" />
        </Loader>
      ) : (
        <FlatList
          onEndReachedThreshold={0.4}
          onEndReached={handleLoadMore}
          scrollEventThrottle={150}
          keyExtractor={(item) => "item_" + item.id}
          data={postData}
          renderItem={renderItem}
          ListFooterComponent={renderFooter}
          onRefresh={handleRefresh}
          refreshing={isLoading}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    paddingBottom: 10,
  },
});
