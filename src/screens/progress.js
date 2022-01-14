import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Alert,
} from "react-native";
import { WithLocalSvg } from "react-native-svg";

import Task from "./task3";
import { Entypo } from "@expo/vector-icons";
import ddaysvg from "../icon/dday.svg";
import { AntDesign } from "@expo/vector-icons";
import SimplePopupMenu from "react-native-simple-popup-menu";

const items = [
  { id: "alarm", label: "최근알림순" },
  { id: "progress", label: "진도율순" },
];
var now = new Date();
export default class progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daytext: ["일", "월", "화", "수", "목", "금", "토"],
      year: 0,
      month: 0,
      day: 0,
      lastdate: 0,
      thisdate: 0,
      yoil: 0, //(0:일요일 ~ 6: 토요일)
      data: [],
      alarmtime: [],
      user_progress: 0,
      first: [],
      second: [],
    };
  }

  componentDidMount() {
    this.userfunc();
    this.setState({ year: parseInt(now.getFullYear()) });
    this.setState({ month: parseInt(now.getMonth() + 1) });
    this.setState({ day: parseInt(now.getDate()) });
    this.setState({ yoil: parseInt(now.getDay()) });
    this.setState({
      lastdate: new Date(this.state.year, this.state.month - 1, 0).getDate(),
    });
    this.setState({
      thisdate: new Date(this.state.year, this.state.month, 0).getDate(),
    });
  }
  minus = () => {
    this.setState({ yoil: this.state.yoil - 1 });
    this.setState({ day: this.state.day - 1 });
    // this.userfunc() 특정 날짜의 환자 전체 진도율
  };
  plus = () => {
    this.setState({ yoil: this.state.yoil + 1 });
    this.setState({ day: this.state.day + 1 });
    // this.userfunc() 특정 날짜의 환자 전체 진도율
  };
  dayy = (num) => {
    while (num < 0) {
      num += 7;
    }
    while (num > 6) {
      num -= 7;
    }
    switch (num) {
      case 0:
        return "일";
        break;
      case 1:
        return "월";
        break;
      case 2:
        return "화";
        break;
      case 3:
        return "수";
        break;
      case 4:
        return "목";
        break;
      case 5:
        return "금";
        break;
      case 6:
        return "토";
        break;
    }
  };
  daynum = (num) => {
    if (num < 1) {
      return this.state.lastdate + num + 1;
    } else if (num > this.state.lastdate) {
      return num - this.state.lastdate;
    } else {
      return num;
    }
  };
  todaynum = (num) => {
    // 이전달로 넘어갈 경우
    if (num == 0) {
      // 이전 해로 넘어갈 경우
      if (this.state.month == 1) {
        this.setState({ month: 12 });
      }
      // 같은해에서 이동할 경우
      else {
        this.setState({ month: this.state.month - 1 });
      }
      this.setState({ thisdate: this.state.lastdate });
      this.setState({
        lastdate: new Date(this.state.year, this.state.month - 1, 0).getDate(),
      });
      this.setState({ day: this.state.thisdate });

      return this.state.day;
    }

    // 다음달로 넘어갈 경우
    // else if (num == this.state.thisdate + 1) {
    //   // 다음 해로 넘어갈 경우
    //   if (this.state.month == 12) {
    //     this.setState({ month: 1 });
    //   }
    //   // 같은 해에서 이동할 경우
    //   else {
    //     this.setState({ month: this.state.month + 1 });
    //   }
    //   this.setState({ lastdate: this.state.thisdate });
    //   this.setState({
    //     thisdate: new Date(this.state.year, this.state.month, 0).getDate(),
    //   });
    //   // this.setState({ day: 1 });
    //   return this.state.day;
    // }
    // 현재 달에서 이동할 경우
    else {
      return num;
    }
  };

  pressday = (yoilnum, daynum) => {
    if (daynum <= 0) {
      // 이전 해로 넘어갈 경우
      if (this.state.month == 1) {
        this.setState({ month: 12 });
      }
      // 같은해에서 이동할 경우
      else {
        this.setState({ month: this.state.month - 1 });
      }
      this.setState({ thisdate: this.state.lastdate });
      this.setState({
        lastdate: new Date(this.state.year, this.state.month - 1, 0).getDate(),
      });
      this.setState({ day: this.state.thisdate + daynum });
    } else {
      this.setState({ day: daynum });
    }
    this.setState({ yoil: yoilnum });
  };

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
  onMenuPress = (id) => {
    if (id === "alarm") {
      // 최근알림순 클릭했을 때
      // 주소 변경필요
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
          return this.state.data;
        });
    } else if (id === "progress") {
      // 진도율 낮은 순

      fetch("http://152.70.233.113/chamuser?sort=prog", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          this.setState({ data: json });
          return this.state.data;
        });
    }
  };

  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.menuView}>
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>환자 진도율</Text>
          <SimplePopupMenu
            style={styles.margin}
            items={items}
            cancelLabel={"취소"}
            onSelect={(items) => {
              this.onMenuPress(items.id);
            }}
            onCancel={() => console.log("onCancel")}
          >
            <Entypo name="dots-three-vertical" size={24} color="#595959" />
          </SimplePopupMenu>
        </View>

        <View style={styles.twoView}>
          {/* <Text style={{ fontSize: 21 }}>12월</Text> */}
          <Text style={{ fontSize: 21 }}>{this.state.thisdate} 월</Text>
        </View>

        <View style={styles.threeView}>
          <View style={styles.fourView}>
            <TouchableOpacity onPress={() => this.minus()}>
              <AntDesign name="left" size={30} color="#808080" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.pressday(this.state.yoil - 3, this.state.day - 3)
              }
            >
              <View style={styles.dayview}>
                <Text style={styles.lasttext1}>
                  {this.dayy(this.state.yoil - 3)}
                </Text>
                <Text style={styles.lasttext}>
                  {this.daynum(this.state.day - 3)}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.pressday(this.state.yoil - 2, this.state.day - 2)
              }
            >
              <View style={styles.dayview}>
                <Text style={styles.lasttext1}>
                  {this.dayy(this.state.yoil - 2)}
                </Text>
                <Text style={styles.lasttext}>
                  {this.daynum(this.state.day - 2)}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.pressday(this.state.yoil - 1, this.state.day - 1)
              }
            >
              <View style={styles.dayview}>
                <Text style={styles.lasttext1}>
                  {this.dayy(this.state.yoil - 1)}
                </Text>
                <Text style={styles.lasttext}>
                  {this.daynum(this.state.day - 1)}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.pressday(this.state.yoil, this.state.day)}
            >
              <View style={styles.todayview}>
                <Text style={styles.ddaytext1}>
                  {this.dayy(this.state.yoil)}
                </Text>
                <Text style={styles.ddaytext}>
                  {this.todaynum(this.state.day)}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.pressday(this.state.yoil + 1, this.state.day + 1)
              }
            >
              <View style={styles.dayview}>
                <Text style={styles.lasttext1}>
                  {this.dayy(this.state.yoil + 1)}
                </Text>
                <Text style={styles.lasttext}>
                  {this.daynum(this.state.day + 1)}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.pressday(this.state.yoil + 2, this.state.day + 2)
              }
            >
              <View style={styles.dayview}>
                <Text style={styles.lasttext1}>
                  {this.dayy(this.state.yoil + 2)}
                </Text>
                <Text style={styles.lasttext}>
                  {this.daynum(this.state.day + 2)}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.pressday(this.state.yoil + 3, this.state.day + 3)
              }
            >
              <View style={styles.dayview}>
                <Text style={styles.lasttext1}>
                  {this.dayy(this.state.yoil + 3)}
                </Text>
                <Text style={styles.lasttext}>
                  {this.daynum(this.state.day + 3)}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.plus()}>
              <AntDesign name="right" size={30} color="#808080" />
            </TouchableOpacity>
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
  fouuview: {
    paddingTop: 10,
    marginBottom: 295,
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
  nexttext1: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#B5B5B5",
    paddingBottom: "2%",
  },
  ddaytext1: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#FFFFFF",
    paddingBottom: "2%",
  },
  lasttext1: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#484848",
    paddingBottom: "2%",
  },
  lasttext: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#484848",
    // paddingBottom: "2%",
  },
  dayview: {
    alignItems: "center",
    marginHorizontal: "2%",
  },
  todayview: {
    alignItems: "center",
    backgroundColor: "#7AC819",
    marginHorizontal: "3%",
    // paddingHorizontal: "%",
    paddingVertical: "5%",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#7AC819",
  },
  nexttext: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#B5B5B5",
    // paddingBottom: "2%",
  },
  ddaytext: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#FFFFFF",
    // borderRadius: 19,
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
