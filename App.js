import App from "./src/App";
import React from "react";
import { AppState } from "react-native";
import Loading from "./src/Loading";
import PushController from "./src/PushController";

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

    //AppState는 앱이 ‘foreground’에 있는지, ‘background’에 있는지를 알려준다.
    AppState.addEventListener("change", this.handleAppStateChange);
  };

  componentWillUnmount = () => {
    AppState.removeEventListener("change", this.handleAppStateChange);
  };

  handleAppStateChange = (appState) => {
    if (appState === "background") {
      PushNotification.localNotificationSchedule({
        message: "My Notification Message", // (required)
        date: new Date(Date.now() + 60 * 1000), // in 60 secs
      });
    }
  };

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    } else {
      return (
        <App>
          <PushController />
        </App>
      );
    }
  }
}
