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
import Context from "../Context/context";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import on from "../icon/r_btn_on.svg";
import off from "../icon/r_btn_off.svg";

import { WithLocalSvg } from "react-native-svg";

var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiUm9sZXMiOlsiUk9MRV9NQU5BR0VSIl0sImlzcyI6IkhDQyBMYWIiLCJpYXQiOjE2NDMyODk0MzAsImV4cCI6MTY0Mzg5NDIzMH0.XJFkawo8_s4okjavnlT1zVzs9nep6rqlMOCAVqmbloNqyf6BzLYen_Mk4JLhSY3jEP-ogqqIxD6CQO1FAFd-zg"
);

myHeaders.append("Content-Type", "application/json");

export default class user_edit extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      user_id: "",
      user_age: "",
      user_sex: 1,
      user_group: "",
      user_memo: "",
      age1: off,
      age2: off,
      rank1: off,
      rank2: off,
      birth: 19550515,
      gender: "",
      memo: "",
      team: "",
      name: "",
      UID: "",
      rank: true,
      progress: 0,
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
        this.setState({
          birth: json.data[0].birthday,
          gender: json.data[0].gender,
          name: json.data[0].uname,
          memo: json.data[0].memo,
          team: json.data[0].team,
          UID: json.data[0].uid,
          rank: json.data[0].ranking,
        });
        if (this.state.gender === "M") {
          this.setState({ age1: on, age2: off });
        } else {
          this.setState({ age1: off, age2: on });
        }
        if (this.state.rank === true) {
          this.setState({ rank1: on, rank2: off });
        } else {
          this.setState({ rank1: off, rank2: on });
        }
      });
    console.log(this.state.gender);
  }

  edit_update = () => {
    fetch(
      "http://hccparkinson.duckdns.org:19737/onlymanager/uid/" +
        this.props.route.params.id,
      {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          uid: this.state.UID,
          gender: this.state.age1 == on ? "M" : "F",
          birthday:
            this.state.user_age === "" ? this.state.birth : this.state.user_age,
          ranking: this.state.rank1 == on ? "true" : "false",
          memo:
            this.state.user_memo === ""
              ? this.state.memo
              : this.state.user_memo,

          team:
            this.state.user_group === ""
              ? this.state.team
              : this.state.user_group,
          uname:
            this.state.user_name === ""
              ? this.state.name
              : this.state.user_name,
        }),
      }
    )
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
  rank_click1 = () => {
    if (this.state.rank1 === off) {
      this.setState({ rank1: on, rank2: off });
    } else if (this.state.rank1 === on) {
    } else {
      this.setState({ rank1: off });
    }
  };

  rank_click2 = () => {
    if (this.state.rank2 === off) {
      this.setState({ rank2: on, rank1: off });
    } else if (this.state.rank2 === on) {
    } else {
      this.setState({ rank2: off });
    }
  };

  createTwoButtonAlert = () =>
    Alert.alert("프로필을 삭제할까요?", "", [
      {
        text: "취소",
        style: "cancel",
      },
      {
        cancelable: true,
        text: "삭제",
        onPress: () => {
          Alert.alert("삭제되었습니다.");
          this.props.navigation.navigate("TabNavigation");
        },
      },
    ]);

  edit_finish = () => {
    Alert.alert("프로필을 수정할까요?", "", [
      {
        text: "취 소",
        style: "cancel",
        onPress: () => {
          //navigation.navigate("user_setting")
        },
      },
      {
        cancelable: true,
        text: "수 정",
        onPress: () => {
          if (
            this.state.user_age.length != 8 &&
            this.state.user_age.length != 0
          ) {
            Alert.alert("생년월일을 정확하게 입력해주세요.");
          } else {
            Alert.alert("수정되었습니다.");
            if (this.state.age1 === on) {
              this.setState({ user_sex: 1 }); // 남자
            } else {
              this.setState({ user_sex: 2 }); // 여자
            }
            if (this.state.rank1 === on) {
              this.setState({ user_rank: 1 }); // 남자
            } else {
              this.setState({ user_rank: 0 }); // 여자
            }
            this.edit_update();
            this.props.navigation.navigate("user_setting");
          }
        },
      },
    ]);
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
              <Text style={styles.text2}>{this.state.UID}</Text>
            </View>
          </View>

          <View style={styles.secondView}>
            <View style={styles.memoView}>
              <Text style={styles.text1}>생년월일</Text>
            </View>
            <View style={styles.textView}>
              <TextInput
                style={styles.text2}
                onChangeText={(age) => {
                  this.setState({ user_age: age });
                }}
                keyboardType="number-pad"
                placeholder={String(this.state.birth)}
                maxLength={8}
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
              <Text style={styles.text1}>랭킹참가</Text>
            </View>

            <View style={styles.ageview}>
              <TouchableOpacity
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                onPress={this.rank_click1}
              >
                <WithLocalSvg width={20} height={20} asset={this.state.rank1} />
              </TouchableOpacity>
              <Text style={styles.text2}> YES</Text>

              <View style={styles.margin}></View>
              <TouchableOpacity
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                onPress={this.rank_click2}
              >
                <WithLocalSvg width={20} height={20} asset={this.state.rank2} />
              </TouchableOpacity>
              <Text style={styles.text2}> NO</Text>
              <View style={styles.margin}></View>
            </View>
          </View>

          <View style={styles.secondView}>
            <View style={styles.memoView}>
              <Text style={styles.text1}>조</Text>
            </View>
            <View style={styles.textView}>
              <TextInput
                style={styles.textg}
                onChangeText={(text) => {
                  this.setState({ user_group: text });
                }}
                keyboardType="number-pad"
                placeholder={this.state.team === "" ? "없음" : this.state.team}
                maxLength={2}
              />
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
                placeholder={this.state.memo === "" ? "없음" : this.state.memo}
              />
            </View>
          </View>
          <View style={styles.marginView}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                this.createTwoButtonAlert();
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
    height: 45,
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
