import App from "./src/App";
import React from "react";
import { Text } from "react-native";
import Loading from "./src/Loading";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  componentDidMount = async () => {
    // 1,000가 1초
    // http://hccparkinson.duckdns.org:19737/pingtest

    setTimeout(() => {
      fetch("http://hccparkinson.duckdns.org:19737/pingtest", {
        method: "GET",
      }).then((response) => {
        console.log(response.status);
        if (response.status === 200) this.setState({ isLoading: false });
      });
    }, 3000);
  };

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    } else {
      return <App></App>;
    }
  }
}
