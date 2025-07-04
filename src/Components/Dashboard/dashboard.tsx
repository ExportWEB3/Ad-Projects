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
    <div className='w-full h-screen bg-gray-200 flex p-5 space-x-5'>

      <div className='w-80 h-full flex flex-col space-y-3'>
        <div className='w-full h-10 flex items-center space-x-2 relative'>
          <img src="" className='w-10 h-10 rounded-full bg-gray-700' />
          <h1 className='font-semibold text-xl'>Assistant v2.4</h1>

          <div className='w-fit h-full absolute right-0 flex items-center space-x-2 scale-left'>
            <Icon
            icon='ri-search-line'
            className='text-xl text-gray-600 cursor-pointer'
             />
             <Icon
             icon='ri-book-3-line'
             className='text-xl text-gray-600 cursor-pointer'
              />
              <Icon
              icon='ri-macbook-line'
              className='text-xl text-gray-600 cursor-pointer'
               />
          </div>
        </div>

        <div className='w-full h-10 flex items-center justify-center'>
        <Button 
        type='button'
        btnText='New Chat'
        className='w-4/5 h-10 bg-gray-400 hover:bg-gray-300 font-root rounded-xl b-scale'
        >x</Button>
        </div>

        <div className='w-full h-10 space-x-2 p-2 scale-left flex items-center cursor-pointer'>
          <Icon
          icon='ri-compass-3-line'
          className='text-xl text-gray-600'
           />
          <p className='font-root text-base'>Explore</p>
        </div>

                <div className='w-full h-10 space-x-2 p-2 scale-left flex items-center cursor-pointer'>
          <Icon
          icon='ri-tv-2-line'
          className='text-xl text-gray-600 '
           />
          <p className='font-root text-base'>Template</p>
        </div>

                <div className='w-full h-10 space-x-2 p-2 scale-left flex items-center cursor-pointer'>
          <Icon
          icon='ri-folder-5-line'
          className='text-xl text-gray-600  '
           />
          <p className='font-root text-base'>Files</p>
        </div>

                <div className='w-full h-10 space-x-2 p-2 scale-left flex items-center cursor-pointer'>
          <Icon
          icon='ri-time-line'
          className='text-xl text-gray-600'
           />
          <p className='font-root text-base'>History</p>
        </div>

      </div>

      <div className='w-4/5 h-full bg-white rounded-xl'>
      <div className='w-full h-10 mt-5 px-10 flex relative'>
        <img src="\src\Images\Ai logo.png" className='w-10' />

        <div className='w-fit h-full space-x-5 absolute right-5 flex items-center'>
        <Icon
        icon='ri-message-3-line'
        className='text-2xl cursor-pointer'
         />
         <Icon
         icon='ri-notification-4-line'
         className='text-2xl cursor-pointer'
          />

          <img src="" onClick={() => navigate('/login')} className='w-7 h-7 rounded-full bg-gray-400' />
        </div>


      </div>        
      <div className='w-full h-h80 flex items-center justify-center cursor-progress'>
        <h1 className='text-3xl font-root font-semibold cursor-wait'>IN Construction............... Mobile ResponsiveNess Soon........</h1>
        </div>

      </div>
    </div>
  );
}