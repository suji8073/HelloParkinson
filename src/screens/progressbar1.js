import React, { useState } from "react";
import { View } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

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
            width: responsiveScreenWidth(47.5),
            height: getheight,
            marginVertical: 5,
            borderRadius: 7,
            borderColor: getBackgroundColor,
            backgroundColor: getBackgroundColor,
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
