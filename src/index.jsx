import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddProduct from './components/AddProduct'
import SignUpUser from './components/SignUpUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AddProduct />
      <SignUpUser />
    </div>
  )
}

export default App
