import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  Image,
  StatusBar,
} from "react-native";

import { WithLocalSvg } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import nocheck from "../icon/radio_btn_nocheck.svg";
import check from "../icon/radio_button_check.svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
const storeData = async (data) => {
  try {
    await AsyncStorage.setItem("@user_data", JSON.stringify(data));
    console.log("data_ clear");
  } catch (e) {
    // saving error
    console.log("data _ error");
  }
};

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

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

export default class patient_profile_edit extends Component {
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
      profilepic: "",
      rank: 1,
      progress: "",
      M: "남",
      F: "여",
      post_rank: true,
      token: "",
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
            birth: json.data[0].birthday,
            gender: json.data[0].gender == "F" ? "여" : "남",
            name: json.data[0].uname,
            UID: json.data[0].uid,
            rank: json.data[0].ranking,
            profilepic: json.data[0].profilepic,
          },
          () => {
            this.change_gender();
            this.change_rank();
            console.log("rank : " + this.state.rank);
          }
        );
      });
  }

  edit_update = (user_token) => {
    fetch("http://hccparkinson.duckdns.org:19737/chamuser", {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + String(user_token).slice(1, -1),
        "Content-Type": "application/json",
      },
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

  edit_pw_update = (user_token) => {
    fetch("http://hccparkinson.duckdns.org:19737/chamuser", {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + String(user_token).slice(1, -1),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: this.state.UID,
        password: this.state.user_pw,
        gender: this.state.onname1 == check ? "M" : "F",
        birthday:
          this.state.user_age === "" ? this.state.birth : this.state.user_age,
        ranking: this.state.post_rank,
        profilepic: this.state.profilepic,
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

            var user_data = {
              name: this.state.name,
              ID: this.state.UID,
              PW: this.state.user_pw,
            };
            storeData(user_data);

            this.state.user_pw === ""
              ? this.edit_update(this.state.token)
              : this.edit_pw_update(this.state.token);

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
  profile = () => {
    if (this.state.profilepic === "-1") {
      return p_1;
    } else if (this.state.profilepic === "1") {
      return p1;
    } else if (this.state.profilepic === "2") {
      return p2;
    } else if (this.state.profilepic === "3") {
      return p3;
    } else if (this.state.profilepic === "4") {
      return p4;
    } else if (this.state.profilepic === "5") {
      return p5;
    } else if (this.state.profilepic === "6") {
      return p6;
    } else if (this.state.profilepic === "7") {
      return p7;
    } else if (this.state.profilepic === "8") {
      return p8;
    } else if (this.state.profilepic === "9") {
      return p9;
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
          <Text style={styles.titleText}>프로필 편집</Text>
          <View style={styles.margin}></View>
          <AntDesign
            name="check"
            style={{ fontSize: responsiveScreenFontSize(3) }}
            color="#5CB405"
            onPress={this.edit_finish}
          />
        </View>

        <View style={styles.firstView}>
          <Image
            source={this.profile()}
            style={{
              height: responsiveScreenHeight(11),
              width: responsiveScreenWidth(22),
              borderRadius: 400 / 2,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("profile_gallery");
            }}
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

  ageview: {
    // padding:30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flex: 2,
    marginRight: 15,
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
    justifyContent: "center",
    marginTop: "5.1%",
    marginBottom: "4.7%",
    backgroundColor: "#FFFFFF",
  },

  secondView: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: responsiveScreenHeight(7),
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
  },

  secondView1: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: responsiveScreenHeight(7),
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "#E5E5E5",
  },

  marginView: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1.3,
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
    fontWeight: "bold",
    color: "#59A60B",
    justifyContent: "center",
    paddingTop: "2%",
  },

  user_age: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2),
    color: "#747474",
    justifyContent: "center",
  },
});
