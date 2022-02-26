import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { WithLocalSvg } from "react-native-svg";
import Task5 from "../screens1/task_home";

import firstsvg from "../icon/first.svg";
import secondsvg from "../icon/second.svg";
import thirdsvg from "../icon/third.svg";
import crownsvg from "../icon/crown.svg";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import AsyncStorage from "@react-native-async-storage/async-storage";

import p1 from "../image/p1.png";
import p2 from "../image/p2.png";
import p3 from "../image/p3.png";
import p4 from "../image/p4.png";
import p5 from "../image/p5.png";
import p6 from "../image/p6.png";
import p7 from "../image/p7.png";
import p8 from "../image/p8.png";
import p9 from "../image/p9.png";
import p_1 from "../image/p-1.png";
import TabNavigation from "../navigations/Tab1";
export default class patient_Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      first: [],
      second: [],
      third: [],
      User_name: "",
    };
  }

  async componentDidMount() {
    console.log(TabNavigation.name);
    const user_token = await AsyncStorage.getItem("@user_token");
    const user_data = await AsyncStorage.getItem("@user_data");
    this.setState({ User_name: JSON.parse(user_data).name });
    this.userfunc(user_token);
  }

  userfunc = (user_token) => {
    fetch("http://hccparkinson.duckdns.org:19737/progress/rank", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + user_token.slice(1, -1),
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json.data,
          first: json.data[0],
          second: json.data[1],
          third: json.data[2],
        });
      });
  };
  profile = (pic) => {
    if (pic === "-1") {
      console.log("-1임");
      return p_1;
    } else if (pic === "1") {
      console.log("1임");
      return p1;
    } else if (pic === "2") {
      console.log("2임");
      return p2;
    } else if (pic === "3") {
      console.log("3임");
      return p3;
    } else if (pic === "4") {
      console.log("4임");
      return p4;
    } else if (pic === "5") {
      console.log("5임");
      return p5;
    } else if (pic === "6") {
      console.log("6임");
      return p6;
    } else if (pic === "7") {
      console.log("7임");
      return p7;
    } else if (pic === "8") {
      console.log("8임");
      return p8;
    } else if (pic === "9") {
      console.log("9임");
      return p9;
    }
  };
  render() {
    return (
      <View style={styles.finalView}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <View style={styles.menuView}>
          <Ionicons
            name="person-circle-sharp"
            style={{ fontSize: responsiveScreenFontSize(5) }}
            color="#ffffff"
          />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>파킨슨 운동일기</Text>
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
                    source={this.profile(this.state.second["profilepic"])}
                    style={{
                      height: responsiveScreenHeight(9),
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
                <Text
                  style={
                    this.state.second["uname"] === this.state.User_name
                      ? styles.prizetext_f
                      : styles.prizetext
                  }
                >
                  {this.state.second == null
                    ? " "
                    : String(this.state.second["uname"]) +
                      " [" +
                      String(this.state.second["percent"]).substring(0, 3) +
                      "%]"}
                </Text>
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
                    source={this.profile(this.state.second["profilepic"])}
                    style={{
                      height: responsiveScreenHeight(9),
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
                <Text
                  style={
                    this.state.first["uname"] == this.state.User_name
                      ? styles.prizetext_f
                      : styles.prizetext
                  }
                >
                  {this.state.first["uname"]} [
                  {String(this.state.first["percent"]).substring(0, 3)}%]
                </Text>
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
                    source={this.profile(this.state.second["profilepic"])}
                    style={{
                      height: responsiveScreenHeight(9),
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
                <Text
                  style={
                    this.state.third["uname"] == this.state.User_name
                      ? styles.prizetext_f
                      : styles.prizetext
                  }
                >
                  {this.state.third == null
                    ? " "
                    : String(this.state.third["uname"]) +
                      " [" +
                      String(this.state.third["percent"]).substring(0, 4) +
                      "%]"}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.threeView}>
            <FlatList
              style={{
                backgroundColor: "#ffffff",
                marginTop: "2.6%",
                marginLeft: "4.7%",
                marginRight: "4.7%",
                borderRadius: 7,
                marginBottom: responsiveScreenHeight(2),
              }}
              data={this.state.data.slice(3)}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {
                return (
                  <Task5
                    record={index + 4}
                    name={item.uname}
                    age={item.birthday}
                    sex={item.gender}
                    profilepic={item.profilepic}
                    check={this.state.User_name}
                  ></Task5>
                );
              }}
            />
          </View>
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

  threeView: {
    height: responsiveScreenHeight(45.7),
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

  prizetext_f: {
    position: "absolute",
    bottom: "-30%",
    fontSize: responsiveScreenFontSize(1.68),
    fontWeight: "bold",
    color: "#5CB405",
  },
});
