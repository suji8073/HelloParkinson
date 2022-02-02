import App from "./src/App";
import React, { Component } from "react";
import Loading from "./src/Loading";

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
      return <App />;
    }
  }
}
