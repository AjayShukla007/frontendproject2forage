import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{
        backgroundColor:"white",
      }}>
        <a href="https://www.propelleraero.com/dirtmate/" target="_blank">
          <img src="https://www.propelleraero.com/wp-content/uploads/2021/05/Vector.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.propelleraero.com/dirtmate/" target="_blank">
          <img src="https://www.propelleraero.com/wp-content/uploads/2021/05/Vector.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Ajay Shukla</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
