import React, { useState } from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Context from "../Context/context";
// static contextType = Context;
const PercentageBar = ({
  navigation,
  percentage,
  height,
  backgroundColor,
  completedColor,
}) => {
  const [getPercentage, setPercentage] = useState(percentage);
  const [getheight, setHeight] = useState(height);
  const [getBackgroundColor, setBackgroundColor] = useState(backgroundColor);
  const [getCompletedColor, setCompletedColor] = useState(completedColor);
  return (
    <View>
      <View style={{ justifyContent: "center", alignItems: "stretch" }}>
        <View
          style={{
            width: 100 * 1.8,
            height: getheight,
            marginVertical: 5,
            borderRadius: 7,
            borderColor: getBackgroundColor,
            backgroundColor: getBackgroundColor,
            borderWidth: 1,
          }}
        />
        <View
          style={{
            width: getPercentage * 1.8 ? getPercentage * 1.8 : 0,
            height: getheight,
            marginVertical: 5,
            borderRadius: 7,
            backgroundColor: getCompletedColor,
            position: "absolute",
          }}
        />
      </View>
    </View>
  );
};
export default PercentageBar;
