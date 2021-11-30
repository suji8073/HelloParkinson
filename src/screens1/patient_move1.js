import React, { Component } from "react";
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import TestSvg1 from "../icon/Frame1.svg";
import TestSvg2 from "../icon/Frame2.svg";
import TestSvg3 from "../icon/Frame3.svg";
import TestSvg4 from "../icon/Frame4.svg";
import TestSvg5 from "../icon/Frame5.svg";
import Task from "./task_patient";

import { WithLocalSvg } from "react-native-svg";
export default class patient_move extends Component {
  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.menuView}>
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>
            나의 운동 목록{this.props.route.params.paramsName}
          </Text>
          <View style={styles.margin}></View>
        </View>

        <ScrollView style={styles.secondView}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("move_1");
            }}
          >
            <View style={styles.moveView}>
              <View style={styles.image}>
                <WithLocalSvg width={60} height={60} asset={TestSvg1} />
              </View>

              <View style={styles.listview}>
                <Text style={styles.text2}>신장(스트레칭)운동</Text>
                <View style={styles.progressView}>
                  <Task allcount="12" done="0" progress="0%" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("move_2");
            }}
          >
            <View style={styles.moveView}>
              <View style={styles.image}>
                <WithLocalSvg width={60} height={60} asset={TestSvg2} />
              </View>

              <View style={styles.listview}>
                <Text style={styles.text2}>근력운동</Text>
                <View style={styles.progressView}>
                  <Task allcount="14" done="0" progress="0%" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("move_3");
            }}
          >
            <View style={styles.moveView}>
              <View style={styles.image}>
                <WithLocalSvg width={60} height={60} asset={TestSvg3} />
              </View>

              <View style={styles.listview}>
                <Text style={styles.text2}>균형 및 협응 운동</Text>
                <View style={styles.progressView}>
                  <Task allcount="5" done="0" progress="0%" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("move_4");
            }}
          >
            <View style={styles.moveView}>
              <View style={styles.image}>
                <WithLocalSvg width={60} height={60} asset={TestSvg4} />
              </View>

              <View style={styles.listview}>
                <Text style={styles.text2}>구강 및 발성 운동</Text>
                <View style={styles.progressView}>
                  <Task allcount="14" done="0" progress="0%" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              //navigation.navigate("");
            }}
          >
            <View style={styles.moveView}>
              <View style={styles.image}>
                <WithLocalSvg width={60} height={60} asset={TestSvg5} />
              </View>

              <View style={styles.listview}>
                <Text style={styles.text2}>유산소 운동</Text>
                <View style={styles.progressView}>
                  <Task allcount="0" done="0" progress="0%" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
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
    backgroundColor: "#FFFFFF",
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: "10%",
    justifyContent: "flex-start",
    borderBottomWidth: 1.8,
    borderColor: "#E5E5E5",
  },
  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: 21,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },

  firstView: {
    // padding:30,
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
  },

  secondView: {
    paddingTop: 10,
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#F8F8F8",
  },
  moveView: {
    backgroundColor: "#FFFFFF",
    height: 90,
    width: "92%",
    marginLeft: "4%",
    marginRight: "4%",
    marginTop: "3%",
    marginBottom: "3%",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 5,
  },
  image: {
    width: "20%",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 5,
  },
  listview: {
    marginLeft: 10,
    width: "75%",
    flexDirection: "column",
    marginTop: 15,
  },
  line: {
    width: "1%",
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#EAEAEA",
  },
  text2: {
    alignItems: "flex-start",
    fontSize: 18,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },
  progressView: {
    width: "100%",
    marginTop: 5,
    justifyContent: "flex-start",
    borderColor: "#E0E0E0",
    flexDirection: "row",
  },
});
