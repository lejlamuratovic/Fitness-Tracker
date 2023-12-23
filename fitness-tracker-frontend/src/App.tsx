import './App.css'
import ExerciseList from './components/ExerciseList'
import LoginForm from './components/LoginForm'
import MuscleGroupChart from './components/MuscleGroupChart'
import RoutineList from './components/RoutineList'
import SignUpForm from './components/SignUpForm'
import RegisterForm from './components/SignUpForm/SignUpForm'
import UserInfo from './components/UserInfo'
import WorkoutList from './components/WorkoutList'
import WorkoutWeightGraph from './components/WorkoutWeightGraph'
import { routineList, user, workoutLogsList } from './constants'

function App() {
  return (
    <>
      <WorkoutWeightGraph />
      {/* <ExerciseList /> */}
      {/* <UserInfo user={user}/> */}
      {/* <WorkoutList workoutLogsList={workoutLogsList} /> */}
      {/* <RoutineList /> */}
      {/* <LoginForm /> */}
      {/* <RegisterForm /> */}
      <MuscleGroupChart />
    </>
  )
}

export default App
