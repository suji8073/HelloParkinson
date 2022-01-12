//App.js
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { Component } from "react";
import "react-native-gesture-handler";

import { WithLocalSvg } from "react-native-svg";

import logosvg from "../icon/logo.svg";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
    };
  }
  // componentDidMount() {
  // userName, userId, userPw 불러오기
  //   const userData = await AsyncStorage.getItem("userData");
  //   this.setState({ id: userData.userId, pw: userData.userPw });
  //   login_check();
  // }
  login_check = () => {
    console.log("아이디: " + this.state.id);
    console.log("비밀번호: " + this.state.pw);

    if (this.state.id !== "" || this.state.pw !== "") {
      console.log("들어갔는지 확인!");
      try {
        fetch("http://152.70.233.113/chamlogin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: this.state.id,
            pw: this.state.pw,
          }),
        })
          .then((res) => res.json())
          .catch((error) => {
            // TODO FIXME replace the red screen with something informative.
            console.error(error);
            Alert.alert(
              // 모든 정보가 다 기입되지 않았을 때
              "아이디 또는 비밀번호가 일치하지 않습니다."
            );
          })
          .then((json) => {
            console.log("로그인 통신 확인");
            if (json.admin == 0) {
              // 환자
              console.log("로그인 통신 확인");
              this.props.navigation.navigate("TabNavigation1", {
                paramName1: this.state.id,
              });
            } else if (json.admin == 1) {
              // 관리자
              this.props.navigation.navigate("TabNavigation", {
                paramName1: "name",
              });
            } else {
              Alert.alert(
                // 모든 정보가 다 기입되지 않았을 때
                "아이디 또는 비밀번호가 일치하지 않습니다."
              );
            }
          });
      } catch (e) {
        console.log(e.message);
      }
    } else {
      Alert.alert(
        // 모든 정보가 다 기입되지 않았을 때
        "아이디와 비밀번호를 정확하게 입력해주세요."
      );
    }
  };
  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.NoneView}></View>

        <View style={styles.firstView}>
          <WithLocalSvg
            width={80}
            height={80}
            asset={logosvg}
            style={{ margin: "3%" }}
          />

          <Text style={styles.titleText}>
            {"안녕하세요.\n헬로우 파킨슨 입니다."}
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
              onChangeText={(text) => {
                this.setState({ id: text });
              }}
            />
          </View>
          <View style={styles.buttonwhite}>
            <TextInput
              secureTextEntry={true}
              style={styles.textInput}
              placeholder="비밀번호"
              onChangeText={(text) => {
                this.setState({ pw: text });
              }}
            />
          </View>

          <TouchableOpacity
            style={styles.buttongreen}
            activeOpacity={0.8}
            onPress={this.login_check}
          >
            <Text style={styles.green}> 로그인하기 </Text>
          </TouchableOpacity>

          <View style={styles.thirdView}>
            <Text style={styles.secondText1}> 계정이 없으신가요?</Text>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("signup1");
              }}
            >
              <Text style={styles.secondText2}> 회원가입 하기.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  NoneView: {
    flex: 1,
  },
  firstView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 4,
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
    color: "#000000",
    marginLeft: "5%",
    height: "100%",
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
    marginTop: "1%",
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
