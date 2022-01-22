import React from "react";
import { View, Text } from "react-native";

const task_norank = ({ day, day_prog }) => {
  return (
    //  전체 뷰
    <View
      style={{
        backgroundColor: "#3D7900",
        borderRadius: 5,
        marginLeft: "2%",
        width: "12%",
        height: "150%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#FFFFFF", paddingBottom: "22%" }}>{day}</Text>
      <Text style={{ color: "#FFFFFF" }}>{day_prog}%</Text>
    </View>
  );
};

export default task_norank;
