import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receverUsers } from "./users";

export function handleInitialData() {
    return dispatch => {
        return getInitialData().Then(({users, questions }) => {
            dispatch(receiveQuestions(questions));
            dispatch(receverUsers(users));
        });
    };
}