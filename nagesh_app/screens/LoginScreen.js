import React from 'react';
import { ImageBackground,View,Text,StyleSheet,TouchableOpacity } from "react-native";

export default class SettingsScreen extends React.Component {
static navigationOptions = {
    header: null,
};

_takeToNext = ()=>{
    this.props.navigation.navigate('Alogin');
}


render() {
    return (
        <View style={{flex : 1}}>
            <ImageBackground
                source = {require('../assets/images/landing.png')}
                style  = {{flex : 1}}
            >
                <View style = {{flex : 1,justifyContent : 'center' ,alignItems : 'center'}}>
                    <TouchableOpacity 
                        onPress={this._takeToNext}
                        style = {
                        {
                            backgroundColor : 'rgb(40,79,166)',widht:100,marginTop: 440,paddingTop : 15,paddingBottom:15,paddingRight:120,paddingLeft:120,
                            border : ''
                        }
                    }>
                        <Text style = {{fontWeight : 'bold',fontSize:18,color : 'white'}} >Login</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
            
        </View>

    );
}
}
