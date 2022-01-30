import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

import Context from "../Context/context";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Svg1 from "../icon/pencil.svg";
import Svg2 from "../icon/piechart.svg";
import Svg3 from "../icon/graph.svg";

import silverstarsvg from "../icon/silverstar.svg";
import greenstarsvg from "../icon/greenstar.svg";

import { WithLocalSvg } from "react-native-svg";

var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiUm9sZXMiOlsiUk9MRV9NQU5BR0VSIl0sImlzcyI6IkhDQyBMYWIiLCJpYXQiOjE2NDMyODk0MzAsImV4cCI6MTY0Mzg5NDIzMH0.XJFkawo8_s4okjavnlT1zVzs9nep6rqlMOCAVqmbloNqyf6BzLYen_Mk4JLhSY3jEP-ogqqIxD6CQO1FAFd-zg"
);
myHeaders.append("Content-Type", "application/json");

export default class user_setting extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      birth: 19431218,
      gender: "",
      memo: "",
      team: "",
      name: "",
      UID: "",
      bookmark: false,
    };
  }

  componentDidMount() {
    fetch(
      "http://hccparkinson.duckdns.org:19737/onlymanager/uid/" +
        this.props.route.params.id,
      {
        method: "GET",
        headers: myHeaders,
      }
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data[0].uname);
        console.log(json.data[0].bookmark);
        this.setState({
          birth: json.data[0].birthday,
          gender: json.data[0].gender,
          name: json.data[0].uname,
          memo: json.data[0].memo,
          team: json.data[0].team,
          UID: json.data[0].uid,
          bookmark: json.data[0].bookmark,
        });
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
        method: "POST",
        headers: myHeaders,
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
        method: "POST",
        headers: myHeaders,
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

  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.menuView}>
          <AntDesign
            name="left"
            size={24}
            color="#808080"
            onPress={() => {
              this.props.navigation.navigate("TabNavigation");
            }}
          />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>환자 정보</Text>
          <View style={styles.margin}></View>

          <TouchableOpacity onPress={this.starclick}>
            <WithLocalSvg
              width={30}
              height={40}
              asset={
                this.state.bookmark === false ? silverstarsvg : greenstarsvg
              }
            />
          </TouchableOpacity>
        </View>

        <View style={styles.firstView}>
          <View style={styles.icon}>
            <Ionicons
              name="person-circle-sharp"
              size={120}
              color="lightblue"
              alignItems="center"
            />
          </View>
          <Text style={styles.group_num}>
            {this.state.team != "" ? " " : this.state.team + "조"}
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
              <WithLocalSvg width={30} height={40} asset={Svg1} />
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
              <WithLocalSvg width={30} height={40} asset={Svg2} />
              <Text style={styles.twotext}>운동 통계 확인</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.group}
              activeOpacity={0.8}
              onPress={() => {
                this.props.navigation.navigate("user_progress", {
                  id: this.state.UID,
                });
              }}
            >
              <WithLocalSvg width={30} height={40} asset={Svg3} />
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
              {this.state.memo === "" ? "메모 없음" : this.state.memo}
            </Text>
          </View>
        </View>
        <View style={styles.marginView}></View>
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
    marginTop: "3%",
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
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    margin: "8%",
    backgroundColor: "#FFFFFF",
  },

  numberbutton: {
    marginLeft: 3,
    marginRight: 3,
    width: "100%",
    height: 45,
    borderColor: "#E5E5E5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  twotext: {
    alignItems: "flex-start",
    fontSize: 15,
    color: "#5CB405",
    marginTop: 10,
    justifyContent: "center",
  },

  group: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  secondView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
  },

  threeView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
    marginTop: 5,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 0.3,
    borderTopWidth: 0.3,
    borderColor: "#E5E5E5",
    padding: 10,
  },

  marginView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 2,
    backgroundColor: "#FFFFFF",
  },

  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },

  memoView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 30,
    marginTop: 10,
    flex: 1,
  },

  textView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 10,
    flex: 1,
  },

  text2: {
    alignItems: "flex-start",
    fontSize: 17,
    color: "#484848",
    justifyContent: "center",
  },
  icon: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  group_num: {
    alignItems: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: "#316200",
    marginBottom: "1%",
    justifyContent: "center",
  },
  user_name: {
    alignItems: "center",
    fontSize: 21,
    color: "#000000",
    fontWeight: "bold",
    marginBottom: "1%",
    justifyContent: "center",
  },

  user_age: {
    alignItems: "center",
    fontSize: 17,
    color: "#747474",
    justifyContent: "center",
  },
});
