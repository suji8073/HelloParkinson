import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

import Context from "../Context/context";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Svg1 from "../icon/pencil.svg";
import Svg2 from "../icon/piechart.svg";
import Svg3 from "../icon/graph.svg";

import silverstarsvg from "../icon/silverstar.svg";
import greenstarsvg from "../icon/greenstar.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WithLocalSvg } from "react-native-svg";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";

import p1 from "../image/p1.png";
import p2 from "../image/p2.png";
import p3 from "../image/p3.png";
import p4 from "../image/p4.png";
import p_1 from "../image/p-1.png";

import { ThemeConsumer } from "styled-components/native";
import { throwIfAudioIsDisabled } from "expo-av/build/Audio/AudioAvailability";

var now = new Date();

export default class user_setting extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      year: parseInt(now.getFullYear()),
      year1: "2022",
      month: parseInt(now.getMonth() + 1),
      month1: "01",
      day1: "01",
      day: parseInt(now.getDate()),
      birth: 19431218,
      gender: "",
      memo: "",
      team: "",
      name: "",
      profilepic: "",
      UID: "",
      percent: 0,
      bookmark: false,
      user_token: "",
      user_id: "",
    };
  }

  async componentDidMount() {
    const manager_token = await AsyncStorage.getItem("@manager_token");
    this.setState({
      user_token: manager_token,
      user_id: this.props.route.params.id,
    });

    fetch(
      "http://hccparkinson.duckdns.org:19737/onlymanager/uid/" +
        this.props.route.params.id,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + manager_token.slice(1, -1),
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          birth: json.data[0].birthday,
          gender: json.data[0].gender,
          name: json.data[0].uname,
          memo: json.data[0].memo,
          team: json.data[0].team,
          UID: json.data[0].uid,
          profilepic: json.data[0].profilepic,
          bookmark: json.data[0].bookmark,
        });
      });
    this.setState({
      year1: String(this.state.year),
      month1:
        String(this.state.month).length == 1
          ? "0" + String(this.state.month)
          : String(this.state.month),
      day1:
        String(this.state.day).length == 1
          ? "0" + String(this.state.day)
          : String(this.state.day),
    });
  }

  age_count = () => {
    var today_year = new Date().getFullYear();
    var birth_year = String(this.state.birth).substring(0, 4);
    return today_year - birth_year + 1;
  };

  gender_change = () => {
    return this.state.gender === "F" ? "여" : "남";
  };

  starclick = () => {
    if (this.state.bookmark === false) {
      // 아이콘 asset값 변경 greenstarsvg 으로

      fetch("http://hccparkinson.duckdns.org:19737/onlymanager/bookmark", {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + String(this.state.user_token).slice(1, -1),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid: String(this.props.route.params.id),
        }),
      }).then((response) => {
        console.log(response.status);
        this.setState({ bookmark: true });
        Alert.alert("즐겨찾기에 추가되었습니다.");
      });
    } else {
      // 아이콘 asset값 변경 silverstarsvg 으로
      fetch("http://hccparkinson.duckdns.org:19737/onlymanager/bookmark", {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + String(this.state.user_token).slice(1, -1),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid: String(this.props.route.params.id),
        }),
      }).then((response) => {
        console.log(response.status);
        this.setState({ bookmark: false });
        Alert.alert("즐겨찾기에서 해제되었습니다.");
      });
    }
  };

  progress_find = () => {
    fetch(
      "http://hccparkinson.duckdns.org:19737/onlymanager/progress/user/" +
        String(this.state.UID) +
        "?date=" +
        this.state.year1 +
        "-" +
        this.state.month1 +
        "-" +
        this.state.day1 +
        "&&day=1",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + String(this.state.user_token).slice(1, -1),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid: String(this.props.route.params.id),
        }),
      }
    ).then((json) => {
      this.setState({ percent: json.data[0].percent });
    });
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
    }
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
              this.props.navigation.navigate("TabNavigation", {
                init_set: "list",
              });
            }}
          />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>환자 정보</Text>
          <View style={styles.margin}></View>

          <TouchableOpacity onPress={this.starclick}>
            <WithLocalSvg
              style={{ fontSize: responsiveScreenFontSize(3) }}
              asset={
                this.state.bookmark === false ? silverstarsvg : greenstarsvg
              }
            />
          </TouchableOpacity>
        </View>

        <View style={styles.firstView}>
          <Image
            source={this.profile()}
            style={{
              marginBottom: responsiveHeight(2),
              height: responsiveScreenHeight(10),
              width: responsiveScreenWidth(20),
              borderRadius: 400 / 2,
            }}
          />

          <Text style={styles.group_num}>
            {this.state.team != "" ? this.state.team + "조" : " "}
          </Text>
          <Text style={styles.user_name}>{this.state.name}</Text>
          <Text style={styles.user_age}>
            {this.age_count()}세 / {this.gender_change()}
          </Text>
        </View>

        <View style={styles.secondView}>
          <View style={styles.numberbutton}>
            <TouchableOpacity
              style={styles.group}
              activeOpacity={0.8}
              onPress={() => {
                this.props.navigation.navigate("user_edit", {
                  id: this.state.UID,
                });
              }}
            >
              <WithLocalSvg
                style={{ fontSize: responsiveScreenFontSize(3.5) }}
                asset={Svg1}
              />
              <Text style={styles.twotext}>환자 정보 편집</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.group}
              activeOpacity={0.8}
              onPress={() => {
                this.props.navigation.navigate("user_statistics", {
                  id: this.state.UID,
                });
              }}
            >
              <WithLocalSvg
                style={{ fontSize: responsiveScreenFontSize(3.5) }}
                asset={Svg2}
              />
              <Text style={styles.twotext}>운동 통계 확인</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.group}
              activeOpacity={0.8}
              onPress={() => {
                this.props.navigation.navigate("user_progress", {
                  id: this.state.UID,
                  percent: this.state.percent,
                });
              }}
            >
              <WithLocalSvg
                style={{ fontSize: responsiveScreenFontSize(3.5) }}
                asset={Svg3}
              />
              <Text style={styles.twotext}>진도율 확인</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.threeView}>
          <View style={styles.memoView}>
            <Text style={styles.text2}>메모</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text2}>
              {this.state.memo === null ? "메모 없음" : this.state.memo}
            </Text>
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

  firstView: {
    alignItems: "center",
    marginTop: responsiveScreenHeight(6.6),
    backgroundColor: "#FFFFFF",
    height: responsiveScreenHeight(29.6),
  },

  secondView: {
    alignItems: "flex-start",
    justifyContent: "center",
    borderColor: "#E5E5E5",
    height: responsiveScreenHeight(10),
    marginTop: responsiveScreenHeight(3),
  },

  numberbutton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  twotext: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(1.76),
    color: "#5CB405",
    marginTop: responsiveScreenHeight(2),
    justifyContent: "center",
  },

  group: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  threeView: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: responsiveScreenHeight(3.1),
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    height: responsiveScreenHeight(11.0),
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: "#E5E5E5",
    paddingTop: responsiveScreenHeight(2.6),
    paddingBottom: responsiveScreenHeight(2.6),
    paddingLeft: responsiveScreenHeight(4),
    paddingRight: responsiveScreenHeight(4),
  },

  margin: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },

  memoView: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },

  textView: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },

  text2: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2),
    color: "#484848",
    justifyContent: "center",
  },

  group_num: {
    alignItems: "center",
    fontSize: responsiveScreenFontSize(2),
    marginBottom: responsiveScreenHeight(0.3),
    fontWeight: "bold",
    color: "#316200",
    justifyContent: "center",
  },
  user_name: {
    alignItems: "center",
    fontSize: responsiveScreenFontSize(2.48),
    marginBottom: responsiveScreenHeight(0.3),
    color: "#000000",
    fontWeight: "bold",
    justifyContent: "center",
  },

  user_age: {
    alignItems: "center",
    fontSize: responsiveScreenFontSize(2),
    color: "#747474",
    justifyContent: "center",
  },
});
