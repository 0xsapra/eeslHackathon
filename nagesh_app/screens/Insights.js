import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { MonoText } from '../components/StyledText';
import { AreaChart,XAxis, Grid, BarChart } from 'react-native-svg-charts'
import { Container , Content , Icon,Card,CardItem,Thumbnail,Body,Left,Right,Button } from 'native-base';
import * as shape from 'd3-shape'




export default class Insights extends React.Component {
  static navigationOptions = {
    title: 'Insights',
  };
  state = {
    data : [0.76545222, 0.45883951, 0.36915153, 0.80951966, 0.09497841,0.27123415],
    data1 : [100,120,130,111,100]
  };
  
 
  render() {
    let data = this.state.data;
    for(let i=0;i<96 - data.length;i++){
        data.push("");
    }

    let data1 = this.state.data1;
    for(let i=0;i<=7 - data1.length;i++){
        data1.push("");
    }



    return (
        <Container>
            <Content>
                <Card style = {{marginLeft : 5 , marginTop : 5 ,marginRight : 5}}>
                    <AreaChart
                        style={{ height: 200 }}
                        data  = {data} 
                        contentInset={{ top: 30, bottom: 30 }}
                        svg={{ fill: '#6957da' }}
                    >
                        <MonoText style={{textAlign: 'left',marginTop :5,marginLeft : 0 ,color :'black',fontSize : 16,marginLeft : 8}}>Todays Consumtion</MonoText>
                        <View>
                            <View style={{backgroundColor : 'rgba(255,201,136,0.6)',width : 170,position : 'absolute',left : 150,height : 170}}>
                                <View>
                                    <Text>Peak Load Window</Text>
                                    <Text>Of Your Aread.(1Unit = 8₹)</Text>
                                </View>

                            </View>
                        </View>
                        <Grid />
                    </AreaChart>
                    <XAxis
                        tyle={{ marginHorizontal: 4 }}
                        data = {data}
                        formatLabel = { (v,i)=>['00:00', '', '', '', '01:00', '', '', '', '02:00', '', '', '', '03:00', '', '', '', '04:00', '', '', '', '05:00', '', '', '', '06:00', '', '', '', '07:00', '', '', '', '08:00', '', '', '', '09:00', '', '', '', '10:00', '', '', '', '11:00', '', '', '', '12:00', '', '', '', '13:00', '', '', '', '14:00', '', '', '', '15:00', '', '', '', '16:00', '', '', '', '17:00', '', '', '', '18:00', '', '', '', '19:00', '', '', '', '20:00', '', '', '', '21:00', '', '', '', '22:00', '', '', '', '23:00', '', '', ''][i]  }
                        contentInset={{ left: 10, right: 10 }}
                        svg={{ fontSize: 10, fill: 'black' }}
                        ></XAxis>
                    
                </Card>
                <Card style = {{marginLeft : 5 , marginTop : 5 ,marginRight : 5}}>
                    <BarChart
                        style={{ height: 200 }}
                        data  = {data1} 
                        contentInset={{ top: 30, bottom: 30 }}
                        curve={ shape.curveNatural }
                        svg={{ fill: '#6957da' }}
                    >
                        <MonoText style={{textAlign: 'left',marginTop :5,marginLeft : 0 ,color :'black',fontSize : 16,marginLeft : 8}}>Consumption</MonoText>
                    </BarChart>
                    <XAxis
                        style={{ marginHorizontal: 4 }}
                        data  = {data1} 
                        formatLabel={ (value, index) => ["Mon" , "Tue" , "Wed" , "Thur" , "Fri" , "Sat",  "Sun" ][index] }
                        contentInset={{ left: 10, right: 10 }}
                        svg={{ fontSize: 10, fill: 'black' }}
                    />
                </Card>
            </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
