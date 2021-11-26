import React, { useState } from "react";
import { StyleSheet, View, Text, Touchable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Flex } from "native-base";


const alarm_task = ({ navigation, apm, hour, minute, cycle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderRadius: 6,
        borderWidth: 2,
        marginTop: "3%",
        padding: "5%",
        backgroundColor: "#ffffff",
        borderColor: "#E0E0E0",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "column", flex: 9 }}>
        <Text
          style={{
            fontSize: 28,
            // fontWeight: "bold",
            justifyContent: "flex-start",
          }}
        >
          {apm} {hour} : {minute}
        </Text>
        <Text style={{ fontSize: 17 }}>{cycle}</Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Entypo name="chevron-thin-right" size={24} color="#808080" />
      </View>
      {/* </TouchableOpacity> */}
    </View>
  );
};
export default alarm_task;
