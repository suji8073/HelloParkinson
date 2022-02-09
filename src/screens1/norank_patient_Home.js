import React, { Component } from "react";
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { WithLocalSvg } from "react-native-svg";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import fignthingsvg from "../icon/fighting.svg";

import backgroud_image from "../icon/background_image2.svg";
import Context from "../Context/context";

export default class norank_patient_Home extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      week_prog: [
        { day: "월", day_prog: 10 },
        { day: "화", day_prog: 10 },
        { day: "수", day_prog: 10 },
        { day: "목", day_prog: 10 },
        { day: "금", day_prog: 10 },
        { day: "토", day_prog: 10 },
        { day: "일", day_prog: 10 },
      ],
      User_name: "",
      progress: 98,
    };
  }

  async componentDidMount() {
    const user_token = await AsyncStorage.getItem("@user_token");

    // 환자 총 진도율 가져오는 API
    this.userfunc(user_token);
    this.findname(user_token);
  }
  userfunc = (user_token) => {
    fetch("http://152.70.233.113/chamuser?sort=prog", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + user_token.slice(1, -1),
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  };

  findname = (user_token) => {
    fetch("http://152.70.233.113/chamuser/uid/" + this.context.user_id, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + user_token.slice(1, -1),
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          User_name: json.info.name,
        });
        // this.context.changeNAME(json.info.name);
      });
  };

  render() {
    // let backgroud_image = require("../icon/backgroud.png");
    return (
      <View style={styles.finalView}>
        <View style={styles.menuView}>
          <Ionicons
            name="person-circle-sharp"
            style={{ fontSize: responsiveScreenFontSize(5) }}
            color="#ffffff"
          />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>헬로우 파킨슨</Text>
          <View style={styles.margin}></View>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("patient_profile");
            }}
          >
            <Ionicons
              name="person-circle-sharp"
              style={{ fontSize: responsiveScreenFontSize(5) }}
              color="#5CB405"
            />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.secondView}>
          <WithLocalSvg
            style={{ left: "-39%", position: "absolute", borderWidth: 1 }}
            width={responsiveScreenHeight(100)}
            height={responsiveScreenHeight(100)}
            asset={backgroud_image}
          />
          <View style={{ paddingTop: "10%", paddingHorizontal: "5%" }}>
            <Text style={styles.nametext}>
              {this.context.user_name}님{"  "}
              <Text
                style={{
                  fontSize: responsiveScreenFontSize(2.48),
                }}
              >
                오늘 운동을{"  "}
                <Text style={styles.progtext}>{this.state.progress} %</Text>
              </Text>
            </Text>
            <Text
              style={{
                color: "#000000",
                fontWeight: "bold",
                fontSize: responsiveScreenFontSize(2.48),
                marginBottom: "5%",
              }}
            >
              완료하셨어요!
            </Text>
            <Text style={styles.menttext}>
              {this.state.progress == 100
                ? "오늘의 운동을 모두 완료하셨습니다!"
                : "오늘의 운동을 모두 마무리해보세요!"}
            </Text>
          </View>
          {/* 환자 1~3 */}
          <View
            style={{
              alignItems: "flex-end",
              paddingRight: "4%",
              paddingTop: "3%",
            }}
          >
            <WithLocalSvg
              width={responsiveScreenWidth(19.7)}
              height={responsiveScreenHeight(11)}
              asset={fignthingsvg}
            />
          </View>
          <View
            style={{
              backgroundColor: "#569D10",
              borderRadius: 20,
              marginLeft: " 5.8%",
              marginRight: " 5.8%",
              marginBottom: "6.7%",
            }}
          >
            <View
              style={{
                paddingTop: "7%",
                paddingBottom: "5%",
                paddingHorizontal: "3%",
              }}
            >
              <View
                style={{
                  borderBottomColor: "#FFFFFF",
                  borderBottomWidth: 1,
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  paddingBottom: "3%",
                  marginBottom: "4%",
                }}
              >
                <Text style={styles.whitetext}>
                  파킨슨병 환자의{" "}
                  <Text
                    style={{
                      fontSize: responsiveScreenFontSize(2),
                    }}
                  >
                    건강한 일상생활
                  </Text>
                  을 위한 주의사항
                </Text>
              </View>

              <View>
                <Text style={styles.whitesmalltext}>
                  ▶ 지금까지 해왔던 일상생활과 일을 계속해서 이어간다.
                </Text>

                <Text style={styles.whitesmalltext}>
                  ▶ 편하고 즐거운 마음가짐을 갖도록 노력한다.
                </Text>

                <Text style={styles.whitesmalltext}>
                  ▶ 가족 혹은 친구들과 어울리는 사회활동을 지속한다.
                </Text>

                <Text style={styles.whitesmalltext}>
                  ▶ 운동을 규칙적으로 꾸준히 한다.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  finalView: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    backgroundColor: "#FFFFFF",
  },
  menuView: {
    marginTop: "5.1%",
    backgroundColor: "#FFFFFF",
    height: "8.5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomWidth: 1.8,
    borderColor: "#E5E5E5",
    paddingRight: "5%",
    paddingLeft: "5%",
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2.48),
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },

  margin: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },

  secondView: {
    paddingTop: "1.8%",
    flexDirection: "column",
    height: responsiveScreenHeight(70),
    backgroundColor: "#F8F8F8",
    marginBottom: "39%",
  },
  image: {
    width: "10%",
    height: "10%",
  },
  prizetext: {
    position: "absolute",
    bottom: "-30%",
    fontSize: responsiveScreenFontSize(2),
    fontWeight: "bold",
  },
  nametext: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: responsiveScreenFontSize(3),
    marginVertical: "1%",
  },
  progtext: {
    color: "#5CB405",
    fontWeight: "bold",
    fontSize: responsiveScreenFontSize(3),
  },
  menttext: {
    marginBottom: "5%",
    fontSize: responsiveScreenFontSize(1.76),
    fontWeight: "600",
  },
  whitetext: {
    color: "#FFFFFF",
    fontSize: responsiveScreenFontSize(1.76),
    fontWeight: "500",
    marginBottom: "3%",
  },
  whitesmalltext: {
    color: "#FFFFFF",
    fontSize: responsiveScreenFontSize(1.64),
    fontWeight: "400",
    marginVertical: "3%",
    paddingLeft: "3%",
  },
});
