import { useRef, useState } from 'react'
import { Modal } from '@mui/material'
import { CreateJob } from "../api/Jobapi"

const statuses = [
  {
    value: 'interview',
  },
  {
    value: 'declined',
  },
  {
    value: 'pending',
  }
];

interface iDBModal {
  myVar: boolean;
  setMyVar: (value: boolean | ((prevVar: boolean) => any)) => void;
  setJobs: (value: any | ((prevVar: any) => any)) => void;
}

const DBModal = ({ myVar, setMyVar, setJobs }: iDBModal) => {
  const [jobDetails, setJobDetails] = useState({ company: "", position: "", status: "pending" })
  // const [jobs, setJobs] = useState<any[]>([])

  const onSubmit = async () => {
    setMyVar(false);
    CreateJob({ setMyVar: setJobs, obj: jobDetails });
  }

  return (
    <Modal
      open={myVar}
      onClose={() => setMyVar(false)}
    >

      <div tabIndex={-1}
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full 
        md:inset-0 h-modal md:h-full justify-center items-center flex"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow ">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" onClick={() => setMyVar(false)}>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 ">Add a job to track</h3>
              <form className="space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900" >Company</label>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 
                    text-sm rounded-lg focus:ring-blue-500 
                    focus:border-blue-500 block w-full p-2.5"
                    placeholder="Google"
                    onChange={(e) => setJobDetails({ ...jobDetails, company: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">Position</label>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 
                    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Software Engineer"
                    onChange={(e) => setJobDetails({ ...jobDetails, position: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">Select the status of your application</label>
                  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    onChange={(e) => setJobDetails({ ...jobDetails, status: e.target.value })}
                  >
                    {
                      statuses.map((status) => (
                        <option>{status.value}</option>
                      ))
                    }
                  </select>
                </div>
                <button className="w-full text-white bg-blue-700 hover:bg-blue-800 
                  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                  text-sm px-5 py-2.5 text-center"
                  onClick={onSubmit}
                >Add Job</button>
              </form>
            </div>
          </div>
        </div >
      </div >
    </Modal >
  )
}

export default DBModal
