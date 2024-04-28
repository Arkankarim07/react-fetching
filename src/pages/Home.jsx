// import React from 'react'
import Navbar from '../component/Navbar'
import '../../public/home.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
axios

function Home() {
  const Navigate = useNavigate()
  // useState Untuk Form Insert
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  })

  
  const [userData, setUserData] = useState([])

    useEffect(() => {
      fetchData();
    }, [])

    
    const userFieldInput = (e) => {
      setUserInput({
        ...userInput,
        [e.target.name]: e.target.value
      })
      console.log(userInput)
    }

    const submitDataInsert = async(e) => {
      e.preventDefault();
      try {
        const result =  await axios.post('http://127.0.0.1:8000/api/user/create', userInput)
        console.log(result)
        Navigate('/')
      } catch (err) {
        console.log('errors')
      }
    }


    const fetchData = async() => {
      try{
        const result = await axios('http://127.0.0.1:8000/api/users')
        // console.log(result.data.result)
        setUserData(result.data.result)
      } catch(err) {
        console.log('Something Went Wrong')
      }
    }

    // delete User
    const handleDelete = async(id) => {
      
      await axios.delete('http://127.0.0.1:8000/api/user/delete/'+id)
        const newUserData = userData.filter((item) => {
          return (
            item.id !==id
          )
        })
      setUserData(newUserData)
    }
  return (
    <>
    <Navbar />
    <div className='w-full flex justify-around '>

        <div className='bg-white w-[400px] h-[400px] p-[2rem]  flex justify-center flex-col'>
          <h1 className='text-3xl'>Form User</h1>
            <form action="" className='flex flex-col'>
                <label htmlFor="">Name</label>
                <input type="text" name="name" id="name" onChange={e => {userFieldInput(e)}} className='border-b-2' />
                
                <label htmlFor="">Email</label>
                <input type="text" name="email" id="email" onChange={e => {userFieldInput(e)}} className='border-b-2' />

                <label htmlFor="">Password</label>
                <input type="text" name="password" id="password" onChange={e => {userFieldInput(e)}} className='border-b-2' />

                <button onClick={e => {submitDataInsert(e)}} type='submit' className='bg-blue-400'>Submit</button>
            </form>
        </div>

        <table className=' w-[900px] border border-collapse rounded-md '>
          <tr className='bg-black text-white'>
            <th className='px-4 py-2'>No</th>
            <th className='px-4 py-2'>Name</th>
            <th className='px-4 py-2'>Email</th>
            <th className='px-4 py-2'>Action</th>
          </tr>

          {
            userData.map((user, i) => {
              return (
                  <tr key={i}  className='text-center bg-gray-300'>
                    <td className='px-4 py-2'>{i + 1}</td>
                    <td className='px-4 py-2'>{user.name}</td>
                    <td className='px-4 py-2'>{user.email}</td>
                    <td className='px-4 py-2 '>
                      <Link to={`/view/${user.id}`} className='p-2 bg-green-400' >View</Link>
                      <Link to={`/edit/${user.id}`} className='p-2 bg-blue-400' >Edit</Link>
                      <button onClick={() =>handleDelete(user.id)} className='p-2 bg-red-400'>Delete</button>
                    </td>
                  </tr>
              )  
            })
          }


        </table>

    </div>
    </>
  )
}

export default Home