import React from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import PercentageBar from "./progressbar";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import Task from "./task3";
import { Entypo } from "@expo/vector-icons";

function progress({ navigation }) {
  return (
    <View style={styles.finalView}>
      <StatusBar backgroundColor="#D6D6D6" barStyle="dark-content" />
      <View style={{ alignItems: "center" }}>
        <View style={{ width: "80%", justifyContent: "center" }}></View>
      </View>
      <View style={styles.menuView}>
        <Entypo name="dots-three-vertical" size={24} color="#ffffff" />
        <View style={styles.margin}></View>
        <Text style={styles.titleText}>환자 진도율 관리</Text>
        <View style={styles.margin}></View>
        <Entypo name="dots-three-vertical" size={24} color="#595959" />
      </View>

      <ScrollView style={{ marginTop: 5 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("user_progress");
          }}
        >
          <Task name="김옥분" age="5" sex="여" progress="50%" minute="5" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("user_progress");
          }}
        >
          <Task name="김채현" age="6" sex="남" progress="80%" minute="5" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("user_progress");
          }}
        >
          <Task name="채수지" age="15" sex="여" progress="58%" minute="5" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default progress;

const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  menuView: {
    backgroundColor: "#FFFFFF",
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop:"10%",
    justifyContent: "flex-start",
    borderBottomWidth: 1.8,
    borderColor: "#E5E5E5",
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: 20,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },

  firstView: {
    // padding:30,
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
  },
  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
