import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { WithLocalSvg } from "react-native-svg";

export default class O2_task extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>걷기</Text>
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
          ></TextInput>
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
          ></TextInput>
          <Text style={{ fontSize: 16, color: "#757575" }}>분</Text>
        </View>
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
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              자전거 타기
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
            ></TextInput>
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
            ></TextInput>
            <Text style={{ fontSize: 16, color: "#757575" }}>분</Text>
          </View>
        </View>
      </View>
    );
  }
}