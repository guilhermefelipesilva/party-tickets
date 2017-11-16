import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Text, Icon, Left, Body, Right } from 'native-base';

export class PartyCard extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const navigation = this.props.navigation
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: this.props.party.tumbImg }} />
            <Body>
              <Text>{this.props.party.name}</Text>
              <Text note>{this.props.party.type}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{ uri: this.props.party.partyImg }} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>
        <CardItem>
          <Left>
            <Text transparent> {this.props.party.ticketsSold} vendidos</Text>
          </Left>
          <Right>
            <Button onPress={() => navigation.navigate('PartyDetail', { party: this.props.party })}>
              <Text>Comprar</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    )
  }
}