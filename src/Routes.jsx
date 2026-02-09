import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load remote components
const Home = lazy(() =>
  import("app1/exposed").then((m) => ({ default: m.App })),
);
const Posts = lazy(() =>
  import("app1/exposed").then((m) => ({ default: m.Posts })),
);
const UserDashboard = lazy(() =>
  import("app2/exposed").then((m) => ({ default: m.UserDashboard })),
);

// Error boundary component for remote components
const RemoteComponentError = ({ componentName }) => (
  <div style={{ padding: "20px", color: "red" }}>
    <h3>Error loading {componentName}</h3>
    <p>Make sure the microfrontend app is running on the correct port.</p>
  </div>
);

// Wrapper component to handle remote component errors
const RemoteComponentWrapper = ({ Component, componentName }) => {
  if (!Component) {
    return <RemoteComponentError componentName={componentName} />;
  }
  return <Component />;
};

const Routing = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <RemoteComponentWrapper Component={Home} componentName="Home" />
          }
        />
        <Route
          path="/posts"
          element={
            <RemoteComponentWrapper Component={Posts} componentName="Posts" />
          }
        />
        <Route
          path="/users"
          element={
            <RemoteComponentWrapper
              Component={UserDashboard}
              componentName="UserDashboard"
            />
          }
        />
      </Routes>
    </Suspense>
  );
};

export default Routing;
