import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";

const Monster = props => {
  return <Image source={props.imageSrc} styles={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    resizeMode: "contain"
  }
});

export default Monster;
