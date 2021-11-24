import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Left,
  Body,
  TextInput,
} from "react-native";
import Task from "./task_move";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import Svg from "../icon/noimage.svg";

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
                paramName1: 2,
                paramName2: 1,
              });
            }}
          >
            <Task image={Svg} text1="엉덩이 틀기" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: 2,
                paramName2: 1,
              });
            }}
          >
            <Task image={Svg} text1="엎드려 누운 상태에서 다리 들기" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: 2,
                paramName2: 1,
              });
            }}
          >
            <Task image={Svg} text1="엉덩이 옆 근육 운동" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: 2,
                paramName2: 1,
              });
            }}
          >
            <Task image={Svg} text1="무릎 벌리기" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: 2,
                paramName2: 1,
              });
            }}
          >
            <Task image={Svg} text1="무릎 펴기" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: 2,
                paramName2: 1,
              });
            }}
          >
            <Task image={Svg} text1="런지" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: 2,
                paramName2: 1,
              });
            }}
          >
            <Task image={Svg} text1="런지" text2="1 / 5"></Task>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("move_play", {
                paramName1: 2,
                paramName2: 1,
              });
            }}
          >
            <Task image={Svg} text1="런지" text2="1 / 5"></Task>
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
