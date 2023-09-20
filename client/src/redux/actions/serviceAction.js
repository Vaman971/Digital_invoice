import * as actionTypes from '../constants/serviceConstants';
import axios from 'axios';

export const getServices = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_SERVICES_REQUEST });

    const { data } = await axios.get(`/api/services`);

    dispatch({
      type: actionTypes.GET_SERVICES_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_SERVICES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getServicesDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_SERVICE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/services/${id}`);

    dispatch({
      type: actionTypes.GET_SERVICE_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_SERVICES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeServiceDetails = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_SERVICE_DETAILS_RESET,
  });
};
