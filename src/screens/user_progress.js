import React, { Component } from "react";
import {
  Button,
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Touchable,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ActionButton from "react-native-action-button";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import action_icon from "../icon/action_icon.svg";
import { WithLocalSvg } from "react-native-svg";

import { Entypo } from "@expo/vector-icons";
import PercentageBar from "../screens/progressbar";
const year = 2021 + 1;

export default class progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birth: 19431218,
      gender: "",
      memo: "",
      team: "",
      name: "",
      progress: 0,
    };
  }

  componentDidMount() {
    fetch(
      "http://152.70.233.113/chamuser/id/" + this.props.route.params.paramName1,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          birth: json.info.birth,
          gender: json.info.gender,
          memo: json.info.memo,
          team: json.info.team,
          name: json.info.name,
          progress: json.info.progress,
        });
      });
  }

  dots = () => {}; // 햄버거 버튼을 클릭하였을 때 실행될 코드

  render() {
    return (
      <View style={styles.finalView}>
        {/* 상단바 */}
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
          <Text style={styles.titleText}>
            '{this.state.name}'님의 운동 진도율
          </Text>
          <View style={styles.margin}></View>
        </View>
        {/* 본문 전체 뷰 */}
        <View style={{ margin: "5%" }}>
          {/* 뷰1/3 */}
          <View style={{ flexDirection: "row" }}>
            <View style={{ justifyContent: "center" }}>
              <Ionicons
                name="person-circle-sharp"
                size={90}
                color="lightblue"
              />
              {/* 전체 진도율 뷰 */}
            </View>
            <View
              style={{
                marginLeft: "4%",
                marginTop: "3%",
                flexDirection: "column",
                flex: 1,
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ marginBottom: 10, fontSize: 23, fontWeight: "bold" }}
              >
                {this.state.name} / {year - parseInt(this.state.birth / 10000)}{" "}
                / {this.state.gender}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginBottom: "1%", fontSize: 15 }}>
                  오늘 전체 진도율
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    marginLeft: "3%",
                  }}
                >
                  {this.state.progress}%
                </Text>
              </View>
              <View style={styles.per}>
                <View
                  style={{
                    width: 100 * 2,
                    height: 10,
                    marginVertical: 5,
                    borderRadius: 7,
                    borderColor: "#E5E5E5",
                    backgroundColor: "#E5E5E5",
                    borderWidth: 1,
                  }}
                />
                <View
                  style={{
                    width:
                      this.state.progress * 2 ? this.state.progress * 2 : 0,
                    height: 10,
                    marginVertical: 5,
                    borderRadius: 7,
                    backgroundColor: "#7AC819",
                    position: "absolute",
                  }}
                />
              </View>
            </View>
          </View>
          {/* 여기까지 view 1/3 */}
          {/* 여기부터 view 2/3 */}
          <View
            style={{
              marginTop: "5%",
              marginBottom: "3%",
              flexDirection: "column",
              // padding: "5%",
              borderWidth: 2,
              borderRadius: 7,
              borderColor: "#D6D6D6",
            }}
          >
            {/* 위에꺼 전체 */}
            <View style={{ flexDirection: "row", padding: "5%" }}>
              {/* 햄버거아이콘 빼고*/}
              <View style={{ flex: 9, flexDirection: "column" }}>
                <Text>2021년 2월 5일</Text>
                <Text
                  style={{ fontSize: 19, fontWeight: "bold", paddingTop: "1%" }}
                >
                  신장운동
                </Text>
              </View>
              {/* 햄버거 아이콘 */}
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                }}
              >
                <TouchableOpacity onPress={this.dots}>
                  <Entypo
                    name="dots-three-vertical"
                    size={20}
                    color="#595959"
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* 여기부터 아래 */}
            <View style={{ flexDirection: "row", paddingBottom: "5%" }}>
              <View style={styles.bordertext}>
                <Text style={styles.successtext}>완료</Text>
                <View style={styles.numView}>
                  <Text style={styles.numtext}>0</Text>
                  <Text style={styles.gaetext}>개</Text>
                </View>
              </View>
              <View style={styles.bordertext}>
                <Text style={styles.successtext}>진행 중</Text>
                <View style={styles.numView}>
                  <Text style={styles.numtext}>1</Text>
                  <Text style={styles.gaetext}>개</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Text style={styles.successtext}>미실시</Text>
                <View style={styles.numView}>
                  <Text style={styles.numtext}>6</Text>
                  <Text style={styles.gaetext}>개</Text>
                </View>
              </View>
            </View>
          </View>
          {/* 여기까지 view2/3 */}
          {/* 여기부터 view3/3 */}

          <View styel={styles.threeView}>
            <ScrollView
              contentContainerStyle={{
                paddingTop: "3%",
                flexGrow: 1,
                flexDirection: "column",
                justifyContent: "space-between",
                paddingBottom: "5%",
                paddingHorizontal: "2%",
              }}
            >
              <View style={{ marginBottom: "3%" }}>
                <Text style={styles.movetitletext}>
                  진행 중
                </Text>
                <Text style={styles.movetext}>날개뼈 모으기</Text>
              </View>
              <View>
                <Text style={styles.movetitletext}>미실시 운동</Text>
                <Text style={styles.movetext}>몸쪽 앞쪽 근육</Text>
                <Text style={styles.movetext}>운동회전 근육 스트레칭</Text>
                <Text style={styles.movetext}>몸통 스트레칭 1단계</Text>
                <Text style={styles.movetext}>몸통 스트레칭 2단계</Text>
                <Text style={styles.movetext}>몸쪽 앞쪽 근육</Text>
                <Text style={styles.movetext}>운동회전 근육 스트레칭</Text>
                <Text style={styles.movetext}>몸통 스트레칭 1단계</Text>
                <Text style={styles.movetext}>몸통 스트레칭 2단계</Text>
              </View>
            </ScrollView>
          </View>
        </View>

        <ActionButton
          buttonColor="#577F67"
          style={styles.plusbtn}
          renderIcon={() => (
            <WithLocalSvg
              width={80}
              height={80}
              asset={action_icon}
              onPress={() => {
                this.props.navigation.navigate("moveedit", {
                  paramName1: this.state.name,
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
    flex: 1,
    backgroundColor: "#FFFFFF",
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

  titleText: {
    alignItems: "flex-start",
    fontSize: 20,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },
  per: {
    width: "90%",
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
  plusbtn: {
    position: "absolute",
    left: "80%",
    bottom: "8%",
  },
  threeView: {
    // padding:30,
    marginTop: 10,
    marginBottom: 230,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
  },

  bordertext: {
    borderRightWidth: 1,
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    borderColor: "#EAEAEA",
  },
  movetext: {
    fontSize: 17,
    marginBottom: "5%",
    color: "#484848",
  },
  movetitletext: { fontSize: 17, fontWeight: "bold", marginBottom: "5%" },
  successtext: {
    fontSize: 17,
  },
  numtext: {
    fontSize: 21,
    fontWeight: "bold",
    alignItems: "center",
  },
  gaetext: {
    fontSize: 16,
    marginLeft: "2%",
    alignItems: "flex-end",
  },

  numView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "7%",
  },
});
