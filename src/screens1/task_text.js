import { themeTools } from "native-base";
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

var sum_p = 0;
export default class task_graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum_progress: 0,
    };
  }

  componentDidMount() {
    this.sum_progress_function();
  }

  sum_progress_function = () => {
    console.log(this.props.id);
    if (this.props.id === 0) {
      sum_p = 0;
      console.log("check");
    }
    console.log(this.props.progress);
    sum_p = sum_p + this.props.progress;

    if (this.props.id === 6) {
      this.setState({ sum_progress: sum_p / 7 });
    }
    console.log(sum_p);
  };

  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <View style={styles.textview}>
          <Text style={styles.text1}>
            {(() => {
              if (this.props.id === 0)
                return (
                  String(this.props.put_date).substring(0, 4) +
                  "년 " +
                  String(this.props.put_date).substring(4, 6) +
                  "월 " +
                  +String(this.props.put_date).substring(6, 8) +
                  "일"
                );
              if (this.props.id === 2) return " ~ ";
              if (this.props.id === 6)
                return (
                  String(this.props.put_date).substring(0, 4) +
                  "년 " +
                  String(this.props.put_date).substring(4, 6) +
                  "월 " +
                  +String(this.props.put_date).substring(6, 8) +
                  "일"
                );
            })()}
          </Text>
        </View>
        <View style={styles.oneview}>
          <Text  style={styles.text2}>
            {(() => {
              if (this.props.id === 0) return "주 평균 ";
              else if (this.props.id === 6)
                return this.state.sum_progress + "%";
              else return "야";
            })()}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text1: {
    alignItems: "flex-start",
    fontSize: 17,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },
  text2: {
    alignItems: "flex-start",
    fontSize: 21,
    color: "#000000",
    fontWeight: "bold",
    borderWidth: 1,
  },
  textview: {
    flex: 1,
    marginTop: 10,
    marginBottom: 3,
    justifyContent: "center",
  },
  oneview: {
    flex: 1,
    marginBottom: 5,
  },
});
