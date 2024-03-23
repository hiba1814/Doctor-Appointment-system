// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,Text,TextInput,Image,View,Button, TouchableOpacity  } from "react-native";

export default function App(){
  const [username , setName]=useState("");
  const [password , setPasswrd]=useState("");
  return(
    <View style={styles.container}>
      
      <TextInput style={styles.username} placeholder='User Name' onChangeText={(value) => setName(value)} >
      </TextInput>
      <TextInput style={styles.Password} placeholder='password' onChangeText={(value) => setPasswrd(value)} >

      </TextInput>
      <TouchableOpacity value={0.9} style={styles.button} onPress={clickhandler}/>
      <StatusBar style="auto" />
    </View>
  );
  function clickhandler(){
    if(username!="admin@123")
      {
        alert("Invalid Username");
      }
      else if(password!="12345678")
      {
        alert("Invalid password");
      }
      else if(password=="" || username=="")
      {
        alert("Enter Valid Username And password");
      }
      else{
        alert("Welcom!");
      }
  }
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },});
const styles= StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#fff',
    
    alignItems:'center',
    justifyContent:'center',
},
username:{
  width:300,
  height:50,
  margin:30,
  borderRadius:10,
  backgroundColor:'#fcb',
},
Password:{
  width:300,
  height:50,
  margin:30,
  marginTop:0,
  borderRadius:10,
  backgroundColor:'#fcb',
},
button:{
  width:100,
  height:40,
  backgroundColor:'blue',
},
});

