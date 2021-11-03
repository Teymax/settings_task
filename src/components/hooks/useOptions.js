import { useDispatch, useSelector } from 'react-redux';

import  { optionsActions } from '../options/actions'

export const useOptions = () => {
  const selector = (state) => state.options;
  const { data } = useSelector(selector);
  const dispatch = useDispatch();

  const fillOptions = (profile) => {
    const action = optionsActions.fillProfile(profile);

    dispatch(action);
  }

  return {
    options: data,
    fillOptions,
  }
}