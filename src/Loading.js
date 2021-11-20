import React, { Component } from "react";
import { Image, Text, View, ImageBackground, StyleSheet } from "react-native";
import { render } from "react-dom";
import { WithLocalSvg } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import image_svg from "./icon/Splash.svg";

function Loading() {
  return (
    <View style={styles.container}>
      <WithLocalSvg width={wp("45%")} height={hp("45%")} asset={image_svg} />
    </View>
  );
}

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7AC819",
    alignItems: "center",
    justifyContent: "center",
  },
});
