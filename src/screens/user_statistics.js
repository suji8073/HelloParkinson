import React from "react";
import { Alert, TouchableOpacity, StyleSheet, View, Text, ScrollView } from "react-native";
import styled from "styled-components/native";

import { SimpleLineIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 


  

function user_statistics({navigation}) {
  
  return (
    <View style={styles.finalView}>
      <View style={styles.menuView}>
        <AntDesign name="left" size={24} color="#808080" onPress={() => {
              navigation.navigate("TabNavigation");
            }}/>
        <View style={styles.margin}></View>
        <Text style={styles.titleText}>'김옥분'님의 운동 통계</Text>
        <View style={styles.margin}></View>
        <Entypo name="dots-three-vertical" size={24} color="#595959" />
      </View>

      <ScrollView>
        <View style={styles.firstView}>
          <Text style={styles.user_name}>김옥분</Text>
          <Text style={styles.user_age}>/77세</Text>
          <Text style={styles.user_sex}>/여</Text>
          <View style={styles.margin}></View>
          <MaterialCommunityIcons name="google-spreadsheet" size={30} color="#0F9D58" />

        </View>

        <View style={styles.secondView}>
          
        </View>

        <View style={styles.threeView}>
          
        </View>
      </ScrollView>
      
    </View>
  );
};

export default user_statistics;

const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    
  },

  menuView: {
    backgroundColor: '#FFFFFF',
    height : 58,
    flexDirection: 'row',
    alignItems:'center',
    paddingRight:20,
    paddingLeft:20,
    justifyContent: 'flex-start',
    borderBottomWidth:1.8,
    borderColor:'#E5E5E5',
  },

  titleText:{
    alignItems:'flex-start',
    fontSize: 20,
    alignItems: 'center',
    color: '#000000',
    justifyContent: 'center',
    fontWeight:"bold",
  },

  firstView: {
    // padding:30,
    alignItems:'center',
    justifyContent: 'flex-start',
    marginLeft:20,
    marginRight:20,
    flexDirection: 'row',
    flex: 1,
    marginTop:15,
    marginBottom:15,
    backgroundColor: '#FFFFFF',
  },

  margin: {
    // padding:30,
    alignItems:'flex-start',
    justifyContent: 'center',
    flex: 1,
  },


  user_name:{
    // padding:30,
    alignItems:'flex-start',
    justifyContent: 'center',
    color: "#000000",
    fontSize:21,
    fontWeight:"bold",
  },

  user_age:{
    // padding:30,
    alignItems:'flex-start',
    justifyContent: 'center',
    fontSize:17,
  },

  user_sex:{
    // padding:30,
    alignItems:'flex-start',
    justifyContent: 'center',
    fontSize:17,
  },

  secondView: {
    // padding:30,
    alignItems:'flex-start',
    justifyContent: 'center',
    marginTop:10,
    flexDirection: 'row',
    height:200,
    flex:4,
    backgroundColor: '#FFFFFF',
    borderWidth:1,
    borderColor:'#E5E5E5',
  },

  threeView: {
    // padding:30,
    alignItems:'flex-start',
    justifyContent: 'center',
    height:500,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderWidth:1,
    borderColor:'#E5E5E5',
  },

 

  
});

