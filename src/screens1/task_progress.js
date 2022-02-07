// progress.js에 들어갈 리스트뷰 모양
import React from "react";
import { View, Text } from "react-native";

import PercentageBar from "../screens/progressbar1";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const task_progress = ({ allcount, done }) => {
  return (
    //  전체 뷰
    <View
      style={{
        alignItems: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        marginTop: "1.7%",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <View style={{ justifyContent: "center" }}>
        <PercentageBar
          height={responsiveScreenHeight(2.6)}
          backgroundColor={"#E5E5E5"}
          completedColor={"#7AC819"}
          percentage={String((done / allcount) * 100) + "%"}
        />
      </View>

      <Text
        style={{
          color: "#484848",
          fontSize: responsiveScreenFontSize(1.8),
          alignItems: "center",
          marginRight: "5%",
        }}
      >
        {done + " / " + allcount}
      </Text>
    </View>
  );
};

export default task_progress;
