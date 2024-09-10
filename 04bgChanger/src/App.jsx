import { useState } from 'react'

function App() {

  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-7 py-2 rounded-3xl " >

          <button onClick={() => setColor("red-600")} className= "outline-none bg-red-600 px-4 py-1 rounded-md text-white text-xl shadow-lg" >
            Red
            </button>
          <button onClick={() => setColor("green")} className= "outline-none bg-green-600 px-4 py-1 rounded-md text-white text-xl shadow-lg" >
            Green
            </button>
          <button onClick={() => setColor("blue")} className= "outline-none bg-blue-600 px-4 py-1 rounded-md text-white text-xl shadow-lg" >
            Blue
            </button>
          <button onClick={() => setColor("yellow")} className= "outline-none bg-yellow-600 px-4 py-1 rounded-md text-white text-xl shadow-lg" >
            Yellow
            </button>
          <button onClick={() => setColor("black")} className= "outline-none bg-black px-4 py-1 rounded-md text-white text-xl shadow-lg" >
            Black
            </button>
          <button onClick={() => setColor("pink")} className= "outline-none bg-pink-600 px-4 py-1 rounded-md text-white text-xl shadow-lg" >
            Pink
            </button>
          <button onClick={() => setColor("white")} className= "outline-2 bg-white px-4 py-1 rounded-md text-black text-xl shadow-lg" >
            White
            </button>
          <button onClick={() => setColor("orange")} className= "outline-none bg-orange-600 px-4 py-1 rounded-md text-white text-xl shadow-lg" >
            Orange
            </button>
          <button onClick={() => setColor("purple")} className= "outline-none bg-purple-600 px-4 py-1 rounded-md text-white text-xl shadow-lg" >
            Purple
            </button>
          <button onClick={() => setColor("lavender")} className= "outline-none bg-lavender px-4 py-1 rounded-md text-xl shadow-lg" >
            Lavender
            </button>
          <button onClick={() => setColor("grey")} className= "outline-none bg-grey px-4 py-1 rounded-md text-white text-xl shadow-lg" >
            Grey
            </button>
          </div>
      </div>
    </div>
  )
}

export default App
