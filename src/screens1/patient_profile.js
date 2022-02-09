import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import AsyncStorage from "@react-native-async-storage/async-storage";


export default class patient_profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birth: 0,
      gender: "",
      memo: "",
      team: "",
      name: "",
      UID: "",
    };
  }

  user_info = (user_token) => {
    fetch("http://hccparkinson.duckdns.org:19737/chamuser", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + user_token.slice(1, -1),
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          birth: json.data[0].birthday,
          gender: json.data[0].gender == "F" ? "여" : "남",
          memo: json.data[0].memo,
          team: json.data[0].team,
          name: json.data[0].uname,
          UID: json.data[0].uid,
        });
      });
  };

  async componentDidMount() {
    const user_token = await AsyncStorage.getItem("@user_token");
    
    this.user_info(user_token);
  }

  logout = () => {
    Alert.alert("로그아웃 하시겠습니까?", "", [
      {
        text: "취 소",
        style: "cancel",
      },
      {
        cancelable: true,
        text: "로그아웃",
        onPress: () => {
          this.props.navigation.navigate("login");
        },
      },
    ]);
  };

  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.menuView}>
          <AntDesign
            name="left"
            style={{ fontSize: responsiveScreenFontSize(3) }}
            color="#808080"
            onPress={() => {
              this.props.navigation.navigate("TabNavigation1");
            }}
          />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>프로필</Text>
          <View style={styles.margin}></View>
          <MaterialIcons
            name="logout"
            style={{ fontSize: responsiveScreenFontSize(3) }}
            color="#808080"
            onPress={() => {
              this.logout();
            }}
          />
        </View>

        <View style={styles.firstView}>
          <Ionicons
            name="person-circle-sharp"
            style={{ fontSize: responsiveScreenFontSize(20) }}
            color="lightblue"
            alignItems="center"
          />
        </View>

        <View style={styles.secondView}>
          <View style={styles.memoView}>
            <Text style={styles.text1}>이름</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text2}>{this.state.name}</Text>
          </View>
        </View>

        <View style={styles.secondView}>
          <View style={styles.memoView}>
            <Text style={styles.text1}>아이디</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text2}>{this.state.UID}</Text>
          </View>
        </View>

        <View style={styles.secondView}>
          <View style={styles.memoView}>
            <Text style={styles.text1}>비밀번호</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text2}>******</Text>
          </View>
        </View>

        <View style={styles.secondView}>
          <View style={styles.memoView}>
            <Text style={styles.text1}>생년월일</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text2}>
              {parseInt(this.state.birth / 10000)}-
              {String(this.state.birth).substring(4, 6)}-
              {String(this.state.birth).substring(6, 8)}
            </Text>
          </View>
        </View>

        <View style={styles.secondView}>
          <View style={styles.memoView}>
            <Text style={styles.text1}>성별</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text2}>{this.state.gender}</Text>
          </View>
        </View>

        <View style={styles.threeView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              this.props.navigation.navigate("patient_profile_edit");
            }}
          >
            <Text style={styles.user_name}>정보 수정하기</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.marginView}></View>
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
  text1: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2),
    color: "#484848",
    justifyContent: "center",
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

  firstView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5.1%",
    marginBottom: "10.3%",
    backgroundColor: "#FFFFFF",
  },

  secondView: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: "7%",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
  },

  threeView: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: "9%",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
    paddingLeft: "7%",
  },

  marginView: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1.5,
    backgroundColor: "#FFFFFF",
  },

  margin: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },

  memoView: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: "8%",
    flex: 1,
  },

  textView: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 2,
  },

  text2: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2),
    color: "#484848",
    justifyContent: "center",
  },

  user_name: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2),
    color: "#59A60B",
    fontWeight: "bold",
    justifyContent: "center",
  },

  user_age: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2),
    color: "#747474",
    justifyContent: "center",
  },
});
