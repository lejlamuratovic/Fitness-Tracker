import './App.css'
import WorkoutList from './components/WorkoutList'
import { user, workoutLogsList } from './constants'

function App() {
  return (
    <>
      <WorkoutList workoutLogsList={workoutLogsList} />
    </>
  )
}

export default App
