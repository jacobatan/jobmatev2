import React from 'react'
import bgImg from "../assets/heroimg.svg"
import AddIcon from '@mui/icons-material/Add';
import StorageIcon from '@mui/icons-material/Storage';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className='w-full pt-24 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl'>Job Application Platform</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'>Jobmate </h1>
          <p className='text-2xl'>Make Tracking Your Job Applications Easy!</p>
          <button className='py-3 px-6 sm:w-[60%] my-4 bg-blue-700 text-white' onClick={() => navigate("/register")}>Get Started</button>
        </div>
        <div>
          <img className='w-full' src={bgImg} alt="/" />
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
          <p>Features</p>
          <div className='flex justify-between flex-wrap px-4'>
            <p className='flex px-4 py-2 text-slate-700'><AddIcon style={{ color: "#1d4ed8" }} /> CRUD Operations</p>
            <p className='flex px-4 py-2 text-slate-700'><PriorityHighIcon style={{ color: "#1d4ed8" }} />Statuses</p>
            <p className='flex px-4 py-2 text-slate-700'><StorageIcon style={{ color: "#1d4ed8" }} /> Cloud Data</p>
            <p className='flex px-4 py-2 text-slate-700'><SyncAltIcon style={{ color: "#1d4ed8" }} /> API</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
