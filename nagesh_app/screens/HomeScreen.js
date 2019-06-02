import React from 'react';
import {
  Image,
  Text,
  View,
  Dimensions
} from 'react-native';

import { Container , Content , Icon,Card,CardItem,Thumbnail,Body,Left,Right,Button } from 'native-base';
import { MonoText } from '../components/StyledText';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default class HomeScreen extends React.Component {
  
  
  static navigationOptions = {
    header: null,
  };
  state = { 
      username : "Sheet1",
      userId   : "03ac6b083cc7",
      address  : "House N. 1001 ,Lajpat Nagar",
      monthconsumtion  : 2200,
      dayconsumtion   : 250,
      yesterdayconsumtion : 560
   };

  render() {

    let sliderwidth = width - 20;
    let slider2width = width - 100;
    return (
      <Container>
          <Content>
            <Image source = {require("../assets/images/top.png") } 
                    style = {{height : 80,width : null, flex : 1}} />
            <Card style = {{margin : 2}}>
                <View style = {{flex : 1,flexDirection : 'row',justifyContent : 'space-around'}}>
                    <View style = {{ marginTop : 15 , marginBottom : 10 }}>
                        <View style = {{flexDirection : 'column'}}>
                            <Image source = {require("../assets/images/profile.png") } 
                                style = {{height : 90,width : 90, borderRadius : 45 }} />
                            <View style={{width : 180}}>
                                <MonoText style ={{color : 'gray' , marginTop : 12 , fontSize : 10}}>
                                    Name : {this.state.username}
                                </MonoText>
                                <MonoText style ={{color : 'gray' , marginTop : 5, fontSize : 10 }}>
                                    Customer No : {this.state.userId}
                                </MonoText>
                                <MonoText style ={{color : 'gray' , marginTop : 5,  fontSize : 10  }}>
                                    Address : {this.state.address}
                                </MonoText>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style = {{marginLeft : -65,marginTop : 20}}>
                            <MonoText style={{textAlign: 'left',marginTop :5,marginLeft : 0 ,color :'gray',fontSize : 10}}>This Months Consumtion</MonoText>
                            <Text style ={{fontSize : 36,color : 'rgb(40,79,166)' , fontWeight : '400'}}>₹ {this.state.monthconsumtion}</Text>
                            <MonoText style={{textAlign: 'left',marginTop :5,marginLeft : 0 ,color :'gray',fontSize : 10}}>Which is <Text style={{color: 'red'}}>₹300 </Text>more because of</MonoText>
                            <Text style={{textAlign: 'left',marginLeft : 2 ,color :'gray',fontSize : 10}}>Inefficient Devices Listed Below</Text>

                        </View>
                    </View>

                </View>
            </Card>
            <Card style = {{margin : 2}}>
                <View style={{paddingLeft : 4,paddingTop : 8}}>
                    <MonoText style={{fontSize : 16}}>Today's Consumtion</MonoText>
                </View>
                <View style = {{flex : 1,flexDirection : 'row',width : sliderwidth, height : 60,marginTop :20 , marginLeft : 10}}>
                    <View style={{ height : 5, width : sliderwidth*(1/3), backgroundColor:'rgb(40,79,166)'}}></View>
                    <View style={{ height : 5, width : sliderwidth*(2/3), backgroundColor:'lightgray'}}></View>
                    <View style = {{height : 24,position:"absolute",width :4,left : 340,top : -14,backgroundColor : 'rgb(255,175,23)'}}>
                        <Text style={{width : 100,marginTop : 20,marginLeft : -30}}>Your Average</Text>
                    </View>
                </View>
                <View style={{flex : 1,flexDirection : 'row' , justifyContent : 'center',marginTop : -40 }}>
                    <Text style ={{fontSize : 36,color : 'rgb(40,79,166)' , fontWeight : '400'}}>₹ {this.state.dayconsumtion}</Text>
                </View>
                <View style={{flex : 1,flexDirection : 'row' , justifyContent : 'center', }}>
                    <MonoText style ={{color : 'gray' , marginTop : 10 , fontSize : 14}}>TILL  {new Date().getHours()} { new Date().getHours() > 12 ? "PM" : "AM" } </MonoText>
                </View>

            </Card>

            <Card style = {{margin : 2}}>
                <View style={{paddingLeft : 4,paddingTop : 8}}>
                    <MonoText style={{fontSize : 16}}>Yesterday's Consumtion</MonoText>
                </View>
                <View style = {{flex : 1,flexDirection : 'row',width : sliderwidth, height : 60,marginTop :20 , marginLeft : 10}}>
                    <View style={{ height : 5, width : sliderwidth*(3/4), backgroundColor:'rgb(40,79,166)'}}></View>
                    <View style={{ height : 5, width : sliderwidth*(1/4), backgroundColor:'lightgray'}}></View>
                    <View style = {{height : 24,position:"absolute",width :4,left : 340,top : -14,backgroundColor : 'rgb(255,175,23)'}}>
                        <Text style={{width : 100,marginTop : 20,marginLeft : -30}}>Your Average</Text>
                    </View>
                </View>
                <View style={{flex : 1,flexDirection : 'row' , justifyContent : 'center',marginTop : -40 }}>
                    <Text style ={{fontSize : 36,color : 'rgb(40,79,166)' , fontWeight : '400'}}>₹ {this.state.yesterdayconsumtion}</Text>
                </View>
                <View style={{flex : 1,flexDirection : 'row' , justifyContent : 'center', }}>
                    <MonoText style ={{color : 'red' , marginTop : 10 , fontSize : 14}}>+60(8%)
                        <Icon name="md-arrow-up" style={{fontSize: 16,color : 'red' }}  ></Icon>
                    </MonoText>
                </View>

            </Card>

            <Card style = {{margin : 2}}>
                <View style={{paddingLeft : 4,paddingTop : 8}}>
                    <MonoText>Top Energy Consuming Appliances</MonoText>
                </View>
                <View style = {{flex : 1,flexDirection : 'row',width : slider2width, height : 60,marginTop :20 , marginLeft : 10}}>
                    <MonoText style={{width : 75}}>Microwave</MonoText>
                    <View style={{ marginTop : 7,height : 9, width : slider2width-20, backgroundColor:'red'}}></View>
                    
                </View>
                <View style = {{flex : 1,flexDirection : 'row',width : slider2width, height : 60 , marginLeft : 10}}>
                    <MonoText style={{width : 75}}>AC</MonoText>
                    <View style={{ marginTop : 1,height : 9, width : slider2width/2, backgroundColor:'rgb(255,175,23)'}}></View>
                    
                </View>
                <View style = {{flex : 1,flexDirection : 'row',width : slider2width, height : 60 , marginLeft : 10}}>
                    <MonoText style={{width : 75}}>Fridge</MonoText>
                    <View style={{ marginTop : 1,height : 9, width : slider2width/3, backgroundColor:'lightgreen'}}></View>
                    
                </View>
                
                <View style = {{flex : 1,flexDirection : 'row',width : slider2width, height : 60 , marginLeft : 10}}>
                    <MonoText style={{width : 75}}>(?)</MonoText>
                    <View style={{ marginTop : 1,height : 9, width : slider2width/4, backgroundColor:'lightgreen'}}></View>
                    
                </View>
                

            </Card>
          </Content>
      </Container>
    );
  }

  
}

