import { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions";

const UserHeader = ({ getUser, user, userId }) => {
  useEffect(() => {
    getUser(userId);
  }, []);
  return <div>{user.name}</div>;
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { getUser })(UserHeader);
