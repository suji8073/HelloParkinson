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

import { parse, WithLocalSvg } from "react-native-svg";

const data = {
  setcnt1: 3,
  setcnt2: 5,
  setcnt3: 7,
  setcnt4: 0,
  setcnt5: 12,
  donecnt1: 12,
  donecnt2: 12,
  donecnt3: 12,
  donecnt4: 12,
  donecnt5: 12,
};

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
      cat1: 0,
      cat2: 0,
      cat3: 0,
      cat4: 0,
      cat5: 0,
    };
  }

  componentDidMount() {
    // 일별 총 진도율
    /*fetch(
      "http://152.70.233.113/chamuser/uid/" +
        this.props.route.params.paramsName,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          progress: json.info.progress,
          mon: json.info.mon * 0.8,
          tus: json.info.tus * 0.8,
          wed: json.info.wed * 0.8,
          thr: json.info.thr * 0.8,
          fri: json.info.fri * 0.8,
          sun: json.info.sun * 0.8,
        });
      });
      */
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
              this.props.navigation.navigate("move_1", {
                paramsName: this.props.route.params.paramsName,
              });
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
                    allcount={data.donecnt1}
                    done={data.setcnt1}
                    progress={
                      String((data.setcnt1 / data.donecnt1) * 100) + "%"
                    }
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("move_2", {
                paramsName: this.props.route.params.paramsName,
              });
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
                    allcount={data.donecnt2}
                    done={data.setcnt2}
                    progress={
                      String((data.setcnt2 / data.donecnt2) * 100) + "%"
                    }
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("move_3", {
                paramsName: this.props.route.params.paramsName,
              });
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
                    allcount={data.donecnt3}
                    done={data.setcnt3}
                    progress={
                      String((data.setcnt3 / data.donecnt3) * 100) + "%"
                    }
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("move_4", {
                paramsName: this.props.route.params.paramsName,
              });
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
                    allcount={data.donecnt4}
                    done={data.setcnt4}
                    progress={
                      String((data.setcnt4 / data.donecnt4) * 100) + "%"
                    }
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("move_5", {
                paramsName: this.props.route.params.paramsName,
              });
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
                    allcount={data.donecnt5}
                    done={data.setcnt5}
                    progress={
                      String((data.setcnt5 / data.donecnt5) * 100) + "%"
                    }
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
