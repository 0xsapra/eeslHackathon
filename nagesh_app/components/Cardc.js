import React from 'react';
import {
  Image,
} from 'react-native';
import { Container , Content , Icon,Card,CardItem,Thumbnail,Body,Left,Right,Button } from 'native-base';

export default class Cardc extends React.Component {
  
  render() {

    return (
      <Card>
        <CardItem>
            <Left>
                <Thumbnail source = {require("../assets/images/landing.png")} />
                <Body>
                    <Text>
                        Sheet 1
                    </Text>
                </Body>
            </Left>
        </CardItem>
      </Card>
    );
  }

  
}

