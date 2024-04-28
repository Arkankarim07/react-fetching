import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
axios
function Edit() {
    const {id} = useParams()
    
    const Navigate = useNavigate()

    const [user, setUserEdit] = useState({
        name: "",
        email: "",
        password: ""
    })

    useEffect(() => {
        fetchData();
      }, [id])


      const handleBackTo = () => {
        Navigate('/')
      }

      
    const fetchData = async() => {
        try {

            const result = await axios.get("http://127.0.0.1:8000/api/user/"+id)
            // console.log(result.data.result)
            setUserEdit(result.data.result)
        } catch (err) {
            
            console.log("Something Went Wrong")
        }

    }

    const changeUserInput = (e) => {
      setUserEdit({
        ...user, [e.target.name]: e.target.value
      });
      console.log(user)
    }


    const onClickEdit = async(e) => {
      e.preventDefault()
      try {
        await axios.put('http://127.0.0.1:8000/api/user/update/'+id, user)
        Navigate('/')
      } catch (err) {
        console.log("Something Went Wrong")
    }
    }
  return (
    <>
        <button onClick={() => {handleBackTo()}} className="p-3 absolute bg-red-400">Back X</button>
    <div className="w-full flex justify-center items-center h-screen">

    <div className='bg-white w-[400px] h-[400px] p-[2rem]  flex justify-center flex-col'>
          <h1 className='text-3xl mb-3'>Form User </h1>
            <form action="" className='flex flex-col gap-3'>
                <label htmlFor="">Name</label>
                <input type="text" name="name" id="name" value={user.name} onChange={e => {changeUserInput(e)}} className='border-b-2' />
                
                <label htmlFor="">Email</label>
                <input type="text" name="email" id="email" value={user.email} onChange={e => {changeUserInput(e)}} className='border-b-2' />

                <label htmlFor="">Password</label>
                <input type="text" name="password" id="password" value={user.password} onChange={e => {changeUserInput(e)}} className='border-b-2' />


                <button onClick={e => {onClickEdit(e)}} type='submit' className='bg-blue-400'>Submit</button>
            </form>
        </div>
    </div>

    

    </>
  )
}

export default Edit