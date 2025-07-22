import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "sadeks",
    age: 21
  }
  let newArr = [1, 2, 3, 4]
  return (
    <>
      <h1 className='bg-green-400 text-blak p-4 rounded-xl'>Tailwind Test</h1>

      {/* <figure className='md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800'>
        <img className='w-24 h-24 md:w-24 md:h-auto md:rounded-none rounded-full mx-auto' src="https://media.istockphoto.com/id/1055643450/photo/snowboarding-in-kashmir.jpg?b=1&s=612x612&w=0&k=20&c=Vn5z3dg7CVC1FoHQo8SWRAJW2VIt2iamgazx3rKhNag=" alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              "Tailwind CSS is the only framework that I've seen scale on large teams. It's easy to customize, adapts to any design, and the build size is tiny."
            </p>
          </blockquote>
          <figcaption>
            <div className="text-sky-500 dark:text-sky-400">
              Sam Curran
            </div>
            <div className="text-slate-700 dark:taxt-slate-500">
              Software Developer
            </div>
          </figcaption>
        </div>
      </figure> */}

      {/* <Card channel='mychannel' myArr={[1, 2, 3]}/> */}
      {/* <Card channel='mychannel' someObject={myObj}/> */}
      {/* <Card channel='mychannel' someObject={newArr}/> */}
      <Card username="sadek" btnText="click me"/>
      <Card username="sid"/>

      
    </>
  )
}

export default App
