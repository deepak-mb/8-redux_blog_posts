import { GET_POSTS, DELETE_POST, ADD_POST, GET_POST, EDIT_POST } from "./types";
import axios from "axios";

// const url = "http://localhost:3000/posts";
const url = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = () => dispatch => {
  axios.get(`${url}`).then(res => {
    // console.log(res.data);
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  });
};

export const deletePost = id => dispatch => {
  axios.delete(`${url}/${id}`).then(res => {
    // console.log(res.data);
    dispatch({
      type: DELETE_POST,
      payload: id
    });
  });
};

export const addPost = post => dispatch => {
  axios.post(`${url}/`, post).then(res => {
    // console.log(res.data);
    dispatch({
      type: ADD_POST,
      payload: post
    });
  });
};

export const getPost = id => dispatch => {
  axios.get(`${url}/${id}`).then(res => {
    // console.log(res.data);
    dispatch({
      type: GET_POST,
      payload: res.data
    });
  });
};

export const editPost = post => dispatch => {
  axios.put(`${url}/${post.id}`, post).then(res => {
    // console.log(res.data);
    dispatch({
      type: EDIT_POST,
      payload: res.data
    });
  });
};
