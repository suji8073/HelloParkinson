import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Task from "./task_move";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { parse, WithLocalSvg } from "react-native-svg";

import on from "../icon/move_play_on.svg";
import off from "../icon/move_play_off.svg";
import stop from "../icon/move_play_stop.svg";
import rturn from "../icon/move_play_return.svg";

export default class move_4 extends Component {
  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.menuView}>
          <AntDesign
            name="left"
            size={24}
            color="#808080"
            onPress={() => {
              this.props.navigation.navigate("TabNavigation1", {
                paramsName: this.props.route.params.paramsName,
              });
            }}
          />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>유산소 운동</Text>
          <View style={styles.margin}></View>
          <EvilIcons name="star" size={30} color="#ffffff" />
        </View>

        <View style={styles.secondView}>
          <View style={styles.one}>
            <Text style={styles.onetext}>현재 수행 운동</Text>
            <Text style={styles.onettext}>자전거 타기</Text>
          </View>
          <View style={styles.two}></View>
          <View style={styles.three}>
            <View style={styles.margin}></View>
            <WithLocalSvg width={60} height={60} asset={rturn} />
            <View style={styles.margin1}></View>
            <WithLocalSvg width={90} height={90} asset={on} />
            <View style={styles.margin1}></View>
            <WithLocalSvg width={60} height={60} asset={stop} />
            <View style={styles.margin}></View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  menuView: {
    marginTop: "3%",
    backgroundColor: "#FFFFFF",
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: "flex-start",
    borderBottomWidth: 1.8,
    borderColor: "#E5E5E5",
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: 21,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },

  firstView: {
    // padding:30,
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    margin: 15,
    backgroundColor: "#FFFFFF",
  },

  secondView: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flex: 1,
    marginBottom: "30%",
  },

  onetext: {
    fontSize: 18,
    alignItems: "center",
    color: "#666666",
    justifyContent: "center",
  },
  onettext: {
    fontSize: 23,
    alignItems: "center",
    color: "#000000",
    fontWeight: "bold",
    justifyContent: "center",
  },

  one: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    flex: 1,
  },

  two: {
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    borderWidth: 1,
  },

  three: {
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
  },

  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
  margin1: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 0.3,
  },
});
