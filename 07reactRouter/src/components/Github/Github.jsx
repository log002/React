import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // this all useeffect thing is written in githubInfoLoader
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/log002')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="gitPic" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/log002')

    return res.json()
}