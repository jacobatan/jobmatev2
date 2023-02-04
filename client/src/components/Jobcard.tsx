import { useEffect, useState } from "react";
import { DeleteJob } from "../api/Jobapi";

interface iJobcard {
  id: string;
  company: string;
  position: string;
  status: string;
  setMyVar: (value: any | ((prevVar: any) => any)) => void;
}

export default function Jobcard({
  id,
  company,
  position,
  status,
  setMyVar,
}: iJobcard) {
  const [color, setColor] = useState("bg-yellow-200 text-yellow-700");
  useEffect(() => {
    if (status === "declined") {
      setColor("bg-red-200 text-red-600");
    } else if (status === "interview") {
      setColor("bg-green-200 text-green-600");
    } else {
      setColor("bg-yellow-200 text-yellow-700");
    }
  }, []);

  return (
    <div className="h-64 rounded-xl overflow-hidden shadow-lg flex flex-col flex-wrap justify-between">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{position}</div>
        <div className="text-sm mb-2 text-gray-500">{company}</div>
        <span
          className={` ${color} rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2`}
        >
          {status}
        </span>
      </div>
      <div className="px-6 pt-4 pb-8 ">
        <button
          type="button"
          className="px-5 mr-1 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded-2xl shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out"
          // onClick={() => console.log("edit")}
        >
          Edit
        </button>
        <button
          type="button"
          className="px-5 ml-1 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-2xl shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => DeleteJob({ id: id, setMyVar: setMyVar })}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
