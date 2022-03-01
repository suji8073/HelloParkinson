// progress.js에 들어갈 리스트뷰 모양
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { WithLocalSvg } from "react-native-svg";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const task_move = ({ image, text1, text2, text3 }) => {
  return (
    //  전체 뷰
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        height: responsiveScreenHeight(13.9),
        width: "90.6%",
        borderBottomWidth: 1,
        borderColor: "#E0E0E0",
        marginLeft: "4.7%",
        marginRight: "4.7%",
      }}
    >
      <View style={styles.imageView}>
        <WithLocalSvg
          width={responsiveScreenWidth(28.6)}
          height={responsiveScreenHeight(9.0)}
          asset={image}
        />
      </View>

      <View style={styles.textView}>
        <Text style={styles.text1}>{text1}</Text>
        <Text style={text2 >= text3 ? styles.text22 : styles.text2}>
          {text2 >= text3 ? "완 료" : text2 + "분 / " + text3 + "분"}
        </Text>
      </View>
    </View>
  );
};

export default task_move;
const styles = StyleSheet.create({
  text1: {
    fontSize: responsiveScreenFontSize(2),
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
    width: "100%",
  },
  text2: {
    fontSize: responsiveScreenFontSize(1.88),
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    marginTop: "1.7%",
  },

  text22: {
    fontSize: responsiveScreenFontSize(1.88),
    alignItems: "center",
    color: "#C20000",
    justifyContent: "center",
    marginTop: "1.7%",
  },
  imageView: {
    alignItems: "center",
    justifyContent: "center",
  },
  textView: {
    marginLeft: "5.8%",
    width: responsiveScreenWidth(56),
    flexDirection: "column",
  },
});
