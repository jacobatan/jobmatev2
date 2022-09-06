import { useEffect, useState } from 'react'
// import { Button, } from '@mui/material'
import Jobcard from '../components/Jobcard';
import { GetAllJobs } from "../api/Jobapi"
import DBModal from '../components/DBModal';

const Dashboard = () => {

  const [jobs, setJobs] = useState<any[]>([])
  const [open, setOpen] = useState(false);

  useEffect(() => {
    GetAllJobs({ setMyVar: setJobs })
  }, [])

  return (
    <>
      {/* <Button onClick={() => setOpen(true)}>Open modal</Button> */}
      <DBModal myVar={open} setMyVar={setOpen} setJobs={setJobs} />
      <div className="grid grid-cols-1 gap-4 w-11/12 md:grid-cols-2 lg:w-5/6 lg:grid-cols-3 mx-auto">
        {
          jobs?.map((job) => <Jobcard key={job._id} id={job._id} setMyVar={setJobs} company={job.company} position={job.position} status={job.status} />)
        }
      </div>
    </>
  )
}

export default Dashboard;
