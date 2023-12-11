import React, { Suspense } from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import './App.css';
const LazyHome = React.lazy(() => import('./Component/Home'));
const LazyToDo = React.lazy(() => import('./Component/ToDo'));




function App() {
  return (
    <div>
      <nav>
        <t><Link to="/Home">Home</Link></t>
        <t><Link to="/ToDo">ToDo</Link></t>
      </nav>
      <Routes>
        <Route
          path="/Home"
          element={
            <Suspense fallback={<h1>loading...</h1>}><LazyHome /></Suspense>} />
        <Route path="/ToDo" element={<Suspense fallback={<h1>loading...</h1>}>  <LazyToDo /></Suspense>} />
      </Routes>
    </div>

  );
}

export default App;
