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
      clickOn: 1,
    };
  }

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
          <TouchableOpacity>
            <View
              style={
                this.state.clickOn === 1
                  ? styles.moveView_on //클릭됨
                  : styles.moveView
              }
            >
              <Text style={styles.movebtn}>확정 리스트</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.moveView}>
              <Text style={styles.movebtn}>신장</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.moveView}>
              <Text style={styles.movebtn}>근력</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.moveView}>
              <Text style={styles.movebtn}>균형/협응</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.moveView}>
              <Text style={styles.movebtn}>구강/발성</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.margin}></View>
        </View>
        <View>
          {/* 리스트 뷰 전체 뷰 */}
          <ScrollView>
            <Movelist
              movename="목 앞 근육 스트레칭"
              moveminute="5"
              movesec="30"
            />
            <Movelist movename="목 날개뼈 모으기" moveminute="1" movesec="30" />
            <Movelist
              movename="손목 및 팔꿈치 근육 스트레칭"
              moveminute="4"
              movesec="50"
            />
          </ScrollView>
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
  },
  moveView_on: {
    borderColor: "#5CB405",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#5CB405",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 3,
    marginVertical: 10,
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
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
