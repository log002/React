import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[numbers, setNumbers] = useState(true)
  const[characters, setCharacters] = useState(true)
  const[password, setPassword] = useState("")

  // userRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbers) str += "0123456789"
    if(characters) str += "!@#$%^&*()[]{}-=_+~`"
    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numbers, characters, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, password.length)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numbers, characters, passwordGenerator])



  return (
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500">
        <h1 className='text-center text-white'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 my-2 bg-white rounded-l-2xl'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />

          <button onClick={copyPasswordToClipboard}
          className='outline-none bg-sky-300 py-1 my-2 text-white px-3 pt-0.5 shrink-0 rounded-r-2xl'
          >copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
             />
             <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={numbers}
            id='numberInput'
            onChange={()=>{
              setNumbers((prev) => !prev);
            }}
            
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className="flex items center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={characters}
            id='characterInput'
            onChange={() => {
              setCharacters((prev) => !prev)
            }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
  )
}

export default App
