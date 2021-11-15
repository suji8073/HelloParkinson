// 운동 편집 리스트뷰의 생김새
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Movelist = ({ movename, moveminute, movesec }) => {
  return (
    //   스몰리스트 뷰
    <View style={styles.finallist}>
      {/* 운동이름, 운동시간 */}
      <View style={styles.moveinfoView}>
        <Text style={{ fontSize: 18, marginBottom: 5 }}>{movename}</Text>
        <Text style={{ fontSize: 6 - 8 }}>
          {moveminute}분{movesec}초
        </Text>
      </View>

      {/* 아이콘 뷰 */}
      <TouchableOpacity onPress={() => {}}>
        <View>
          <FontAwesome name="dot-circle-o" size={40} color="#E5E5E5" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Movelist;

const styles = StyleSheet.create({
  finallist: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#E5E5E5",
    borderBottomWidth: 1,
  },
  moveinfoView: {
    flex: 0.9,
    paddingLeft: 15,
    margin: 15,
    flexDirection: "column",
  },
  iconView: {
    flex: 0.1,
    alignItems: "center",
  },
});
