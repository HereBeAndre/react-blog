import { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions";

const UserHeader = ({ getUser, users, userId }) => {
  console.log("USERS HERE", users);
  useEffect(() => {
    getUser(userId);
  }, []);

  const user = users.find((u) => u.id === userId);

  return <div className="header">{user && user.name}</div>;
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { getUser })(UserHeader);
