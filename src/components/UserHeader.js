import { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions";

const UserHeader = ({ user, getUser }) => {
  useEffect(() => {
    getUser(1);
  }, []);
  return <div>{user.name}</div>;
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { getUser })(UserHeader);
