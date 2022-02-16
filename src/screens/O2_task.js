import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Context from "../Context/context";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const storeData = async (moveset) => {
  try {
    await AsyncStorage.setItem("@user_moveset", JSON.stringify(moveset));
    console.log("유산소 저장");

    console.log(await AsyncStorage.getItem("@user_moveset"));
  } catch (e) {
    // saving error
    console.log("moveset_error");
  }
};
export default class O2_task extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      hour: parseInt(this.props.m_num / 60),
      minute: parseInt(this.props.m_num % 60),
    };
  }

  move_edit = () => {
    var move_lists = JSON.parse(this.state.user_moveset);

    move_lists.filter((x, y) => {
      if (x.eid === this.props.eid) {
        x.setcnt = this.state.hour * 60 + this.state.minute;
      }
    });
    storeData(move_lists);
  };
  async componentDidMount() {
    const user_movelist = await AsyncStorage.getItem("@user_moveset");
    this.setState({ user_moveset: user_movelist });
  }
  render() {
    return (
      <View
        style={{
          height: responsiveScreenHeight(10.4),
          flexDirection: "row",
          borderBottomWidth: 1,
          borderColor: "#E4E4E4",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            marginLeft: responsiveScreenWidth(5.8),
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: responsiveScreenFontSize(1.64),
            }}
          >
            {this.props.name}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: responsiveScreenWidth(5.8),
          }}
        >
          <TextInput
            style={{
              borderWidth: 2,
              marginRight: responsiveScreenWidth(1),
              borderColor: "#DCDCDC",
              paddingHorizontal: responsiveScreenWidth(5),
              color: "#000000",
              placeholder: "center",
              fontSize: responsiveScreenFontSize(1.88),
              width: responsiveScreenWidth(14.4),
            }}
            keyboardType="number-pad"
            placeholder="0"
            onChangeText={(text) =>
              this.setState({ hour: text }, () => {
                this.move_edit();
              })
            }
          >
            {this.state.hour}
          </TextInput>
          <Text
            style={{
              fontSize: responsiveScreenFontSize(1.88),
              color: "#757575",
            }}
          >
            시간
          </Text>

          <TextInput
            style={{
              marginLeft: responsiveScreenWidth(2),
              marginRight: responsiveScreenWidth(1),
              borderWidth: 2,
              borderColor: "#DCDCDC",
              paddingHorizontal: responsiveScreenWidth(5),
              color: "#000000",
              placeholder: "center",
              fontSize: responsiveScreenFontSize(1.88),
              width: responsiveScreenWidth(14.4),
            }}
            placeholder="0"
            keyboardType="number-pad"
            onChangeText={(text) =>
              this.setState({ minute: text }, () => {
                this.move_edit();
              })
            }
          >
            {this.state.minute}
          </TextInput>
          <Text
            style={{
              fontSize: responsiveScreenFontSize(1.88),
              color: "#757575",
            }}
          >
            분
          </Text>
        </View>
      </View>
    );
  }
}
