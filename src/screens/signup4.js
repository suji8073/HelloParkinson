
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native';

function signup4({navigation}) {
 

  return (
    <View style={styles.finalView}>
      <View style={styles.settingView}>
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate("signup3");
            }}
            >
        <View>
          <Image
            style={{width: 10, height: 20}}
            source={require('../icon/arrow.png')}>
          </Image>
        </View>
            
          </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.secondView}>
          <TouchableOpacity style={styles.buttonwhite}>
            <TextInput
            style={styles.textInput}
            onChangeText={(text) => {this.setState({inputText: text})}}
            placeholder="  이름"
            />
          </TouchableOpacity>

          <View style={styles.numberbutton}>
            <TouchableOpacity style={styles.number1}>
            
              <TextInput
                style={styles.MText}
                onChangeText={(text) => {this.setState({inputText: text})}}
                placeholder="   010"
              />
              
            </TouchableOpacity>
            <TouchableOpacity style={styles.number2}>
            
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => {this.setState({inputText: text})}}
                placeholder="  휴대전화번호"
              />
            
            </TouchableOpacity>
          </View>
        </View>
          
        <View style={styles.secondView}>
          <Text style={styles.titleText}>생년월일</Text>
          <TouchableOpacity style={styles.buttonwhite}>
            <TextInput
            style={styles.textInput}
            onChangeText={(text) => {this.setState({inputText: text})}}
            placeholder="  '-' 제외 8자리를 입력해주세요"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.secondView}>
          <Text style={styles.titleText}>성별</Text>
          <View style={styles.numberbutton}>
            <TouchableOpacity style={styles.genderB1}
              activeOpacity={0.8}
              //onPress={()=>}
            >
              <Text style={styles.gendertext}> 남자 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.genderB2}
              activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate("signup4");
                }}
              >
              <Text style={styles.gendertext}> 여자 </Text>
            </TouchableOpacity>
          </View>
        </View>

        
        <View style={styles.secondView}>
          <Text style={styles.titleText}>아이디 설정</Text>
          <View style={styles.numberbutton}>
            <TouchableOpacity style={styles.number3}>
              
                <TextInput
                  style={styles.MText}
                  onChangeText={(text) => {this.setState({inputText: text})}}
                  placeholder="   아이디를 입력해주세요"
                />
                
              </TouchableOpacity>
              <TouchableOpacity style={styles.number4}
                activeOpacity={0.8}
                  onPress={() => {
                    navigation.navigate("signup4");
                  }}
                >
                <Text style={styles.white1}> 중복확인 </Text>
              </TouchableOpacity>
            </View>
        </View>

        
        <View style={styles.secondView}>
          <Text style={styles.titleText}>비밀번호 설정</Text>
          <TouchableOpacity style={styles.buttonwhite}>
            <TextInput
            style={styles.textInput}
            onChangeText={(text) => {this.setState({inputText: text})}}
            placeholder="  비밀번호를 입력해주세요"
            />
          </TouchableOpacity>
        </View>
      </View>

  
      <View style={styles.chatControl}>

        <TouchableOpacity style={styles.sendButton}
          activeOpacity={0.8}
            onPress={() => {
              Alert.alert("회원가입이 정상적으로 완료되었습니다.")
              navigation.navigate("login");
            }}
          >
          <Text style={styles.white}> 회 원 가 입 </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default signup4;

const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    padding:20,
    backgroundColor: '#FFFFFF',
  },
  container: {
    marginTop:10,
    flex: 60,
    justifyContent: 'center',
  },

  secondView: {
    alignItems:'flex-start',
    marginBottom:20,
  },

  textInput: {
    fontSize: 14,
    color: '#AFAFAF',
  },

  MText:{
    fontSize: 14,
    color: '#000000',
  },
  
  buttonwhite:{
    marginLeft: 3,
    marginRight: 3,
    width : '100%',
    height : 45,
    borderWidth: 2,
    borderColor:'#E5E5E5',
  },

  numberbutton:{
    marginLeft: 3,
    marginRight: 3,
    width : '100%',
    height : 45,
    borderColor:'#E5E5E5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },

  number1:{
    width : '15%',
    height : 45,
    borderBottomWidth:2,
    borderLeftWidth:2,
    borderColor:'#E5E5E5',
    flexDirection: 'row',
  },
  number2:{
    width : '85%',
    height : 45,
    borderBottomWidth:2,
    borderLeftWidth:2,
    borderRightWidth:2,
    borderColor:'#E5E5E5',
    flexDirection: 'row',
  },

  number3:{
    width : '75%',
    height : 45,
    borderWidth:2,
    marginRight:5,
    borderColor:'#E5E5E5',
    flexDirection: 'row',
  },
  number4:{
    width : '25%',
    height : 45,
    borderWidth:2,
    borderColor:'#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },


  settingView: {
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 10,
    
  },


  titleText:{
    alignItems:'flex-start',
    fontSize: 17,
    padding:3,
    fontWeight: 'bold',
    color: '#000000',
  },

  gendertext:{
    fontSize: 14,
    color: '#AFAFAF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  

  white:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  white1:{
    fontSize: 15,
    color: '#AFAFAF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  genderB1:{
    backgroundColor: '#F5F5F5',
    width : '50%',
    height : 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'#E1E1E1',
    borderBottomWidth:2,
    borderTopWidth:2,
    borderLeftWidth:2,
  },
  
  genderB2:{
    backgroundColor: '#F5F5F5',
    width : '50%',
    height : 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'#E1E1E1',
    borderWidth: 2,
  },

  sendButton:{
    flex : 2,
    backgroundColor: '#7AC819',
    alignItems: 'center',
    justifyContent: 'center',
    width : '100%',
    height : 50,
    
  },


  chatControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

});