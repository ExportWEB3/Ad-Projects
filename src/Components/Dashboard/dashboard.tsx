import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/button'
import { Icon } from '../Icon.component/Icon'
import { Input } from '../Input/Input.component'
import './dashboard.css'
import { useState } from 'react';


export function DashboardComponent() {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();



  return (
    <div className='w-full h-screen bg-blue-200 flex items-center justify-center'>
      <div className='w-96 h-96 bg-gray-800 rounded-lg'>
        <div className='w-full h-1/2 flex items-center justify-center'>
        <img src="\src\Images\tick.png" alt="" />
        </div>
        <div className='w-full h-1/2 flex p-2 items-end'>
        <Button
        type='button'
        btnText='Log Out'
        className='bg-teal-400 hover:bg-teal-600 w-full h-10 font-root text-xl'
        onClick={() => { navigate("/") }}
        >x</Button>
        </div>
      </div>
    </div>
  );
}