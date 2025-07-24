import { useState } from "react"
function App() {
  const [color, setColor] = useState("skyBlue")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{backgroundColor: color}}>
          <div className="fixed flex fles-wrap justify-center bottom-48 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
              <button id="red" onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-xl"
              style={{backgroundColor: "red"}}
              >Red</button>
              <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-xl"
              style={{backgroundColor: "green"}}
              >Green</button>
              <button onClick={() => setColor("gray")} className="outline-none px-4 py-1 rounded-xl"
              style={{backgroundColor: "gray"}}
              >Gray</button>
              <button onClick={() => setColor("skyBlue")} className="outline-none px-4 py-1 rounded-xl"
              style={{backgroundColor: "skyBlue"}}
              >skyBlue</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
