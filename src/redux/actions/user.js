import axios from "axios";
import { server } from "../store";

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });
//  {server}/me exist in   2\controllers\user.js 5
    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true, //! this is madaintory step must be add this line basically this is used for indicate that cross-origin requests 
    });

    dispatch({
      type: "loadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "loadUserFail",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });

    dispatch({
      type: "logoutSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "logoutFail",
      payload: error.response.data.message,
    });
  }
};
