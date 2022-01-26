// progress.js에 들어갈 리스트뷰 모양
import React from "react";
// import PropTypes from "prop-types";
import { StyleSheet, View, Text, Image } from "react-native";

let data = {
  1: require("../image/1-1.png"),
  2: require("../image/1-2.png"),
  3: require("../image/1-3.png"),
  4: require("../image/1-4.png"),
  5: require("../image/1-5.png"),
  6: require("../image/1-6.png"),
  7: require("../image/1-7.png"),
  8: require("../image/1-8.png"),
  9: require("../image/1-9.png"),
  10: require("../image/1-10.png"),
  11: require("../image/1-11.png"),
  12: require("../image/1-12.png"),

  13: require("../image/2-1.png"),
  14: require("../image/2-2.png"),
  15: require("../image/2-3.png"),
  16: require("../image/2-4.png"),
  17: require("../image/2-5.png"),
  18: require("../image/2-6.png"),
  19: require("../image/2-7.png"),
  20: require("../image/2-8.png"),
  21: require("../image/2-9.png"),
  22: require("../image/2-10.png"),
  23: require("../image/2-11.png"),
  24: require("../image/2-12.png"),
  25: require("../image/2-13.png"),
  26: require("../image/2-14.png"),

  27: require("../image/3-1.png"),
  28: require("../image/3-2.png"),
  29: require("../image/3-3.png"),
  30: require("../image/3-4.png"),
  31: require("../image/3-5.png"),

  32: require("../image/4-1.png"),
  33: require("../image/4-2.png"),
  34: require("../image/4-3.png"),
  35: require("../image/4-4.png"),
  36: require("../image/4-5.png"),
  37: require("../image/4-6.png"),
  38: require("../image/4-7.png"),
  39: require("../image/4-8.png"),
  40: require("../image/4-9.png"),
  41: require("../image/4-10.png"),
  42: require("../image/4-11.png"),
  43: require("../image/4-12.png"),
  44: require("../image/4-13.png"),
  45: require("../image/4-14.png"),
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
        <Image
          style={{ height: 70, width: 130 }}
          source={data[String(image)]}
        />
      </View>

      <View style={styles.textView}>
        <Text style={styles.text1}>{text1}</Text>
        <Text
          style={
            text2 != text3
              ? text2 >= text3
                ? styles.text22
                : styles.text2
              : styles.text22
          }
        >
          {text2 != text3
            ? text2 >= text3
              ? "완 료"
              : text2 + " / " + text3
            : "완 료"}
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
