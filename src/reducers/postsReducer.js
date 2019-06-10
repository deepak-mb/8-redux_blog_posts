import {
  GET_POSTS,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  EDIT_POST
} from "../actions/types";

const initialState = {
  posts: [],
  post: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      // console.log(action.payload)
      return {
        ...state,
        posts: action.payload
      };

    case GET_POST:
      // console.log(action.payload)
      return {
        ...state,
        post: action.payload
      };

    case EDIT_POST:
      // console.log(action.payload)
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? (post = action.payload) : post
        )
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };

    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };

    default:
      return state;
  }
}
