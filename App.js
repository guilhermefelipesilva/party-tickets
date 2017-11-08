import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Expo from 'expo'
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Text, Icon, Left, Body, Right } from 'native-base';

class PartyCard extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    const navigation = this.props.navigation
    console.info(navigation)
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: 'http://www.fundosanimais.com/Imagens/imagens-lobos.jpg' }} />
            <Body>
              <Text>House Winter</Text>
              <Text note>Festa</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{ uri: 'https://sis.quero2ingressos.com.br/imagem/logo/L00192.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>
        <CardItem>
          <Left>
            <Text transparent>12 vendidos</Text>
          </Left>
          <Right>
            <Button onPress={() => navigation.navigate('PartyDetail')}>
              <Text>Comprar</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    )
  }
}

class PartiesScreen extends React.Component {
  static navigationOptions = {
    title: 'Festas'
  };

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <PartyCard navigation={this.props.navigation}/>
        </Content>
      </Container>
    );
  }
}

class PartyDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Detalhes da Festa',
  };
  render() {
    return (
      <View>
        <Text>Detalhes da Festa!</Text>
      </View>
    );
  }
}

const PartyTicketsApp = StackNavigator({
  Parties: { screen: PartiesScreen },
  PartyDetail: { screen: PartyDetailScreen },
});

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return <PartyTicketsApp />;
  }
}
