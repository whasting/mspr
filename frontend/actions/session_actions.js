import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// thunk

export const login = user => dispatch => {
  return (
  APIUtil.login(user)
    .then(loggedInUser => dispatch(receiveCurrentUser(loggedInUser)),
     err => dispatch(receiveErrors(err.responseJSON)))
);};

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)))
);

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(newUser => dispatch(receiveCurrentUser(newUser)),
     err => dispatch(receiveErrors(err.responseJSON)))
);

// sync

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
