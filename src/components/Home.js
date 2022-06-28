import React,{Component} from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react';
import UserCard from './UserCard';

export class Home extends Component {
    static propTypes = {
        userQuestionData : PropTypes.object.isRequired
    };
    render () {
        const {userQuestionData} = this.props;

        return <Tab panes={panes({ userQuestionData})} className="tab" />;
    }    
}

const panes = props => {
    const { userQuestionData } = props;
    return [
        {
            menuItem: 'Unanswered',
            render: () => (
                <Tab.Pane>
                    {userQuestionData.answered.map(question => (
                        <UserCard
                        key={question.id}
                        userId={question.author}
                        color={color.green.hex}
                        />
                    ))}
                </Tab.Pane>
            )
        },
        {
            menuItem: 'Answered',
            render: () => ( 
                <Tab.Pane>
                    {userQuestionData.unanswered.map(question => (
                        <UserCard
                        key={question.id}
                        userId={question.author}
                        color={color.blue.hex}
                        />
                    ))}
                </Tab.Pane>
            )
         }
    ];
};

function mapStateToProps({ authUser, users, questions}) {
    const answeredIds = object.keys(users[authUser].answers);
    const answered = Object.values(questions)
    .filter(question => answeredIds.includes(question.id))
    .sort((a,b) => b.timestamp - a.timestamp);
    const unanswered = Object.values(questions)
    .filter(question => !answeredIds.includes(question.id))
    .sort((a,b) => b.timestamp - a.timestamp);
    
    return {
        userQuestionData: {
            answered,
            unanswered
        }
    };
}

export default connect(mapStateToProps)(Home);