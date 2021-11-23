import React, { Component } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import { WithLocalSvg } from "react-native-svg";

import Task from "./task3";
import { Entypo } from "@expo/vector-icons";
import ddaysvg from "../icon/dday.svg";
import { AntDesign } from "@expo/vector-icons";
import SimplePopupMenu from "react-native-simple-popup-menu";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

const items = [
  { id: "alarm", label: "알림순" },
  { id: "progress", label: "진도율순" },
];

export default class progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      alarmtime: [],
    };
  }
  userfunc = () => {
    fetch("http://152.70.233.113/user", {
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
    return this.state.data;
  };

  // 알림 전송 시간 받아오기
  alarm_time = () => {
    fetch("http://152.70.233.113/user", {
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
    return this.state.data;
  };

  render() {
    return (
      <View style={styles.finalView}>
        <StatusBar backgroundColor="#D6D6D6" barStyle="dark-content" />
        <View style={{ alignItems: "center" }}>
          <View style={{ width: "80%", justifyContent: "center" }}></View>
        </View>
        <View style={styles.menuView}>
          <Entypo name="dots-three-vertical" size={24} color="#ffffff" />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>환자 진도율 관리</Text>
          <View style={styles.margin}></View>
          <SimplePopupMenu
            items={items}
            cancelLabel={"취소"}
            //onSelect={() => alert(this.label)}
            onCancel={() => console.log("onCancel")}
          >
            <Entypo name="dots-three-vertical" size={24} color="#595959" />
          </SimplePopupMenu>
        </View>
        <View style={styles.oneView}>
          <View style={styles.twoView}>
            <Text style={{ fontSize: 21 }}>2월</Text>
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
                <Text style={styles.lasttext}>일</Text>
                <Text style={styles.lasttext}>31</Text>
              </View>
              <View style={styles.dayview}>
                <Text style={styles.lasttext}>월</Text>
                <Text style={styles.lasttext}>1</Text>
              </View>
              <View style={styles.dayview}>
                <Text style={styles.lasttext}>화</Text>
                <Text style={styles.lasttext}>2</Text>
              </View>
              <View style={styles.dayview}>
                <Text style={styles.lasttext}>수</Text>
                <Text style={styles.ddaytext}>3</Text>
              </View>
              <View style={styles.dayview}>
                <Text style={styles.nexttext}>목</Text>
                <Text style={styles.nexttext}>4</Text>
              </View>
              <View style={styles.dayview}>
                <Text style={styles.nexttext}>금</Text>
                <Text style={styles.nexttext}>5</Text>
              </View>
              <View style={styles.dayview}>
                <Text style={styles.nexttext}>토</Text>
                <Text style={styles.nexttext}>6</Text>
              </View>

              <AntDesign name="right" size={30} color="#808080" />
            </View>

            <FlatList
              data={this.userfunc()}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("user_progress");
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
  oneView: {
    backgroundColor: "#F8F8F8",
    height: "100%",
    flexDirection: "column",
    alignContent: "stretch",
  },
  twoView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "3%",
  },
  threeView: {
    borderRadius: 19,
    backgroundColor: "#ffffff",
    height: "100%",
    paddingBottom: 150,
  },
  fourView: {
    flexDirection: "row",
    marginTop: "5%",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "2%",
  },
});
