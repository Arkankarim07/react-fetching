import { useNavigate, useParams } from 'react-router-dom';
import '../../public/home.css';
import Navbar from '../component/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Detail() {

  const {id} = useParams()
  const Navigate = useNavigate()

  const [user, setUserDetail ] = useState([]);

  const handleBackTo = () => {
    Navigate('/')
  }

  useEffect(() => {
    fetchData()
  }, [id])

  const fetchData = async() => {
    try {
      const result = await axios.get('http://127.0.0.1:8000/api/user/'+id)
      // console.log(result.data.result)
      setUserDetail(result.data.result)
    } catch (err) {
      console.log("Something Went Wrong") 
    }
  }
  return (
    <>
    <Navbar />

    <h1 className='text-3xl font-bold'>Hallo Mas {user.name} </h1>
    <h1>Email = {user.email} </h1>
    <button onClick={() => handleBackTo()} className='p-3 bg-blue-400'>Back</button>
    </>


  )
}

export default Detail