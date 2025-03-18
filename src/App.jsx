import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lab1 from './Components/Lab1'
import Lab2 from './Components/Lab2'
import Lab3 from './Components/Lab3'

import { Link } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> FSAD Lab Experiment</h1>
    <table border={"2"} width={"100%"}>
      <tr>
        <td> S.NO </td>
        <td> Lab Experiment </td>
        <td> Description </td>
      </tr>
      <tr>
        <td> 1 </td>
        <td> <Link to="/lab1"> Lab1</Link> </td>
        <td> Allianment and css </td>
      </tr>
      <tr>
        <td> 2 </td>
        <td> <Link to="/lab2"> Lab2</Link> </td>
        <td> DOM-Tree,media class,flex </td>
      </tr>
      <tr>
        <td> 3 </td>
        <td> <Link to="/lab3"> Lab3</Link> </td>
        <td>  </td>
      </tr>
     <tr>
      <td> 4 </td>
      <td><Link to="/lab4"> Lab4</Link> </td>
      <td> </td>
     </tr>
     <tr>
      <td> 5 </td>
      <td><Link to="/lab5"> Lab5</Link> </td>
      <td> </td>
     </tr>
     <tr>
      <td> 6 </td>
      <td><Link to="/lab6"> Lab6</Link> </td>
      <td> </td>
     </tr>
     <tr>
        <td> 7 </td>
        <td> <Link to="/lab7"> Lab7</Link> </td>
        <td>  </td>
      </tr>
      <tr>
        <td> 8 </td>
        <td> <Link to="/lab8"> Lab8</Link> </td>
        <td> spring boot with rest api </td>
      </tr> 

      <tr>
        <td> 12 </td>
        <td> <Link to="/lab12"> Lab12</Link> </td>
        <td> LAB12 EXP </td>
      </tr>

      


    </table>
      </>
  )
}

export default App