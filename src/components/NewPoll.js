import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import { connec } from 'react-redux';
import {
    Segment,
    Header,
    Grid,
    Divider,
    Form,
    Dimmer,
    Loader
} from 'semantic-ui-react';

import {handleSaveQuestion} from '../actions/questions';

export class NewPoll extends Component {
    static propTypes = {
        authUser: PropTypes.string.isRequired,
        handleSaveQuestion: PropTypes.func.isRequired
    };
    state = {
        validSubmit: false,
        isLoading: false,
        option1: '',
        option2: ''
    };
    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value});
    };
    handleSubmit =e => {
        e.preventDefault();
        const { authUser, handleSaveQuestion } = this.props;
        const { option1, option2 } = this.state;

        new Promise((res,rej) => {
            this.setState({ isLoading:true});
            handleSaveQuestion(option1, option2, authUser);
            setTimeout(() => res('success'), 1000);
        }).then(() => {
            this.setState({
                option1:'',
                option2:''
            });
            this.setState({ validSubmit: true});
        });
    };
    render() {
        const disabled = this.state.option1 === '' || this.state.option2 === '';

        if (this.state.validSubmit === true ) {
            return <Redirect to="/" />;
        }
        return (
            <Segment.Group>
                <Header as="h3" textAlign="left" block attached="top">
                    Make a New Poll choice
                </Header>
                <Grid padded>
                    <Grid.Column>
                        {this.state.isLoading && (
                            <Dimmer active inverted>
                                <Loader content="Uploading"/>
                            </Dimmer>
                        )}
                        <p>Finish Your Question:</p>
                        <p>
                            <strong>Which choice </strong>
                        </p>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Input
                              id="option1"
                              placeholder="Choose Your First "
                              value={this.state.option1}
                              onChange={this.handleChange}
                              required
                              />
                              <Divider horizontal>Or</Divider>
                              <Form.Input
                                id="option2"
                                placeholder="Choose Your Second"
                                value={this.state.option2}
                                onChange={this.handleChange}
                            />
                            <Form.Button positive size='tiny' fluid disabled={disabled}>
                                Submit Your Choice
                            </Form.Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Segment.Group>
        );
    }
}

function mapStateToProps ({ authUser }) {
    return {
        authUser
    };
}

export default connec(
    mapStateToProps,
    {handleSaveQuestion}
)(NewPoll);