import React from "react";
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

import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

let Svg1 = require("../image/2-1.png");
let Svg2 = require("../image/2-2.png");
let Svg3 = require("../image/2-3.png");
let Svg4 = require("../image/2-4.png");
let Svg5 = require("../image/2-5.png");
let Svg6 = require("../image/2-6.png");
let Svg7 = require("../image/2-7.png");
let Svg8 = require("../image/2-8.png");
let Svg9 = require("../image/2-9.png");
let Svg10 = require("../image/2-10.png");
let Svg11 = require("../image/2-11.png");
let Svg12 = require("../image/2-12.png");
let Svg13 = require("../image/2-13.png");
let Svg14 = require("../image/2-14.png");

function move_2({ navigation }) {
  return (
    <View style={styles.finalView}>
      <View style={styles.menuView}>
        <AntDesign
          name="left"
          size={24}
          color="#808080"
          onPress={() => {
            navigation.navigate("TabNavigation1");
          }}
        />
        <View style={styles.margin}></View>
        <Text style={styles.titleText}>근력 운동</Text>
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
              navigation.navigate("move_play", {
                paramName1: "2-1",
                paramName2: "근력 운동",
              });
            }}
          >
            <Task image={Svg1} text1="엉덩이 들기" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: "2-2",
                paramName2: "근력 운동",
              });
            }}
          >
            <Task
              image={Svg2}
              text1="엎드려 누운 상태에서 다리 들기"
              text2="1 / 5"
            ></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: "2-3",
                paramName2: "근력 운동",
              });
            }}
          >
            <Task image={Svg3} text1="엉덩이 옆 근육 운동" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: "2-4",
                paramName2: "근력 운동",
              });
            }}
          >
            <Task image={Svg4} text1="무릎 벌리기" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: "2-5",
                paramName2: "근력 운동",
              });
            }}
          >
            <Task image={Svg5} text1="무릎 펴기" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: "2-6",
                paramName2: "근력 운동",
              });
            }}
          >
            <Task image={Svg6} text1="런지" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: "2-7",
                paramName2: "근력 운동",
              });
            }}
          >
            <Task image={Svg7} text1="좌우 런지" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: "2-8",
                paramName2: "근력 운동",
              });
            }}
          >
            <Task image={Svg8} text1="발전된 런지" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: "2-9",
                paramName2: "근력 운동",
              });
            }}
          >
            <Task
              image={Svg9}
              text1="손목 및 팔꿈치 주변 근육"
              text2="1 / 5"
            ></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: "2-10",
                paramName2: "근력 운동",
              });
            }}
          >
            <Task image={Svg10} text1="날개 뼈 모음 근육" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: "2-11",
                paramName2: "근력 운동",
              });
            }}
          >
            <Task image={Svg11} text1="앉았다 일어서기" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: "2-12",
                paramName2: "근력 운동",
              });
            }}
          >
            <Task
              image={Svg12}
              text1="발전된 앉았다 일어서기"
              text2="1 / 5"
            ></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: "2-13",
                paramName2: "근력 운동",
              });
            }}
          >
            <Task image={Svg13} text1="어깨 운동 1단계" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: "2-14",
                paramName2: "근력 운동",
              });
            }}
          >
            <Task image={Svg14} text1="어깨 운동 2단계" text2="1 / 5"></Task>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

export default move_2;

const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  menuView: {
    marginTop: "10%",
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
