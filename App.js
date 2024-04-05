import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, TouchableHighlight, View , Image, ImageBackground} from "react-native";
const App = ()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onPress = ()=>
  {
    Alert.alert(`Dang nhap thanh cong voi user name = ${email} va password = ${password}` );
  }
  return(
    <ImageBackground 
        source={require("./assets/hinh.jpg")}
        style={mystyle.container}>
        <View style={mystyle.container}>
        
            <Image
                style={mystyle.logo}
                source={require("./assets/dog.png")}
            />
            <Text style={mystyle.centeredText}>REGISTER</Text>
            <Text style={mystyle.centeredText}>LOGIN</Text>
            <TextInput
                style={mystyle.textInput}
                onChangeText={setEmail}git
                placeholder="Nhap user name"
                value={email}
                />
            <TextInput
                style={mystyle.textInput}
                onChangeText={setPassword}
                placeholder="Nhap password"
                secureTextEntry
                value={password}

                />
            <TouchableHighlight
                style={mystyle.button}
                onPress={onPress}
            >
                <Text style={mystyle.buttonText}>
                    Login
                </Text>
                
            </TouchableHighlight>
            <Text style={mystyle.centeredText}>NguyenDucTrung</Text>
        </View>
  </ImageBackground>
  )
}

export default App;
const mystyle = StyleSheet.create(
  {
    container: {
        padding: 10,
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        color: '#E0FFFF', 
    },
    textInput: {
      borderWidth:1,
      borderColor: "#E6E6FA",
      margin:5,
      color: '#E0FFFF', 
    },
    button: {
      backgroundColor: "#8FBC8F",
      height: 50,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      margin: 5
    },
    buttonText: {
      color: "#E0FFFF",
      fontSize: 20,
      fontWeight: "bold"
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
        alignSelf:"center"
  },
  centeredText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 26, 
    color: '#E0FFFF', 
  },
  
});