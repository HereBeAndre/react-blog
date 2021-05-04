const postsReducer = (state, action) => ({ ...state, posts: action.payload });

export default postsReducer;
