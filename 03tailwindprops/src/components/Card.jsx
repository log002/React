import React from 'react'

// function Card(props) {   // original format
// console.log(props.username);     // instead of this we can use it by destructuring
function Card({username, btnText="visit me"}) {     // destructuring
    // also default value for btnText is provided so whenever someone used card without value for btnText the default vallue will be assigned to the btnTxt="visit me"
    // console.log("Props: ", props);
    // console.log(username);
    
  return (
    <div className="relative h-[400px] w-[300px] rounded-m">
        <img src="https://media.istockphoto.com/id/1055643450/photo/snowboarding-in-kashmir.jpg?b=1&s=612x612&w=0&k=20&c=Vn5z3dg7CVC1FoHQo8SWRAJW2VIt2iamgazx3rKhNag=" alt="Sam Curran" className='z-0 h-full w-full rounded-md object-cover'/>
        <div className="absolute insert-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-gray-400">{
        username}</h1>
          <p className="mt-2 text-sm text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, cupiditate.
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {/* {btnText || "visit me"} */}  {/* instead of writing optional value here just provide the default value at beginnig of function */}
            {btnText}
          </button>
        </div>
      </div>
  )
}

export default Card