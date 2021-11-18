import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";

const data = {
  datasets: [
    {
      data: [75, 25, 40, 90, 55],
      color: (opacity = 0) => `rgba(101, 203, 0, ${opacity})`, // optional
      strokeWidth: 1.5,
    },
  ],

};
const task_patient = ({}) => {
  return (
    //  전체 뷰
    <View
      style={{
        alignItems: "flex-start",
        flexDirection: "column",
        height: 200,
        marginBottom:"10%",
        width: 300,
        justifyContent: "center",
      }}
    >
      <Text style={styles.text1}>2월 6일</Text>

      <View style={styles.graphView}>
        <View style={styles.numView}>
          <View style={styles.num3}></View>
          <Text style={styles.num2}>75</Text>
          <Text style={styles.num2}>25</Text>
          <Text style={styles.num2}>40</Text>
          <Text style={styles.num2}>90</Text>
          <Text style={styles.num2}>50</Text>
        </View>
        <LineChart
          style={styles.chart}
          data={data}
          width={330}
          height={100}
          yAxisSuffix="%"
          yAxisInterval={1}
          
          chartConfig={{
            backgroundColor: "#FFFFFF",
            backgroundGradientFrom: "#FFFFFF",
            backgroundGradientTo: "#FFFFFF",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(198, 198, 198, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(72, 72, 72, ${opacity})`,
            propsForDots: {
              r: "4",
            },
          }}
        />
        <View style={styles.textView}>
          <View style={styles.text3}></View>
          <Text style={styles.text2}>신장</Text>
          <Text style={styles.text2}>근육</Text>
          <Text style={styles.text2}>구강{"\n"}발성</Text>
          <Text style={styles.text2}>균형{"\n"}협응</Text>
          <Text style={styles.text2}>유산소</Text>
          <View style={styles.text4}></View>
        </View>
      </View>
    </View>
  );
};

export default task_patient;
const styles = StyleSheet.create({
  text1: {
    alignItems: "flex-start",
    fontSize: 21,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },
  text2: {
    fontSize: 17,
    color: "#484848",
    justifyContent: "center",
    alignItems: "center",
    flex: 1.5,
    lineHeight:20,
  },
  text3: {
    flex: 1.3,
  },
  text4: {
    flex: 0.3,
  },
  graphView: {
    flex: 3,
    marginBottom: "5%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  chart: {
    alignItems: "center",
    justifyContent: "center",
  },
  textView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },
  numView:{
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    marginTop:"8%",
  },
  num2:{
    fontSize: 14,
    color: "#484848",
    justifyContent: "center",
    alignItems: "center",
    flex: 1.8,
  },
  num3: {
    flex: 1.4,
  },

  
});
