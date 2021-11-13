import React from "react";
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
});
