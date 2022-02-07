import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
const year = 2021 + 1;

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const task_home = ({ record, name, age, sex, check }) => {
  return (
    <View style={check === name ? styles.view1 : styles.view2}>
      <View style={styles.numtext}>
        <Text
          style={{
            fontSize: responsiveScreenFontSize(3),
            color: "#5CB405",
            fontWeight: "bold",
          }}
        >
          {record}
        </Text>
      </View>
      <View style={styles.infotext}>
        <Ionicons
          name="person-circle-sharp"
          style={{ fontSize: responsiveScreenFontSize(8) }}
          color="lightblue"
        />
        <Text
          style={{ fontSize: responsiveScreenFontSize(2), marginLeft: "2%" }}
        >
          {name} / {year - parseInt(age / 10000)}세 / {sex}
        </Text>
      </View>
    </View>
  );
};
export default task_home;
const styles = StyleSheet.create({
  numtext: {
    flex: 1.3,
    alignItems: "center",
  },
  infotext: {
    marginLeft: "2%",
    flex: 9.7,
    flexDirection: "row",
    alignItems: "center",
  },
  view1: {
    paddingHorizontal: "6%",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 3,
    borderColor: "#5CB405",
    height: responsiveScreenHeight(12),
  },
  view2: {
    paddingHorizontal: "6%",
    alignItems: "center",
    flexDirection: "row",
    height: responsiveScreenHeight(12),
  },
});
