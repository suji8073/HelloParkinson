// 운동 편집 화면
// 운동카테고리 스크롤뷰와 운동 리스트뷰
import React, { Component } from "react";
import GlobalState from "../Context/GlobalState";
import Context from "../Context/context";
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
      //데이터가 내림차순 되어서 들어오면 좋겠음~!
      m1: [
        { id: "1-1", name: "목 앞 근육 스트레칭", set: 0 },
        { id: "1-2", name: "날개뼈 모으기", set: 6 },
        { id: "1-3", name: "손목 및 팔꿈치 주변 근육 스트레칭", set: 10 },
      ],
      m2: [
        { id: "2-1", name: "엉덩이 들기", set: 2 },
        { id: "2-2", name: "엎드려 누운 상태에서 다리들기", set: 6 },
        { id: "2-3", name: "엉덩이 옆 근육 운동", set: 10 },
        { id: "2-4", name: "무릎 벌리기", set: 20 },
        { id: "2-5", name: "무릎 펴기", set: 40 },
      ],
      m3: [
        { id: "3-1", name: "한발 서기", set: 2 },
        { id: "3-2", name: "버드독 1단계", set: 0 },
        { id: "3-3", name: "버드독 2단계", set: 0 },
        { id: "3-4", name: "앉은 상태에서 제자리 걷기", set: 10 },
        { id: "3-5", name: "움직이는 런지", set: 10 },
      ],
      m4: [
        { id: "4-1", name: "아에이오우 소리내기", set: 10 },
        { id: "4-2", name: "파파파파파 소리내기", set: 12 },
        { id: "4-3", name: "쪽 소리내기", set: 5 },
        { id: "4-4", name: "혀로 볼 밀기", set: 5 },
        { id: "4-5", name: "혀로 입천장 밀기", set: 3 },
        { id: "4-6", name: "똑딱 소리내기", set: 2 },
        { id: "4-7", name: "혀 물고 침 삼키기", set: 2 },
        { id: "4-8", name: "아 짧게 소리내기", set: 20 },
        { id: "4-9", name: "아 길게 소리내기", set: 2 },
        { id: "4-10", name: "고음 가성으로 소리내기", set: 2 },
        { id: "4-11", name: "도레미파솔라시도", set: 2 },
        { id: "4-12", name: "큰 소리로 음절 읽기", set: 2 },
      ],
      m5: [
        { id: "5-1", name: "걷기", set: 70 },
        { id: "5-2", name: "자전거 타기", set: 100 },
      ],
      data: [],
      m_num: 3,
    };
  }
  componentDidMount() {
    // this.State((this.context.change_exercise[0].id = "2"));
    // console.log(this.context.change_exercise[0].id);
    // 신장운동이 기본클릭 값
    this.setState({ data: this.state.m1 });
    // fetch("http://152.70.233.113/chammotion/cat/신장운동", {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     this.setState({ data: json, m1: json });
    //   });
    // fetch("http://152.70.233.113/chammotion/cat/근력운동", {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     this.setState({ m2: json });
    //   });
    // fetch("http://152.70.233.113/chammotion/cat/균형 및 협응 운동", {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     this.setState({ m3: json });
    //   });
    // fetch("http://152.70.233.113/chammotion/cat/구강 및 발성 운동", {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     this.setState({ m4: json });
    //   });
    // fetch("http://152.70.233.113/chammotion/cat/유산소 운동", {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     this.setState({ m5: json });
    //   });
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
            data={this.state.data}
            renderItem={({ item }) => {
              if (this.state.task == 0) {
                return <Movelist name={item.name} m_num={item.set}></Movelist>;
              } else {
                return <O2_task name={item.name} m_num={item.set}></O2_task>;
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
    flex: 1,
    backgroundColor: "#FFFFFF",
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
    fontSize: 17,
  },
  movebtn: {
    color: "#FFFFFF",
    fontSize: 17,
  },

  menuView: {
    backgroundColor: "#FFFFFF",
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: "10%",
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
    // paddingBottom: 30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
