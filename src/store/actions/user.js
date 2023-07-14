import actionTypes from "./actionTypes";

import { apiCurrentUser } from "../../services/user";

const getCurrentUser = () => async (dispatch) => {
    try {
      let response = await apiCurrentUser();
      if (response?.data.err === 0) {
        dispatch({
          type: actionTypes.GET_CURRENT,
          data: response.data.data,
          msg: response.data.msg,
        });
      } else {
        dispatch({
          type: actionTypes.GET_CURRENT,
          data: [],
          msg: response.data.msg,
        });
        dispatch({
          type: actionTypes.LOGOUT
        });
      }
    } catch (e) {
      dispatch({
        type: actionTypes.GET_CURRENT,
        data: [],
        msg: e,
      });
      dispatch({
        type: actionTypes.LOGOUT
      });
    }
  };

  export{
    getCurrentUser
  }