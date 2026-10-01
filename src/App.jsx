<<<<<<< HEAD
import { useState,useEffect } from 'react'
import empData from './Components/EmployeeList'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    setData(empData);
  },[])

  const handleEdit=(id)=>{
    alert(id)
  }

   const handleDelete=(id)=>{
    
    const dt = data.filter(item =>item.id !== id);
    setData(dt)
  }  
  return (
    <>
    <div calssName='place-items-center  justify-center '>
       <table className='w-auto bg-white border border-white rounded-md place-items-center'>
        <thead>
          <tr>
            <th> Employee Id</th>
            <th> Title</th>
            <th> Full Name </th>
            <th> Address</th>
            <th> Contact </th>
            <th> Email Id </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {empData.map((e)=>
          <tr key={e.empId}>
            <td>{e.empId}</td>
            <td>{e.jobTitle}</td>
            <td>{e.fullName}</td>
            <td>{e.address}</td>
            <td>{e.contact}</td>
            <td>{e.email}</td>
            <td>
              <button onClick={()=> handleEdit(id)}>Edit</button>
              <button>Update</button>
              <button onClick={ ()=> handleDelete(id)} >Delete</button>
            </td>
          </tr>)}
        </tbody>
       </table>
         </div>
=======
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
>>>>>>> 28b951f781058a5e9903a97739142599b1e4c065
    </>
  )
}

export default App
