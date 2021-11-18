import React from "react";
import {
  Button,
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Touchable,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
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
            <Ionicons name="person-circle-sharp" size={120} color="lightblue" />
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
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginBottom: "1%", fontSize: 15 }}>
                오늘 전체 진도율
              </Text>
              <Text
                style={{
                  marginBottom: "1%",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginLeft: "5%",
                }}
              >
                85%
              </Text>
            </View>
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
            // padding: "5%",
            borderWidth: 2,
            borderRadius: 7,
            borderColor: "#D6D6D6",
          }}
        >
          {/* 위에꺼 전체 */}
          <View style={{ flexDirection: "row", padding: "5%" }}>
            {/* 햄버거아이콘 빼고*/}
            <View style={{ flex: 9, flexDirection: "column" }}>
              <Text>2021년 2월 5일</Text>
              <Text
                style={{ fontSize: 19, fontWeight: "bold", paddingTop: "1%" }}
              >
                신장운동
              </Text>
            </View>
            {/* 햄버거 아이콘 */}
            <View style={{ flex: 1 }}>
              <Entypo name="dots-three-vertical" size={24} color="#595959" />
            </View>
          </View>
          {/* 여기부터 아래 */}
          <View style={{ flexDirection: "row", paddingBottom: "5%" }}>
            <View style={styles.bordertext}>
              <Text style={styles.successtext}>완료</Text>
              <View style={styles.numView}>
                <Text style={styles.numtext}>0</Text>
                <Text style={styles.gaetext}>개</Text>
              </View>
            </View>
            <View style={styles.bordertext}>
              <Text style={styles.successtext}>진행중</Text>
              <View style={styles.numView}>
                <Text style={styles.numtext}>1</Text>
                <Text style={styles.gaetext}>개</Text>
              </View>
            </View>
            <View
              style={{ flex: 2, flexDirection: "column", alignItems: "center" }}
            >
              <Text style={styles.successtext}>미실시</Text>
              <View style={styles.numView}>
                <Text style={styles.numtext}>6</Text>
                <Text style={styles.gaetext}>개</Text>
              </View>
            </View>
          </View>
        </View>
        {/* 여기까지 view2/3 */}
        {/* 여기부터 view3/3 */}

        <View styel={styles.threeView}>
          <ScrollView
            contentContainerStyle={{
              paddingTop: "3%",
              flexGrow: 1,
              flexDirection: "column",
              justifyContent: "space-between",
              paddingBottom: "5%",
              paddingHorizontal: "2%",
            }}
          >
            <View style={{ marginBottom: "3%" }}>
              <Text style={styles.movetitletext}>진행중</Text>
              <Text style={styles.movetext}>날개뼈모으기</Text>
              <Text style={styles.movetext}>여기에 프로그레스 바</Text>
            </View>
            <View>
              <Text style={styles.movetitletext}>미실시 운동</Text>
              <Text style={styles.movetext}>몸쪽 앞쪽 근육</Text>
              <Text style={styles.movetext}>운동회전 근육 스트레칭</Text>
              <Text style={styles.movetext}>몸통 스트레칭 1단계</Text>
              <Text style={styles.movetext}>몸통 스트레칭 2단계</Text>
              <Text style={styles.movetext}>몸쪽 앞쪽 근육</Text>
              <Text style={styles.movetext}>운동회전 근육 스트레칭</Text>
              <Text style={styles.movetext}>몸통 스트레칭 1단계</Text>
              <Text style={styles.movetext}>몸통 스트레칭 2단계</Text>
            </View>
          </ScrollView>
        </View>
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
  threeView: {
    // padding:30,
    marginTop: 10,
    marginBottom: 230,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
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
    borderColor: "#EAEAEA",
  },
  movetext: {
    fontSize: 17,
    marginBottom: "3%",
    color: "#484848",
  },
  movetitletext: { fontSize: 17, fontWeight: "bold", marginBottom: "1.5%" },
  successtext: {
    fontSize: 17,
  },
  numtext: {
    fontSize: 21,
  },
  gaetext: { fontSize: 16 },
  numView: {
    flexDirection: "row",
    alignItems: "flex-end",
    alignContent: "space-between",
    marginTop: "7%",
  },
});
