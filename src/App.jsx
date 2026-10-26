
import { useState, useEffect } from 'react'
import EmpData from './Data/EmpData'
import DisplayEmpData from './Pages/DisplayEmpData'
import EditEmp from './Pages/EditEmp'

import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [empId, setEmpId] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');


  useEffect(() => {
    setData(EmpData);
  }, [])

  const handleEdit = (empId) => {
    const dt = data.filter((item) => item.empId === empId);
    if ( !employee) {
      setEmpId(empId);
      setJobTitle(employee.jobTitle)
      setFullName(employee.fullName)
      setAddress(employee.address)
      setContact(employee.contact)
      setEmail(employee.email)
    }
  }

  const handleDelete = (empId) => {
    if (empId > 0) {
      if (window.confirm("Are you sure to delete this item")) {
        setData(data => data.filter(item => item.empId !== empId));
      }
    }
  }

  const handleSave = () => {

  }

  const handleClear = () => {

  }
  return (
    <>
      <div className='bg-linear-to-r from-indigo-300 via-indigo-50 to-indigo-300 w-[640px] rounded-md text-black justify-center items-center '>
        <h3 className='text-lg font-bold'>Update Employee details</h3>
        <div>
          <label>EmpId: </label>
          <input type="text" placeholder="Enter EmpId" onChange={(e) => setEmpId(e.target.value)} value={empId} />
        </div>
        <div>
          <label>Title: </label>
          <input type="text" placeholder="Enter title" onChange={(e) => setJobTitle(e.target.value)} value={jobTitle} />
        </div>
        <div>
          <label>Full Name: </label>
          <input type="text" placeholder="Enter Full Name" onChange={(e) => setFullName(e.target.value)} value={fullName} />
        </div>
        <div>
          <label>contact: </label>
          <input type="text" placeholder="Enter Contact" onChange={(e) => setContact(e.target.value)} value={contact} />
        </div>
        <div>
          <label>Address: </label>
          <input type="text" placeholder="Enter Address" onChange={(e) => setAddress(e.target.value)} value={address} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div>
          <button className='bg-green-600 rounded-md p-2'> Save</button>
          <button className='bg-white rounded-md p-2'>Clear</button>
        </div>
      </div>
      <div className='place-items-center  justify-center '>
        <table className='w-full bg-white border border-white rounded-md place-items-center text-black '>
          <thead>
            <tr>
              <th className='m-2'> Employee Id</th>
              <th className='m-2'> Title</th>
              <th className='m-2'> Full Name </th>
              <th className='m-2'> Address</th>
              <th className='m-2'> Contact </th>
              <th className='m-2'> Email Id </th>
              <th className='m-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) =>
              <tr key={e.empId}>
                <td  >{e.empId}</td>
                <td  >{e.jobTitle}</td>
                <td  >{e.fullName}</td>
                <td  >{e.address}</td>
                <td  >{e.contact}</td>
                <td  >{e.email}</td>
                <td  >
                   
                  <button className='bg-blue-400 rounded-lg m-1 p-1' onClick={(e)=> handleEdit(e.empId )}>Edit</button>
                  <button className='bg-red-400 rounded-lg m-1 p-1' onClick={(e) => handleDelete(e.empId) } >Delete</button>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>



    </>
  )
}

export default App;
