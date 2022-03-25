import React, { Component } from "react";

import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import nocheck from "../icon/silver.svg";
import check from "../icon/checkgreen.svg";
import { WithLocalSvg } from "react-native-svg";

export default class siginup1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onname1: nocheck,
      onname2: nocheck,
      onname3: nocheck,
    };
  }

  handleClick1 = () => {
    if (this.state.onname1 === nocheck) {
      this.setState({ onname1: check, onname2: check, onname3: check });
    } else {
      this.setState({ onname1: nocheck, onname2: nocheck, onname3: nocheck });
    }
  };
  handleClick2 = () => {
    if (this.state.onname2 === nocheck && this.state.onname3 === check) {
      this.setState({ onname2: check, onname1: check });
    } else if (this.state.onname1 === check && this.state.onname2 === check) {
      this.setState({ onname2: nocheck, onname1: nocheck });
    } else if (this.state.onname2 === nocheck) {
      this.setState({ onname2: check });
    } else {
      this.setState({ onname2: nocheck });
    }
  };
  handleClick3 = () => {
    if (this.state.onname3 === nocheck && this.state.onname2 === check) {
      this.setState({ onname3: check, onname1: check });
    } else if (this.state.onname1 === check && this.state.onname3 === check) {
      this.setState({ onname3: nocheck, onname1: nocheck });
    } else if (this.state.onname3 === nocheck) {
      this.setState({ onname3: check });
    } else {
      this.setState({ onname3: nocheck });
    }
  };
  check_click = () => {
    if (
      this.state.onname1 === check &&
      this.state.onname2 === check &&
      this.state.onname3 === check
    ) {
      this.props.navigation.navigate("signup4");
    } else {
      Alert.alert("약관을 모두 동의해주세요.");
    }
  };

  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.settingView}>
          <TouchableOpacity
            activeOpacity={0.8}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            onPress={() => {
              this.props.navigation.navigate("login");
            }}
          >
            <View>
              <AntDesign
                name="left"
                style={{ fontSize: responsiveScreenFontSize(3) }}
                color="#CACACA"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.titleText}>
            파킨슨 운동일기가 처음이시군요.{"\n"}
            <Text style={styles.point}>약관내용에 동의</Text>해주세요.
          </Text>
        </View>

        <View style={styles.groupa}>
          <View style={styles.group}>
            <TouchableOpacity onPress={this.handleClick1}>
              <WithLocalSvg
                width={responsiveScreenWidth(6.1)}
                height={responsiveScreenHeight(3.4)}
                asset={this.state.onname1}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleClick1}>
              <Text style={styles.MText}> 약관 전체 동의 </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.line}></View>

          <View style={styles.MainView}>
            <View style={styles.group}>
              <TouchableOpacity onPress={this.handleClick2}>
                <WithLocalSvg
                  width={responsiveScreenWidth(6.1)}
                  height={responsiveScreenHeight(3.4)}
                  asset={this.state.onname2}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleClick2}>
                <Text style={styles.SText}> 이용약관 동의 (필수) </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              onPress={() => {
                this.props.navigation.navigate("signup2");
              }}
            >
              <AntDesign
                name="right"
                style={{ fontSize: responsiveScreenFontSize(3) }}
                color="#CACACA"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.MainView}>
            <View style={styles.group}>
              <TouchableOpacity onPress={this.handleClick3}>
                <WithLocalSvg
                  width={responsiveScreenWidth(6.1)}
                  height={responsiveScreenHeight(3.4)}
                  asset={this.state.onname3}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleClick3}>
                <Text style={styles.SText}>
                  개인정보 수집 및 이용 동의 (필수)
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              onPress={() => {
                this.props.navigation.navigate("signup3");
              }}
            >
              <AntDesign
                name="right"
                style={{ fontSize: responsiveScreenFontSize(3) }}
                color="#CACACA"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.chatControl}>
          <TouchableOpacity
            style={styles.sendButton}
            activeOpacity={0.8}
            onPress={this.check_click}
          >
            <Text style={styles.white}> 다 음 </Text>
          </TouchableOpacity>
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
  settingView: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: "4.7%",
    marginTop: "5.3%",
  },
  titleText: {
    fontSize: responsiveScreenFontSize(3.2),
    fontWeight: "bold",
    color: "#000000",
    lineHeight: responsiveScreenFontSize(5),
    marginLeft: "5.2%",
    marginTop: "5.3%",
  },
  point: {
    alignSelf: "flex-start",
    fontSize: responsiveScreenFontSize(3.2),
    fontWeight: "bold",
    color: "#7AC819",
  },
  group: {
    flexDirection: "row",
    alignItems: "center",
  },
  groupa: {
    marginLeft: "4.7%",
    marginRight: "4.7%",
    marginTop: "52.7%",
  },

  line: {
    borderBottomWidth: 2,
    borderColor: "#E5E5E5",
    marginTop: "3.1%",
    marginBottom: "2.6%",
  },

  MainView: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "5%",
  },

  MText: {
    fontSize: responsiveScreenFontSize(2.48),
    fontWeight: "bold",
    color: "#1E1E1E",
    marginLeft: "3.3%",
  },
  SText: {
    fontSize: responsiveScreenFontSize(2.24),
    justifyContent: "flex-start",
    color: "#1E1E1E",
    marginLeft: "3.3%",
  },

  white: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  sendButton: {
    backgroundColor: "#7AC819",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  chatControl: {
    height: responsiveScreenHeight(6.8),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "4.7%",
    marginRight: "4.7%",
    marginTop: "7%",
  },
});
