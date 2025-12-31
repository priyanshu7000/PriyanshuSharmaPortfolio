import React,{useState} from 'react'
import { Button } from '../ui Components/Button'
import {Link} from 'react-router-dom';
import {BASE_URL, contactSave} from "../../utils/endpoint";
import axios from 'axios';
import { Loader } from 'lucide';


export const Contact: React.FC = () => {

  //
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e:any) =>{
    const {name, value} = e.target;
    setFormData((prev)=>({
      ...prev,
      [name]: value
    }));
  }

  const saveChanges = ()=>{
    setIsLoading(true);
    axios({
      method: "post",
      url: BASE_URL + contactSave,
      data: formData,
    })
    .then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    }).finally(()=>{
      setIsLoading(false);
    });
  }

  if(isLoading){
    return <h1>loading...</h1>;
  }
  return (
    <div className='flex justify-center items-center mt-12 mb-12 '>
      
        <div className='w-1/2 mx-12 bg-slate-950 p-6 rounded-lg shadow-lg'>
          <h1 className='text-white text-2xl font-bold mb-4'>Contact Me</h1>
            <form action="" className=''>
            <input type="text" name="name" value={formData.name} placeholder='Name' className='border-b-2 mb-4 w-full' onChange={handleChange}/>
            <br />
            <input type="email" name="email" value={formData.email} placeholder='Email' className='border-b-2 mb-4 w-full' onChange={handleChange}/>    
            <br />
            <textarea name="message" value={formData.message} placeholder='Message' className='border-b-2 mb-4 w-full' onChange={handleChange}></textarea>
            <br />
            <button className='bg-white' onClick={saveChanges}>Submit</button>
            {/* <Button content="Send Message" onClick={saveChanges} /> */}
        </form>
        </div>
        <div className='w-1/2 mx-12 bg-slate-950 p-6 rounded-lg shadow-lg'>
        <h1 className='text-white text-2xl font-bold mb-4'>Connect <span className='border-2 p-2 bg-white text-black'><i className="fa-solid fa-paper-plane"></i></span></h1>
        <div className='flex justify-center flex-col gap-4 text-white'>
            <Link to='' className='border-2 p-2 hover:translate-x-2'><i className="fa-brands fa-linkedin"></i>Linkedin</Link>
            <Link to='' className='border-2 p-2'><i className="fa-brands fa-square-github"></i> Github</Link>
            <Link to='' className='border-2 p-2'><i className="fa-solid fa-envelope"></i> Mail</Link>
        </div>
        </div>
    </div>
  )
}
