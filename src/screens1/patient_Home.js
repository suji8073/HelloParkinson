import React, { Component } from "react";
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { WithLocalSvg } from "react-native-svg";
import Task5 from "../screens1/task_home";

import firstsvg from "../icon/first.svg";
import secondsvg from "../icon/second.svg";
import thirdsvg from "../icon/third.svg";
import crownsvg from "../icon/crown.svg";

import Context from "../Context/context";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGFtIiwiUm9sZXMiOlsiUk9MRV9VU0VSIl0sImlzcyI6IkhDQyBMYWIiLCJpYXQiOjE2NDQwNjU1MzYsImV4cCI6MTY0NDY3MDMzNn0.mnbGyKlMHvwdVFQJRPmgTxMGB966ITczMTA_p4E4lWSRb2DYoOlwW1mrPGapPRkf6h4hyZIIUgfrs1yIqInOJg"
);

export default class patient_Home extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      User_name: "",
    };
  }

  componentDidMount() {
    this.userfunc();
    this.findname();
  }
  userfunc = () => {
    fetch("http://152.70.233.113/chamuser?sort=prog", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState(
          {
            data: json,
          }
          // 랭킹 참여하는 사람만 필터링
          // ,() => {
          //   let res = this.state.data.filter((it) => it.ranking === 1);
          //   this.setState({ data: res });
          // }
        );
      });
  };

  findname = () => {
    fetch("http://152.70.233.113/chamuser/uid/" + this.context.user_id, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          User_name: json.info.name,
        });
        this.context.changeNAME(json.info.name);
      });
  };

  render() {
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

        <View style={styles.secondView}>
          {/* 환자 1~3 */}
          <View
            style={{
              marginRight: "6.8%",
              marginLeft: "6.8%",
              marginTop: "4%",
              height: responsiveScreenHeight(22),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignContent: "flex-end",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: "7%",
                  margin: "1%",
                }}
              >
                <View
                  style={{
                    borderRadius: 400 / 2,
                    borderColor: "#C4C4C4",
                    borderWidth: 7.5,
                  }}
                >
                  <Image
                    source={require("../image/i1.png")}
                    style={{
                      height: responsiveScreenHeight(11),
                      width: responsiveScreenWidth(19),
                      borderRadius: 300 / 2,
                    }}
                  />
                </View>
                <WithLocalSvg
                  style={{ top: "80%", position: "absolute" }}
                  width={responsiveScreenWidth(6.1)}
                  height={responsiveScreenHeight(3.4)}
                  asset={secondsvg}
                />
                <Text style={styles.prizetext}>김인자[89%]</Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "1%",
                }}
              >
                <WithLocalSvg
                  width={responsiveScreenWidth(14)}
                  height={responsiveScreenHeight(4)}
                  asset={crownsvg}
                  style={{ top: "-20%", position: "absolute" }}
                />
                <View
                  style={{
                    borderRadius: 400 / 2,
                    borderColor: "#F8D500",
                    borderWidth: 7.5,
                  }}
                >
                  <Image
                    source={require("../image/i2.png")}
                    style={{
                      height: responsiveScreenHeight(11),
                      width: responsiveScreenWidth(19),
                      borderRadius: 400 / 2,
                    }}
                  />
                </View>
                <WithLocalSvg
                  style={{ top: "80%", position: "absolute" }}
                  width={responsiveScreenWidth(6.1)}
                  height={responsiveScreenHeight(3.4)}
                  asset={firstsvg}
                />
                <Text style={styles.prizetext}>오석형[98%]</Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: "7%",
                  margin: "1%",
                }}
              >
                <View
                  style={{
                    borderRadius: 400 / 2,
                    borderColor: "#DA9B73",
                    borderWidth: 7.5,
                  }}
                >
                  <Image
                    source={require("../image/i3.png")}
                    style={{
                      height: responsiveScreenHeight(11),
                      width: responsiveScreenWidth(19),
                      borderRadius: 400 / 2,
                    }}
                  />
                </View>
                <WithLocalSvg
                  style={{ top: "80%", position: "absolute" }}
                  width={responsiveScreenWidth(6.1)}
                  height={responsiveScreenHeight(3.4)}
                  asset={thirdsvg}
                />
                <Text style={styles.prizetext}>정상철[67%]</Text>
              </View>
            </View>
          </View>
          {/* 환자 순위 4~ */}

          <FlatList
            style={{
              backgroundColor: "#ffffff",
              marginTop: "2.6%",
              marginLeft: "4.7%",
              marginRight: "4.7%",
              borderRadius: 7,
              marginBottom: "100%",
            }}
            data={this.state.data.slice(3)}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <Task5
                  record={index + 4}
                  name={item.name}
                  age={item.birth}
                  sex={item.gender}
                  check={this.state.User_name}
                ></Task5>
              );
            }}
          />
        </View>
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
    backgroundColor: "#F8F8F8",
  },

  prizetext: {
    position: "absolute",
    bottom: "-30%",
    fontSize: responsiveScreenFontSize(1.52),
    fontWeight: "bold",
  },
});
