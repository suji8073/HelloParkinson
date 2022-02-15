import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { WithLocalSvg } from "react-native-svg";
import silverstarsvg from "../icon/silverstar.svg";
import greenstarsvg from "../icon/greenstar.svg";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

export default class task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      man_token: "",
    };
  }

  async componentDidMount() {
    const manager_token = await AsyncStorage.getItem("@manager_token");
    this.setState({ man_token: manager_token });
  }
  dateToStr = () => {
    var today_year = new Date().getFullYear();
    var birth_year = String(this.props.age).substring(0, 4);
    return today_year - birth_year + 1;
  };

  handleClick = () => {
    if (this.state.book == silverstarsvg) {
      this.setState({ book: greenstarsvg });

      fetch("http://hccparkinson.duckdns.org:19737/onlymanager/bookmark", {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + this.state.man_token.slice(1, -1),
          "Content-Type": "application/json",
        },
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
        headers: {
          Authorization: "Bearer " + this.state.man_token.slice(1, -1),
          "Content-Type": "application/json",
        },
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
              style={{ fontSize: responsiveScreenFontSize(6) }}
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
        <TouchableOpacity
          onPress={this.handleClick}
          style={{ marginRight: responsiveScreenWidth(3.6) }}
        >
          <WithLocalSvg
            id="svgs"
            style={{ fontSize: responsiveScreenFontSize(5) }}
            asset={this.state.book}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#ebebeb",
    alignItems: "center",
    marginLeft: responsiveScreenWidth(4.7),
    marginRight: responsiveScreenWidth(4.7),
    marginBottom: responsiveScreenHeight(2),
    height: responsiveScreenHeight(11),
    borderRadius: 10,
    flexDirection: "row",
  },
  full: {
    flexDirection: "row",
    marginLeft: responsiveScreenWidth(4),
  },

  textgroup: {
    alignItems: "flex-start",
    marginLeft: responsiveScreenWidth(4),
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
  },

  textgroup1: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: responsiveScreenHeight(1),
    backgroundColor: "#FFFFFF",
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2),
    alignItems: "center",
    color: "#484848",
    justifyContent: "center",
    fontWeight: "bold",
  },

  subtext: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(1.64),
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
