// 운동 편집 화면
// 운동카테고리 스크롤뷰와 운동 리스트뷰
import React, { Component } from "react";
import GlobalState from "../Context/GlobalState";
import Context from "../Context/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Movelist from "./movelist";
import O2_task from "./O2_task";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const move_store = async (move_list) => {
  try {
    await AsyncStorage.setItem("@move_store", JSON.stringify(move_list));
    console.log("move_store");
  } catch (e) {
    // saving error
    console.log("move_store_error");
  }
};
export default class progress extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);

    this.state = {
      task: 0,
      name: "",
      progress: 0,
      categ: "one",
      click1: 1,
      click2: 0,
      click3: 0,
      click4: 0,
      click5: 0,
      man_token: "",
      //데이터가 내림차순 되어서 들어오면 좋겠음~!
      m1: [],
      m2: [],
      m3: [],
      m4: [],
      m5: [],
      data: [],
      m_num: 3,
    };
  }

  async componentDidMount() {
    const manager_token = await AsyncStorage.getItem("@manager_token");

    this.setState({
      man_token: manager_token,
    });
    fetch(
      "http://hccparkinson.duckdns.org:19737/onlymanager/assigned?uid=" +
        this.props.route.params.paramName2,
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
            m1: json.data.filter((it) => it.cat === "신장운동"),
            m2: json.data.filter((it) => it.cat === "근력운동"),
            m3: json.data.filter((it) => it.cat === "균형 및 협응 운동"),
            m4: json.data.filter((it) => it.cat === "구강 및 발성 운동"),
            m5: json.data.filter((it) => it.cat === "유산소운동"),
          },
          () => {
            this.setState({ data: this.state.m1 });

            // try {
            //   await AsyncStorage.setItem(
            //     "@user_moveset",
            //     JSON.stringify(json.data)
            //   );
            //   console.log("환자 할당량 store");
            // } catch (e) {
            //   console.log("환자 할당량 error");
            // }

            // const user_moveset = await AsyncStorage.getItem("@user_moveset");
            // console.log(user_moveset);
          }
        );
      });
    move_store(this.state.data);
  }
  handleClick1 = () => {
    this.setState({
      data: this.state.m1,
      click1: 1,
      click2: 0,
      click3: 0,
      click4: 0,
      click5: 0,
      task: 0,
    });
  };
  handleClick2 = () => {
    this.setState({
      data: this.state.m2,
      click1: 0,
      click2: 1,
      click3: 0,
      click4: 0,
      click5: 0,
      task: 0,
    });
  };
  handleClick3 = () => {
    this.setState({
      data: this.state.m3,
      click1: 0,
      click2: 0,
      click3: 1,
      click4: 0,
      click5: 0,
      task: 0,
    });
  };
  handleClick4 = () => {
    this.setState({
      data: this.state.m4,
      click1: 0,
      click2: 0,
      click3: 0,
      click4: 1,
      click5: 0,
      task: 0,
    });
  };

  handleClick5 = () => {
    this.setState({
      data: this.state.m5,
      click1: 0,
      click2: 0,
      click3: 0,
      click4: 0,
      click5: 1,
      task: 1,
    });
  };

  moveadd = () => {
    Alert.alert("운동 편집을 완료하시겠어요?", "", [
      {
        text: "취 소",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "완 료",
        onPress: () => {
          Alert.alert("저장되었습니다.");
          this.props.navigation.pop();
        },
      },
    ]);
  };

  render() {
    return (
      <GlobalState>
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
            <Text style={styles.titleText}>
              '{this.props.route.params.paramName1}'님 운동 편집
            </Text>
            <View style={styles.margin}></View>
            <AntDesign
              name="check"
              size={24}
              color="#5CB405"
              onPress={() => {
                Alert.alert("저장되었습니다.");
                this.props.navigation.pop();
              }}
            />
          </View>
          {/* 운동카테고리 목록 뷰 */}
          <View style={styles.listview}>
            <View style={styles.margin}></View>
            <TouchableOpacity onPress={this.handleClick1}>
              <View
                style={
                  this.state.click1 === 1 ? styles.moveView_on : styles.moveView
                }
              >
                <Text style={styles.movebtn}>신장</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleClick2}>
              <View
                style={
                  this.state.click2 === 1 ? styles.moveView_on : styles.moveView
                }
              >
                <Text style={styles.movebtn}>근력</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleClick3}>
              <View
                style={
                  this.state.click3 === 1 ? styles.moveView_on : styles.moveView
                }
              >
                <Text style={styles.movebtn}>균형 / 협응</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleClick4}>
              <View
                style={
                  this.state.click4 === 1 ? styles.moveView_on : styles.moveView
                }
              >
                <Text style={styles.movebtn}>구강 / 발성</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleClick5}>
              <View
                style={
                  this.state.click5 === 1 ? styles.moveView_on : styles.moveView
                }
              >
                <Text style={styles.movebtn}>유산소</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.margin}></View>
          </View>

          <FlatList
            style={{
              backgroundColor: "#F8F8F8",
            }}
            keyExtractor={(item, index) => index.toString()}
            data={this.state.data}
            renderItem={({ item }) => {
              if (this.state.task == 0) {
                return (
                  <Movelist name={item.ename} m_num={item.setcnt}></Movelist>
                );
              } else {
                return (
                  <O2_task name={item.ename} m_num={item.setcnt}></O2_task>
                );
              }
            }}
          />
        </View>
      </GlobalState>
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
  listview: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  fouuview: {},
  moveView: {
    borderColor: "#BBBBBB",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#BBBBBB",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 3,
    marginVertical: 10,
    height: 35,
  },
  moveView_on: {
    borderColor: "#5CB405",
    borderRadius: 20,
    height: 35,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#5CB405",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 3,
    marginVertical: 10,
    fontSize: responsiveScreenFontSize(2),
  },
  movebtn: {
    color: "#FFFFFF",
    fontSize: responsiveScreenFontSize(2),
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
    // paddingBottom: 30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
