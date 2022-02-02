import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
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
  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiUm9sZXMiOlsiUk9MRV9NQU5BR0VSIl0sImlzcyI6IkhDQyBMYWIiLCJpYXQiOjE2NDMyOTEwOTIsImV4cCI6MTY0Mzg5NTg5Mn0.AVyd0JcjLrPVeqfXUsBcOxkvxvgQOkWz4DHl-BCwzOgE5m2UqW31c7l8XiXLVTJo58YthtQ07BAl_zD465KVAQ"
);
myHeaders.append("Content-Type", "application/json");
export default class task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star: this.props.book,
      id: this.props.id,
    };
  }
  componentDidMount() {
    // console.log("123");
    // this.setState({ id: this.props.id });
    // // console.log
    // if (this.props.book === true) {
    //   this.setState({ star: greenstarsvg });
    // } else {
    //   this.setState({ star: silverstarsvg });
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("1234");
    // console.log(prevState);
    // console.log(prevProps);
    // if (prevState.star !== this.state.star) {
    //   this.setState({
    //     star: this.props.book === true ? greenstarsvg : silverstarsvg,
    //   });
    // } else {
    //   this.setState({
    //     star: this.props.book === true ? greenstarsvg : silverstarsvg,
    //   });
    // }
  }

  handleClick = () => {
    if (this.state.star == silverstarsvg) {
      // if (this.props.book === false) {
      // this.setState({ star: greenstarsvg });
      // this.props({ book: greenstarsvg });
      // 아이콘 asset값 변경 greenstarsvg 으로

      fetch("http://hccparkinson.duckdns.org:19737/onlymanager/bookmark", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          uid: String(this.props.id),
        }),
      }).then((response) => {
        console.log(response.status);
        Alert.alert("즐겨찾기에 추가되었습니다.");
      });
    } else {
      this.setState({ star: silverstarsvg });
      // 아이콘 asset값 변경 silverstarsvg 으로
      fetch("http://hccparkinson.duckdns.org:19737/onlymanager/bookmark", {
        method: "POST",
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
                <Text style={styles.subtext}>
                  {year - parseInt(this.props.age / 10000)}세 /
                </Text>
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
            asset={this.props.book}
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
