import React, { Component } from "react";
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { WithLocalSvg } from "react-native-svg";
import Task5 from "../screens1/task_home";

import firstsvg from "../icon/first.svg";
import secondsvg from "../icon/second.svg";
import thirdsvg from "../icon/third.svg";
import crownsvg from "../icon/crown.svg";

export default class patient_Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      User_name: "김연자",
    };
  }

  componentDidMount() {
    this.userfunc();
    this.findname();
  }
  userfunc = () => {
    fetch("http://152.70.233.113/chamuser?sort=prog", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  };

  findname = () => {
    fetch(
      "http://152.70.233.113/chamuser/uid/" +
        this.props.route.params.paramsName,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          User_name: json.info.name,
        });
      });
  };

  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.menuView}>
          <Ionicons name="person-circle-sharp" size={35} color="#ffffff" />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>굿나잇 파킨슨</Text>
          <View style={styles.margin}></View>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("patient_profile", {
                paramsName: this.props.route.params.paramsName,
              });
            }}
          >
            <Ionicons name="person-circle-sharp" size={35} color="#5CB405" />
          </TouchableOpacity>
        </View>
        <View style={styles.secondView}>
          {/* 환자 1~3 */}
          <View style={{ height: "27%", marginTop: "3%" }}>
            <View
              style={{
                margin: "5%",
                flexDirection: "row",
                alignContent: "flex-end",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: "7%",
                  margin: "1%",
                }}
              >
                <View
                  style={{
                    borderRadius: 400 / 2,
                    borderColor: "#C4C4C4",
                    borderWidth: 10,
                  }}
                >
                  <Image
                    source={require("../image/i1.png")}
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 400 / 2,
                    }}
                  />
                </View>
                <WithLocalSvg
                  style={{ top: "80%", position: "absolute" }}
                  width={30}
                  height={30}
                  asset={secondsvg}
                />
                <Text style={styles.prizetext}>김인자[89%]</Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "1%",
                }}
              >
                <WithLocalSvg
                  width={50}
                  height={40}
                  asset={crownsvg}
                  style={{ top: "-20%", position: "absolute" }}
                />
                <View
                  style={{
                    borderRadius: 400 / 2,
                    borderColor: "#F8D500",
                    borderWidth: 10,
                  }}
                >
                  <Image
                    source={require("../image/i2.png")}
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 400 / 2,
                    }}
                  />
                </View>
                <WithLocalSvg
                  style={{ top: "80%", position: "absolute" }}
                  width={30}
                  height={30}
                  asset={firstsvg}
                />
                <Text style={styles.prizetext}>오석형[98%]</Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: "7%",
                  margin: "1%",
                }}
              >
                <View
                  style={{
                    borderRadius: 400 / 2,
                    borderColor: "#DA9B73",
                    borderWidth: 10,
                  }}
                >
                  <Image
                    source={require("../image/i3.png")}
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 400 / 2,
                    }}
                  />
                </View>
                <WithLocalSvg
                  style={{ top: "80%", position: "absolute" }}
                  width={30}
                  height={30}
                  asset={thirdsvg}
                />
                <Text style={styles.prizetext}>정상철[67%]</Text>
              </View>
            </View>
          </View>
          {/* 환자 순위 4~ */}

          <FlatList
            style={{
              backgroundColor: "#ffffff",
              margin: "5%",
              borderRadius: 7,
              marginBottom: 200,
            }}
            data={this.state.data.slice(3)}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <Task5
                  record={index + 4}
                  name={item.name}
                  age={item.birth}
                  sex={item.gender}
                  check={this.state.User_name}
                ></Task5>
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
    fontSize: 21,
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
  secondView: {
    backgroundColor: "#F8F8F8",
    height: "100%",
  },
  image: {
    width: "10%",
    height: "10%",
  },
  prizetext: {
    position: "absolute",
    bottom: "-30%",
    fontSize: 17,
    fontWeight: "bold",
  },
});
