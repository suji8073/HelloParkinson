import React from "react";
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { WithLocalSvg } from "react-native-svg";
import Task5 from "../screens1/task_home";

import firstsvg from "../icon/first.svg";
import secondsvg from "../icon/second.svg";
import thirdsvg from "../icon/third.svg";
import crownsvg from "../icon/crown.svg";
function patient_Home({ navigation }) {
  return (
    <View style={styles.finalView}>
      <View style={styles.menuView}>
        <Ionicons name="person-circle-sharp" size={35} color="#ffffff" />
        <View style={styles.margin}></View>
        <Text style={styles.titleText}>굿나잇 파킨슨</Text>
        <View style={styles.margin}></View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("patient_profile");
          }}
        >
          <Ionicons name="person-circle-sharp" size={35} color="#5CB405" />
        </TouchableOpacity>
      </View>
      <View style={styles.secondView}>
        {/* 환자 1~3 */}
        <View style={{ height: "27%", marginTop: "3%" }}>
          <View
            style={{
              margin: "5%",
              flexDirection: "row",
              alignContent: "flex-end",
              justifyContent: "space-evenly",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: "7%",
                margin: "1%",
              }}
            >
              <View
                style={{
                  borderRadius: 400 / 2,
                  borderColor: "#C4C4C4",
                  borderWidth: 10,
                  // position: "absolute",
                  // top: "20%",
                }}
              >
                <Image
                  source={require("../image/ch.jpg")}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 400 / 2,
                  }}
                />
              </View>
              <WithLocalSvg
                style={{ top: "80%", position: "absolute" }}
                width={30}
                height={30}
                asset={secondsvg}
              />
              <Text style={styles.prizetext}>신수빈[80%]</Text>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: "1%",
              }}
            >
              <WithLocalSvg
                width={50}
                height={40}
                asset={crownsvg}
                style={{ top: "-20%", position: "absolute" }}
              />
              <View
                style={{
                  borderRadius: 400 / 2,
                  borderColor: "#F8D500",
                  borderWidth: 10,
                  // top: "40%",
                  // position: "absolute",
                }}
              >
                <Image
                  source={require("../image/ch.jpg")}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 400 / 2,
                  }}
                />
              </View>
              <WithLocalSvg
                style={{ top: "80%", position: "absolute" }}
                width={30}
                height={30}
                asset={firstsvg}
              />
              <Text style={styles.prizetext}>오석형[98%]</Text>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: "7%",
                margin: "1%",
              }}
            >
              <View
                style={{
                  borderRadius: 400 / 2,
                  borderColor: "#DA9B73",
                  borderWidth: 10,
                }}
              >
                <Image
                  source={require("../image/ch.jpg")}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 400 / 2,
                  }}
                />
              </View>
              <WithLocalSvg
                style={{ top: "80%", position: "absolute" }}
                width={30}
                height={30}
                asset={thirdsvg}
              />
              <Text style={styles.prizetext}>이영현[65%]</Text>
            </View>
          </View>
        </View>
        {/* 환자 순위 4~ */}
        <ScrollView
          style={{ backgroundColor: "#ffffff", margin: "5%", borderRadius: 7 }}
        >
          <Task5 record="4" name="김옥분" age="5" sex="여" />
          <Task5 record="5" name="김채현" age="5" sex="여" />
          <Task5 record="6" name="김옥분" age="5" sex="여" />
          <Task5 record="7" name="김옥분" age="5" sex="여" />
          <Task5 record="8" name="김옥분" age="5" sex="여" />
          <Task5 record="9" name="김옥분" age="5" sex="여" />
          <Task5 record="10" name="김옥분" age="5" sex="여" />
        </ScrollView>
      </View>
    </View>
  );
}

export default patient_Home;

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
  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
  secondView: {
    backgroundColor: "#F8F8F8",
    height: "100%",
  },
  image: {
    width: "10%",
    height: "10%",
  },
  prizetext: {
    position: "absolute",
    bottom: "-30%",
    fontSize: 17,
    fontWeight: "bold",
  },
});
