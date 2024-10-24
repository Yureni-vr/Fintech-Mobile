import { View, Text, StyleSheet } from "react-native";
import { useAssets } from "expo-asset";
import { Video } from "expo-av";

const page = () => {
  const [assets] = useAssets([require("@/assets/video/intro.mp4")]);
  return <View style={styles.container}>{assets && <Video />}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default page;
