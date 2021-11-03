import { useDispatch, useSelector } from 'react-redux';

import  { stateActions } from '../state/actions'

export const useStates = () => {
  const selector = (state) => state.state;
  const { data } = useSelector(selector);
  const dispatch = useDispatch();

  const fillState = (profile) => {
    const action = stateActions.fillProfile(profile);

    dispatch(action);
  }

  return {
    state: data,
    fillState,
  }
}