import React, {Component, Fragment} from 'react';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import {
    Menu,
    Image,
    Grid,
    Button,
    Container
} from 'semantic-ui-react';
import { setAuthUser } from '../actions/authUser';

class Nav extends Component {
    handleLogout = e => {
        e.prevenDefault();
        this.props.setAuthUser(null);
    };

    render() {
        const { authUser, users } = this.props;
        
        return (
            <Container>
                    <Menu.Item name="home" as={NavLink} to="/" exact />
                    <Menu.Item name="new Poll" as={NavLink} to="/add" exact />
                    <Menu.Item name="leader board" as={NavLink} to="/leaderboard" exact />
                    <Menu.Menu position="right">
                        <Menu.Item>
                            <span>
                                <Image 
                                src={users[authUser].avatarURL}
                                avatar
                                spaced="right"
                                verticalAlign="bottom"
                                />
                                {users[authUser].name}
                            </span>
                        </Menu.Item>
                        <Menu.Item>
                            <Button
                                content="Logout"
                                labelPosition="right"
                                basic
                                compact
                                size="mini"
                                onClick={this.handleLogout}
                            />
                        </Menu.Item>
                    </Menu.Menu>
                    <Grid columns={2} padded="vertically">
                        <Grid.Row>
                            <Grid.column>
                                <Image 
                                src={users[authUser].avatarURL}
                                avatar
                                spaced="right"
                                verticalAlign="bottom"
                            />
                            {users[authUser].name}
                            </Grid.column>
                            <Grid.Column verticalAlign='bottom' textAlign='right'>
                                <Button
                                content="Logout"
                                labelPosition='right'
                                basic
                                compact
                                icon="log out"
                                size='mini'
                                onClick={this.handleLogout}
                            />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Menu pointing secondary widths={3}>
                                    <Menu.Item name='home' as={NavLink} to="/" exact />
                                    <Menu.Item name='new poll' as={NavLink} to="/add" />
                                    <Menu.Item name='leader board' as={NavLink} to="/leaderboard" 
                                 />
                                </Menu>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid padded="vertically" columns={1}>
                        <Grid.Row>
                            <Grid.Column>
                                <Image
                                src={users[authUser].avatarURL}
                                avatar
                                spaced="right"
                                verticalAlign='bottom'
                            />
                            {users[authUser].name}
                            <Button
                                content="Logout"
                                labelPosition='right'
                                basic
                                compact
                                icon="log out"
                                size='mini'
                                floated='right'
                                onClick={this.handleLogout}
                            />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Menu pointing secondary widths={3}>
                                <Menu.Item name='home' as={NavLink} to="/" exact />
                                <Menu.Item name='new poll' as={NavLink} to="/add" />
                                <Menu.Item name='leader board' as={NavLink} to="/leaderboard"/>
                                </Menu>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            </Container>
        );
    }
}

function mapStateToProps({users, authUser}) {
    return {
        authUser,
        users
    };
}

export default connect(
    mapStateToProps,
    {setAuthUser}
)(Nav);