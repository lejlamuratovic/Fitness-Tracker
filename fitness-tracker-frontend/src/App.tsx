import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage, RoutineDetails, RoutinePage, UserPage, ExplorePage, ExercisePage, NotFoundPage } from './pages'
import ProtectedRoute from './utils/ProtectedRoutes'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="/routines/:id" element={<RoutineDetails />} />
          <Route path="/routines" element={<RoutinePage />} />
          <Route path="/routines/:id" element={<RoutineDetails />} />
          <Route path="/exercises/:id" element={<ExercisePage />} />
        </Route>
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="*" element={<NotFoundPage />} />
     </Routes>
    </>
  )
}

export default App
