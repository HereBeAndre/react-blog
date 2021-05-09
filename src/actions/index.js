import _ from "lodash";
import jsonPlaceholder from "../api/jsonPlaceholder";

// Thanks to middleware (i.e. redux-thunk) we can return both actions and objects
export const getPosts = () => async (dispatch) => {
  const res = await jsonPlaceholder.get("/posts");
  dispatch({ type: "GET_POSTS", payload: res.data });
};
// Syntax is equivalent to the following:

// export const getPosts = () => {
//   return async (dispatch, getState) => {
//     const res = await jsonPlaceholder.get("/posts");
//     dispatch({ type: "GET_POSTS", payload: res });
//   };
// };

export const getUser = (userId) => async (dispatch) => {
  const res = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({ type: "GET_USER", payload: res.data });
};

// START: lodash version: use lodash to fetch users just once per userId (_.memoize)
// export const getUser = (userId) => (dispatch) => _getUser(userId, dispatch);

// const _getUser = _.memoize(async (userId, dispatch) => {
//   const res = await jsonPlaceholder(`/users/${userId}`);
//   dispatch({ type: "GET_USER", payload: res.data });
// });
// END: lodash version: use lodash to fetch users just once per userId (_.memoize)

export const getPostsAndUsers = () => async (dispatch, getState) => {
  // Must dispatch the other action creator (awaits to dispatch result of fetchPosts() before moving on)
  await dispatch(getPosts());

  // Get posts of out state, map over array and take only userId properties, then pick unique ids only
  const uniqueUserIds = _.uniq(_.map(getState().posts, "userId"));
  uniqueUserIds.forEach((id) => {
    dispatch(getUser(id));
  });
};
