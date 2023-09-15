import React, { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './Global.styled.js';

const { Home } = React.lazy(() => import('./Home/Home.js'));
const { Movies } = React.lazy(() => import('./Movies/Movies.js'));
const { MovieDetails } = React.lazy(() =>
  import('./MovieDetails/MovieDetails.js')
);

export function App() {
  return (
    <div>
      <Routes>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Suspense>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" />
    </div>
  );
}

// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="create" element={<CreateQuizPage />} />
//           <Route path="quizzes" element={<QuizzesPage />} />
//           <Route path="quizzes/:quizId" element={<QuizDetailsPage />} />
//         </Route>
//       </Routes>
//       <GlobalStyle />
//     </>
//   );
// };
