import { useState } from 'react'

import './App.css'
import { RandomPokemon } from './components/RandomPokemon';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RandomPokemon />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
