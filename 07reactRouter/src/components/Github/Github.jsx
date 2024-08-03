import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ManthanK-24')
    //     .then(resp=>resp.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github Followings: {data.following}
        <img src={data.avatar_url} alt='Github picture' width={300}/>       
    </div>
  )
}

export default Github


// We don't follow below practices, i.e Single compon single functionality
// But still for learning purposes! 

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/ManthanK-24')
  return response.json()
}
