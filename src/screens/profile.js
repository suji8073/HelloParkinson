import React, { Component } from "react";
import {
  View,
  Text,
  Alert,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Context from "../Context/context";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default class profile extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
      name: "",
    };
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
    let profile_svg = require("../icon/snuh.png");
    return (
      <View style={styles.finalView}>
        <StatusBar backgroundColor="#D6D6D6" barStyle="dark-content" />
        <View style={styles.menu1View}>
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>관리자 프로필</Text>
          <View style={styles.margin}>
            <MaterialIcons
              name="logout"
              size={24}
              color="#808080"
              onPress={() => {
                this.logout();
              }}
            />
          </View>
        </View>
        {/* 아이콘과 관리자 이름 뷰 */}
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginTop: "8%",
          }}
        >
          <Image
            style={{ height: 105, width: 112, marginBottom: "3%" }}
            source={profile_svg}
          />
          <Text style={styles.titleText}>관리자</Text>
        </View>

        <View
          style={{
            borderTopWidth: 0.3,
            borderTopColor: "#DCDCDC",
            marginTop: "15%",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          {/* 한줄씩 뷰 */}
          <View style={styles.menuanswerView}>
            {/* 메뉴 뷰 */}
            <View style={styles.menuView}>
              <Text style={styles.menuText}>계정 이름</Text>
            </View>
            {/* 답 뷰 */}
            <View style={styles.answerView}>
              <Text style={styles.answerText}>{this.context.user_name}</Text>
            </View>
          </View>
          {/* 한줄 끝 */}
          {/* 두번째줄 뷰 */}
          <View style={styles.menuanswerView}>
            <View style={styles.menuView}>
              <Text style={styles.menuText}>아이디</Text>
            </View>
            <View style={styles.answerView}>
              <Text style={styles.answerText}>{this.context.user_id}</Text>
            </View>
          </View>
          {/* 두번째줄 끝 */}
          {/* 세번째줄 뷰 */}
          <View style={styles.menuanswerView}>
            <View style={styles.menuView}>
              <Text style={styles.menuText}>비밀번호</Text>
            </View>
            <View style={styles.answerView}>
              <Text style={styles.answerText}>{this.context.user_pw}</Text>
            </View>
          </View>
          {/* 세번째줄 끝 */}
        </View>
        {/* 비밀번호 변경기능 제거 */}
        {/* <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("passwchange");
          }}
        >
          <View
            style={{
              marginTop: "10%",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                marginLeft: "6%",
              }}
            >
              <Text
                style={{ color: "#59A60B", fontSize: 17, fontWeight: "bold" }}
              >
                비밀번호 변경하기
              </Text>
            </View>
          </View>
        </TouchableOpacity> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  menuText: {
    color: "#484848",
    justifyContent: "flex-start",
    fontSize: 17,
  },
  answerText: {
    color: "#000000",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontSize: 17,
  },
  answerText1: {
    color: "#858585",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontSize: 17,
  },
  menuView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "6%",
    marginTop: "4%",
    marginBottom: "4%",
    flex: 2,
  },
  answerView: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    flex: 3,
  },
  //한줄씩 뷰
  menuanswerView: {
    borderBottomWidth: 0.3,
    borderBottomColor: "#DCDCDC",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  titleText: {
    alignItems: "flex-start",
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: "5%",
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
  },

  menu1View: {
    marginTop: "3%",
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
    alignItems: "flex-end",
    justifyContent: "center",
    flex: 1,
  },
});
