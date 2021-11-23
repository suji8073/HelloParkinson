//App.js
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

import React, { Component } from "react";
import "react-native-gesture-handler";

export default class test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  //   userfunc = () => {
  //     fetch("http://152.70.233.113/user", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((json) => {
  //         ;this.setState({ data: json })
  //         console.log(this.state.data);
  //       });
  //   };

  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.menuView}>
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>데이터 불러오기</Text>
          <View style={styles.margin}></View>
        </View>

        <Text onPress={this.userfunc}>김채현</Text>
      </View>
    );
  }

  // import React, { useState, useEffect } from "react";
  // import axios from "axios";

  // function test() {
  //   const [users, setUsers] = useState(null);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       try {
  //         // 요청이 시작 할 때에는 error 와 users 를 초기화하고
  //         setError(null);
  //         setUsers(null);
  //         // loading 상태를 true 로 바꿉니다.
  //         setLoading(true);
  //         const response = await axios.get("http://152.70.233.113/user");
  //         setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
  //       } catch (e) {
  //         setError(e);
  //       }
  //       setLoading(false);
  //     };

  //     fetchUsers();
  //   }, []);

  //   if (loading) return <div>로딩중..</div>;
  //   if (error) return <div>에러가 발생했습니다</div>;
  //   if (!users) return null;
  //   return (
  //     <ul>
  //       {users.map((user) => (
  //         <li key={user.id}>
  //           {user.username} ({user.name})
  //         </li>
  //       ))}
  //     </ul>
}

const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  menuView: {
    backgroundColor: "#FFFFFF",
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: "10%",
    justifyContent: "flex-start",
    borderBottomWidth: 1.8,
    borderColor: "#E5E5E5",
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: 21,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },

  firstView: {
    // padding:30,
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
  },
  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
