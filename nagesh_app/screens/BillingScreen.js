import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { MonoText } from '../components/StyledText';
import { AreaChart,XAxis, Grid, BarChart } from 'react-native-svg-charts'
import { Container , Content , Icon,Card,CardItem,Thumbnail,Body,Left,Right,Button } from 'native-base';
import * as shape from 'd3-shape'




export default class BillingScreen extends React.Component {
  static navigationOptions = {
    title: 'Billing',
  };
  
 
  render() {

    return (
        <Container>
            <Content>
                <Card style = {{marginLeft : 5 , marginTop : 5 ,marginRight : 5,height:100}}>
                    <View style={{flex : 1,flexDirection : 'row'}}>
                        <View style={{height : 70,width : 70,borderRadius : 35,backgroundColor : 'rgb(40,79,166)',marginLeft : 3,marginTop : 3}}>
                            <Text style ={{marginLeft : 18,fontSize : 18,marginTop :20,color:'white'}}>May</Text>
                        </View>
                        <View style = {{marginLeft: 13}}>
                            <MonoText style={{textAlign: 'left',marginTop :5,marginLeft : 0 ,color :'black',fontSize : 14}}> Total Bill : ₹ 2100</MonoText>
                            <MonoText style={{textAlign: 'left',marginTop :5,marginLeft : 0 ,color :'gray',fontSize : 14}}> Total Unit Consumed : 600</MonoText>
                            <MonoText style={{textAlign: 'left',marginTop :5,marginLeft : 0 ,color :'gray',fontSize : 14}}> Bill Id : 11200</MonoText>
                            <MonoText style={{textAlign: 'left',marginTop :5,marginLeft : 0 ,color :'gray',fontSize : 14}}> Due Date : May 1st 2019</MonoText>
                        </View>
                        <View>
                            <TouchableOpacity
                                style = {{
                                    backgroundColor : 'rgb(255,175,23)',height : 60,width : 80,marginLeft : 40,marginTop : 23}}
                            >   
                                <View style = {{justifyContent : 'center' , flex:1,alignItems : 'center'}}>
                                    <Text style = {{fontWeight : 'bold',fontSize:18,color : 'white'}} >Pay</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card>   

                <Card style = {{marginLeft : 5 , marginTop : 5 ,marginRight : 5,height:100}}>
                    <View style={{flex : 1,flexDirection : 'row'}}>
                        <View style={{height : 70,width : 70,borderRadius : 35,backgroundColor : 'rgb(40,79,166)',marginLeft : 3,marginTop : 3}}>
                            <Text style ={{marginLeft : 18,fontSize : 18,marginTop :20,color:'white'}}>April</Text>
                        </View>
                        <View style = {{marginLeft: 13}}>
                            <MonoText style={{textAlign: 'left',marginTop :5,marginLeft : 0 ,color :'black',fontSize : 14}}> Total Bill : ₹ 2000</MonoText>
                            <MonoText style={{textAlign: 'left',marginTop :5,marginLeft : 0 ,color :'gray',fontSize : 14}}> Total Unit Consumed : 500</MonoText>
                            <MonoText style={{textAlign: 'left',marginTop :5,marginLeft : 0 ,color :'gray',fontSize : 14}}> Bill Id : A1200</MonoText>
                        </View>
                        <View>
                            <TouchableOpacity
                                style = {{
                                    backgroundColor : 'rgb(85,159,60)',height : 60,width : 80,marginLeft : 40,marginTop : 23}}
                            >   
                                <View style = {{justifyContent : 'center' , flex:1,alignItems : 'center'}}>
                                    <Text style = {{fontWeight : 'bold',fontSize:18,color : 'white'}} >Paid</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card>   

               
            </Content>
        </Container>
    );
  }
}

