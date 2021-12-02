import React, { Component } from "react";
import {
  Alert,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import on from "../icon/r_btn_on.svg";
import off from "../icon/r_btn_off.svg";
const year = 2021 + 1;

import { WithLocalSvg } from "react-native-svg";

export default class user_edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      user_id: "",
      user_age: "",
      user_sex: 1,
      user_group: "",
      user_memo: "",
      age1: on,
      age2: off,

      birth: 19431218,
      gender: "",
      memo: "",
      team: "",
      name: "",
      UID: "",
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
    console.log(2020 - parseInt(this.state.birth / 10000));
    if (this.state.gender === "M") {
      this.setState({ age1: on, age2: off });
    } else {
    }
    this.setState({ age1: off, age2: on });
  }

  sex_click1 = () => {
    if (this.state.age1 === off) {
      this.setState({ age1: on, age2: off });
    } else if (this.state.age1 === on) {
    } else {
      this.setState({ age1: off });
    }
  };

  sex_click2 = () => {
    if (this.state.age2 === off) {
      this.setState({ age2: on, age1: off });
    } else if (this.state.age2 === on) {
    } else {
      this.setState({ age2: off });
    }
  };

  createTwoButtonAlert = () =>
    Alert.alert("프로필을 삭제할까요?", "", [
      {
        text: "취소",
        style: "cancel",
        onPress: () => {
          //navigation.navigate("user_setting")
        },
      },
      {
        cancelable: true,
        text: "삭제",
        onPress: () => {
          Alert.alert("삭제되었습니다.");
          navigation.navigate("TabNavigation");
        },
      },
    ]);

  check_click = () => {};

  edit_finish = () => {
    if (this.state.age1 === on) {
      this.setState({ user_sex: 1 }); // 남자
    } else {
      this.setState({ user_sex: 2 }); // 여자
    }
    Alert.alert("저장되었습니다.");
    this.props.navigation.navigate("user_setting");

    // fetch("http://152.70.233.113/", {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(),
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log("통신 확인");
    //     if (json.dup === 0) {
    //       Alert.alert("저장되었습니다.");
    //       this.props.navigation.navigate("user_setting");
    //     } else {
    //       // 1이면 중복
    //       alert("존재하는 사용자입니다.");
    //     }
    //   });
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
              this.props.navigation.navigate("user_setting");
            }}
          />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>환자 정보 편집</Text>
          <View style={styles.margin}></View>
          <Feather
            name="check"
            size={24}
            color="#5CB405"
            onPress={this.edit_finish}
          />
        </View>
        <ScrollView>
          <View style={styles.firstView}>
            <Ionicons
              name="person-circle-sharp"
              size={120}
              color="lightblue"
              alignItems="center"
            />
            <Text style={styles.profile_edit}>프로필 사진 바꾸기</Text>
          </View>

          <View style={styles.secondView}>
            <View style={styles.memoView}>
              <Text style={styles.text1}>환자 이름</Text>
            </View>
            <View style={styles.textView}>
              <TextInput
                style={styles.text2}
                onChangeText={(text) => {
                  this.setState({ user_name: text });
                }}
                placeholder={this.state.name}
              />
            </View>
          </View>

          <View style={styles.secondView}>
            <View style={styles.memoView}>
              <Text style={styles.text1}>아이디</Text>
            </View>
            <View style={styles.textView}>
              <TextInput
                style={styles.text2}
                onChangeText={(text) => {
                  this.setState({ user_id: text });
                }}
                placeholder={this.state.UID}
              />
            </View>
          </View>

          <View style={styles.secondView}>
            <View style={styles.memoView}>
              <Text style={styles.text1}>나이</Text>
            </View>
            <View style={styles.textView}>
              <TextInput
                style={styles.text2}
                onChangeText={(text) => {
                  this.setState({ user_age: text });
                }}
                placeholder="30"
              />
            </View>
          </View>

          <View style={styles.secondView}>
            <View style={styles.memoView}>
              <Text style={styles.text1}>성별</Text>
            </View>

            <View style={styles.ageview}>
              <TouchableOpacity
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                onPress={this.sex_click1}
              >
                <WithLocalSvg width={20} height={20} asset={this.state.age1} />
              </TouchableOpacity>
              <Text style={styles.text2}> 남</Text>

              <View style={styles.margin}></View>
              <TouchableOpacity
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                onPress={this.sex_click2}
              >
                <WithLocalSvg width={20} height={20} asset={this.state.age2} />
              </TouchableOpacity>
              <Text style={styles.text2}> 여</Text>
              <View style={styles.margin}></View>
            </View>
          </View>

          <View style={styles.secondView}>
            <View style={styles.memoView}>
              <Text style={styles.text1}>조</Text>
            </View>
            <View style={styles.textView}>
              <Text style={styles.textg}> 3</Text>
            </View>
          </View>

          <View style={styles.threeView}>
            <View style={styles.memoView}>
              <Text style={styles.text1}>메모</Text>
            </View>
            <View style={styles.textView}>
              <TextInput
                style={styles.text2}
                onChangeText={(text) => {
                  this.setState({ user_memo: text });
                }}
                placeholder={this.state.memo}
              />
            </View>
          </View>
          <View style={styles.marginView}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                // createTwoButtonAlert(cancelable("취소"));
                Alert.alert("환자정보가 삭제되었습니다.");
              }}
            >
              <EvilIcons name="trash" size={35} color="#808080" />
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    margin: "10%",
    backgroundColor: "#FFFFFF",
  },

  secondView: {
    // padding:30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 40,
    paddingLeft: 20,
    paddingRight: 10,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
  },

  threeView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 10,
    height: 80,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
  },

  marginView: {
    // padding:30,
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    margin: 10,
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
    flex: 2,
  },

  textView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 3,
  },

  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },

  ageview: {
    // padding:30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flex: 3,
    marginRight: 15,
  },

  profile_edit: {
    alignItems: "flex-start",
    fontSize: 16,
    color: "#59A60B",
    justifyContent: "center",
  },

  text1: {
    alignItems: "flex-start",
    fontSize: 17,
    color: "#000000",
    justifyContent: "center",
  },

  text2: {
    alignItems: "flex-start",
    fontSize: 17,
    color: "#484848",
    justifyContent: "center",
    alignItems: "center",
  },
  textg: {
    alignItems: "flex-start",
    fontSize: 17,
    color: "#316200",
    justifyContent: "center",
  },
});
