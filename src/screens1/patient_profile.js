import React, { Component } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  BackHandler,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

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
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import AsyncStorage from "@react-native-async-storage/async-storage";

const clear = async () => {
  try {
    await AsyncStorage.clear();
    console.log("logout");
  } catch (e) {
    // saving error
    console.log("token_error");
    console.log(e);
  }
};

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
      profilepic: "",
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
          profilepic: json.data[0].profilepic,
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
          clear();
          this.props.navigation.navigate("login");
        },
      },
    ]);
  };
  profile = () => {
    if (this.state.profilepic === "-1") {
      return p_1;
    } else if (this.state.profilepic === "1") {
      return p1;
    } else if (this.state.profilepic === "2") {
      return p2;
    } else if (this.state.profilepic === "3") {
      return p3;
    } else if (this.state.profilepic === "4") {
      return p4;
    } else if (this.state.profilepic === "5") {
      return p5;
    } else if (this.state.profilepic === "6") {
      return p6;
    } else if (this.state.profilepic === "7") {
      return p7;
    } else if (this.state.profilepic === "8") {
      return p8;
    } else if (this.state.profilepic === "9") {
      return p9;
    }
  };

  render() {
    return (
      <View style={styles.finalView}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <View style={styles.menuView}>
          <AntDesign
            name="left"
            style={{ fontSize: responsiveScreenFontSize(3) }}
            color="#808080"
            onPress={() => {
              this.props.navigation.navigate("TabNavigation1", {
                init_set: "Home",
                reset_check: 1,
              });
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
          <Image
            source={this.profile()}
            style={{
              height: responsiveScreenWidth(32),
              width: responsiveScreenWidth(32),
              borderRadius: 400 / 2,
            }}
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
