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

var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGFtIiwiUm9sZXMiOlsiUk9MRV9VU0VSIl0sImlzcyI6IkhDQyBMYWIiLCJpYXQiOjE2NDMyOTQ0NTMsImV4cCI6MTY0Mzg5OTI1M30._Cvfjjc2w5yfS-NSUGDaW-EXBnbsKIL7j7FTsJxAe2jklaxL86tJmwiKajEZSOKO91_roCZbMBZQpy0Tq6PIVg"
);
export default class patient_move extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setcnt1: 0,
      setcnt2: 0,
      setcnt3: 0,
      setcnt4: 0,
      setcnt5: 0,
      donecnt1: 0,
      donecnt2: 0,
      donecnt3: 0,
      donecnt4: 0,
      donecnt5: 0,
    };
  }

  componentDidMount() {
    fetch("http://hccparkinson.duckdns.org:19737/progress/personal/cat/all", {
      method: "GET",
      headers: myHeaders,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          setcnt1: json.data[0].setcntsum,
          setcnt2: json.data[1].setcntsum,
          setcnt3: json.data[2].setcntsum,
          setcnt4: json.data[3].setcntsum,
          setcnt5: json.data[4].setcntsum,
          donecnt1: json.data[0].donecntsum,
          donecnt2: json.data[1].donecntsum,
          donecnt3: json.data[2].donecntsum,
          donecnt4: json.data[3].donecntsum,
          donecnt5: json.data[4].donecntsum,
        });
      });
  }

  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.menuView}>
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>나의 운동 목록</Text>
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
                  <Task
                    allcount={this.state.setcnt1}
                    done={this.state.donecnt1}
                  />
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
                  <Task
                    allcount={this.state.setcnt2}
                    done={this.state.donecnt2}
                  />
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
                  <Task
                    allcount={this.state.setcnt3}
                    done={this.state.donecnt3}
                  />
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
                  <Task
                    allcount={this.state.setcnt4}
                    done={this.state.donecnt4}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("move_5");
            }}
          >
            <View style={styles.moveView}>
              <View style={styles.image}>
                <WithLocalSvg width={60} height={60} asset={TestSvg5} />
              </View>

              <View style={styles.listview}>
                <Text style={styles.text2}>유산소 운동</Text>
                <View style={styles.progressView}>
                  <Task
                    allcount={this.state.setcnt5}
                    done={this.state.donecnt5}
                  />
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
    marginTop: "3%",
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
