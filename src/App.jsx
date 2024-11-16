import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Navigation = lazy(() => import ("./components/Navigation"));
const NotFoundPage = lazy(() => import ("./pages/NotFoundPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const MovieCast = lazy(() => import("./components/MovieCast"));
const MovieReviews = lazy(() => import("./components/MovieReviews"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading page...</div>}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage /> } />
          <Route path="/movies" element={<MoviesPage /> } />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage /> } />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
