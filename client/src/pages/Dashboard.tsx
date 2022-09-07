import { useContext, useEffect, useState } from 'react'
import Jobcard from '../components/Jobcard';
import { GetAllJobs } from "../api/Jobapi"
import { LoginContext } from '../context/Context';
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Dashboard = () => {
  const [jobs, setJobs] = useState<any[]>([])
  // const { jobs, setJobs } = useContext(LoginContext);
  // const [open, setOpen] = useState(false);
  const { open, setOpen } = useContext(LoginContext);
  const [listRef] = useAutoAnimate<HTMLDivElement>();

  useEffect(() => {
    console.log("called za api")
    GetAllJobs({ setMyVar: setJobs })
  }, [open])

  return (
    <>
      {/* <DBModal myVar={open} setMyVar={setOpen} setJobs={setJobs} /> */}
      <div ref={listRef} className="grid grid-cols-1 gap-4 w-11/12 pt-6
        md:grid-cols-2 lg:w-5/6 lg:grid-cols-3 mx-auto">
        {
          jobs?.map((job, i) => <Jobcard key={job._id + i} id={job._id} setMyVar={setJobs} company={job.company} position={job.position} status={job.status} />)
        }
      </div>
    </>
  )
}

export default Dashboard;
