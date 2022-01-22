import React from "react";
import { Alert } from "react-native";
import Context from "./context";
export default class GlobalState extends React.Component {
  state = {
    user_id: "",
    user_pw: "",
    user_name: "",
  };
  changePW = (pw) => {
    this.setState({ user_pw: pw });
  };
  changeID = (id) => {
    this.setState({ user_id: id });
  };
  changeNAME = (name) => {
    this.setState({ user_name: name });
  };
  render() {
    return (
      <Context.Provider
        value={{
          changePW: this.changePW,
          changeID: this.changeID,
          changeNAME: this.changeNAME,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
