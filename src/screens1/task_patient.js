// progress.js에 들어갈 리스트뷰 모양
import React from "react";
import { View, Text } from "react-native";

import PercentageBar from "../screens/progressbar1";

const task_patient = ({ allcount, done }) => {
  return (
    //  전체 뷰
    <View
      style={{
        alignItems: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10,
        height: 20,
        width: "88%",
        justifyContent: "space-between",
      }}
    >
      <View style={{ width: "80%", justifyContent: "center" }}>
        <PercentageBar
          height={20}
          backgroundColor={"#E5E5E5"}
          completedColor={"#7AC819"}
          percentage={String((done / allcount) * 100) + "%"}
        />
      </View>

      <Text
        style={{
          color: "#484848",
          fontSize: 16,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {done + "/" + allcount}
      </Text>
    </View>
  );
};

export default task_patient;
