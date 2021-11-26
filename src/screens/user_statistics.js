import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Task from "../screens1/task_record_day";
import Task1 from "../screens1/task_graph";
import SimplePopupMenu from "react-native-simple-popup-menu";

// const items = [
//   { id: "1", label: "주" },
//   { id: "2", label: "월" },
//   { id: "3", label: "년" },
// ];
const year = 2021 + 1;
export default class user_statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birth: 19431218,
      gender: "",
      memo: "",
      team: "",
      name: "",
      UID: 0,
      progress: 0,
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
          UID: json.info.UID,
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
          <Text style={styles.titleText}>
            '{this.state.name}'님 의 운동 통계
          </Text>
          <View style={styles.margin}></View>

          {/* <SimplePopupMenu
            items={items}
            cancelLabel={"취소"}
            //onSelect={() => alert(this.label)}
            onCancel={() => console.log("onCancel")}
          >
            <Entypo name="dots-three-vertical" size={24} color="#595959" />
          </SimplePopupMenu> */}
        </View>

        <View style={styles.mainView}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.firstView}>
              <Text style={styles.user_name}>{this.state.name}</Text>
              <Text style={styles.user_age}>
                {" "}
                / {year - parseInt(this.state.birth / 10000)}세
              </Text>
              <Text style={styles.user_sex}> / {this.state.gender}</Text>
              <View style={styles.margin}></View>
            </View>

            <View style={styles.secondView}>
              <View style={styles.textview}>
                <Text style={styles.text1}>주 평균</Text>
                <Text style={styles.text2}>{this.state.progress}%</Text>
                <View style={styles.margin}></View>
                <Text style={styles.text3}>2021년 1월 31일 ~ 2월 6일</Text>
              </View>

              <View style={styles.graphview}>
                <Task1></Task1>
              </View>
            </View>

            <View style={styles.threeView}>
              <Task></Task>
              <Task></Task>
              <Task></Task>
            </View>
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
  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
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
    fontSize: 21,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },

  firstView: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "5%",
    marginRight: "5%",
    flexDirection: "row",
    marginBottom: "2%",
    flex: 1,
    marginTop: "5%",
  },
  user_name: {
    alignItems: "flex-start",
    justifyContent: "center",
    color: "#484848",
    fontSize: 21,
    fontWeight: "bold",
  },

  user_age: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    fontSize: 17,
    color: "#484848",
  },

  user_sex: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    fontSize: 17,
    color: "#484848",
  },
  mainView: {
    backgroundColor: "#F8F8F8",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  secondView: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "3%",
    marginBottom: "5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    width: "90%",
    height: 200,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  threeView: {
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "30%",
    padding: "5%",
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  moveView: {
    backgroundColor: "#FFFFFF",
    height: 90,
    width: "92%",
    marginLeft: "4%",
    marginRight: "4%",
    marginTop: "3%",
    marginBottom: "3%",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 5,
  },
  textview: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "5%",
    marginBottom: "3%",
  },
  graphview: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    alignItems: "flex-start",
    fontSize: 17,
    alignItems: "center",
    color: "#484848",
    justifyContent: "center",
    fontWeight: "bold",
  },
  text2: {
    marginLeft: "1%",
    alignItems: "flex-start",
    fontSize: 21,
    alignItems: "center",
    color: "#484848",
    justifyContent: "center",
    fontWeight: "bold",
  },
  text3: {
    alignItems: "center",
    fontSize: 15,
    alignItems: "center",
    color: "#484848",
    justifyContent: "flex-end",
    fontWeight: "bold",
  },
});
