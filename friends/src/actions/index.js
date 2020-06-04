import axios from "axios";
import { axiosWithAuth } from "../util/axiosWithAuth";
export const FETCH_FRIENDS = "FETCH_FRIENDS";
export const UPDATE_FRIENDS = "UPDATE_FRIENDS";
export const SET_ERROR = "SET_ERROR";

export const GET_POST_FRIENDS = "GET_POST_FRIENDS";
export const UPDATE_POST_FRIENDS = "UPDATE_POST_FRIENDS";
export const SET_POST_ERROR = "SET_POST_ERROR";

export const GET_DEL_FRIENDS = "GET_DEL_FRIENDS";
export const UPDATE_DEL_FRIENDS = "UPDATE_DEL_FRIENDS";
export const SET_DEL_ERROR = "SET_DEL_ERROR";

export const GET_UPDATE_FRIENDS = "GET_UPDATE_FRIENDS";
export const UPDATE_UPDATE_FRIENDS = "UPDATE_UPDATE_FRIENDS";
export const SET_UPDATE_ERROR = "SET_UPDATE_ERROR";

export const getData = () => (dispatch) => {
  dispatch({ type: FETCH_FRIENDS });

  axiosWithAuth()
    .get("/friends")
    .then((res) => {
      console.log(res);
      dispatch({ type: UPDATE_FRIENDS, payload: res.data });
    })
    .catch((err) => {
      console.error("error fetching data from api. err: ", err);
      dispatch({ type: SET_ERROR, payload: "error fetching data from api" });
    });
};

export const getPostData = (friendPost) => (dispatch) => {
  dispatch({ type: GET_POST_FRIENDS });

  axiosWithAuth()
    .post("/friends", friendPost)
    .then((res) => {
      console.log("UPDATE_POST_FRIENDS", res);
      dispatch({ type: UPDATE_POST_FRIENDS, payload: res.data });
    })
    .catch((err) => {
      console.error("error fetching data from api. err: ", err);
      dispatch({
        type: SET_POST_ERROR,
        payload: "error fetching data from api",
      });
    });
};

export const deleteData = (delId) => (dispatch) => {
  dispatch({ type: GET_DEL_FRIENDS });

  axiosWithAuth()
    .delete(`/friends/${delId}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: UPDATE_DEL_FRIENDS, payload: res.data });
    })
    .catch((err) => {
      console.error("error fetching data from api. err: ", err);
      dispatch({
        type: SET_DEL_ERROR,
        payload: "error fetching data from api",
      });
    });
};

export const updateData = (item) => (dispatch) => {
  dispatch({ type: GET_UPDATE_FRIENDS });

  axiosWithAuth()
    .put(`/friends/${item.id}`, item)
    .then((res) => {
      console.log(res);
      dispatch({ type: UPDATE_UPDATE_FRIENDS, payload: res.data });
    })
    .catch((err) => {
      console.error("error fetching data from api. err: ", err);
      dispatch({
        type: SET_UPDATE_ERROR,
        payload: "error fetching data from api",
      });
    });
};
