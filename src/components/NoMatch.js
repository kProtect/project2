import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

export class NoMatch extends Component {
    render() {
        return (
            <Container textAlign="center">
                <Header as="h3">404 ERROR!!!!</Header>
                <p>WARNING!! NOTHING FOUND! GO BACK TO MENU!!</p>
            </Container>
        );
    }
}

export default NoMatch;