import './App.css'
import AddButton from './components/AddButton'
import DeleteButton from './components/DeleteButton'
import EditButton from './components/EditButton'
import ExerciseList from './components/ExerciseList'
import ExerciseModal from './components/ExerciseModal'
import LoginForm from './components/LoginForm'
import MuscleGroupChart from './components/MuscleGroupChart'
import NavBar from './components/NavBar/NavBar'
import RoutineList from './components/RoutineList'
import SignUpForm from './components/SignUpForm'
import RegisterForm from './components/SignUpForm/SignUpForm'
import UserInfo from './components/UserInfo'
import WorkoutList from './components/WorkoutList'
import WorkoutWeightGraph from './components/WorkoutWeightGraph'
import { routineList, user, workoutLogsList } from './constants'
import ExercisePage from './pages/ExercisePage'
import UserPage from './pages/UserPage'

function App() {

  return (
    <>
      {/* <WorkoutWeightGraph /> */}
      {/* <ExerciseList /> */}
      {/* <UserInfo user={user}/> */}
      {/* <WorkoutList workoutLogsList={workoutLogsList} /> */}
      {/* <RoutineList /> */}
      {/* <LoginForm /> */}
      {/* <RegisterForm /> */}
      {/* <MuscleGroupChart /> */}
      {/* <AddButton handleClick={handleButtonClick} /> */}
      {/* <ExerciseModal /> */}
      {/* <DeleteButton handleClick={handleButtonClick} />
      <NavBar />
      <EditButton handleClick={handleButtonClick} /> */}
      <NavBar />
      {/* <ExercisePage /> */}
      <UserPage />
    </>
  )
}

export default App
