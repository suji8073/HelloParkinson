import React, { Component } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

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
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class patient_gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  pic_select = () => {
    // 저장하는 api연결
  };
  edit_finish = () => {};

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
          <Text style={styles.titleText}>프로필 사진 편집</Text>
          <View style={styles.margin}></View>
          <AntDesign
            name="check"
            style={{ fontSize: responsiveScreenFontSize(3) }}
            color="#5CB405"
            onPress={this.edit_finish}
          />
        </View>
        <ScrollView contentContainerStyle={styles.firstView1}>
          <View style={styles.piclayout}>
            <TouchableOpacity onPress={this.pic_select()}>
              <Image
                source={p_1}
                style={{
                  height: responsiveScreenHeight(18),
                  width: responsiveScreenWidth(36),
                  borderRadius: 400 / 2,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.piclayout}>
            <TouchableOpacity onPress={this.pic_select()}>
              <Image
                source={p1}
                style={{
                  height: responsiveScreenHeight(18),
                  width: responsiveScreenWidth(36),
                  borderRadius: 400 / 2,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.piclayout}>
            <TouchableOpacity onPress={this.pic_select()}>
              <Image
                source={p2}
                style={{
                  height: responsiveScreenHeight(18),
                  width: responsiveScreenWidth(36),
                  borderRadius: 400 / 2,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.piclayout}>
            <TouchableOpacity onPress={this.pic_select()}>
              <Image
                source={p3}
                style={{
                  height: responsiveScreenHeight(18),
                  width: responsiveScreenWidth(36),
                  borderRadius: 400 / 2,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.piclayout}>
            <TouchableOpacity onPress={this.pic_select()}>
              <Image
                source={p4}
                style={{
                  height: responsiveScreenHeight(18),
                  width: responsiveScreenWidth(36),
                  borderRadius: 400 / 2,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.piclayout}>
            <TouchableOpacity onPress={this.pic_select()}>
              <Image
                source={p5}
                style={{
                  height: responsiveScreenHeight(18),
                  width: responsiveScreenWidth(36),
                  borderRadius: 400 / 2,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.piclayout}>
            <TouchableOpacity onPress={this.pic_select()}>
              <Image
                source={p6}
                style={{
                  height: responsiveScreenHeight(18),
                  width: responsiveScreenWidth(36),
                  borderRadius: 400 / 2,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.piclayout}>
            <TouchableOpacity onPress={this.pic_select()}>
              <Image
                source={p7}
                style={{
                  height: responsiveScreenHeight(18),
                  width: responsiveScreenWidth(36),
                  borderRadius: 400 / 2,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.piclayout}>
            <TouchableOpacity onPress={this.pic_select()}>
              <Image
                source={p8}
                style={{
                  height: responsiveScreenHeight(18),
                  width: responsiveScreenWidth(36),
                  borderRadius: 400 / 2,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.piclayout}>
            <TouchableOpacity onPress={this.pic_select()}>
              <Image
                source={p9}
                style={{
                  height: responsiveScreenHeight(18),
                  width: responsiveScreenWidth(36),
                  borderRadius: 400 / 2,
                }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>

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
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "5.1%",
    marginBottom: "10.3%",
    backgroundColor: "#FFFFFF",
  },
  firstView1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5.1%",
    paddingBottom: "40.3%",
    backgroundColor: "#FFFFFF",
    flexWrap: "wrap",
  },
  secondView: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: "7%",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
  },

  threeView: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: "9%",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
    paddingLeft: "7%",
  },

  marginView: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1.5,
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
    color: "#59A60B",
    fontWeight: "bold",
    justifyContent: "center",
  },

  user_age: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2),
    color: "#747474",
    justifyContent: "center",
  },
  piclayout: { marginHorizontal: "4%", marginVertical: "2%" },
});
