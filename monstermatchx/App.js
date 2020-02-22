import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import Constants from "expo-constants";
import Monster from "./src/components/Monsters";

export default function App() {
  const [headImage, setHeadImage] = useState(0);
  const [bodyImage, setBodyImage] = useState(0);
  const [feetImage, setFeetImage] = useState(0);
  const [matched, setMatched] = useState(false);

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

  const generateMonsters = () => {
    if (matched) {
      setMatched(false);
    }
    setHeadImage(Math.floor(Math.random() * Math.floor(3)));
    setBodyImage(Math.floor(Math.random() * Math.floor(3)));
    setFeetImage(Math.floor(Math.random() * Math.floor(3)));
  };

  useEffect(() => {
    if (headImage === bodyImage && headImage === feetImage) {
      setMatched(true);
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Monster imageSrc={monsterHead} />
        <Monster imageSrc={monsterBody} />
        <Monster imageSrc={monsterFeet} />
      </View>
      {matched ? <Text>MATCH!</Text> : <Text></Text>}
      <Button title="PLAY" onPress={generateMonsters} />
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
