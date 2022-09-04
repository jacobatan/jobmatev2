import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { GetAllJobs, DeleteJob } from "../api/Jobapi"

interface iJobcard {
  id: string;
  company: string;
  position: string;
  status: string;
  setMyVar: (value: any | ((prevVar: any) => any)) => void;
}

export default function Jobcard({ id, company, position, status, setMyVar }: iJobcard) {
  const auth = Cookies.get();
  const bearer = 'Bearer ' + auth.token;
  const [color, setColor] = useState("yellow")
  useEffect(() => {
    if (status === "declined") {
      setColor("red");
    } else if (status === "interview") {
      setColor("green");
    } else {
      setColor("yellow")
    }
  }, [])

  return (
    <div className="w-1/3 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{position}</div>
        <div className="text-sm mb-2 text-gray-500">{company}</div>
        <span className={`bg-${color}-200 text-${color}-600 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2`}>{status}</span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-5 mr-1 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => console.log("edit")}
        >Edit</button>
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-5 ml-1 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => DeleteJob({ id: id, setMyVar: setMyVar })}
        >Delete</button>
      </div>
    </div>
  );
}
