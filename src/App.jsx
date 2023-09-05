// ! Component 
import Header from "./Components/Header"
import Search from "./Components/Search"
import Loading from "./Components/Loading"
import Result from "./Components/Result"

// ! Hooks 
import { useState, useEffect } from "react"

// ! Spinner

import { RotateLoader } from 'react-spinners'

const App = () => {
const [user,setUser] = useState(null);
const [error, setError] = useState(false);
const [loading, setLoading] = useState(false);

const getData= async (value)=>{
  setLoading(true)
  setUser(null)
  setError(false)

  try {
  const response = await fetch(`https://api.github.com/users/${value}`)
  if (!response.ok) {
    throw new Error("Something went wrong")
  }
  const data = await response.json()
  setUser(data)
localStorage.setItem('user', JSON.stringify(data))
} catch (error) {
  setError(true)
}
setLoading(false)
} 

const getLocalStorage = () => {
  const userData = JSON.parse(localStorage.getItem("user"))
  setUser(userData)
  setTimeout(() => {
    setError(false)
  },1000)

}

useEffect(() => {
  setTimeout(() => { 

    getLocalStorage()
  },1000)
}, [error] )

   return (  <div className="min-h-screen flex items-center justify-center flex-col font-mono bg-[#141d2f]"> 
 <Header />
 <Search search={getData} />
 {loading && <RotateLoader color="#36d7b7" />}
 {error && <Loading>Couldn't find any users</Loading> }
 {user&& <Result userData={user}/>}
  </div> 
 )}

export default App