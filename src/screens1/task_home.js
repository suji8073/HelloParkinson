import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
const year = 2021 + 1;
import p1 from "../image/p1.png";
import p2 from "../image/p2.png";
import p3 from "../image/p3.png";
import p4 from "../image/p4.png";
import p_1 from "../image/p-1.png";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { number } from "prop-types";

export default class task_home extends Component {
  constructor(props) {
    super(props);
    this.state = { adress: "../image/p3.png" };
  }
  dateToStr = () => {
    var today_year = new Date().getFullYear();
    var birth_year = String(this.props.age).substring(0, 4);
    return today_year - birth_year + 1;
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
    }
  };
  // profilepic
  componentDidMount() {
    //console.log(this.props.profilepic);
  }
  render() {
    return (
      <View
        style={
          this.props.check === this.props.name ? styles.view1 : styles.view2
        }
      >
        <View style={styles.numtext}>
          <Text
            style={{
              fontSize: responsiveScreenFontSize(3),
              color: "#5CB405",
              fontWeight: "bold",
            }}
          >
            {this.props.record}
          </Text>
        </View>
        <View style={styles.infotext}>
          <Image
            source={this.profile()}
            style={{
              height: responsiveScreenHeight(8),
              width: responsiveScreenWidth(17),
              borderRadius: 400 / 2,
            }}
          />
          <Text
            style={{ fontSize: responsiveScreenFontSize(2), marginLeft: "2%" }}
          >
            {this.props.name} / {this.dateToStr()}세 /{" "}
            {this.props.sex == "M" ? "남" : "여"}
          </Text>
        </View>
      </View>
    );
  }
}
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
