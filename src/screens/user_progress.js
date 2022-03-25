import React, { Component } from "react";
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

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

import Context from "../Context/context";
import ActionButton from "react-native-action-button";
import { AntDesign } from "@expo/vector-icons";
import action_icon from "../icon/action_icon.svg";
import { WithLocalSvg } from "react-native-svg";
import Task from "./task_progress";
import SimplePopupMenu from "react-native-simple-popup-menu";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";

const items = [
  { id: 1, label: "신장 운동" },
  { id: 2, label: "근력 운동" },
  { id: 3, label: "균형 및 협응 운동" },
  { id: 4, label: "구강 및 발성 운동" },
  { id: 5, label: "유산소 운동" },
];
var now = new Date();
export default class progress extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      birth: 19431218,
      gender: "",
      memo: "",
      team: "",
      name: "",
      progress: 0,
      done: [],
      ing: [],
      no: [],
      today: "",
      man_token: "",
      year: parseInt(now.getFullYear()),
      year1: "2022",
      month: parseInt(now.getMonth() + 1),
      month1: "01",
      day1: "01",
      day: parseInt(now.getDate()),
      enamenow: "신장 운동",
      m1: [],
      m2: [],
      m3: [],
      m4: [],
      m5: [],
      data: [],
      profilepic: "",
    };
  }

  async componentDidMount() {
    const manager_token = await AsyncStorage.getItem("@manager_token");

    this.setState({
      man_token: manager_token,
      progress: Math.ceil(this.props.route.params.percent * 100),
    });
    fetch(
      "http://hccparkinson.duckdns.org:19737/onlymanager/progress/detail/" +
        this.props.route.params.id,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + manager_token.slice(1, -1),
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState(
          {
            m1: json.data.filter((it) => 1 <= it.eid && it.eid <= 12),
            m2: json.data.filter((it) => 13 <= it.eid && it.eid <= 26),
            m3: json.data.filter((it) => 27 <= it.eid && it.eid <= 31),
            m4: json.data.filter((it) => 32 <= it.eid && it.eid <= 45),
            m5: json.data.filter((it) => 46 <= it.eid && it.eid <= 47),
          },
          () => {
            this.setState({ data: this.state.m1 }, () => {
              let base = this.state.data.filter((it) => it.setcnt !== 0);
              // 진행중
              let ing1 = base.filter((it) => it.donecnt !== 0);
              let ing2 = ing1.filter((it) => it.setcnt > it.donecnt);
              // 기준 다시!!
              this.setState({ ing: ing2 });
              // 미실시
              let no1 = base.filter((it) => it.donecnt == 0);
              this.setState({ no: no1 });
              // 완료
              let doen1 = base.filter((it) => it.setcnt <= it.donecnt);
              this.setState({ done: doen1 });
            });
          }
        );
      });

    fetch(
      "http://hccparkinson.duckdns.org:19737/onlymanager/uid/" +
        this.props.route.params.id,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + this.state.man_token.slice(1, -1),
          "Content-Type": "application/json",
        },
      }
    )
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

    this.setState(
      {
        year1: String(this.state.year),
        month1:
          String(this.state.month).length == 1
            ? "0" + String(this.state.month)
            : String(this.state.month),
        day1:
          String(this.state.day).length == 1
            ? "0" + String(this.state.day)
            : String(this.state.day),
      },
      () => {
        this.setState({
          today:
            this.state.year1 +
            "년 " +
            this.state.month1 +
            "월 " +
            this.state.day1 +
            "일",
        });
      }
    );
  }
  movecheck = (id) => {
    if (id === 1) {
      this.setState({ data: this.state.m1 });
    } else if (id == 2) {
      this.setState({ data: this.state.m2 });
    } else if (id === 3) {
      this.setState({ data: this.state.m3 });
    } else if (id === 4) {
      this.setState({ data: this.state.m4 });
    } else if (id === 5) {
      this.setState({ data: this.state.m5 });
    }
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
        {/* 상단바 */}
        <View style={styles.menuView}>
          <AntDesign
            name="left"
            style={{ fontSize: responsiveScreenFontSize(3) }}
            color="#808080"
            onPress={() => {
              this.props.navigation.pop();
            }}
          />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>
            '{this.state.name}'님의 운동 진도율
          </Text>
          <View style={styles.margin}></View>
        </View>

        <View
          style={{ margin: responsiveScreenWidth(4.7), marginBottom: "35%" }}
        >
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ justifyContent: "center" }}>
                <Image
                  source={this.profile()}
                  style={{
                    marginBottom: responsiveHeight(2),
                    height: responsiveScreenWidth(20),
                    width: responsiveScreenWidth(20),
                    borderRadius: 400 / 2,
                  }}
                />
              </View>
              <View
                style={{
                  marginLeft: responsiveScreenWidth(4.7),
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    marginBottom: responsiveScreenHeight(1.3),
                    fontSize: responsiveScreenFontSize(2.12),
                    fontWeight: "bold",
                  }}
                >
                  {this.state.name} /{" "}
                  {this.state.year - parseInt(this.state.birth / 10000)} /{" "}
                  {this.state.gender}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      marginBottom: responsiveScreenHeight(0.6),
                      fontSize: responsiveScreenFontSize(1.76),
                    }}
                  >
                    오늘 전체 진도율
                  </Text>
                  <Text
                    style={{
                      fontSize: responsiveScreenFontSize(1.76),
                      fontWeight: "bold",
                      marginLeft: responsiveScreenWidth(2),
                    }}
                  >
                    {this.state.progress}%
                  </Text>
                </View>

                <View style={styles.per}>
                  <View
                    style={{
                      width: responsiveScreenWidth(52.8),
                      height: responsiveScreenHeight(1.52),
                      borderRadius: 7,
                      borderColor: "#E5E5E5",
                      backgroundColor: "#E5E5E5",
                      borderWidth: 1,
                    }}
                  />
                  <View
                    style={{
                      width:
                        this.state.progress !== 0
                          ? responsiveScreenWidth(52.8) * this.state.progress
                          : 0,
                      height: responsiveScreenHeight(1.52),
                      borderRadius: 7,
                      backgroundColor: "#7AC819",
                      position: "absolute",
                    }}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                marginTop: responsiveScreenHeight(2),
                marginBottom: responsiveScreenHeight(2),
                flexDirection: "column",
                borderWidth: 1,
                borderRadius: 7,
                borderColor: "#D6D6D6",
                backgroundColor: "#FFFFFF",
                paddingBottom: responsiveScreenHeight(2),
                paddingTop: responsiveScreenHeight(2),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    marginLeft: responsiveScreenWidth(4.7),
                  }}
                >
                  <Text
                    style={{
                      fontSize: responsiveScreenFontSize(2),
                    }}
                  >
                    {this.state.today}
                  </Text>
                  <Text
                    style={{
                      fontSize: responsiveScreenFontSize(2.24),
                      fontWeight: "bold",
                    }}
                  >
                    {this.state.enamenow}
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: responsiveScreenWidth(4.7),
                  }}
                >
                  <SimplePopupMenu
                    items={items}
                    cancelLabel={"취소"}
                    onSelect={(items) => {
                      this.setState({
                        enamenow: items.label,
                      });
                      this.movecheck(items.id);
                      // 할당된거만 추출
                      let base = this.state.data.filter(
                        (it) => it.setcnt !== 0
                      );
                      // 진행중

                      let ing1 = base.filter((it) => it.donecnt !== 0);
                      let ing2 = ing1.filter((it) => it.setcnt > it.donecnt);
                      // 기준 다시!!
                      this.setState({ ing: ing2 });
                      // 미실시
                      let no1 = base.filter((it) => it.donecnt == 0);
                      this.setState({ no: no1 });
                      // 완료
                      let doen1 = base.filter((it) => it.setcnt <= it.donecnt);
                      this.setState({ done: doen1 });
                    }}
                    onCancel={() => console.log("onCancel")}
                  >
                    <Entypo
                      name="dots-three-vertical"
                      style={{ fontSize: responsiveScreenFontSize(3) }}
                      color="#595959"
                    />
                  </SimplePopupMenu>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginTop: responsiveScreenHeight(1.5),
                }}
              >
                <View style={styles.bordertext}>
                  <Text style={styles.successtext}>완료</Text>
                  <View style={styles.numView}>
                    <Text style={styles.numtext}>{this.state.done.length}</Text>
                    <Text style={styles.gaetext}>개</Text>
                  </View>
                </View>
                <View style={styles.bordertext}>
                  <Text style={styles.successtext}>진행 중</Text>
                  <View style={styles.numView}>
                    <Text style={styles.numtext}>{this.state.ing.length}</Text>
                    <Text style={styles.gaetext}>개</Text>
                  </View>
                </View>
                <View style={styles.bordertext}>
                  <Text style={styles.successtext}>미실시</Text>
                  <View style={styles.numView}>
                    <Text style={styles.numtext}>{this.state.no.length}</Text>
                    <Text style={styles.gaetext}>개</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.threeView}>
              <View style={{ marginBottom: responsiveScreenHeight(3.1) }}>
                <Text style={styles.movetitletext}>진행 중</Text>
                <FlatList
                  data={this.state.ing}
                  renderItem={({ item }) => {
                    return <Task ename={item.ename}></Task>;
                  }}
                />
              </View>
              <View style={{ marginBottom: responsiveScreenHeight(3.1) }}>
                <Text style={styles.movetitletext}>미실시 운동</Text>
                <FlatList
                  data={this.state.no}
                  renderItem={({ item }) => {
                    return <Task ename={item.ename}></Task>;
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>

        <ActionButton
          buttonColor="#577F67"
          style={styles.plusbtn}
          renderIcon={() => (
            <WithLocalSvg
              width={responsiveScreenWidth(20)}
              height={responsiveScreenWidth(20)}
              asset={action_icon}
              onPress={() => {
                this.props.navigation.navigate("moveedit", {
                  paramName1: this.state.name,
                  paramName2: this.state.UID,
                });
              }}
            />
          )}
        ></ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  finalView: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    backgroundColor: "#F8F8F8",
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
  per: {
    width: "90%",
  },
  margin: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
  plusbtn: {
    position: "absolute",
    bottom: responsiveScreenHeight(15),
  },
  threeView: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: "5%",
    paddingHorizontal: "2%",
  },

  bordertext: {
    borderRightWidth: 1,
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    borderColor: "#EAEAEA",
  },
  movetext: {
    fontSize: responsiveScreenFontSize(2),
    marginBottom: "5%",
    color: "#484848",
  },
  movetitletext: {
    fontSize: responsiveScreenFontSize(2),
    fontWeight: "bold",
    marginBottom: "5%",
  },
  successtext: {
    fontSize: responsiveScreenFontSize(2),
  },
  numtext: {
    fontSize: responsiveScreenFontSize(2.24),
    fontWeight: "bold",
    alignItems: "center",
  },
  gaetext: {
    fontSize: responsiveScreenFontSize(1.88),
    marginLeft: "2%",
    alignItems: "flex-end",
  },

  numView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "7%",
  },
});
