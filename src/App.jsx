import { useState } from 'react'

import './App.css'
import { RandomPokemon } from './components/RandomPokemon';
import { UserForm } from './components/UserForm';
import { UserProfile } from './components/UserProfile';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Register:</h1>
      <UserForm actionType={"register"} />
      <h1>Login:</h1>
      <UserForm actionType={"login"} />
      <RandomPokemon />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <UserProfile />
    </>
  )
}

export default App
