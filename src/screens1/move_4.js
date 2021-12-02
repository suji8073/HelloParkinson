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

let Svg1 = require("../image/4-1.png");
let Svg2 = require("../image/4-2.png");
let Svg3 = require("../image/4-3.png");
let Svg4 = require("../image/4-4.png");
let Svg5 = require("../image/4-5.png");
let Svg6 = require("../image/4-6.png");
let Svg7 = require("../image/4-7.png");
let Svg8 = require("../image/4-8.png");
let Svg9 = require("../image/4-9.png");
let Svg10 = require("../image/4-10.png");
let Svg11 = require("../image/4-11.png");
let Svg12 = require("../image/4-12.png");
let Svg13 = require("../image/4-13.png");
let Svg14 = require("../image/4-14.png");

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
          <Text style={styles.titleText}>
            구강 및 발성 운동{this.props.route.params.paramsName}
          </Text>
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
                  paramName1: "4-1",
                  paramName2: "구강 및 발성 운동",
                  paramsName: this.props.route.params.paramsName,
                });
              }}
            >
              <Task
                image={Svg1}
                text1="아에이오우 소리내기"
                text2="1 / 5"
              ></Task>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push("move_play", {
                  paramName1: "4-2",
                  paramName2: "구강 및 발성 운동",
                  paramsName: this.props.route.params.paramsName,
                });
              }}
            >
              <Task
                image={Svg2}
                text1="파파파파파 소리내기"
                text2="1 / 5"
              ></Task>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push("move_play", {
                  paramName1: "4-3",
                  paramName2: "구강 및 발성 운동",
                  paramsName: this.props.route.params.paramsName,
                });
              }}
            >
              <Task image={Svg3} text1="쪽 소리내기" text2="1 / 5"></Task>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push("move_play", {
                  paramName1: "4-4",
                  paramName2: "구강 및 발성 운동",
                  paramsName: this.props.route.params.paramsName,
                });
              }}
            >
              <Task image={Svg4} text1="혀로 볼 밀기" text2="1 / 5"></Task>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push("move_play", {
                  paramName1: "4-5",
                  paramName2: "구강 및 발성 운동",
                  paramsName: this.props.route.params.paramsName,
                });
              }}
            >
              <Task image={Svg5} text1="혀로 입천장 밀기" text2="1 / 5"></Task>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push("move_play", {
                  paramName1: "4-6",
                  paramName2: "구강 및 발성 운동",
                  paramsName: this.props.route.params.paramsName,
                });
              }}
            >
              <Task image={Svg6} text1="똑딱 소리내기" text2="1 / 5"></Task>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push("move_play", {
                  paramName1: "4-7",
                  paramName2: "구강 및 발성 운동",
                  paramsName: this.props.route.params.paramsName,
                });
              }}
            >
              <Task image={Svg7} text1="혀 물고 침 삼키기" text2="1 / 5"></Task>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push("move_play", {
                  paramName1: "4-8",
                  paramName2: "구강 및 발성 운동",
                  paramsName: this.props.route.params.paramsName,
                });
              }}
            >
              <Task image={Svg8} text1="아 짧게 소리내기" text2="1 / 5"></Task>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push("move_play", {
                  paramName1: "4-9",
                  paramName2: "구강 및 발성 운동",
                  paramsName: this.props.route.params.paramsName,
                });
              }}
            >
              <Task image={Svg9} text1="아 길게 소리내기" text2="1 / 5"></Task>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push("move_play", {
                  paramName1: "4-10",
                  paramName2: "구강 및 발성 운동",
                  paramsName: this.props.route.params.paramsName,
                });
              }}
            >
              <Task
                image={Svg10}
                text1="고음 가성으로 소리내기"
                text2="1 / 5"
              ></Task>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push("move_play", {
                  paramName1: "4-11",
                  paramName2: "구강 및 발성 운동",
                  paramsName: this.props.route.params.paramsName,
                });
              }}
            >
              <Task image={Svg11} text1="도레미파솔라시도" text2="1 / 5"></Task>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push("move_play", {
                  paramName1: "4-12",
                  paramName2: "구강 및 발성 운동",
                  paramsName: this.props.route.params.paramsName,
                });
              }}
            >
              <Task
                image={Svg12}
                text1="큰 소리로 음절 읽기"
                text2="1 / 5"
              ></Task>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push("move_play", {
                  paramName1: "4-13",
                  paramName2: "구강 및 발성 운동",
                  paramsName: this.props.route.params.paramsName,
                });
              }}
            >
              <Task
                image={Svg13}
                text1="큰 소리로 글 읽기"
                text2="1 / 5"
              ></Task>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push("move_play", {
                  paramName1: "4-14",
                  paramName2: "구강 및 발성 운동",
                  paramsName: this.props.route.params.paramsName,
                });
              }}
            >
              <Task image={Svg14} text1="애국가 부르기" text2="1 / 5"></Task>
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
