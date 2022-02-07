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

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import { WithLocalSvg } from "react-native-svg";

import logosvg from "../icon/logo.svg";
import Context from "../Context/context";

import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalState from "../Context/GlobalState";

export default class login extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
      name: "",
    };
  }

  componentDidMount() {
    this.setState(
      // 디바이스에서 값을 가져오는걸로 변경해야함
      // context값도 디바이스 값으로 변경하는 것으로
      { id: this.context.user_id, pw: this.context.user_pw },
      () => {
        this.login_check();
      }
    );

    console.log(this.context.user_token);
    // this.context.changeTOKEN("change");
  }
  login_check = () => {
    // console.log("아이디: " + this.state.id);
    // console.log("비밀번호: " + this.state.pw);
    // AsyncStorage.getItem("user_info", (err, result) => {
    //   if (result == null) {
    //     console.log("비어있음");
    //   } else {
    //     const UserInfo = JSON.parse(result);

    //     console.log("아이디 : " + UserInfo.u_id);
    //     console.log("비밀번호 : " + UserInfo.u_pw);
    //     console.log("이름 : " + UserInfo.u_name);
    //   }
    // }
    // );

    if (this.state.id !== "" || this.state.pw !== "") {
      console.log("들어갔는지 확인!");
      try {
        fetch("http://hccparkinson.duckdns.org:19737/chamlogin", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uid: this.state.id,
            password: this.state.pw,
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
            // console.log("로그인 통신 확인");
            console.log(json.data);
            if (json.data[0].manager == false) {
              if (json.data[0].ranking == 1) {
                this.props.navigation.navigate("TabNavigation1");
              } else {
                this.props.navigation.navigate("TabNavigation2", {});
              }

              // 환자
              // 아이디, 비밀번호 context변경 기능 필요
              // this.context.changeID(this.state.id);
              // this.context.changePW(this.state.pw);
              // Alert.alert(this.context.user_id);
              console.log("로그인 통신 확인");
            } else if (json.data[0].manager == true) {
              // 관리자
              // this.context.changeNAME(this.state.name)
              this.props.navigation.navigate("TabNavigation", {
                paramName1: "name",
                paramSetting: "abc",
                paramSetting2: "progress",
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
      <GlobalState>
        <View style={styles.finalView}>
          <View style={styles.NoneView}></View>

          <View style={styles.firstView}>
            <WithLocalSvg
              width={responsiveScreenWidth(17)}
              height={responsiveScreenHeight(10)}
              asset={logosvg}
            />

            <Text style={styles.titleText}>
              {"안녕하세요.\n헬로우 파킨슨 입니다."}
            </Text>

            <Text style={styles.twoText}>
              {"회원 서비스 이용을 위해 로그인 해주세요."}
            </Text>
          </View>

          <View style={styles.secondView}>
            <View style={styles.buttonwhite}>
              <TextInput
                placeholder="아이디"
                secureTextEntry={false}
                style={styles.textInput}
                value={this.state.id}
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
                value={this.state.pw}
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
      </GlobalState>
    );
  }
}
const styles = StyleSheet.create({
  finalView: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    backgroundColor: "#FFFFFF",
  },

  firstView: {
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    marginLeft: "4.7%",
    marginTop: "31.9%",
    marginRight: "7.5%",
  },
  secondView: {
    alignItems: "center",
    marginLeft: "4.7%",
    marginTop: "6.4%",
    marginRight: "5%",
    marginBottom: "8%",
    backgroundColor: "#FFFFFF",
  },

  thirdView: {
    marginTop: "4%",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    fontSize: responsiveScreenFontSize(2),
    color: "#2E2E2E",
  },
  textInput: {
    fontSize: responsiveScreenFontSize(2),
    color: "#000000",
    marginLeft: "5%",
    height: "100%",
  },
  green: {
    fontSize: responsiveScreenFontSize(2),
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(3.2),
    color: "#000000",
    fontWeight: "bold",
    lineHeight: responsiveScreenFontSize(5),
    marginTop: "4%",
  },
  twoText: {
    alignItems: "flex-start",
    marginTop: "3.4%",
    fontSize: responsiveScreenFontSize(2),
    color: "#2E2E2E",
  },
  secondText1: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(1.8),
    justifyContent: "center",
    fontWeight: "bold",
    color: "#838383",
  },
  secondText2: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(1.8),
    justifyContent: "center",
    fontWeight: "bold",
    color: "#2E2E2E",
  },
  buttonwhite: {
    justifyContent: "center",
    marginBottom: "2.5%",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: responsiveScreenHeight(6.8),
    borderWidth: 2,
    borderColor: "#E5E5E5",
  },
  buttongreen: {
    marginTop: "3.7%",
    backgroundColor: "#7AC819",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: responsiveScreenHeight(6.8),
  },
  logintext: {
    fontSize: responsiveScreenFontSize(2),
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
