import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  StatusBar,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import "dayjs/locale/ko";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Task from "./task3";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import SimplePopupMenu from "react-native-simple-popup-menu";
import Context from "../Context/context";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";

const items = [
  { id: "alarm", label: "최근알림순" },
  { id: "progress", label: "진도율 낮은 순" },
  { id: "progress_up", label: "진도율 높은 순" },
  { id: "star", label: "즐겨찾기순" },
];
var now = new Date();
var thisdate2 = new Date(
  now.getFullYear(),
  now.getMonth() + 1,
  now.getDate()
).getDate();

export default class progress extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      daytext: ["일", "월", "화", "수", "목", "금", "토"],
      year: parseInt(now.getFullYear()),
      year1: "2022",
      month: parseInt(now.getMonth() + 1),
      month1: "01",
      day1: "01",
      day: parseInt(now.getDate()),
      yoil: parseInt(now.getDay()), //(0:일요일 ~ 6: 토요일)
      lastdate: 0,
      thisdate: thisdate2,
      lastdate2: 0,
      thisdate2: 0,
      isDatePickerVisible: false,
      setDatePickerVisibility: false,
      data: [],
      data1: [],
      data2: [],
      alarmtime: [],
      user_progress: 0,
      first: [],
      second: [],
      option: "progress",
      man_token: "",
      data_final: [],
      // this_date: 0,
    };
  }
  async componentDidMount() {
    const manager_token = await AsyncStorage.getItem("@manager_token");

    this.setState(
      {
        man_token: manager_token,
        option:
          this.props.route.params.paramSetting2 == null
            ? "alarm"
            : this.props.route.params.paramSetting2,
      },
      () => {
        console.log("진도율 정렬방식:", this.state.option);
        this.userfunc();
      }
    );
    this.setState({
      lastdate: new Date(this.state.year, this.state.month - 1, 0).getDate(),
      thisdate: new Date(this.state.year, this.state.month, 0).getDate(),
    });
  }

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
      case 1:
        return "월";
      case 2:
        return "화";
      case 3:
        return "수";
      case 4:
        return "목";
      case 5:
        return "금";
      case 6:
        return "토";
    }
  };
  daynum = (num) => {
    if (num < 1) {
      return this.state.lastdate + num;
    } else if (num > this.state.thisdate) {
      return num - this.state.thisdate;
    } else {
      return num;
    }
  };
  todaynum = (num) => {
    // 다음달로 넘어갈 경우
    if (num >= this.state.thisdate + 1) {
      // 다음 해로 넘어갈 경우
      if (this.state.month == 12) {
        this.setState({ year: this.state.year + 1, month: 1 });
      }
      // 같은 해에서 이동할 경우
      else {
        this.setState({ month: this.state.month + 1 });
      }

      this.setState({
        day: num - this.state.thisdate,
        lastdate: this.state.thisdate,
        thisdate: new Date(this.state.year, this.state.month + 1, 0).getDate(),
      });

      return this.state.day;
    }
    // 이전달로 넘어갈 경우
    else if (num <= 0) {
      // 이전 해로 넘어갈 경우
      if (this.state.month == 1) {
        this.setState({ year: this.state.year - 1, month: 12 });
      }
      // 같은해에서 이동할 경우
      else {
        this.setState({ month: this.state.month - 1 });
      }
      this.setState({
        day: this.state.lastdate + num,
        thisdate: new Date(this.state.year, this.state.month - 1, 0).getDate(),
        lastdate: new Date(this.state.year, this.state.month - 2, 0).getDate(),
      });

      return this.state.day;
    }

    // 현재 달에서 이동할 경우
    else {
      return num;
    }
  };

  datare = () => {
    fetch(
      "http://hccparkinson.duckdns.org:19737/onlymanager/userlist/progress?date=" +
        this.state.year1 +
        "-" +
        this.state.month1 +
        "-" +
        this.state.day1,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + this.state.man_token.slice(1, -1),
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({ data: json.data }, () => {
          this.state.data.forEach(
            (element) =>
              (element.lastAlarm =
                element.lastAlarm == null
                  ? 0
                  : new Date(element.lastAlarm).getFullYear() * 100000000 +
                    (new Date(element.lastAlarm).getMonth() + 1) * 1000000 +
                    new Date(element.lastAlarm).getDate() * 10000 +
                    new Date(element.lastAlarm).getHours() * 100 +
                    new Date(element.lastAlarm).getMinutes())
          );
          if (this.state.option == "progress") {
            this.setState({
              data_final: this.state.data.sort(function (a, b) {
                return parseFloat(a.percent) - parseFloat(b.percent);
              }),
            });
          } else if (this.state.option == "alarm") {
            this.setState({
              data_final: this.state.data.sort(function (a, b) {
                return parseFloat(b.lastAlarm) - parseFloat(a.lastAlarm);
              }),
            });
          } else if (this.state.option == "progress_up") {
            this.setState({
              data_final: this.state.data.sort(function (a, b) {
                return parseFloat(b.percent) - parseFloat(a.percent);
              }),
            });
          } else if (this.state.option == "star") {
            let data_cp = this.state.data;
            let sortedData = data_cp
              .slice()
              .sort((a, b) => b.bookmark - a.bookmark);
            this.setState({ data_final: sortedData });
          }
        });
      });
  };
  userfunc = () => {
    this.setState(
      {
        year1: String(this.state.year),
        month1:
          String(this.state.month).length == 1
            ? "0" + String(this.state.month)
            : String(this.state.month),
        day1:
          String(this.state.day).length == 1
            ? "0" + String(this.state.day)
            : String(this.state.day),
      },
      () => {
        this.datare();
      }
    );
  };

  onmonthPress = (id) => {
    this.setState({ month: id });
  };
  click = (options) => {
    this.props.navigation.reset({
      routes: [
        {
          name: "TabNavigation",
          params: {
            paramSetting2: options,
            init_set: "progress",
          },
        },
      ],
    });
  };

  plusdata = () => {
    if (this.state.day >= this.state.thisdate + 1) {
      if (this.state.month == 12) {
        this.setState({ year: this.state.year + 1, month: 1 });
        this.setState(
          {
            day: this.state.day - this.state.thisdate,
            lastdate: this.state.thisdate,
            thisdate: new Date(
              this.state.year,
              this.state.month + 1,
              0
            ).getDate(),
          },
          () => {
            this.userfunc();
          }
        );
      }

      else {
        this.setState({ month: this.state.month + 1 });
        this.setState(
          {
            day: this.state.day - this.state.thisdate,
            lastdate: this.state.thisdate,
            thisdate: new Date(
              this.state.year,
              this.state.month + 1,
              0
            ).getDate(),
          },
          () => {
            this.userfunc();
          }
        );
      }
    } else {
      this.userfunc();
    }
  };

  minusdata = () => {
    if (this.state.day <= 0) {
      if (this.state.month == 1) {
        this.setState({ year: this.state.year - 1, month: 12 });
        this.setState(
          {
            day: this.state.lastdate + this.state.day,
            thisdate: new Date(
              this.state.year,
              this.state.month - 1,
              0
            ).getDate(),
            lastdate: new Date(
              this.state.year,
              this.state.month - 2,
              0
            ).getDate(),
          },
          () => {
            this.userfunc();
          }
        );
      }

      else {
        this.setState({ month: this.state.month - 1 });
        this.setState(
          {
            day: this.state.lastdate + this.state.day,
            thisdate: new Date(
              this.state.year,
              this.state.month - 1,
              0
            ).getDate(),
            lastdate: new Date(
              this.state.year,
              this.state.month - 2,
              0
            ).getDate(),
          },
          () => {
            this.userfunc();
          }
        );
      }
    }

    else {
      this.userfunc();
    }
  };

  pressday = (yoilnum, daynum) => {
    this.setState({ yoil: yoilnum, day: daynum }, () => {
      this.minusdata();
    });
  };

  minus = () => {
    this.setState(
      { yoil: this.state.yoil - 7, day: this.state.day - 7 },
      () => {
        this.minusdata();
      }
    );
  };
  plus = () => {
    this.setState(
      { yoil: this.state.yoil + 7, day: this.state.day + 7 },
      () => {
        this.plusdata();
      }
    );
  };

  showDatePicker = () => {
    this.setState({ setDatePickerVisibility: true, isDatePickerVisible: true });
  };

  hideDatePicker = () => {
    this.setState({
      setDatePickerVisibility: false,
      isDatePickerVisible: false,
    });
  };

  handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    this.hideDatePicker();

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var daytext = date.getDay();
    this.setState(
      {
        year: year,
        month: month,
        day: day,
        yoil: daytext,
        lastdate: new Date(this.state.year, this.state.month - 1, 0).getDate(),
        thisdate: new Date(this.state.year, this.state.month, 0).getDate(),
      },
      () => {
        this.userfunc();
      }
    );
  };

  render() {
    return (
      <View style={styles.finalView}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <View style={styles.menuView}>
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>환자 진도율</Text>
          <SimplePopupMenu
            style={styles.margin}
            items={items}
            cancelLabel={"취소"}
            onSelect={(items) => {
              this.click(items.id);
            }}
            onCancel={() => console.log("onCancel")}
          >
            <Entypo
              name="dots-three-vertical"
              style={{ fontSize: responsiveScreenFontSize(3) }}
              color="#595959"
            />
          </SimplePopupMenu>
        </View>

        <View style={styles.twoView}>
          <TouchableOpacity activeOpacity={0.8} onPress={this.showDatePicker}>
            <DateTimePickerModal
              isVisible={this.state.isDatePickerVisible}
              mode="date"
              onConfirm={this.handleConfirm}
              onCancel={this.hideDatePicker}
            />

            <Text style={{ fontSize: responsiveScreenFontSize(2.48) }}>
              {this.state.month} 월
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.threeView}>
          <View style={styles.fourView}>
            <TouchableOpacity onPress={() => this.minus()}>
              <AntDesign
                name="left"
                style={{ fontSize: responsiveScreenFontSize(3) }}
                color="#808080"
              />
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
            <TouchableOpacity onPress={this.plus}>
              <AntDesign
                name="right"
                style={{ fontSize: responsiveScreenFontSize(3) }}
                color="#808080"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.fouuview}>
          <FlatList
            style={styles.FlatList}
            keyExtractor={(item, index) => index.toString()}
            data={this.state.data_final}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8} //깜빡임을 조절하는 기능
                  onPress={() => {
                    this.props.navigation.navigate("user_progress", {
                      id: item.uid,
                      percent: item.percent,
                    });
                  }}
                >
                  <Task
                    id={item.uid}
                    user={item.uname}
                    age={item.birthday}
                    sex={item.gender}
                    progress={item.percent}
                    minute={item.lastAlarm}
                    // 알림 보낸 시간으로 부터 몇분 지났는지 계산해야함 , 1분마다 갱신
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
    height: responsiveScreenHeight(88),
    width: responsiveScreenWidth(100),
    backgroundColor: "#F8F8F8",
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
  fouuview: {
    paddingTop: responsiveHeight(2),
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    height: responsiveScreenHeight(51.7),
  },
  FlatList: {
    marginBottom: responsiveScreenHeight(5),
  },
  margin: {
    alignItems: "flex-end",
    justifyContent: "center",
    flex: 1,
  },

  ddaytext1: {
    fontWeight: "bold",
    fontSize: responsiveScreenFontSize(1.76),
    color: "#FFFFFF",
    paddingBottom: "2%",
  },
  lasttext1: {
    fontWeight: "bold",
    fontSize: responsiveScreenFontSize(1.76),
    color: "#484848",
    paddingBottom: "2%",
  },
  lasttext: {
    fontWeight: "bold",
    fontSize: responsiveScreenFontSize(1.76),
    color: "#484848",
  },
  dayview: {
    alignItems: "center",
    marginHorizontal: "2%",
  },
  todayview: {
    alignItems: "center",
    backgroundColor: "#7AC819",
    marginHorizontal: "3%",
    paddingVertical: "5%",
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "#7AC819",
  },
  nexttext: {
    fontWeight: "bold",
    fontSize: responsiveScreenFontSize(1.76),
    color: "#B5B5B5",
  },
  ddaytext: {
    fontWeight: "bold",
    fontSize: responsiveScreenFontSize(1.76),
    color: "#FFFFFF",
  },
  twoView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F8F8",
    height: responsiveScreenHeight(8.59),
  },

  threeView: {
    borderRadius: 19,
    backgroundColor: "#FFFFFF",
    height: responsiveScreenHeight(10.9),
  },
  fourView: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginTop: responsiveHeight(2),
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
