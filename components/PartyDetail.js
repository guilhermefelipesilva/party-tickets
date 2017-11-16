
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios'

export class PartyDetailScreen extends React.Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.party.name}`,
    });

    componentDidMount() {

        this.getPartyById(123)
            .then(data => {
                this.setState({ partiy: data });
            })
    }

    getPartyById(id) {
        return axios.get('http://url/' + id)
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <View>
                <Text>Detalhes da Festa!</Text>
            </View>
        );
    }
}