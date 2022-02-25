import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import p1 from "../image/p1.png";
import p2 from "../image/p2.png";
import p3 from "../image/p3.png";
import p4 from "../image/p4.png";
import p5 from "../image/p5.png";
import p6 from "../image/p6.png";
import p7 from "../image/p7.png";
import p8 from "../image/p8.png";
import p9 from "../image/p9.png";
import p_1 from "../image/p-1.png";
export default class task2 extends Component {
  dateToStr = () => {
    var today_year = new Date().getFullYear();
    var birth_year = String(this.props.birthday).substring(0, 4);
    return today_year - birth_year + 1;
  };

  age_change = () => {
    return this.props.sex === "F" ? "여" : "남";
  };
  profile = () => {
    if (this.props.profilepic === "-1") {
      return p_1;
    } else if (this.props.profilepic === "1") {
      return p1;
    } else if (this.props.profilepic === "2") {
      return p2;
    } else if (this.props.profilepic === "3") {
      return p3;
    } else if (this.props.profilepic === "4") {
      return p4;
    } else if (this.props.profilepic === "5") {
      return p5;
    } else if (this.props.profilepic === "6") {
      return p6;
    } else if (this.props.profilepic === "7") {
      return p7;
    } else if (this.props.profilepic === "8") {
      return p8;
    } else if (this.props.profilepic === "9") {
      return p9;
    }
  };
  render() {
    return (
      <View style={styles.Container}>
        <Image
          source={this.profile()}
          style={{
            height: responsiveScreenHeight(7),
            width: responsiveScreenWidth(15),
            borderRadius: 400 / 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <View style={styles.textgroup}>
          <Text style={styles.titleText}> {this.props.user} </Text>
          <Text style={styles.titleText}> / </Text>
          <Text style={styles.titleText}>{this.dateToStr()}</Text>
          <Text style={styles.titleText}> / </Text>
          <Text style={styles.titleText}> {this.age_change()} </Text>
        </View>
        <View style={styles.margin}></View>
        <View style={{ marginRight: responsiveScreenWidth(3.6) }}>
          <AntDesign
            name="right"
            style={{ fontSize: responsiveScreenFontSize(3) }}
            color="#808080"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#ebebeb",
    alignItems: "center",
    marginLeft: responsiveScreenWidth(4.7),
    marginRight: responsiveScreenWidth(4.7),
    marginBottom: responsiveScreenHeight(2),
    height: responsiveScreenHeight(11),
    borderRadius: 10,
    flexDirection: "row",
    paddingLeft: responsiveScreenWidth(4),
  },

  textgroup: {
    alignItems: "flex-start",
    marginLeft: responsiveScreenWidth(2.8),
    justifyContent: "flex-start",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2),
    alignItems: "center",
    color: "#484848",
    justifyContent: "center",
  },

  subtext: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(1.64),
    alignItems: "center",
    color: "#747474",
    justifyContent: "center",
  },

  margin: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
