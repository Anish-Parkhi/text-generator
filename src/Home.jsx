import {React, useEffect, useState} from 'react'
import axios from 'axios'
import './Home.css'

function Home() {

    const[posts,setPosts] = useState([])
    const[x,setx] = useState(1)

    let handleClick = () => {
        setx(Math.floor(Math.random() * 100 + 1))
    }

    useEffect(()=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${x}`)
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[x])

    

  return (
    <>
    <div className='main-div' >
        <div className='btn-div'>
            <button className='btn' onClick={handleClick} >Click to generate random text</button>
        </div>
        <div className='para-div' >
            <p id={posts.id}> {posts.title}</p>
        </div>
    </div>
    </>
  )
}

export default Home