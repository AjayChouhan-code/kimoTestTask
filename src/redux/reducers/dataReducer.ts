import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  DataActionTypes,
} from '../actions/types';

export interface DataState {
  loading: boolean;
  data: any[]; // Adjust the type according to your data structure
  error: string | null;
}

const initialState: DataState = {
  loading: false,
  data: [],
  error: null,
};

const dataReducer = (state = initialState, action: DataActionTypes): DataState => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case FETCH_DATA_FAILURE:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
