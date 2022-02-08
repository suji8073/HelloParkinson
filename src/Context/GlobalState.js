import React from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Context from "./context";

export default class GlobalState extends React.Component {
  async componentDidMount() {
    try {
      const user_data = await AsyncStorage.getItem("@user_data");
      const user_token = await AsyncStorage.getItem("@user_token");

      console.log("GlobalState");
      // console.log(typeof JSON.parse(user_data).PW);
      // console.log(user_token);

      this.setState({ user_pw: JSON.parse(user_data).PW });
      this.setState({ user_id: JSON.parse(user_data).ID });
      this.setState({ user_name: JSON.parse(user_data).name });
      this.setState({ user_token: user_token });

      console.log(this.state.user_id);
      console.log(this.state.user_pw);
      console.log(this.state.user_name);
      console.log(this.state.user_token);
    } catch (e) {
      console.log("GlobalState _ error");
      console.log(e);
    }
  }

  state = {
    user_id: "",
    user_pw: "",
    user_name: "",
    user_token: "",
    user_exercise: [
      { id: "1-1", name: "목 앞 근육 스트레칭", set: 0 },
      { id: "1-2", name: "날개뼈 모으기", set: 6 },
      { id: "1-3", name: "손목 및 팔꿈치 주변 근육 스트레칭", set: 10 },
      { id: "2-1", name: "엉덩이 들기", set: 2 },
      { id: "2-2", name: "엎드려 누운 상태에서 다리들기", set: 6 },
      { id: "2-3", name: "엉덩이 옆 근육 운동", set: 10 },
      { id: "2-4", name: "무릎 벌리기", set: 20 },
      { id: "2-5", name: "무릎 펴기", set: 40 },
      { id: "3-1", name: "한발 서기", set: 2 },
      { id: "3-2", name: "버드독 1단계", set: 0 },
      { id: "3-3", name: "버드독 2단계", set: 0 },
      { id: "3-4", name: "앉은 상태에서 제자리 걷기", set: 10 },
      { id: "3-5", name: "움직이는 런지", set: 10 },
      { id: "4-1", name: "아에이오우 소리내기", set: 10 },
      { id: "4-2", name: "파파파파파 소리내기", set: 12 },
      { id: "4-3", name: "쪽 소리내기", set: 5 },
      { id: "4-4", name: "혀로 볼 밀기", set: 5 },
      { id: "4-5", name: "혀로 입천장 밀기", set: 3 },
      { id: "4-6", name: "똑딱 소리내기", set: 2 },
      { id: "4-7", name: "혀 물고 침 삼키기", set: 2 },
      { id: "4-8", name: "아 짧게 소리내기", set: 20 },
      { id: "4-9", name: "아 길게 소리내기", set: 2 },
      { id: "4-10", name: "고음 가성으로 소리내기", set: 2 },
      { id: "4-11", name: "도레미파솔라시도", set: 2 },
      { id: "4-12", name: "큰 소리로 음절 읽기", set: 2 },
    ],
  };
  changePW = (pw) => {
    this.setState({ user_pw: pw });
  };
  changeID = (id) => {
    this.setState({ user_id: id });
  };
  changeNAME = (name) => {
    this.setState({ user_name: name });
  };
  changeTOKEN = (token) => {
    this.setState({ user_token: token }, () => {
      console.log(this.state.user_token);
    });
  };
  // changeEXERCISE = (index, task) => {
  //   console.log(this.state.user_exercise);
  //   console.log(index, task);
  // this.setState({ user_exercise: [0] }, () => {
  //   console.log(this.state.user_exercise);
  // });
  // };
  changeEXERCISE = (index, task) => {
    this.setState({
      user_exercise: update(
        this.state.user_exercise,
        {
          [1]: {
            set: {
              $set: this.context.user_exercise[1]["set"] + task,
            },
          },
        },
        () => {
          console.log(index, task);
        }
      ),
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          user_id: this.state.user_id,
          user_pw: this.state.user_pw,
          user_name: this.state.user_name,
          user_token: this.state.user_token,
          changePW: this.changePW,
          changeID: this.changeID,
          changeNAME: this.changeNAME,
          changeEXERCISE: this.changeEXERCISE,
          changeTOKEN: this.changeTOKEN,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
