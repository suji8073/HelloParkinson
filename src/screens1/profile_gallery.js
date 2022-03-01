import React, { Component } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import p1 from "../image/p1.png";
import p2 from "../image/p2.png";
import p3 from "../image/p3.png";
import p4 from "../image/p4.png";
import p5 from "../image/p5.png";
import p6 from "../image/p6.png";
import p7 from "../image/p7.png";
import p8 from "../image/p8.png";
import p9 from "../image/p9.png";
import p_1 from "../image/p-1.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class patient_gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilepic: 0,
      check0: 0,
      check1: 0,
      check2: 0,
      check3: 0,
      check4: 0,
      check5: 0,
      check6: 0,
      check7: 0,
      check8: 0,
      check9: 0,
    };
  }
  async componentDidMount() {
    const user_token = await AsyncStorage.getItem("@user_token");
    this.setState({ token: user_token });

    fetch("http://hccparkinson.duckdns.org:19737/chamuser", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + String(this.state.token).slice(1, -1),
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState(
          {
            profilepic: json.data[0].profilepic,
          },
          () => {
            this.profile(this.state.profilepic);
          }
        );
      });
  }

  profile = (pic) => {
    if (pic === "-1") {
      this.setState({ check0: 1 });
    } else if (pic === "1") {
      this.setState({ check1: 1 });
    } else if (pic === "2") {
      this.setState({ check2: 1 });
    } else if (pic === "3") {
      this.setState({ check3: 1 });
    } else if (pic === "4") {
      this.setState({ check4: 1 });
    } else if (pic === "5") {
      this.setState({ check5: 1 });
    } else if (pic === "6") {
      this.setState({ check6: 1 });
    } else if (pic === "7") {
      this.setState({ check7: 1 });
    } else if (pic === "8") {
      this.setState({ check8: 1 });
    } else if (pic === "9") {
      this.setState({ check9: 1 });
    }
  };

  pic_select = () => {
    this.setState({
      check0: 0,
      check1: 0,
      check2: 0,
      check3: 0,
      check4: 0,
      check5: 0,
      check6: 0,
      check7: 0,
      check8: 0,
      check9: 0,
    });
  };

  pic_select0 = () => {
    this.pic_select();
    this.setState({ check0: 1 });
  };

  pic_select1 = () => {
    this.pic_select();
    this.setState({ check1: 1 });
  };

  pic_select2 = () => {
    this.pic_select();
    this.setState({ check2: 1 });
  };

  pic_select3 = () => {
    this.pic_select();
    this.setState({ check3: 1 });
  };

  pic_select4 = () => {
    this.pic_select();
    this.setState({ check4: 1 });
  };

  pic_select5 = () => {
    this.pic_select();
    this.setState({ check5: 1 });
  };

  pic_select6 = () => {
    this.pic_select();
    this.setState({ check6: 1 });
  };

  pic_select7 = () => {
    this.pic_select();
    this.setState({ check7: 1 });
  };

  pic_select8 = () => {
    this.pic_select();
    this.setState({ check8: 1 });
  };

  pic_select9 = () => {
    this.pic_select();
    this.setState({ check9: 1 });
  };

  edit_finish = () => {
    Alert.alert("프로필 사진을 수정할까요?", "", [
      {
        text: "취 소",
        style: "cancel",
      },
      {
        cancelable: true,
        text: "수 정",
        onPress: () => {
          console.log(this.profile_check());

          fetch("http://hccparkinson.duckdns.org:19737/chamuser", {
            method: "PUT",
            headers: {
              Authorization: "Bearer " + String(this.state.token).slice(1, -1),
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              profilepic: this.profile_check(),
            }),
          })
            .then((response) => {
              console.log(response.status);
              this.props.navigation.push("patient_profile");
            })
            .catch((error) => {
              console.log(error);
            });
        },
      },
    ]);
  };

  profile_check = () => {
    if (this.state.check0 === 1) {
      return "-1";
    } else if (this.state.check1 === 1) {
      return "1";
    } else if (this.state.check2 === 1) {
      return "2";
    } else if (this.state.check3 === 1) {
      return "3";
    } else if (this.state.check4 === 1) {
      return "4";
    } else if (this.state.check5 === 1) {
      return "5";
    } else if (this.state.check6 === 1) {
      return "6";
    } else if (this.state.check7 === 1) {
      return "7";
    } else if (this.state.check8 === 1) {
      return "8";
    } else if (this.state.check9 === 1) {
      return "9";
    }
  };

  render() {
    return (
      <View style={styles.finalView}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <View style={styles.menuView}>
          <AntDesign
            name="left"
            style={{ fontSize: responsiveScreenFontSize(3) }}
            color="#808080"
            onPress={() => {
              this.props.navigation.pop();
            }}
          />

          <View style={styles.margin}></View>
          <Text style={styles.titleText}>프로필 사진 편집</Text>
          <View style={styles.margin}></View>
          <AntDesign
            name="check"
            style={{ fontSize: responsiveScreenFontSize(3) }}
            color="#5CB405"
            onPress={this.edit_finish}
          />
        </View>
        <ScrollView contentContainerStyle={styles.firstView1}>
          <View style={styles.piclayout}>
            <TouchableOpacity onPress={this.pic_select0}>
              <Image
                source={p_1}
                style={
                  this.state.check0 === 0
                    ? styles.circle_check_off
                    : styles.circle_check_on
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.piclayout}>
            <TouchableOpacity onPress={this.pic_select1}>
              <Image
                source={p1}
                style={
                  this.state.check1 === 0
                    ? styles.circle_check_off
                    : styles.circle_check_on
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.piclayout}>
            <TouchableOpacity onPress={this.pic_select2}>
              <Image
                source={p2}
                style={
                  this.state.check2 === 0
                    ? styles.circle_check_off
                    : styles.circle_check_on
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.piclayout}>
            <TouchableOpacity onPress={this.pic_select3}>
              <Image
                source={p3}
                style={
                  this.state.check3 === 0
                    ? styles.circle_check_off
                    : styles.circle_check_on
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.piclayout}>
            <TouchableOpacity onPress={this.pic_select4}>
              <Image
                source={p4}
                style={
                  this.state.check4 === 0
                    ? styles.circle_check_off
                    : styles.circle_check_on
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.piclayout}>
            <TouchableOpacity onPress={this.pic_select5}>
              <Image
                source={p5}
                style={
                  this.state.check5 === 0
                    ? styles.circle_check_off
                    : styles.circle_check_on
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.piclayout}>
            <TouchableOpacity onPress={this.pic_select6}>
              <Image
                source={p6}
                style={
                  this.state.check6 === 0
                    ? styles.circle_check_off
                    : styles.circle_check_on
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.piclayout}>
            <TouchableOpacity onPress={this.pic_select7}>
              <Image
                source={p7}
                style={
                  this.state.check7 === 0
                    ? styles.circle_check_off
                    : styles.circle_check_on
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.piclayout}>
            <TouchableOpacity onPress={this.pic_select8}>
              <Image
                source={p8}
                style={
                  this.state.check8 === 0
                    ? styles.circle_check_off
                    : styles.circle_check_on
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.piclayout}>
            <TouchableOpacity onPress={this.pic_select9}>
              <Image
                source={p9}
                style={
                  this.state.check9 === 0
                    ? styles.circle_check_off
                    : styles.circle_check_on
                }
              />
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.marginView}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  finalView: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    backgroundColor: "#FFFFFF",
  },
  text1: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2),
    color: "#484848",
    justifyContent: "center",
  },
  circle_check_off: {
    height: responsiveScreenHeight(18),
    width: responsiveScreenHeight(18),
    borderRadius: 400 / 2,
  },
  circle_check_on: {
    height: responsiveScreenHeight(18),
    width: responsiveScreenHeight(18),
    borderRadius: 400 / 2,
    borderColor: "#5CB405",
    borderWidth: 4,
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

  firstView: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "5.1%",
    marginBottom: "10.3%",
    backgroundColor: "#FFFFFF",
  },
  firstView1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5.1%",
    paddingBottom: "40.3%",
    backgroundColor: "#FFFFFF",
    flexWrap: "wrap",
  },
  secondView: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: "7%",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
  },

  threeView: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: "9%",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
    paddingLeft: "7%",
  },

  marginView: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1.5,
    backgroundColor: "#FFFFFF",
  },

  margin: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },

  memoView: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: "8%",
    flex: 1,
  },

  textView: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 2,
  },

  text2: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2),
    color: "#484848",
    justifyContent: "center",
  },

  user_name: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2),
    color: "#59A60B",
    fontWeight: "bold",
    justifyContent: "center",
  },

  user_age: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2),
    color: "#747474",
    justifyContent: "center",
  },
  piclayout: { marginHorizontal: "4%", marginVertical: "2%" },
});
