import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions";

import UserHeader from "./UserHeader";

const PostList = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);
  const renderList = () => {
    return posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  };

  return <div className="ui relaxed divided list">{renderList()}</div>;
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

// Connect action creator to PostList component (action creator is available via props)
export default connect(mapStateToProps, { getPosts })(PostList);
