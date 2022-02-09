import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Context from "../Context/context";
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
          flexDirection: "row",
          paddingVertical: "4%",
          paddingHorizontal: "3%",
          borderBottomWidth: 1,
          borderColor: "#E4E4E4",
        }}
      >
        <View
          style={{ flex: 0.4, justifyContent: "center", paddingLeft: "2%" }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>
            {this.props.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 0.6,
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: "#DCDCDC",
              paddingHorizontal: "10%",
              paddingVertical: "3%",
              color: "#000000",
              fontSize: 16,
            }}
            placeholder="0"
            onChangeText={(text) =>
              this.setState({ hour: text }, () => {
                this.move_edit();
              })
            }
          >
            {this.state.hour}
          </TextInput>
          <Text style={{ fontSize: 16, color: "#757575" }}>시간</Text>

          <TextInput
            style={{
              borderWidth: 2,
              borderColor: "#DCDCDC",
              paddingHorizontal: "10%",
              paddingVertical: "3%",
              color: "#000000",
              fontSize: 16,
            }}
            placeholder="0"
            onChangeText={(text) =>
              this.setState({ minute: text }, () => {
                this.move_edit();
              })
            }
          >
            {this.state.minute}
          </TextInput>
          <Text style={{ fontSize: 16, color: "#757575" }}>분</Text>
        </View>
      </View>
    );
  }
}
