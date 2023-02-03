import { useContext, useEffect, useState } from "react";
import Jobcard from "../components/Jobcard";
import { GetAllJobs } from "../api/Jobapi";
import { LoginContext } from "../context/Context";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { IconButton } from "@mui/material";

const Dashboard = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const { open, setOpen } = useContext(LoginContext);
  const [listRef] = useAutoAnimate<HTMLDivElement>();

  useEffect(() => {
    GetAllJobs({ setMyVar: setJobs });
  }, [open]);

  // if (!jobs.length) {
  //   return (
  //     <>
  //       <div className="w-full h-full flex items-center justify-center my-auto pt-3">
  //         {" "}
  //         Click the
  //         <IconButton
  //           size="large"
  //           onClick={() => setOpen(true)}
  //           sx={{ color: "#2766ec" }}
  //         >
  //           <AddTaskIcon onClick={() => setOpen(true)} />
  //         </IconButton>
  //         to get started!
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      {/* <DBModal myVar={open} setMyVar={setOpen} setJobs={setJobs} /> */}
      <div
        ref={listRef}
        className="grid grid-cols-1 gap-4 w-11/12 pt-6
        md:grid-cols-2 lg:w-5/6 lg:grid-cols-3 mx-auto"
      >
        {jobs?.map((job, i) => (
          <Jobcard
            key={job._id + i}
            id={job._id}
            setMyVar={setJobs}
            company={job.company}
            position={job.position}
            status={job.status}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
