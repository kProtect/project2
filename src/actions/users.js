export const RECEIVE_USERS = 'RECEIVE_USERS';

export function receverUsers(users) {
    return {
        type:RECEIVE_USERS,
        users
    };
}