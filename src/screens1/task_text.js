import { Icon } from "native-base";
import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
const task_text = ({ name, progress }) => {
  return (
    <View>
      <Text style={styles.prizetext}>
        {name}[{progress}%]
      </Text>
    </View>
  );
};

export default task_text;
const styles = StyleSheet.create({
  //   prizetext: {
  //     position: "absolute",
  //     bottom: "-30%",
  //     fontSize: 17,
  //     fontWeight: "bold",
  //   },
});
