'use client'
import { useEffect, useState } from "react";

export default function Home() {
const [message,setMessage] = useState('Loading')
const [people,setPeople] = useState([])

useEffect(()=>{
  fetch("http://localhost:8080/api/home")
  .then(res =>res.json())
  .then(
    data=>{
      setMessage(data.message)
      setPeople(data.people)
    }
  )
},[])

  return (
    <>
    <div>{message}</div>
    {
      people.map((person, index)=>(
        <div key={index}>{person}</div>
      ))
    }
    </>
  );
}
