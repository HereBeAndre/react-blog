import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions";

const PostList = ({ getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);
  return <div>Post List</div>;
};

// Connect action creator to PostList component (action creator is available via props)
export default connect(null, { getPosts })(PostList);
