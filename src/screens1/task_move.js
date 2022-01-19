// progress.js에 들어갈 리스트뷰 모양
import React from "react";
// import PropTypes from "prop-types";
import { StyleSheet, View, Text, Image } from "react-native";

let data = {
  "1-1": require("../image/1-1.png"),
  "1-2": require("../image/1-2.png"),
  "1-3": require("../image/1-3.png"),
  "1-4": require("../image/1-4.png"),
  "1-5": require("../image/1-5.png"),
  "1-6": require("../image/1-6.png"),
  "1-7": require("../image/1-7.png"),
  "1-8": require("../image/1-8.png"),
  "1-9": require("../image/1-9.png"),
  "1-10": require("../image/1-10.png"),
  "1-11": require("../image/1-11.png"),
  "1-12": require("../image/1-12.png"),

  "2-1": require("../image/2-1.png"),
  "2-2": require("../image/2-2.png"),
  "2-3": require("../image/2-3.png"),
  "2-4": require("../image/2-4.png"),
  "2-5": require("../image/2-5.png"),
  "2-6": require("../image/2-6.png"),
  "2-7": require("../image/2-7.png"),
  "2-8": require("../image/2-8.png"),
  "2-9": require("../image/2-9.png"),
  "2-10": require("../image/2-10.png"),
  "2-11": require("../image/2-11.png"),
  "2-12": require("../image/2-12.png"),
  "2-13": require("../image/2-13.png"),
  "2-14": require("../image/2-14.png"),

  "3-1": require("../image/3-1.png"),
  "3-2": require("../image/3-2.png"),
  "3-3": require("../image/3-3.png"),
  "3-4": require("../image/3-4.png"),
  "3-5": require("../image/3-5.png"),

  "4-1": require("../image/4-1.png"),
  "4-2": require("../image/4-2.png"),
  "4-3": require("../image/4-3.png"),
  "4-4": require("../image/4-4.png"),
  "4-5": require("../image/4-5.png"),
  "4-6": require("../image/4-6.png"),
  "4-7": require("../image/4-7.png"),
  "4-8": require("../image/4-8.png"),
  "4-9": require("../image/4-9.png"),
  "4-10": require("../image/4-10.png"),
  "4-11": require("../image/4-11.png"),
  "4-12": require("../image/4-12.png"),
  "4-13": require("../image/4-13.png"),
  "4-14": require("../image/4-14.png"),
};

const task_move = ({ image, text1, text2, text3 }) => {
  return (
    //  전체 뷰
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        height: 100,
        width: "90%",
        borderBottomWidth: 1,
        borderColor: "#E0E0E0",
        justifyContent: "center",
        marginLeft: "5%",
        marginRight: "5%",
      }}
    >
      <View style={styles.imageView}>
        <Image style={{ height: 70, width: 130 }} source={data[image]} />
      </View>

      <View style={styles.textView}>
        <Text style={styles.text1}>{text1}</Text>
        <Text style={text2 != text3 ? styles.text2 : styles.text22}>
          {text2 != text3 ? text2 + " / " + text3 : "완 료"}
        </Text>
      </View>
    </View>
  );
};

export default task_move;
const styles = StyleSheet.create({
  text1: {
    fontSize: 17,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
    width: "90%",
  },
  text2: {
    fontSize: 16,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    marginTop: 10,
  },
  text22: {
    fontSize: 16,
    alignItems: "center",
    color: "#C20000",
    justifyContent: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
  imageView: {
    flex: 2.5,
    margin: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  textView: {
    margin: "2%",
    flex: 3,
    flexDirection: "column",
  },
});
