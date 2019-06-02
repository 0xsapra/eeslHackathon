import React from 'react';
import { Text } from 'react-native';
import { Container , Content , Icon,Card,CardItem,Thumbnail,Body,Left,Right,Button, View } from 'native-base';
import { MonoText } from '../components/StyledText';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Alerts',
  };

  state = {
      critical : [
        "Power Factor is around 0.7. Please contact"
      ],
      medium : [
        "Subsidiary Units Left is 220 for next 29Days",
      ],
      low : [

      ]
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */

    return (
        <Container>
            <Content>
            <Card style = {{marginLeft : 5 , marginTop : 5 ,marginRight : 5,height:60}}>
                <View style={{flex : 1,flexDirection : 'row'}}>
                    <View style = {{height : 58,width :4,left : 0,backgroundColor : 'red'}}></View>
                    <View style={{height : 50,width : 50,borderRadius : 25,backgroundColor : 'red',marginLeft : 3,marginTop : 3}}>
                        <Text style ={{marginLeft : 18,fontSize : 18,marginTop :12,color:'white'}}>C</Text>
                    </View>
                    <View>
                    <MonoText style={{textAlign: 'left',marginLeft : 0 ,color :'gray',fontSize : 14}}> Critical </MonoText>
                        <MonoText style={{textAlign: 'left',marginTop :5,marginLeft : 0 ,color :'black',fontSize : 16}}> {this.state.critical[0]} </MonoText>
                    </View>
                </View>
                
            </Card>   

            <Card style = {{marginLeft : 5 , marginTop : 5 ,marginRight : 5,height:60}}>
                <View style={{flex : 1,flexDirection : 'row'}}>
                    <View style = {{height : 58,width :4,left : 0,backgroundColor : 'rgb(255,175,23)'}}></View>
                    <View style={{height : 50,width : 50,borderRadius : 25,backgroundColor : 'rgb(255,175,23)',marginLeft : 3,marginTop : 3}}>
                        <Text style ={{marginLeft : 18,fontSize : 18,marginTop :12,color:'white'}}>M</Text>
                    </View>
                    <View>
                    <MonoText style={{textAlign: 'left',marginLeft : 0 ,color :'gray',fontSize : 14}}> Normal </MonoText>
                        <MonoText style={{textAlign: 'left',marginTop :5,marginLeft : 0 ,color :'black',fontSize : 16}}> {this.state.medium[0]} </MonoText>
                    </View>
                </View>
                
            </Card> 
            
                    
                
            </Content>
        </Container>
    );
  }
}
