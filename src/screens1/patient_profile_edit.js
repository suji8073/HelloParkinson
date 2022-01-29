import React, { Component } from "react";
import { StyleSheet, View, Text, Alert, TextInput } from "react-native";

import { WithLocalSvg } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import nocheck from "../icon/radio_btn_nocheck.svg";
import check from "../icon/radio_button_check.svg";
import { TouchableOpacity } from "react-native-gesture-handler";

//////카메라 권한
import { PermissionsAndroid, Platform } from "react-native";
//import CameraRoll from "@react-native-community/cameraroll";

async function hasAndroidPermission() {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === "granted";
}

async function savePicture() {
  if (Platform.OS === "android" && !(await hasAndroidPermission())) {
    return;
  }
  CameraRoll.save(tag, { type, album });
}

var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdWppIiwiUm9sZXMiOlsiUk9MRV9VU0VSIl0sImlzcyI6IkhDQyBMYWIiLCJpYXQiOjE2NDMxNzkwMDIsImV4cCI6MTY0Mzc4MzgwMn0.mRzdnAN4fibi22ao3-YzNI-lnm5t64IDc1gSx3w4ix1GrwkVrn6LZ6RCqK-Zx3hx3CFtidCo3EifVFcJeCmnAg"
);

myHeaders.append("Content-Type", "application/json");

