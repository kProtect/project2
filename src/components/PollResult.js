import React, { Component, Fragment} from "react";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import {
    Header,
    Segment,
    Progress,
    Label,
    Button,
    Icon
} from 'semantic-ui-react';
import {styles} from '../utils/helpers'

const YourVoteLabel = () => (
    <Label color="orange" ribbon="right" className="vote">
        <Icon name="check circle outline" size="big" className="compact" />
        <div style={{float:'right'}}>
            Your
            <br />
            Choice
        </div>
    </Label>
);

export class PollResult extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
        question: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired
    };
    handleClick = () => {
        this.props.history.push('/');
    };

    render() {
        const { question, user} = this.props;
        const optionOneVotes = question.optionOne.votes.length;
        const optionTwoVotes = question.optionTwo.votes.length;
        const votesTotal = optionOneVotes + optionTwoVotes;
        const userVote = user.answers[question.id];

        let option1 = styles.secondary,
         option2 = styles.secondary;
        if (optionOneVotes > optionTwoVotes) {
            option1 = styles.primary;
        } else if ( optionTwoVotes > optionOneVotes ) {
            option2 = styles.primary;
        }

        return (
            <Fragment>
              <Header as="h3">
                Your Results:
                <Header.Subheader style={{ fontWeight: 'bold'}}>
                    Choose 
                </Header.Subheader>
             </Header>
             <Segment
             color={option1.color}
             sytle={{ backgroundColor: `${option1.bgColor}`}}
             >
                {userVote === 'optionOne' && <YourVoteLabel />}
                <p sytle={{ fontWeight:'bold'}}>{question.optionOne.text}</p>
                <Progress
                    percent={((optionOneVotes / VotesTotal) * 100).toFixed(2)}
                    progress
                    color={option1.color}
                    >
                        {optionOneVotes} out of {votesTotal} votes
                    </Progress>
             </Segment>
             <Segment
                color={option2.color}
                sytle={{backgroundColor:`${option2.bgColor}`}}
                >
                {userVote === 'optionTwo' && <YourVoteLabel />}

                <p style={{fontWeight: 'bold'}}>{question.optionTwo.text}</p>
                <Progress
                    percent={((optionTwoVotes / votesTotal) * 100).toFixed(2)}
                    progress
                    color={option2.color}
                    >
                     {optionTwoVotes} out of {votesTotal} votes
                    </Progress>
             </Segment>
             <Button size="tiny" floated="right" onClick={this.handleClick}>
                Back
             </Button>
            </Fragment>
        );
    }
}

function mapStateToProps({ users,authUser}) {
    const user = users[authUser];
    return {
        user
    };
}

export default useNavigate(connect(mapStateToProps)(PollResult));