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
    </>
  )
}

export default App
