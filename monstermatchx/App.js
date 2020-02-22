import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Monster from "./src/components/Monsters";

export default function App() {
  const [headImage, setHeadImage] = useState(0);
  const [bodyImage, setBodyImage] = useState(0);
  const [feetImage, setFeetImage] = useState(0);

  const monsterHead = [
    reuire("./assets/monster1_head.png"),
    require("./assets/monster2_head.png"),
    require("./assets/monster3_head.png")
  ];
  const monsterBody = [
    reuire("./assets/monster1_body.png"),
    require("./assets/monster2_body.png"),
    require("./assets/monster3_body.png")
  ];
  const monsterFeet = [
    reuire("./assets/monster1_feet.png"),
    require("./assets/monster2_feet.png"),
    require("./assets/monster3_feet.png")
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Monster imageSrc={monsterHead} />
        <Monster imageSrc={monsterBody} />
        <Monster imageSrc={monsterFeet} />
      </View>
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
