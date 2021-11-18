import React from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { WithLocalSvg } from "react-native-svg";
import PercentageBar from "./progressbar";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import Task from "./task3";
import { Entypo } from "@expo/vector-icons";
import ddaysvg from "../icon/dday.svg";
import { AntDesign } from "@expo/vector-icons";
import SimplePopupMenu from "react-native-simple-popup-menu";

const items = [
  { id: "alarm", label: "알림순" },
  { id: "progress", label: "진도율순" },
];

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
        <SimplePopupMenu
          items={items}
          cancelLabel={"취소"}
          //onSelect={() => alert(this.label)}
          onCancel={() => console.log("onCancel")}
        >
          <Entypo name="dots-three-vertical" size={24} color="#595959" />
        </SimplePopupMenu>
      </View>
      <View
        style={{
          backgroundColor: "#F8F8F8",
          height: "100%",
          flexDirection: "column",
          alignContent: "stretch",
        }}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            padding: "3%",
          }}
        >
          <Text style={{ fontSize: 21 }}>2월</Text>
        </View>

        <View
          style={{
            borderRadius: 19,
            backgroundColor: "#ffffff",
            height: "100%",
            paddingBottom: 150,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: "5%",
              alignItems: "center",
              justifyContent: "space-evenly",
              padding: "2%",
            }}
          >
            <WithLocalSvg
              width={30}
              height={30}
              asset={ddaysvg}
              style={{ position: "absolute", right: "47%", top: "50%" }}
            />
            <AntDesign name="left" size={30} color="#808080" />
            <View style={styles.dayview}>
              <Text style={styles.lasttext}>일</Text>
              <Text style={styles.lasttext}>31</Text>
            </View>
            <View style={styles.dayview}>
              <Text style={styles.lasttext}>월</Text>
              <Text style={styles.lasttext}>1</Text>
            </View>
            <View style={styles.dayview}>
              <Text style={styles.lasttext}>화</Text>
              <Text style={styles.lasttext}>2</Text>
            </View>
            <View style={styles.dayview}>
              <Text style={styles.lasttext}>수</Text>
              <Text style={styles.ddaytext}>3</Text>
            </View>
            <View style={styles.dayview}>
              <Text style={styles.nexttext}>목</Text>
              <Text style={styles.nexttext}>4</Text>
            </View>
            <View style={styles.dayview}>
              <Text style={styles.nexttext}>금</Text>
              <Text style={styles.nexttext}>5</Text>
            </View>
            <View style={styles.dayview}>
              <Text style={styles.nexttext}>토</Text>
              <Text style={styles.nexttext}>6</Text>
            </View>

            <AntDesign name="right" size={30} color="#808080" />
          </View>
          <ScrollView style={{ marginTop: 5, marginBottom: 90 }}>
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
              <Task name="김채현" age="60" sex="남" progress="80%" minute="5" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("user_progress");
              }}
            >
              <Task name="채수지" age="67" sex="여" progress="30%" minute="5" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("user_progress");
              }}
            >
              <Task name="이영현" age="55" sex="여" progress="79%" minute="0" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("user_progress");
              }}
            >
              <Task name="신수빈" age="45" sex="여" progress="80%" minute="0" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("user_progress");
              }}
            >
              <Task name="이지윤" age="89" sex="여" progress="10%" minute="2" />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
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
    marginTop: "10%",
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
  lasttext: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#484848",
    paddingBottom: "2%",
  },
  dayview: { alignItems: "center", marginHorizontal: "3%" },
  nexttext: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#B5B5B5",
    paddingBottom: "2%",
  },
  ddaytext: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#ffffff",
    paddingBottom: "2%",
  },
});
