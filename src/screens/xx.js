//App.js
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { Component } from "react";
import "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";

export default class Tab3 extends Component {
  constructor(props) {
    super(props);
    this.state = { myColor: "green" };
  }

  handleClick = () => {
    if (this.state.myColor === "green") {
      this.setState({ myColor: "blue" });
    } else {
      this.setState({ myColor: "green" });
    }
  };

  render() {
    return (
      <View style={styles.finalView}>
        <Entypo
          name="dots-three-vertical"
          color={this.state.myColor}
          size={45}
          style={{ marginLeft: 40 }}
          onPress={this.handleClick}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
    marginTop: "30%",
  },
});
