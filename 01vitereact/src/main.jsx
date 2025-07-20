import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {   // syntax not suitable for react
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }


const anotherElement = (
  <a href="https://google.com" target="_blank">Visit google</a>
)

const anotherUser = 'sadek'
const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)


createRoot(document.getElementById('root')).render(
  
    <App />
    /*
    // MyApp()   // this will  also run but for optimization purposes it is not a good practice
    // <MyApp/> 

    // ReactElement
    // anotherElement
    //  reactElement
    */
)
