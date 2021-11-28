// 운동 편집 화면
// 운동카테고리 스크롤뷰와 운동 리스트뷰
import React, { Component } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Movelist from "./movelist";
const motion = [
  "신장운동",
  " 근력운동",
  "균형 및 협응 운동",
  "구강 및 발성 운동",
];
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
      categ: "one",
      click1: 1,
      click2: 0,
      click3: 0,
      click4: 0,
      click5: 0,
      m1: [],
      m2: [],
      m3: [],
      m4: [],
      // m_five: [],
      data: { name: ["채현", "채햏"] },
    };
  }

  handleClick1 = () => {
    this.setState({
      categ: "one",
      click1: 1,
      click2: 0,
      click3: 0,
      click4: 0,
      click5: 0,
    });
  };
  handleClick2 = () => {
    this.setState({
      categ: "two",
      click1: 0,
      click2: 1,
      click3: 0,
      click4: 0,
      click5: 0,
    });
  };
  handleClick3 = () => {
    this.setState({
      categ: "three",
      click1: 0,
      click2: 0,
      click3: 1,
      click4: 0,
      click5: 0,
    });
  };
  handleClick4 = () => {
    this.setState({
      categ: "four",
      click1: 0,
      click2: 0,
      click3: 0,
      click4: 1,
      click5: 0,
    });
  };
  handleClick5 = () => {
    this.setState({
      categ: "five",
      click1: 0,
      click2: 0,
      click3: 0,
      click4: 0,
      click5: 1,
    });
  };

  componentDidMount() {
    console.log(this.props.route.params.paramName1);
    fetch(
      "http://152.70.233.113/chamuser/id/" + this.props.route.params.paramName1,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        console.log("여기 11111잘 들어가나 확인 ~~ 한다~~");
        this.setState({
          birth: json.info.birth,
          gender: json.info.gender,
          memo: json.info.memo,
          team: json.info.team,
          name: json.info.name,
          progress: json.info.progress,
        });
      });
    // fetch("http://152.70.233.113/chammotion/cat/신장운동", {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log("여기 11111잘 들어가나 확인 ~~ 한다~~");
    //     this.setState({ m1: json });
    //   });
    // fetch("http://152.70.233.113/chammotion/cat/근력운동", {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log("여기 11111잘 들어가나 확인 ~~ 한다~~");
    //     this.setState({ m2: json });
    //   });
    // fetch("http://152.70.233.113/chammotion/cat/균형 및 협응운동", {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log("여기 11111잘 들어가나 확인 ~~ 한다~~");
    //     this.setState({ m3: json });
    //   });
    // fetch("http://152.70.233.113/chammotion/cat/구강 및 발성 운동", {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log("여기 11111잘 들어가나 확인 ~~ 한다~~");
    //     this.setState({ m4: json });
    //   });
  }

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
          <Text style={styles.titleText}>'{this.state.name}'님 운동 편집</Text>
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
              <Text style={styles.movebtn}>균형/협응</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleClick4}>
            <View
              style={
                this.state.click4 === 1 ? styles.moveView_on : styles.moveView
              }
            >
              <Text style={styles.movebtn}>구강/발성</Text>
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
        </View>

        <FlatList
          style={{ marginBottom: 80 }}
          data={this.state.data}
          renderItem={({ item }) => {
            return <Movelist>mname={item.name}</Movelist>;
          }}
        />
      </View>
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
  },
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
    paddingBottom: 30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
