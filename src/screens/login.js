//App.js
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { Component } from "react";
import "react-native-gesture-handler";

function login({ navigation }) {
  return (
    <View style={styles.finalView}>
      <View style={styles.NoneView}></View>

      <View style={styles.firstView}>
        <Text style={styles.titleText}>
          {"안녕하세요.\n굿나잇 파킨슨 입니다."}
        </Text>
        <Text style={styles.twoText}>
          {"\n회원 서비스 이용을 위해 로그인 해주세요"}
        </Text>
      </View>

      <View style={styles.secondView}>
        <View style={styles.buttonwhite}>
          <TextInput
            placeholder="아이디"
            secureTextEntry={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.buttonwhite}>
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholder="비밀번호"
          />
        </View>

        <TouchableOpacity
          style={styles.buttongreen}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("TabNavigation");
          }}
        >
          <Text style={styles.green}> 로그인하기 </Text>
        </TouchableOpacity>

        <View style={styles.thirdView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TabNavigation1");
            }}
          >
            <Text style={styles.secondText1}> 계정이 없으신가요?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("signup1");
            }}
          >
            <Text style={styles.secondText2}> 회원가입 하기.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  NoneView: {
    flex: 2,
  },
  firstView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 3,
    backgroundColor: "#FFFFFF",
  },
  secondView: {
    // padding:30,
    alignItems: "center",
    flex: 5,
    backgroundColor: "#FFFFFF",
  },
  thirdView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    fontSize: 17,
    color: "#2E2E2E",
  },
  textInput: {
    fontSize: 17,
    color: "#AFAFAF",
    marginLeft: "5%",
  },
  green: {
    fontSize: 17,
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: 27,
    color: "#000000",
    fontWeight: "bold",
    lineHeight: 40,
  },
  twoText: {
    alignItems: "flex-start",
    fontSize: 17,
    color: "#2E2E2E",
  },
  secondText1: {
    alignItems: "flex-start",
    fontSize: 15,
    justifyContent: "center",
    fontWeight: "bold",
    color: "#838383",
  },
  secondText2: {
    alignItems: "flex-start",
    fontSize: 15,
    justifyContent: "center",
    fontWeight: "bold",
    color: "#2E2E2E",
  },
  buttonwhite: {
    justifyContent: "center",
    margin: "3%",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 50,
    borderWidth: 2,
    borderColor: "#E5E5E5",
  },
  buttongreen: {
    margin: "10%",
    backgroundColor: "#7AC819",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "15%",
  },
  logintext: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default login;
