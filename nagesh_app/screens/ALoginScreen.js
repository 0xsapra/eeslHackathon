    import React from 'react';
    import { TextInput,View,Text,Image,TouchableOpacity,Dimensions } from "react-native";
    import { Card, ListItem, Button, Icon } from 'react-native-elements'

    export default class SettingsScreen extends React.Component {
    static navigationOptions = {
    header: null,

    };

    state = {
        text : "",
        pass : ""
    }

    _takeToNext = ()=>{
        let username =  this.state.text;
        let pass = this.state.pass;
        fetch('http://192.168.31.13:1337/userInfo', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: pass,
            }),
        }).then((response) => response.json())
        .then((responseJson) => {
            let error = responseJson.error;
            if(error){
                // alert("Wrong Creds")
                this.props.navigation.navigate('Main',responseJson.data);
            }else{
                this.props.navigation.navigate('Main',responseJson.data);
            }
        })
    }

    render() {
        const dimensions = Dimensions.get('window');
    return (
        <View style={{flex : 1}}>
            <Image
                resizeMode="contain"
                style={{flex:1,top : -160 , width : dimensions.width}}
                source={require('../assets/images/top.png')}
            />
             <Image 
                resizeMode="contain"
                source = {require("../assets/images/logo.png") } 
                style={{flex:1,top : -180 , width : dimensions.width / 2 , marginLeft : 100}}
                
            />

            <View style = {{flex : 1,justifyContent : 'center' ,alignItems : 'center',top : -250}}>
                <Card>
                    <View style = {{flexDirection : 'column'}}>
                        <View style = {{flexDirection : 'row'}} >
                            <View>
                                <TextInput 
                                    style={{height: 40,width:250}}
                                    placeholder="Username"
                                    onChangeText={(text) => this.setState({text})}
                                />
                            </View>
                        </View>
                        <View style={{marginTop : 20}}>
                            <View>
                                <TextInput 
                                    style={{height: 40,width:250}}
                                    placeholder="Password"
                                    onChangeText={(text) =>  this.setState({pass : text})}
                                />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                    onPress={this._takeToNext}
                    style = {{
                        backgroundColor : 'rgb(40,79,166)',widht:100,marginTop: 40,paddingTop : 15,paddingBottom:15,paddingRight:120,paddingLeft:120,
                        border : ''}}
                >
                    <Text style = {{fontWeight : 'bold',fontSize:18,color : 'white'}} >Login</Text>
                </TouchableOpacity>
                </Card>
                
            </View>
            
        </View>

    );
    }
    }
