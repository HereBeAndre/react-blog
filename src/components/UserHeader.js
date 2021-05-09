import { connect } from "react-redux";

const UserHeader = ({ getPostsAndUsers, user, userId }) => {
  return <div className="header">{user && user.name}</div>;
};

// ownProps is the props that are about to go into the component
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((u) => u.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
