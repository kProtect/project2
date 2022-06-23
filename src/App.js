import React, { Children, Component, Fragment} from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { handleInitialData } from './actions/shared';
import {connect} from 'react-redux';
import Login from './components/Login';
import Nav from './components/Nav';
// import Home from './Home'

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    const {authUser} = this.props;
    return (
      <Router>
        <div className="App">
          {authUser === null ? (
            <Route
              render={() => (
              <CounterGrid>
                <Login />
              </CounterGrid>
          )}
          />
          ): (
            <Fragment>
              <Nav />
              <CounterGrid>
                <Route exact path="/" component={Home} />
              </CounterGrid>
            </Fragment>
          )}
        </div>
      </Router>
    );
  }
}

const CounterGrid = ({children}) => (
  <Grid padded="vertically" columns={1} centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 550 }}>{Children}</Grid.Column>
    </Grid.Row>
  </Grid>
);

function mapStateToProps({ authUser }) {
  return (
    authUser
  );
}

export default connect(
  mapStateToProps,
  {handleInitialData}
)(App);
