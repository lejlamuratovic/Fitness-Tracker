import './App.css'
import UserInfo from './components/UserInfo'
import { user } from './constants'

function App() {

  return (
    <>
      <UserInfo user={user}/>
    </>
  )
  
}

export default App
