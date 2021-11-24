import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Left,
  Body,
  Title,
} from "react-native";

import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import Svg1 from "../icon/pencil.svg";
import Svg2 from "../icon/piechart.svg";
import Svg3 from "../icon/graph.svg";

import { WithLocalSvg } from "react-native-svg";

export default class user_setting extends Component {
  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.menuView}>
          <AntDesign
            name="left"
            size={24}
            color="#808080"
            onPress={() => {
              navigation.navigate("TabNavigation");
            }}
          />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>환자 정보</Text>
          <View style={styles.margin}></View>
          <EvilIcons name="star" size={30} color="green" />
        </View>

        <View style={styles.firstView}>
          <View style={styles.icon}>
            <Ionicons
              name="person-circle-sharp"
              size={120}
              color="lightblue"
              alignItems="center"
            />
          </View>
          <Text style={styles.group_num}>
            {this.props.route.params.paramName4}조
          </Text>
          <Text style={styles.user_name}>
            {this.props.route.params.paramName5}
          </Text>
          <Text style={styles.user_age}>
            {this.props.route.params.paramName1}/
            {this.props.route.params.paramName2}
          </Text>
        </View>

        <View style={styles.secondView}>
          <View style={styles.numberbutton}>
            <TouchableOpacity
              style={styles.group}
              activeOpacity={0.8}
              onPress={() => {
                this.props.navigation.navigate("user_edit");
              }}
            >
              <WithLocalSvg width={30} height={40} asset={Svg1} />
              <Text style={styles.twotext}>환자 정보 편집</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.group}
              activeOpacity={0.8}
              onPress={() => {
                this.props.navigation.navigate("user_statistics");
              }}
            >
              <WithLocalSvg width={30} height={40} asset={Svg2} />
              <Text style={styles.twotext}>운동 통계 확인</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.group}
              activeOpacity={0.8}
              onPress={() => {
                this.props.navigation.navigate("user_progress");
              }}
            >
              <WithLocalSvg width={30} height={40} asset={Svg3} />
              <Text style={styles.twotext}>진도율 확인</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.threeView}>
          <View style={styles.memoView}>
            <Text style={styles.text2}>메모</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text2}>
              {this.props.route.params.paramName3}
            </Text>
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

  menuView: {
    marginTop: "10%",
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
    fontSize: 20,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },

  firstView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    margin: "8%",
    backgroundColor: "#FFFFFF",
  },

  numberbutton: {
    marginLeft: 3,
    marginRight: 3,
    width: "100%",
    height: 45,
    borderColor: "#E5E5E5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  twotext: {
    alignItems: "flex-start",
    fontSize: 15,
    color: "#5CB405",
    marginTop: 10,
    justifyContent: "center",
  },

  group: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  secondView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
  },

  threeView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
    marginTop: 5,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 0.3,
    borderTopWidth: 0.3,
    borderColor: "#E5E5E5",
    padding: 10,
  },

  marginView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 2,
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
    marginLeft: 30,
    marginTop: 10,
    flex: 1,
  },

  textView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 10,
    flex: 1,
  },

  text2: {
    alignItems: "flex-start",
    fontSize: 17,
    color: "#484848",
    justifyContent: "center",
  },
  icon: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  group_num: {
    alignItems: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: "#316200",
    marginBottom: "1%",
    justifyContent: "center",
  },
  user_name: {
    alignItems: "center",
    fontSize: 21,
    color: "#000000",
    fontWeight: "bold",
    marginBottom: "1%",
    justifyContent: "center",
  },

  user_age: {
    alignItems: "center",
    fontSize: 17,
    color: "#747474",
    justifyContent: "center",
  },
});
