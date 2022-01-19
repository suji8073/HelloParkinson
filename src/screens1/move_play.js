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
    console.log("timer");
    console.log(this.state.done_num);
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
          this.props.navigation.navigate("TabNavigation1", {
            paramsName: this.props.route.params.paramsName,
          });
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
                  paramsName: this.props.route.params.paramsName,
                },
                cvxzszxs,
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
                  paramsName: this.props.route.params.paramsName,
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
                  paramsName: this.props.route.params.paramsName,
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
                  paramsName: this.props.route.params.paramsName,
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
      this.props.navigation.navigate("move_1", {
        paramsName: this.props.route.params.paramsName,
      });
    } else if (this.state.cat1 == 2) {
      this.props.navigation.navigate("move_2", {
        paramsName: this.props.route.params.paramsName,
      });
    } else if (this.state.cat1 == 3) {
      this.props.navigation.navigate("move_3", {
        paramsName: this.props.route.params.paramsName,
      });
    } else if (this.state.cat1 == 4) {
      this.props.navigation.navigate("move_4", {
        paramsName: this.props.route.params.paramsName,
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
            source={require("../screens1/Water.mp4")}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
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
