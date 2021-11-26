import { Icon } from "native-base";
import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import { WithLocalSvg } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
const year = 2021 + 1;

const task_home = ({ record, name, age, sex }) => {
  return (
    <View
      style={{
        paddingHorizontal: "8%",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <View style={styles.numtext}>
        <Text style={{ fontSize: 23, color: "#5CB405", fontWeight: "bold" }}>
          {record}
        </Text>
      </View>
      <View style={styles.infotext}>
        <Ionicons
          style={{ marginHorizontal: "5%" }}
          name="person-circle-sharp"
          size={80}
          color="lightblue"
        />
        <Text style={{ fontSize: 17 }}>
          {name} / {year - parseInt(age / 10000)}세 / {sex}
        </Text>
      </View>
    </View>
  );
};
export default task_home;
const styles = StyleSheet.create({
  numtext: {
    flex: 1.3,
  },
  infotext: {
    flex: 9.7,
    flexDirection: "row",
    alignItems: "center",
  },
});
