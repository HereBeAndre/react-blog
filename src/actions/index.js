import jsonPlaceholder from "../api/jsonPlaceholder";

// Thanks to middleware (i.e. redux-thunk) we can return both actions and objects
export const getPosts = () => async (dispatch, getState) => {
  const res = await jsonPlaceholder.get("/posts");
  dispatch({ type: "GET_POSTS", payload: res });
};

// Syntax is equivalent to the following:

// export const getPosts = () => {
//   return async (dispatch, getState) => {
//     const res = await jsonPlaceholder.get("/posts");
//     dispatch({ type: "GET_POSTS", payload: res });
//   };
// };
