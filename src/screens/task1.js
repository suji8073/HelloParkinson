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
import { EvilIcons } from "@expo/vector-icons";

import { WithLocalSvg } from "react-native-svg";
import silverstarsvg from "../icon/silverstar.svg";
import greenstarsvg from "../icon/greenstar.svg";
const year = 2021 + 1;

export default class task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star: silverstarsvg,
      id: 0,
      book: silverstarsvg,
    };
  }
  componentDidMount() {
    this.setState({ id: this.props.id, bookmark: this.props.bookmark });

    console.log(this.state.id);
    if (this.props.book === 1) {
      this.setState({ book: greenstarsvg });
    } else {
      this.setState({ book: silverstarsvg });
    }
  }
  handleClick = () => {
    if (this.state.star === silverstarsvg) {
      this.setState({ star: greenstarsvg, bookmark: 1 });

      fetch("http://152.70.233.113/chamuser/bookmark", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: String(this.props.id),
        }),
      });

      Alert.alert("즐겨찾기에 추가되었습니다.");
    } else {
      this.setState({ star: silverstarsvg, bookmark: 0 });
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
          <WithLocalSvg width={30} height={30} asset={this.state.book} />
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
