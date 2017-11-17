
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Header, Content } from 'native-base';
import axios from 'axios'
import Carousel from 'simple-carousel-react-native'

export class PartyDetailScreen extends React.Component {

    constructor(props) {
        console.log(props)
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
            <Container>
                <Carousel
                    showScroll={false}
                    showBubbles={false}
                    width={400}
                    bubbleHeight={0}
                    bubbleWidth={0}
                    backgroundColor={'red'}
                    height={200}>
                    <View style={{ flex: 1 }}>
                        <Image
                            resizeMode="stretch"
                            source={{ uri: "http://www.fundosanimais.com/Imagens/imagens-lobos.jpg" }}
                            style={{
                                flex: 1,
                                alignSelf: "stretch"
                            }}
                        />
                    </View>

                    <View>
                        <Text>
                            Page 2
                        </Text>
                    </View>
                </Carousel>

            </Container>

        );
    }
}