import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Body,
  TextInput,
} from "react-native";
import Task from "./task_move";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

let Svg1 = require("../image/3-1.png");
let Svg2 = require("../image/3-2.png");
let Svg3 = require("../image/3-3.png");
let Svg4 = require("../image/3-4.png");
let Svg5 = require("../image/3-5.png");

export default class move_3 extends Component {
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
          <Text style={styles.titleText}>균형 협응 운동</Text>
          <View style={styles.margin}></View>
          <EvilIcons name="star" size={30} color="#ffffff" />
        </View>

        <View style={styles.secondView}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push("move_play", {
                  paramName1: "3-1",
                  paramName2: "균형 협응 운동",
                  paramsName: this.props.route.params.paramsName,
                });
              }}
            >
              <Task image={Svg1} text1="한발 서기" text2="1 / 5"></Task>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push("move_play", {
                  paramName1: "3-2",
                  paramName2: "균형 협응 운동",
                  paramsName: this.props.route.params.paramsName,
                });
              }}
            >
              <Task image={Svg2} text1="버드독 1단계" text2="1 / 5"></Task>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push("move_play", {
                  paramName1: "3-3",
                  paramName2: "균형 협응 운동",
                  paramsName: this.props.route.params.paramsName,
                });
              }}
            >
              <Task image={Svg3} text1="버드독 2단계" text2="1 / 5"></Task>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push("move_play", {
                  paramName1: "3-4",
                  paramName2: "균형 협응 운동",
                  paramsName: this.props.route.params.paramsName,
                });
              }}
            >
              <Task
                image={Svg4}
                text1="앉은 상태에서 제자리 걷기"
                text2="1 / 5"
              ></Task>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push("move_play", {
                  paramName1: "3-5",
                  paramName2: "균형 협응 운동",
                  paramsName: this.props.route.params.paramsName,
                });
              }}
            >
              <Task image={Svg5} text1="움직이는 런지" text2="1 / 5"></Task>
            </TouchableOpacity>
          </ScrollView>
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
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: "30%",
  },

  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
