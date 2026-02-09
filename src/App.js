import "./App.css";
import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./Routes.jsx";
import Header from "./components/Header.jsx";

// const Home = lazy(() => import("app1/App"));
// const Posts = lazy(() => import("app1/Posts"));
// const UserDashboard = lazy(() => import("app2/UserDashboard"));

function App() {
  // const [users, setUsers] = useState([]);
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     const data = await response.json();
  //     setUsers(data);
  //   };
  //   const fetchPosts = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     const data = await response.json();
  //     setPosts(data);
  //   };
  //   fetchUsers();
  //   fetchPosts();
  // }, []);

  return (
    <div className="App">
      {/* <Suspense fallback={<p>Loading....</p>}>
        <Home />
        <div>=======</div>
        <h1>User Dashboard</h1>
        <div className="user-container">
          {users && users.length > 0 ? (
            users.map((user) => <UserDashboard key={user.id} user={user} />)
          ) : (
            <div>there is no user</div>
          )}
        </div>
        <h1>Posts Here:</h1>
        {posts && posts.length > 0 && posts.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </Suspense> */}
        <Router>
          <Header />
          <Routing />
        </Router>
    </div>
  );
}

export default App;
