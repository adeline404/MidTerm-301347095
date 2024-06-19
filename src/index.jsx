import { useState } from 'react'
import './App.css'
import AddProduct from './components/AddProduct'
import SignUpUser from './components/SignUpUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <h1>Question 1:</h1>
        <AddProduct />
      </div>
      <div id="q2">
        <h1>Question 2:</h1>
        <SignUpUser />
      </div>
    </div>
  )
}

export default App