import Context from "../Context/context";
export default class patient_profile_edit extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      onname1: nocheck,
      onname2: nocheck,
      rank1: nocheck,
      rank2: nocheck,
      user_pw: "",
      user_pww: "",
      user_age: "",
      birth: 0,
      gender: "",
      name: "",
      UID: "",
      rank: 1,
      progress: "",
      M: "남",
      F: "여",
      post_rank: true,
    };
  }

  componentDidMount() {
    fetch("http://hccparkinson.duckdns.org:19737/chamuser", {
      method: "GET",
      headers: myHeaders,
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState(
          {
            birth: json.data[0].birthday,
            gender: json.data[0].gender == "F" ? "여" : "남",
            name: json.data[0].uname,
            UID: json.data[0].uid,
            rank: json.data[0].ranking,
          },
          () => {
            this.change_gender();
            this.change_rank();
            console.log("rank : " + this.state.rank);
          }
        );
      });
  }

  edit_update = () => {
    fetch("http://hccparkinson.duckdns.org:19737/chamuser", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        uid: this.state.UID,
        //password: this.state.user_pw,
        gender: this.state.onname1 == check ? "M" : "F",
        birthday:
          this.state.user_age === "" ? this.state.birth : this.state.user_age,
        ranking: this.state.post_rank,
      }),
    })
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  edit_pw_update = () => {
    fetch("http://hccparkinson.duckdns.org:19737/chamuser", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        uid: this.state.UID,
        password: this.state.user_pw,
        gender: this.state.onname1 == check ? "M" : "F",
        birthday:
          this.state.user_age === "" ? this.state.birth : this.state.user_age,
        ranking: this.state.post_rank,
      }),
    })
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  change_rank1 = () => {
    console.log(this.state.rank);
    var check = this.state.rank === true ? 1 : 0;
    console.log(check);
    if (this.state.gender === this.state.M) {
      this.setState({ onname1: check, onname2: nocheck });
    } else if (this.state.gender === this.state.F) {
      this.setState({ onname1: nocheck, onname2: check });
    }
  };

  change_rank = () => {
    if (this.state.rank === true) {
      this.setState({ rank1: check, rank2: nocheck });
    } else if (this.state.rank === false) {
      console.log(false + "입니다");
      this.setState({ rank1: nocheck, rank2: check });
    }
  };

  change_gender = () => {
    if (this.state.gender === this.state.M) {
      this.setState({ onname1: check, onname2: nocheck });
    } else if (this.state.gender === this.state.F) {
      this.setState({ onname1: nocheck, onname2: check });
    }
  };

  edit_finish = () => {
    Alert.alert("프로필을 수정할까요?", "", [
      {
        text: "취 소",
        style: "cancel",
      },
      {
        cancelable: true,
        text: "수 정",
        onPress: () => {
          if (
            this.state.user_age.length != 8 &&
            this.state.user_age.length != 0
          ) {
            Alert.alert("생년월일 8자리를 정확하게 입력해주세요.");
          } else if (this.state.user_pw !== this.state.user_pww) {
            Alert.alert("비밀번호가 일치하지 않습니다.");
          } else {
            Alert.alert("수정되었습니다.");

            // this.context.changePW(this.state.user_pw);
            // db비밀번호 변경, context비밀번호 변
            this.state.user_pw === ""
              ? this.edit_update()
              : this.edit_pw_update();

            this.props.navigation.navigate("patient_profile");
          }
        },
      },
    ]);
  };

  handleClick1 = () => {
    if (this.state.onname1 === nocheck && this.state.onname2 === check) {
      this.setState({ onname1: check, onname2: nocheck });
    } else if (this.state.onname1 === nocheck) {
      this.setState({ onname1: check });
    } else {
      this.setState({ onname1: nocheck });
    }
  };
  handleClick2 = () => {
    if (this.state.onname2 === nocheck && this.state.onname1 === check) {
      this.setState({ onname2: check, onname1: nocheck });
    } else if (this.state.onname2 === nocheck) {
      this.setState({ onname2: check });
    } else {
      this.setState({ onname2: nocheck });
    }
  };
  rankClick1 = () => {
    if (this.state.rank1 === nocheck && this.state.rank2 === check) {
      this.setState({ rank1: check, rank2: nocheck, post_rank: true });
    }
  };
  rankClick2 = () => {
    if (this.state.rank2 === nocheck && this.state.rank1 === check) {
      this.setState({ rank2: check, rank1: nocheck, post_rank: false });
    }
  };

  _handleButtonPress = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: "Photos",
    })
      .then((r) => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
        //Error Loading Images
      });
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
              this.props.navigation.pop();
            }}
          />

          <View style={styles.margin}></View>
          <Text style={styles.titleText}>프로필 편집</Text>
          <View style={styles.margin}></View>
          <AntDesign
            name="check"
            size={24}
            color="#5CB405"
            onPress={this.edit_finish}
          />
        </View>

        <View style={styles.firstView}>
          <Ionicons
            name="person-circle-sharp"
            size={120}
            color="lightblue"
            alignItems="center"
          />

          <TouchableOpacity
          //onPress={CameraRoll.getAlbums({ assetType: "All" })}
          >
            <Text style={styles.user_name}>프로필 사진 변경</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.secondView}>
          <View style={styles.memoView}>
            <Text style={styles.text1}>이름</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text2}>{this.state.name}</Text>
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
            <Text style={styles.text1}>비밀번호</Text>
          </View>
          <View style={styles.textView}>
            <TextInput
              style={styles.text2}
              onChangeText={(text) => {
                this.setState({ user_pw: text });
              }}
              placeholder="(미입력시 기존 비밀번호 유지)"
            />
          </View>
        </View>
        <View style={styles.secondView}>
          <View style={styles.memoView}>
            <Text style={styles.text1}>비밀번호 재확인</Text>
          </View>
          <View style={styles.textView}>
            <TextInput
              style={styles.text2}
              onChangeText={(text) => {
                this.setState({ user_pww: text });
              }}
              placeholder="(미입력시 기존 비밀번호 유지)"
            />
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
              onPress={this.handleClick1}
            >
              <WithLocalSvg width={24} height={24} asset={this.state.onname1} />
            </TouchableOpacity>

            <Text style={styles.text2}> 남</Text>

            <View style={styles.margin}></View>
            <TouchableOpacity
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              onPress={this.handleClick2}
            >
              <WithLocalSvg width={24} height={24} asset={this.state.onname2} />
            </TouchableOpacity>
            <Text style={styles.text2}> 여</Text>

            <View style={styles.margin}></View>
          </View>
        </View>
        <View style={styles.secondView1}>
          <View style={styles.memoView}>
            <Text style={styles.text1}>랭킹참가</Text>
          </View>
          <View style={styles.ageview}>
            <TouchableOpacity
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              onPress={this.rankClick1}
            >
              <WithLocalSvg width={24} height={24} asset={this.state.rank1} />
            </TouchableOpacity>

            <Text style={styles.text2}> 한다</Text>

            <View style={styles.margin}></View>
            <TouchableOpacity
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              onPress={this.rankClick2}
            >
              <WithLocalSvg width={24} height={24} asset={this.state.rank2} />
            </TouchableOpacity>
            <Text style={styles.text2}> 안한다</Text>

            <View style={styles.margin}></View>
          </View>
        </View>
        <View style={styles.marginView}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  text1: {
    alignItems: "flex-start",
    fontSize: 17,
    color: "#000000",
    justifyContent: "center",
  },
  ageview: {
    // padding:30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flex: 2,
    marginRight: 15,
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
    height: 50,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
  },
  secondView1: {
    // padding:30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "#E5E5E5",
  },

  marginView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1.3,
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
    marginLeft: "8%",
    flex: 1,
  },

  textView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 2,
  },

  text2: {
    alignItems: "flex-start",
    fontSize: 17,
    color: "#484848",
    justifyContent: "center",
  },

  user_name: {
    alignItems: "flex-start",
    fontSize: 17,
    fontWeight: "bold",
    color: "#59A60B",
    justifyContent: "center",
  },

  user_age: {
    alignItems: "flex-start",
    fontSize: 17,
    color: "#747474",
    justifyContent: "center",
  },
});
