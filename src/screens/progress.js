import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from "react-native";
import { WithLocalSvg } from "react-native-svg";

import Task from "./task3";
import { Entypo } from "@expo/vector-icons";
import ddaysvg from "../icon/dday.svg";
import { AntDesign } from "@expo/vector-icons";
import SimplePopupMenu from "react-native-simple-popup-menu";

const items = [
  { id: "abc", label: "가나다순" },
  { id: "progress", label: "진도율순" },
];

export default class progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      alarmtime: [],
      user_progress: 0,
      first: [],
      second: [],
    };
  }

  componentDidMount() {
    this.userfunc();
  }

  userfunc = () => {
    fetch("http://152.70.233.113/chamuser?sort=name", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({ data: json });
      });
  };

  /*onMenuPress = (id) => {
    if (id === "abc") {

      // 가나다순 클릭했을 때
      fetch("http://152.70.233.113/chamuser?sort=name", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          this.setState({ first: json }, this.showMsg());
        });
    } else if (id === "progress") {
      // 즐겨찾기순 클릭했을 때
      fetch("http://152.70.233.113/chamuser?sort=prog", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          this.setState({ second: json }, this.showMs1g());
        });
    }
  };*/

  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.menuView}>
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>환자 목록</Text>
          <View style={styles.margin}></View>
        </View>

        <View style={styles.twoView}>
          <Text style={{ fontSize: 21 }}>12월</Text>
        </View>

        <View style={styles.threeView}>
          <View style={styles.fourView}>
            <WithLocalSvg
              width={30}
              height={30}
              asset={ddaysvg}
              style={{ position: "absolute", right: "47%", top: "50%" }}
            />
            <AntDesign name="left" size={30} color="#808080" />

            <View style={styles.dayview}>
              <Text style={styles.lasttext}>화</Text>
              <Text style={styles.lasttext}>30</Text>
            </View>
            <View style={styles.dayview}>
              <Text style={styles.lasttext}>수</Text>
              <Text style={styles.lasttext}>1</Text>
            </View>
            <View style={styles.dayview}>
              <Text style={styles.lasttext}>목</Text>
              <Text style={styles.lasttext}>2</Text>
            </View>
            <View style={styles.dayview}>
              <Text style={styles.lasttext}>금</Text>
              <Text style={styles.ddaytext}>3</Text>
            </View>
            <View style={styles.dayview}>
              <Text style={styles.nexttext}>토</Text>
              <Text style={styles.nexttext}>4</Text>
            </View>
            <View style={styles.dayview}>
              <Text style={styles.nexttext}>일</Text>
              <Text style={styles.nexttext}>5</Text>
            </View>
            <View style={styles.dayview}>
              <Text style={styles.nexttext}>월</Text>
              <Text style={styles.nexttext}>6</Text>
            </View>

            <AntDesign name="right" size={30} color="#808080" />
          </View>
        </View>

        <View style={styles.fouuview}>
          <FlatList
            keyExtractor={(item, index) => index}
            data={this.state.data}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8} //깜빡임을 조절하는 기능
                  onPress={() => {
                    this.props.navigation.navigate("user_progress", {
                      paramName1: item.id,
                    });
                  }}
                >
                  <Task
                    user={item.name}
                    age={item.birth}
                    sex={item.gender}
                    progress={item.progress}
                    minute={item.minute}
                  ></Task>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  finalView: {
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
    fontSize: 20,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },
  fouuview: {
    paddingTop: 10,
    marginBottom: 300,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#ffffff",
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
    height: 300,
    alignItems: "flex-end",
    justifyContent: "center",
    flex: 1,
  },
  lasttext: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#484848",
    paddingBottom: "2%",
  },
  dayview: { alignItems: "center", marginHorizontal: "3%" },
  nexttext: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#B5B5B5",
    paddingBottom: "2%",
  },
  ddaytext: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#ffffff",
    paddingBottom: "2%",
  },
  twoView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "3%",
    backgroundColor: "#F8F8F8",
  },
  threeView: {
    borderRadius: 19,
    backgroundColor: "#FFFFFF",
  },
  fourView: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginTop: "5%",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "2%",
  },
});
