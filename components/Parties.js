import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { PartyCard } from './PartyCard';
import axios from 'axios'

export class PartiesScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { parties: [] };
  }

  componentWillMount() {
    this.getParties()
    .then(data => {
      this.state.parties = data;
    })
  }

  static navigationOptions = {
    title: 'Festas'
  };

  render() {
    console.log(this.state)
    return (
      <Container>
        <Content>
          {
            this.state.parties.map((party, key) => (
              <PartyCard key={party.id} navigation={this.props.navigation} party={party} />
            ))
          }
        </Content>
      </Container>
    );
  }

  getParties() {
    return axios.get("http://www.mocky.io/v2/5a0a3fa32e00000c14489c47")
      .then(response => {
        return response.data
      })
  }
}
