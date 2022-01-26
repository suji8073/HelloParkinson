import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Body,
  TextInput,
  Alert,
} from "react-native";
import Task from "./task_move";

import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Video } from "expo-av";

// require("../screens1/1-1_move.mp4")
let data = {
  "1-1": require("../video/1-1.mp4"),
  "1-2": require("../video/1-2.mp4"),
  "1-3": require("../video/1-3.mp4"),
  "1-4": require("../video/1-4.mp4"),
  "1-5": require("../video/1-5.mp4"),
  "1-6": require("../video/1-6.mp4"),
  "1-7": require("../video/1-7.mp4"),
  "1-8": require("../video/1-8.mp4"),
  "1-9": require("../video/1-9.mp4"),
  "1-10": require("../video/1-10.mp4"),
  "1-11": require("../video/1-11.mp4"),
  "1-12": require("../video/1-12.mp4"),

  "2-1": require("../video/2-1.mp4"),
  "2-2": require("../video/2-2.mp4"),
  "2-3": require("../video/2-3.mp4"),
  "2-4": require("../video/2-4.mp4"),
  "2-5": require("../video/2-5.mp4"),
  "2-6": require("../video/2-6.mp4"),
  "2-7": require("../video/2-7.mp4"),
  "2-8": require("../video/2-8.mp4"),
  "2-9": require("../video/2-9.mp4"),
  "2-10": require("../video/2-10.mp4"),
  "2-11": require("../video/2-11.mp4"),
  "2-12": require("../video/2-12.mp4"),
  "2-13": require("../video/2-13.mp4"),
  "2-14": require("../video/2-14.mp4"),

  "3-1": require("../video/3-1.mp4"),
  "3-2": require("../video/3-2.mp4"),
  "3-3": require("../video/3-3.mp4"),
  "3-4": require("../video/3-4.mp4"),
  "3-5": require("../video/3-5.mp4"),

  "4-1": require("../video/4-1.mp4"),
  "4-2": require("../video/4-2.mp4"),
  "4-3": require("../video/4-3.mp4"),
  "4-4": require("../video/4-4.mp4"),
  "4-5": require("../video/4-5.mp4"),
  "4-6": require("../video/4-6.mp4"),
  "4-7": require("../video/4-7.mp4"),
  "4-8": require("../video/4-8.mp4"),
  "4-9": require("../video/4-9.mp4"),
  "4-10": require("../video/4-10.mp4"),
  "4-11": require("../video/4-11.mp4"),
  "4-12": require("../video/4-12.mp4"),
  "4-13": require("../video/4-13.mp4"),
  "4-14": require("../video/4-14.mp4"),
};

