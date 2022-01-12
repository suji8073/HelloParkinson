import React, { Component } from "react";
import {
  View,
  Text,
  Alert,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default class passwchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_pw: "",
    };
  }
  render() {
    let profile_svg = require("../icon/snuh.png");
    return (
      <View style={styles.finalView}>
        <StatusBar backgroundColor="#D6D6D6" barStyle="dark-content" />
        <View style={styles.menu1View}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("TabNavigation");
            }}
          >
            <AntDesign name="left" size={24} color="#808080" />
          </TouchableOpacity>
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>프로필 편집</Text>
          <View style={styles.margin}></View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("비밀번호가 정상적으로 변경되었습니다.");
              this.props.navigation.navigate("TabNavigation");
            }}
          >
            <AntDesign name="check" size={24} color="#5CB405" />
          </TouchableOpacity>
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
            style={{ height: 105, width: 110, marginBottom: "3%" }}
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
              <Text style={styles.answerText}>서울대학교 의료진</Text>
            </View>
          </View>
          {/* 한줄 끝 */}
          {/* 두번째줄 뷰 */}
          <View style={styles.menuanswerView}>
            <View style={styles.menuView}>
              <Text style={styles.menuText}>아이디</Text>
            </View>
            <View style={styles.answerView}>
              <Text style={styles.answerText}>seoul1234</Text>
            </View>
          </View>
          {/* 두번째줄 끝 */}
          {/* 세번째줄 뷰 */}
          <View style={styles.menuanswerView}>
            <View style={styles.menuView}>
              <Text style={styles.menuText}>기존 비밀번호</Text>
            </View>
            <View style={styles.answerView}>
              <Text style={styles.answerText1}>*********</Text>
            </View>
          </View>
          {/* 세번째줄 끝 */}
          {/* 네번째줄 뷰 */}
          <View style={styles.menuanswerView}>
            <View style={styles.menuView}>
              <Text style={styles.menuText}>새로운 비밀번호</Text>
            </View>
            <View style={styles.answerView}>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => {
                  this.setState({ user_pw: text });
                }}
                placeholder="(미 입력시 기존 비밀번호 유지)"
              />
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
  textInput: {
    fontSize: 17,
    color: "#858585",
  },
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
    marginTop: "10%",
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
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
