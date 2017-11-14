
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class PartyDetailScreen extends React.Component {
    
    constructor(props) {
        super(props)
        console.log(props)
    }
    
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