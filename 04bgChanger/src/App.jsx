import { useState } from "react"
function App() {
  const defColor = localStorage.getItem('color') || 'skyBlue'
  const [color, setColor] = useState(defColor)

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{backgroundColor: color}}>
          <div className="fixed flex fles-wrap justify-center bottom-48 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
              <button
              onClick={() => {
                setColor("pink")
                localStorage.setItem('color', 'pink')
              }} className="outline-none px-4 py-1 rounded-xl"
              style={{backgroundColor: "pink"}}
              >Pink</button>
              <button onClick={() => {
                setColor("lightgreen")
                localStorage.setItem('color', 'lightgreen')
              }} className="outline-none px-4 py-1 rounded-xl"
              style={{backgroundColor: "lightgreen"}}
              >Light green</button>
              <button onClick={() => {
                setColor("gray")
                localStorage.setItem('color', 'gray')
              }}className="outline-none px-4 py-1 rounded-xl"
              style={{backgroundColor: "gray"}}
              >Gray</button>
              <button onClick={() => {
                setColor("skyBlue")
                localStorage.setItem('color', 'skyBlue')
              }} className="outline-none px-4 py-1 rounded-xl"
              style={{backgroundColor: "skyBlue"}}
              >skyBlue</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
