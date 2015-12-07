import subscribersManager from '../utils/subscribersManager';
import * as actionTypes from '../constants/subscribersConstants';

export function setIsFetching() {
  return {
    type: actionTypes.SET_IS_FETCHING,
  };
}

export function setIsSaving() {
  return {
    type: actionTypes.SET_IS_SAVING,
  };
}

export function createSubscriberSuccess(email) {
  return {
    type: actionTypes.CREATE_SUBSCRIBER_SUCCESS,
    email,
  };
}

export function createSubscriberFailure(error) {
  return {
    type: actionTypes.CREATE_SUBSCRIBER_FAILURE,
    error,
  };
}

export function createSubscriber(email) {
  return dispatch => {
    dispatch(setIsSaving());
    return (
      subscribersManager
        .createSubscriber(email)
        .then(res => dispatch(createSubscriberSuccess(res.data)))
        .catch(res => dispatch(createSubscriberFailure(res.data)))
    );
  };
}
