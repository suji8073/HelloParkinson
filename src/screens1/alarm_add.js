import React, { Component } from "react";
import {
  TouchableOpacity,
  Alert,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";

import plussvg from "../icon/plus.svg";
import nosvg from "../icon/no.svg";
import { WithLocalSvg } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class alarm_add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apm: "",
      hour: "",
      minute: "",
    };
  }

  onPress_apm1 = () => {
    this.setState({ apm: "오전" });
  };

  onPress_apm2 = () => {
    this.setState({ apm: "오후" });
  };

  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.menuView}>
          <AntDesign
            name="left"
            size={24}
            color="#808080"
            onPress={() => {
              this.props.navigation.pop();
            }}
          />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>나의 운동 알림</Text>
          <View style={styles.margin}></View>
          <AntDesign name="left" size={24} color="#FFFFFF" />
        </View>

        <View style={styles.secondView}>
          <View style={{ flex: 0.1 }}></View>
          <View style={{ margin: "5%" }}>
            <View style={styles.firstView}>
              <View
                style={{
                  alignItems: "center",
                  borderRightWidth: 3,
                  borderColor: "#E0E0E0",
                  flex: 5,
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={this.onPress_apm1}
                >
                  <Text
                    style={
                      this.state.apm === "오전" ? styles.apm2 : styles.apm1
                    }
                  >
                    오 전
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 5, alignItems: "center" }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={this.onPress_apm2}
                >
                  <Text
                    style={
                      this.state.apm === "오후" ? styles.apm2 : styles.apm1
                    }
                  >
                    오 후
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: "3%",
                borderColor: "#E0E0E0",
                borderRadius: 6,
                borderWidth: 2,
                marginBottom: "5%",
                marginTop: "5%",
                backgroundColor: "#ffffff",
                height: "20%",
              }}
            >
              <View>
                <TextInput
                  style={styles.time1}
                  keyboardType="numeric"
                  onChangeText={(text) => {
                    this.setState({ user_age: text });
                  }}
                  placeholder="00"
                  placeholderTextColor="#000"
                />
              </View>
              <View>
                <Text style={styles.time1}>:</Text>
              </View>
              <View>
                <TextInput
                  style={styles.time1}
                  onChangeText={(text) => {
                    this.setState({ user_age: text });
                  }}
                  placeholder="00"
                  placeholderTextColor="#000"
                />
              </View>
            </View>

            <View style={{ flex: 1 }}></View>

            <View style={styles.threeview}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.pop();
                }}
              >
                <WithLocalSvg width={90} height={90} asset={nosvg} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert("추가되었습니다.");
                  this.props.navigation.pop();
                }}
              >
                <WithLocalSvg width={90} height={90} asset={plussvg} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  marginView: {
    flex: 1,
  },
  apm1: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#B5B5B5",
  },

  apm2: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#000000",
  },

  time1: {
    fontSize: 39,
    color: "#000000",
  },

  time2: {
    fontSize: 39,
    color: "#000000",
  },

  threeview: {
    padding: "3%",
    marginTop: "3%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },

  menuView: {
    backgroundColor: "#FFFFFF",
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: "3%",
    justifyContent: "flex-start",
    borderBottomWidth: 1.8,
    borderColor: "#E5E5E5",
  },
  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: 21,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },

  firstView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "3%",
    borderColor: "#E0E0E0",
    borderRadius: 6,
    borderWidth: 2,
    marginBottom: "4%",
    backgroundColor: "#ffffff",
    height: "15%",
  },
  secondView: {
    backgroundColor: "#F8F8F8",
    height: "100%",
  },

  text1View: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  margin1: {
    width: "90%",
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
  },
  text2: {
    fontSize: 23,
    fontWeight: "bold",
    borderColor: "#E0E0E0",
    color: "#B5B5B5",
  },
  text2_on: {
    fontSize: 23,
    fontWeight: "bold",
    borderColor: "#E0E0E0",
    color: "#000000",
  },
});
