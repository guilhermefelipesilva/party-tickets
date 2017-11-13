import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { PartyCard } from './PartyCard'

export class PartiesScreen extends React.Component {
    static navigationOptions = {
      title: 'Festas'
    };
  
    render() {
      return (
        <Container>
          <Content>
            <PartyCard navigation={this.props.navigation}/>
          </Content>
        </Container>
      );
    }
  }
  