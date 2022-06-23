import React, {Componenet} from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import {Grid} from 'semantic-ui-react';
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";

class App extends Componenet {
    componentDidMoun() {
        this.props.handleInitialData();
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <CounterGrid>
                        <p>New Start...</p>
                    </CounterGrid>
                </div>
            </Router>
        );
    }
}

const CounterGrid = ({ children }) => (
    <Grid padded="vertically" columns={1} centered>
        <Grid.Row>
            <Grid.Column style={{ maxWidth:550}}>{children}</Grid.Column>
        </Grid.Row>
    </Grid>
);

export default connect (
    null,
    {handleInitialData}
)(App);