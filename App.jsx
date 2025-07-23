import React, { useState } from 'react'

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggle = () =>{
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={`h-screen flex flex-col font-semibold justify-center items-center transition-all duration-500 ${isDarkMode? "bg-black text-white": "bg-white text-black"}`}>
        
        <div className='border rounded-xl space-y-10 p-10 border-gray-400 shadow-lg'>
         
          <h1 className='text-2xl text-center'>
            {isDarkMode ? "🌙 Dark Mode" : "🌞 Light Mode"}
          </h1>
          <p className='text-2xl'>
            Welcome to {isDarkMode ? "Dark" : "Light"} Mode
          </p>
          <button onClick={toggle} className="bg-gray-600 text-white px-10 py-4 rounded-2xl text-xl font-semibold hover:bg-slate-800 transition-all duration-300" >
              {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          
          </button>
        </div>

    </div>
  )
}

export default App