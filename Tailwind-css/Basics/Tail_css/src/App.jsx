import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className = " bg-violet-600 w-full h-10 border-cyan-300 border-2 rounded-lg my-4 p-4  ">

      <h1 className='flex justify-center items-center text-center font-mono text-extrabold  text-lg text-cyan-400 mt-2' > Tanjumul Alom </h1>


    </div>
   
  )
}

export default App
