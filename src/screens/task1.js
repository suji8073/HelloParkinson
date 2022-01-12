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

export default class task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star: silverstarsvg,
      id: 0,
    };
  }
  componentDidMount() {
    this.setState({ id: this.props.id });
  }

  handleClick = () => {
    if (this.props.star === silverstarsvg) {
      // 아이콘 asset값 변경 greenstarsvg 으로

      fetch("http://152.70.233.113/chamuser/bookmark", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: String(this.props.id),
        }),
      });
      Alert.alert("즐겨찾기에 추가되었습니다.");
    } else {
      // 아이콘 asset값 변경 silverstarsvg 으로
      fetch("http://152.70.233.113/chamuser/bookmark", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: String(this.props.id),
        }),
      });
      Alert.alert("즐겨찾기에서 해제되었습니다.");
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
                <Text style={styles.subtext}> {this.props.sex}성</Text>
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
            asset={this.props.book == 1 ? greenstarsvg : silverstarsvg}
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
