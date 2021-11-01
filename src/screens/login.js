//App.js
import { StyleSheet,Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';

function login({navigation}) {
 return (

  <View style={styles.finalView}>
    <View style={styles.NoneView}>
    </View>

    <View style={styles.firstView}>
       
      <Text style={styles.titleText}>{
        '안녕하세요.\n굿나잇 파킨슨 입니다.\n'}
      </Text>
      <Text style={styles.secondText}>{
        '회원 서비스 이용을 위해 로그인 해주세요'}
      </Text>
    </View>

    <View style={styles.secondView}>  
      
      <TouchableOpacity style={styles.buttonwhite}>
        <TextInput
        style={styles.textInput}
        onChangeText={(text) => {this.setState({inputText: text})}}
        placeholder="  아이디"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonwhite}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {this.setState({inputText: text})}}
          placeholder="  비밀번호"
        />
      

      </TouchableOpacity>

     <TouchableOpacity 
        style={styles.buttongreen}
        activeOpacity={0.8}
        onPress={() => {navigation.navigate("TabNavigation")}} 
      >
        <Text style={{color:"#FFFFFF"}}> 로그인하기 </Text>
      </TouchableOpacity>
      
    <View style={styles.thirdView}>
        <Text style={styles.secondText1}> 계정이 없으신가요?</Text>
          <TouchableOpacity onPress={() => {navigation.navigate("signup1")}} 
          >
            <Text style={styles.secondText2}>회원가입하기</Text>
          </TouchableOpacity>
        
    </View>
      
        

    </View>

  </View>
  );
}



const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    padding:20,
    backgroundColor: '#FFFFFF',
  },
  NoneView: {
    flex: 2,
  },
  firstView: {
    // padding:30,
    alignItems:'flex-start',
    flex: 3,
    backgroundColor: '#FFFFFF',
  },
  secondView: {
    // padding:30,
    alignItems:'center',
    flex: 5,
    backgroundColor: '#FFFFFF',
  },
  thirdView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection:'row',
    fontSize: 17,
    color: '#2E2E2E',
  },
  textInput: {
    fontSize: 15,
    color: '#AFAFAF',
  },


  titleText:{
    alignItems:'flex-start',
    fontSize: 25,
    color: '#000000',
    // marginLeft:'9%',
    fontWeight:"bold",
  },
  secondText1:{
    alignItems:'flex-start',
    fontSize: 17,
    justifyContent: 'center',
    // marginLeft:'9%',
    color: '#2E2E2E',
  },
  secondText2:{
    alignItems:'flex-start',
    fontSize: 17,
    justifyContent: 'center',
    // marginLeft:'9%',
    fontWeight: 'bold',
    color: '#2E2E2E',
  },
  buttonwhite:{
    margin:5,
    backgroundColor: '#FFFFFF',
    width : '100%',
    height : 50,
    borderWidth: 2,
    borderColor:'#E5E5E5',
  },
  buttongreen:{
    margin:20,
    backgroundColor: '#7AC819',
    alignItems: 'center',
    justifyContent: 'center',
    width : '100%',
    height : 50,
  },
  logintext:{
    fontSize:17,
    fontWeight:"bold",
    color: "#FFFFFF",
  },

});

export default login;