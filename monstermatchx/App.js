import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [headImage, setHeadImage] = useState(0);
  const [bodyImage, setBodyImage] = useState(0);
  const [feetImage, setFeetImage] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View>{/* Monster images here */}</View>
      <Button title="PLAY" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight
  }
});
