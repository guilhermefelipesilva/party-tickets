import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Text, Icon, Left, Body, Right } from 'native-base';

export class PartyCard extends React.Component {
    
      constructor(props){
        super(props)
      }
    
      render() {
        const navigation = this.props.navigation
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