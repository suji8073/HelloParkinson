import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  BackHandler,
  TouchableOpacityComponent,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { WithLocalSvg } from "react-native-svg";
import silverstarsvg from "../icon/silverstar.svg";
import greenstarsvg from "../icon/greenstar.svg";
const year = 2021 + 1;

import { AntDesign } from "@expo/vector-icons";
var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiUm9sZXMiOlsiUk9MRV9NQU5BR0VSIl0sImlzcyI6IkhDQyBMYWIiLCJpYXQiOjE2NDM5NTk5NTMsImV4cCI6MTY0NDU2NDc1M30.j1U1_3O9tmkHPnnib15eFmqas8oXLMfUv7Qz9tH9HZtrC1baYjD8MKXkyxgd3QnNBxmDh4456JaosBtvwTnqzg"
);
myHeaders.append("Content-Type", "application/json");

export default class task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
    console.log(this.state);
  }
  // componentDidMount() {}

  // componentDidUpdate(prevProps, prevState) {}

  dateToStr = () => {
    var today_year = new Date().getFullYear();
    var birth_year = String(this.props.age).substring(0, 4);
    return today_year - birth_year + 1;
  };

  handleClick = () => {
    if (this.state.book == silverstarsvg) {
      this.setState({ book: greenstarsvg });
      // 아이콘 asset값 변경 greenstarsvg 으로

      fetch("http://hccparkinson.duckdns.org:19737/onlymanager/bookmark", {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify({
          uid: String(this.props.id),
        }),
      }).then((response) => {
        console.log(response.status);
        Alert.alert("즐겨찾기에 추가되었습니다.");
      });
    } else {
      this.setState({ book: silverstarsvg });
      // 아이콘 asset값 변경 silverstarsvg 으로
      fetch("http://hccparkinson.duckdns.org:19737/onlymanager/bookmark", {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify({
          uid: String(this.props.id),
        }),
      }).then((response) => {
        console.log(response.status);
        Alert.alert("즐겨찾기에서 해제되었습니다.");
      });
    }
  };

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.full}>
          <View>
            <Ionicons
              name="person-circle-sharp"
              size={50}
              color="lightblue"
              justifyContent="center"
              alignItems="center"
            />
          </View>
          <View>
            <View style={styles.textgroup}>
              <Text style={styles.titleText}>{this.props.user}</Text>
              <View style={styles.textgroup1}>
                <Text style={styles.subtext}>{this.dateToStr()}세 /</Text>
                <Text style={styles.subtext}>
                  {" "}
                  {this.props.sex == "M" ? "남" : "여"}성
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.margin}></View>
        <TouchableOpacity onPress={this.handleClick}>
          <WithLocalSvg
            id="svgs"
            width={30}
            height={30}
            // asset={this.props.book === true ? greenstarsvg : silverstarsvg}
            asset={this.state.book}
            // asset={this.state.star}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#ebebeb",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    height: 90,
    borderRadius: 10,
    flexDirection: "row",
  },
  full: {
    flexDirection: "row",
  },

  textgroup: {
    alignItems: "flex-start",
    marginLeft: 15,
    justifyContent: "center",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  textgroup1: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: 5,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: 17,
    alignItems: "center",
    color: "#484848",
    justifyContent: "center",
    fontWeight: "bold",
  },

  subtext: {
    alignItems: "flex-start",
    fontSize: 14,
    alignItems: "center",
    color: "#747474",
    justifyContent: "center",
  },

  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
