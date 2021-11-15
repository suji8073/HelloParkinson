import React from "react";
import {
  Button,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  StyleSheet,
  Touchable,
} from "react-native";
import ActionButton from "react-native-action-button";
import { Directions } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { Entypo } from "@expo/vector-icons";
const progress = ({ navigation }) => {
  return (
    <View style={styles.finalView}>
      {/* 상단바 */}
      <View style={styles.menuView}>
        <AntDesign
          name="left"
          size={24}
          color="#808080"
          onPress={() => {
            navigation.navigate("TabNavigation");
          }}
        />
        <View style={styles.margin}></View>
        <Text style={styles.titleText}>'김옥분'님의 운동 진도율</Text>
        <View style={styles.margin}></View>
      </View>
      {/* 본문 전체 뷰 */}
      <View style={{ margin: "5%" }}>
        {/* 뷰1/3 */}
        <View style={{ flexDirection: "row" }}>
          <View style={{ justifyContent: "center" }}>
            <Ionicons name="md-checkmark-circle" size={65} color="green" />
            {/* 전체 진도율 뷰 */}
          </View>
          <View
            style={{
              marginLeft: "4%",
              marginTop: "3%",
              flexDirection: "column",
              flex: 0.7,
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ marginBottom: 10, fontSize: 23, fontWeight: "bold" }}
            >
              김옥분/77세/여
            </Text>
            <Text style={{ marginBottom: "1%", fontSize: 15 }}>
              오늘 전체 진도율 85%
            </Text>
            <Text style={{ marginBottom: 10, fontSize: 15 }}>
              여기에 프로그레스 바
            </Text>
          </View>
        </View>
        {/* 여기까지 view 1/3 */}
        {/* 여기부터 view 2/3 */}
        <View
          style={{
            marginBottom: "3%",
            flexDirection: "column",
            padding: "5%",
            borderWidth: 2,
            borderRadius: 7,
            borderColor: "#D6D6D6",
          }}
        >
          {/* 위에꺼 전체 */}
          <View style={{ flexDirection: "row", marginBottom: "3%" }}>
            {/* 햄버거아이콘 빼고*/}
            <View style={{ flex: 9, flexDirection: "column" }}>
              <Text>2021년 2월 5일</Text>
              <Text>신장운동</Text>
            </View>
            {/* 햄버거 아이콘 */}
            <View style={{ flex: 1 }}>
              <Entypo name="dots-three-vertical" size={24} color="#595959" />
            </View>
          </View>
          {/* 여기부터 아래 */}
          <View style={{ flexDirection: "row" }}>
            <View style={styles.bordertext}>
              <Text>완료</Text>

              <Text>0개</Text>
            </View>
            <View style={styles.bordertext}>
              <Text>진행중</Text>
              <Text>0개</Text>
            </View>
            <View
              style={{ flex: 2, flexDirection: "column", alignItems: "center" }}
            >
              <Text>미실시</Text>
              <Text>0개</Text>
            </View>
          </View>
        </View>
        {/* 여기까지 view2/3 */}
        {/* 여기부터 view3/3 */}

        {/* <ScrollView style={{ flexDirection: "row", margin: "1%" }}>
          <View style={{ marginBottom: "1%" }}>
            <Text style={{ fontSize: 17 }}>진행중</Text>
            <Text style={styles.movetext}>날개뼈모으기</Text>
            <Text style={styles.movetext}>여기에 프로그레스 바</Text>
          </View>
          <View>
            <Text style={{ fontSize: 17 }}>미실시 운동</Text>
            <Text style={styles.movetext}>몸쪽 앞쪽 근육</Text>
          </View>
        </ScrollView> */}
      </View>
      <ActionButton
        bgColor="rgba(0,0,0,1)"
        buttonColor="rgba(68,110,26,1)"
        onPress={() => {
          navigation.navigate("moveedit");
        }}
      ></ActionButton>
    </View>
  );
};

export default progress;
const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  menuView: {
    marginTop: 30,
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
  bordertext: {
    borderRightWidth: 1,
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
  },
  movetext: {
    fontSize: 17,
  },
});
