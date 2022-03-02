import PushNotification from "react-native-push-notification";
import React, { Component } from "react";

export default class PushController extends React.Component {
  componentDidMount() {
    PushNotification.configure({
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
      },
    });
  }

  render() {
    return null;
  }
}
