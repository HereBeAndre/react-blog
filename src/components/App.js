import React, { useEffect } from "react";
import PostList from "./PostList";

const App = () => {
  useEffect(() => {
    //dispatch
    console.log("Dispatch here");
  }, []);

  return (
    <div className="ui container">
      <PostList />
    </div>
  );
};

export default App;
