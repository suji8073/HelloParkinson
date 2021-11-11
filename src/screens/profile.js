import React from "react";
import {
  View,
  Text,
  Button,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Directions } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

function profile({ navigation }) {
  return (
    <View style={styles.finalView}>
      <StatusBar backgroundColor="#D6D6D6" barStyle="dark-content" />
      <View style={styles.menu1View}>
        <View style={styles.margin}></View>
        <Text style={styles.titleText}>프로필</Text>
        <View style={styles.margin}></View>
      </View>
      {/* 아이콘과 관리자 이름 뷰 */}
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Ionicons name="person-circle-sharp" size={120} color="lightblue" />
        <Text style={styles.titleText}>관리자</Text>
      </View>
      {/* 프로필정보 뷰 */}
      {/* <View style={{ justifyContent: "flex-start" }}> */}
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: "#E5E5E5",
          marginTop: 10,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {/* 한줄씩 뷰 */}
        <View style={styles.menuanswerView}>
          {/* 메뉴 뷰 */}
          <View style={styles.menuView}>
            <Text style={styles.menuText}>계정이름</Text>
          </View>
          {/* 답 뷰 */}
          <View style={styles.answerView}>
            <Text style={styles.answerText}>서울대학교 의료진</Text>
          </View>
        </View>
        {/* 한줄 끝 */}
        {/* 두번째줄 뷰 */}
        <View style={styles.menuanswerView}>
          <View style={styles.menuView}>
            <Text style={styles.menuText}>아이디</Text>
          </View>
          <View style={styles.answerView}>
            <Text style={styles.answerText}>seoul1234</Text>
          </View>
        </View>
        {/* 두번째줄 끝 */}
        {/* 세번째줄 뷰 */}
        <View style={styles.menuanswerView}>
          <View style={styles.menuView}>
            <Text style={styles.menuText}>비밀번호</Text>
          </View>
          <View style={styles.answerView}>
            <Text style={styles.answerText}>*********</Text>
          </View>
        </View>
        {/* 세번째줄 끝 */}
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("passwchange");
        }}
      >
        <View style={{ marginTop: 10, marginLeft: 30 }}>
          <Text style={{ color: "#59A60B", fontSize: 17 }}>
            비밀번호 변경하기
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default profile;

const styles = StyleSheet.create({
  menuText: { color: "#484848", justifyContent: "flex-start", fontSize: 17 },
  answerText: {
    color: "#000000",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontSize: 17,
  },
  menuView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
  },
  answerView: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
  },
  //한줄씩 뷰
  menuanswerView: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: 21,
    paddingBottom: 20,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
  },

  finalView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  menu1View: {
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