export default class move_play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      link: "",
      isLoading: true,
      cat1: "",
      cat2: "",
      nowpage: "",
      done_num: 0,
      assign_num: 0,
    };
  }

  componentDidMount() {
    this.userfunc();
    this.setState({
      cat1: String(this.props.route.params.paramName1).substring(0, 1),
      cat2: String(this.props.route.params.paramName1).substring(2, 4),
      done_num: this.props.route.params.done_num,
      assign_num: this.props.route.params.assign_num,
    });

    this.Time();
  }

  Time = () => {
    // 1,000가 1초
    setTimeout(() => {
      this.setState({
        isLoading: false,
        done_num: this.props.route.params.done_num + 1,
      });
    }, 10000); // 10초
  };

  userfunc = () => {
    fetch(
      "http://152.70.233.113/chammotion/id/" +
        this.props.route.params.paramName1,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          name: json.name,
          id: json.id,
          link: json.link,
        });
      });
  };
  nextpage = () => {
    if (this.state.isLoading === false) {
      if (this.state.cat1 == 1) {
        if (this.state.cat2 == 12) {
          this.props.navigation.navigate("TabNavigation1");
        } else {
          this.props.navigation.reset({
            routes: [
              {
                name: "move_play",
                params: {
                  paramName1: String(
                    this.state.cat1 + "-" + (parseInt(this.state.cat2) + 1)
                  ),
                  paramName2: "신장운동",
                },
              },
            ],
          });
        }
      } else if (this.state.cat1 == 2) {
        if (this.state.cat2 == 14) {
          this.props.navigation.navigate("TabNavigation1");
        } else {
          this.props.navigation.reset({
            routes: [
              {
                name: "move_play",
                params: {
                  paramName1: String(
                    this.state.cat1 + "-" + (parseInt(this.state.cat2) + 1)
                  ),
                  paramName2: "근력운동",
                },
              },
            ],
          });
        }
      } else if (this.state.cat1 == 3) {
        if (this.state.cat2 == 5) {
          this.props.navigation.navigate("TabNavigation1");
        } else {
          this.props.navigation.reset({
            routes: [
              {
                name: "move_play",
                params: {
                  paramName1: String(
                    this.state.cat1 + "-" + (parseInt(this.state.cat2) + 1)
                  ),
                  paramName2: "균형 및 협응 운동",
                },
              },
            ],
          });
        }
      } else if (this.state.cat1 == 4) {
        if (this.state.cat2 == 14) {
          this.props.navigation.navigate("TabNavigation1");
        } else {
          this.props.navigation.reset({
            routes: [
              {
                name: "move_play",
                params: {
                  paramName1: String(
                    this.state.cat1 + "-" + (parseInt(this.state.cat2) + 1)
                  ),
                  paramName2: "구강 및 발성 운동",
                },
              },
            ],
          });
        }
      }
    }
  };
  where_page = () => {
    if (this.state.cat1 == 1) {
      this.props.navigation.navigate("move_1");
    } else if (this.state.cat1 == 2) {
      this.props.navigation.navigate("move_2");
    } else if (this.state.cat1 == 3) {
      this.props.navigation.navigate("move_3");
    } else if (this.state.cat1 == 4) {
      this.props.navigation.navigate("move_4");
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
            onPress={this.where_page}
          />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>
            {this.props.route.params.paramName2}
          </Text>
          <View style={styles.margin}></View>
          <EvilIcons name="star" size={30} color="#ffffff" />
        </View>

        <View style={styles.secondView}>
          <Video
            //source={{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
            source={data[this.props.route.params.paramName1]}
            rate={1.0}
            volume={1.0}
            resizeMode="cover"
            shouldPlay
            useNativeControls
            style={styles.fullScreen}
          />
        </View>

        <View style={styles.chatControl}>
          <TouchableOpacity
            style={
              this.state.isLoading === false
                ? styles.sendButton
                : styles.sendButton1
            }
            activeOpacity={0.8}
            onPress={this.nextpage}
          >
            <View style={styles.mg}></View>
            <View style={styles.margin}></View>
            <View style={styles.margin}></View>
            <Text
              style={
                this.state.isLoading === false ? styles.white : styles.green1
              }
            >
              {this.state.isLoading === false
                ? this.state.done_num < this.state.assign_num
                  ? "다 음  세 트  ( " +
                    this.state.done_num +
                    " / " +
                    this.state.assign_num +
                    " )"
                  : "다 음  운 동"
                : this.state.done_num !== this.state.assign_num
                ? "다 음  세 트 ( " +
                  this.state.done_num +
                  " / " +
                  this.state.assign_num +
                  " )"
                : "다 음  운 동"}
            </Text>
            <View style={styles.margin}></View>
            <View style={styles.margin}>
              <AntDesign
                name="right"
                size={15}
                color={this.state.isLoading === false ? "#FFFFFF" : "#AFAFAF"}
              />
            </View>
            <View style={styles.mg}></View>
          </TouchableOpacity>
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
  fullScreen: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  menuView: {
    marginTop: "10%",
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
    fontSize: 21,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },

  firstView: {
    // padding:30,
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    margin: 15,
    backgroundColor: "#FFFFFF",
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  secondView: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "5%",
    marginBottom: "5%",
    flex: 1,
  },
  white: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  green1: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#AFAFAF",
    alignItems: "center",
    justifyContent: "center",
  },

  sendButton: {
    backgroundColor: "#7AC819",
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  sendButton1: {
    backgroundColor: "#F5F5F5",
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  chatControl: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15%",
  },

  margin: {
    // padding:30,
    alignItems: "flex-end",
    paddingRight: 20,
    justifyContent: "center",
    flex: 1,
  },
  mg: {
    flex: 0.1,
  },
});
