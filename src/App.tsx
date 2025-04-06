import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [response, setResponse] = useState('')
  const handleClick = (e:React.FormEvent)=>{
    e.preventDefault()
    axios.get('https://dpy9haeeaz.eu-west-3.awsapprunner.com/api').then(res=>{
      setResponse(res.data.message)
    })
    console.log(response)
  }
  return (
    <>
      <h1>React App</h1>
      <div className="card">
        <button onClick={handleClick}>
          Send request
        </button>
        <p>
          {response}
        </p>
      </div>
    </>
  )
}

export default App
