import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default class siginup4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_sex: 0,
      user_id: "",
      usingid: false,
      user_pw: "",
      user_name: "",
      user_telphone: "",
      user_age: "",
      text: "",
    };
  }

  onPress_age = (id) => {
    this.setState({ user_sex: id });
    alert(this.state.user_sex);
  };

  login_input = () => {
    alert(this.state.user_id);

    fetch("http://152.70.233.113/signup/id" + this.state.user_id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("통신 확인");
        if (json.dup === 0) {
          alert("사용 가능한 아이디입니다."); //알람!
          this.setState({
            usingid: true,
          });
        } else {
          // 1이면 중복
          alert("존재하는 아이디입니다. 다른 아이디를 입력하세요.");
        }
      });
  };
  signup_check = () => {
    Alert.alert(
      this.state.user_id +
        " " +
        this.state.user_pw +
        " " +
        this.state.user_name +
        " " +
        this.state.user_telphone +
        " " +
        this.state.user_age +
        " " +
        this.state.user_sex // 남자는 1, 여자는 2
    );

    fetch("http://152.70.233.113/signup/phone", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.user_pw),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("통신 확인");
        if (json.dup === 0) {
          Alert.alert("회원가입이 정상적으로 완료되었습니다.");
          this.props.navigation.navigate("login");
        } else {
          // 1이면 중복
          alert("존재하는 사용자입니다.");
        }
      });
  };

  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.settingView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              this.props.navigation.navigate("signup1");
            }}
          >
            <View>
              <AntDesign name="left" size={24} color="#CACACA" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.firstView}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.secondView}>
              <Text style={styles.titleText}>아이디 / 비밀번호 설정</Text>
              <View style={styles.buttonwhite1}>
                <TextInput
                  style={styles.textInput1}
                  secureTextEntry={false}
                  placeholder="아이디 입력"
                  onChangeText={(text) => {
                    this.setState({ user_id: text });
                  }}
                />
                <View style={styles.clickbtn}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={this.login_input}
                  >
                    <View style={styles.margin}></View>
                    <View style={styles.user_id_click}>
                      <Text style={styles.ttext}>중복확인</Text>
                    </View>
                    <View style={styles.margin}></View>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.button1}>
                <TextInput
                  style={styles.textInput}
                  secureTextEntry={true}
                  placeholder="비밀번호 입력"
                  onChangeText={(pw) => {
                    this.setState({ user_pw: pw });
                  }}
                />
              </View>
            </View>

            <View style={styles.secondView}>
              <View style={styles.checkView}>
                <Text style={styles.titleText}>성명 / 전화번호</Text>
                <Text style={styles.check}>*</Text>
              </View>
              <View style={styles.buttonwhite}>
                <TextInput
                  style={styles.textInput}
                  secureTextEntry={false}
                  placeholder="이름"
                  onChangeText={(name) => {
                    this.setState({ user_name: name });
                  }}
                />
              </View>

              <View style={styles.numberbutton}>
                <View style={styles.number1}>
                  <Text style={styles.MMText}>010</Text>
                </View>
                <View style={styles.number2}>
                  <TextInput
                    style={styles.textInput}
                    secureTextEntry={false}
                    placeholder="휴대전화번호"
                    onChangeText={(tel) => {
                      this.setState({ user_telphone: tel });
                    }}
                  />
                </View>
              </View>
            </View>

            <View style={styles.secondView}>
              <View style={styles.checkView}>
                <Text style={styles.titleText}>생년월일</Text>
                <Text style={styles.check}>*</Text>
              </View>
              <View style={styles.buttonwhite}>
                <TextInput
                  style={styles.textInput}
                  secureTextEntry={false}
                  placeholder="'-' 제외 8자리를 입력해주세요"
                  onChangeText={(age) => {
                    this.setState({ user_age: age });
                  }}
                />
              </View>
            </View>

            <View style={styles.secondView}>
              <View style={styles.checkView}>
                <Text style={styles.titleText}>성별</Text>
                <Text style={styles.check}>*</Text>
              </View>
              <View style={styles.numberbutton}>
                <TouchableOpacity
                  style={
                    this.state.user_sex === 1
                      ? styles.genderB2
                      : styles.genderB1
                  }
                  activeOpacity={0.8}
                  onPress={() => this.onPress_age(1)}
                >
                  <Text
                    style={
                      this.state.user_sex === 1
                        ? styles.gendertext1
                        : styles.gendertext
                    }
                  >
                    {" "}
                    남자{" "}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={
                    this.state.user_sex === 2
                      ? styles.genderB2
                      : styles.genderB11
                  }
                  activeOpacity={0.8}
                  onPress={() => this.onPress_age(2)}
                >
                  <Text
                    style={
                      this.state.user_sex === 2
                        ? styles.gendertext1
                        : styles.gendertext
                    }
                  >
                    {" "}
                    여자{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.chatControl}>
          <TouchableOpacity
            style={styles.sendButton}
            activeOpacity={0.8}
            onPress={this.signup_check}
          >
            <Text style={styles.white}> 회 원 가 입 </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },

  settingView: {
    flex: 3,
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: "5%",
    marginTop: "10%",
  },

  firstView: {
    width: "100%",
    flex: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  secondView: {
    alignItems: "flex-start",
    marginBottom: "10%",
  },

  checkView: {
    flexDirection: "row",
  },

  textInput: {
    fontSize: 17,
    color: "#000000",
    marginLeft: "5%",
    width: "95%",
    height: "100%",
  },

  textInput1: {
    fontSize: 17,
    color: "#000000",
    marginLeft: "5%",
    flex: 4,
  },

  clickbtn: {
    fontSize: 17,
    color: "#000000",
    marginRight: "5%",
    flex: 1,
    height: "100%",
    flexDirection: "row",
  },

  user_id_click: {
    backgroundColor: "#5CB405",
    alignItems: "center",
    justifyContent: "center",
    flex: 4,
    width: 60,
    borderColor: "#5CB405",
    borderWidth: 1,
  },

  margin: {
    flex: 1,
    width: "100%",
  },

  MText: {
    fontSize: 17,
    color: "#000000",
    marginLeft: "5%",
  },

  MMText: {
    fontSize: 17,
    color: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonwhite: {
    justifyContent: "center",
    marginLeft: "1%",
    marginRight: "1%",
    width: "98%",
    height: 45,
    borderWidth: 2,
    borderColor: "#E5E5E5",
  },

  buttonwhite1: {
    justifyContent: "center",
    marginLeft: "1%",
    marginRight: "1%",
    width: "98%",
    height: 45,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    flexDirection: "row",
  },

  button1: {
    marginLeft: "1%",
    marginRight: "1%",
    width: "98%",
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: "#E5E5E5",
  },

  numberbutton: {
    marginLeft: "1%",
    marginRight: "1%",
    width: "98%",
    height: 45,
    borderColor: "#E5E5E5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  number1: {
    width: "15%",
    height: 45,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: "#E5E5E5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  number2: {
    width: "85%",
    height: 45,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#E5E5E5",
    flexDirection: "row",
  },

  number3: {
    marginLeft: "1%",
    marginRight: "1%",
    width: "98%",
    height: 45,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    flexDirection: "row",
  },
  number4: {
    width: "25%",
    height: 45,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: 18,
    marginTop: "1%",
    marginRight: "1%",
    marginLeft: "1%",
    marginBottom: "2%",
    fontWeight: "bold",
    color: "#000000",
  },

  check: {
    alignItems: "flex-start",
    fontSize: 18,
    margin: "1%",
    fontWeight: "bold",
    color: "#C20000",
  },

  gendertext: {
    fontSize: 17,
    color: "#AFAFAF",
    alignItems: "center",
    justifyContent: "center",
  },
  gendertext1: {
    fontSize: 17,
    color: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  ttext: {
    fontSize: 15,
    color: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  white: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  genderB1: {
    backgroundColor: "#F5F5F5",
    width: "49%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E1E1E1",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 1,
  },
  genderB11: {
    backgroundColor: "#F5F5F5",
    width: "49%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E1E1E1",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 2,
  },

  genderB2: {
    backgroundColor: "#7AC819",
    width: "49%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#59A60B",
    borderWidth: 2,
  },

  sendButton: {
    backgroundColor: "#7AC819",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "35%",
  },

  chatControl: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
