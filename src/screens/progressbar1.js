import React, { useState } from "react";
import Context from "../Context/context";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const PercentageBar = ({
  percentage,
  height,
  backgroundColor,
  completedColor,
}) => {
  const [getheight, setHeight] = useState(height);
  const [getBackgroundColor, setBackgroundColor] = useState(backgroundColor);
  const [getCompletedColor, setCompletedColor] = useState(completedColor);
  return (
    <View>
      <View style={{ justifyContent: "center", alignItems: "stretch" }}>
        <View
          style={{
            width: 180,
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
            width: percentage ? percentage : 0,
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
