import React, { Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import { Header, Button } from 'semantic-ui-react';
import { colors } from '../utils/helpers'

export class PollTeaser extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired,
        unanswered: PropTypes.bool.isRequired,
    };
    state = {
        viewPoll: false
    };
    handleClick = e => {
        this.setState(prevState => ({
            viewPoll: !prevState.viewPoll
        }));
    };

    render() {
        const { question, unanswered} = this.props;
        const buttonColor = unanswered === true ? colors.green : colors.blue;
        const buttonContent = unanswered === true ? 'Answer Poll' : ' Results'

        if(this.state.viewPoll === true) {
            return <Redirect push to={`/question/${question.id}`} />;
        }
        return (
            <Fragment>
                <Header as="h5" textAlign='left'>
                    Choose between
                </Header>
                <p style={{ textAlign: 'center' }}>
                    {question.optionOne.text}
                    <br />
                    OR
                </p>
                <Button
                color={color}
                size="tiny"
                fluid
                onClick={this.handleClick}
                />
            </Fragment>
        );
    }
}

export default PollTeaser;