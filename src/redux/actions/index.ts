import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  DataActionTypes,
} from './types';

export const fetchData = (): ThunkAction<void, RootState, unknown, DataActionTypes> => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    try {
      const response = await axios.get('https://api.example.com/data');
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
    } catch (error) {
      let errorMessage = 'An unknown error occurred';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      dispatch({ type: FETCH_DATA_FAILURE, payload: errorMessage });
    }
  };
};
