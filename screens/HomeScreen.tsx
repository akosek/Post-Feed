import { StyleSheet, ScrollView } from "react-native";

// Components
import { Text, View } from "../components/Themed";
import PostCard from "../components/PostCard";

// types
import { RootTabScreenProps } from "../types";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <PostCard
        author="Jake"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus in hac habitasse platea dictumst. Neque vitae tempus quam pellentesque nec. Cursus in hac habitasse platea dictumst. Elit ut aliquam purus sit amet luctus. In mollis nunc sed id. Molestie at elementum eu facilisis sed. Dignissim enim sit amet venenatis urna cursus eget. Tristique magna sit amet purus gravida quis blandit turpis cursus. Lacus sed turpis tincidunt id aliquet risus feugiat. Tincidunt id aliquet risus feugiat. Dui faucibus in ornare quam. Id cursus metus aliquam eleifend mi in nulla posuere. Enim nec dui nunc mattis enim ut tellus. Cursus eget nunc scelerisque viverra mauris in. Neque viverra justo nec ultrices dui sapien eget mi."
        title="bkjankjnkjdn"
        image={{
          uri:
            "https://www.signivis.com/img/custom/avatars/member-avatar-01.png",
        }}
      />
      <PostCard
        author="Jake"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus in hac habitasse platea dictumst. Neque vitae tempus quam pellentesque nec. Cursus in hac habitasse platea dictumst. Elit ut aliquam purus sit amet luctus. In mollis nunc sed id. Molestie at elementum eu facilisis sed. Dignissim enim sit amet venenatis urna cursus eget. Tristique magna sit amet purus gravida quis blandit turpis cursus. Lacus sed turpis tincidunt id aliquet risus feugiat. Tincidunt id aliquet risus feugiat. Dui faucibus in ornare quam. Id cursus metus aliquam eleifend mi in nulla posuere. Enim nec dui nunc mattis enim ut tellus. Cursus eget nunc scelerisque viverra mauris in. Neque viverra justo nec ultrices dui sapien eget mi."
        title="bkjankjnkjdn"
        image={{
          uri:
            "https://www.signivis.com/img/custom/avatars/member-avatar-01.png",
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 4,
    //alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
