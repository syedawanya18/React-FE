import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { IoMdAdd } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import { TbFileExport } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../variable";
export default function UserProgress() {
  const [users, setUsers] = useState([]);
  const navigate= useNavigate();
  ///////[variable,function]=useState([])


  useEffect(() => {
    if (sessionStorage.getItem("access") && (sessionStorage.getItem("role")==="admin" ||sessionStorage.getItem("role")==="cto")){
      fetch(`${api}user-role/get`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
    }
    else{
      navigate("/login")
      
    }
  


  }, []);
  console.log(users)

  return (
   <>
   <Sidebar></Sidebar>
   <div className="p-4 sm:ml-64">
        <div>
         
          <div className="flex flex-row   items-center justify-between">
            <p className="text-2xl">Details of Users</p>
            <form className="flex items-center ">
              <label for="voice-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                
                  type="text"
                  id="voice-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5   dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-[#0fc7e3] rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-black uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                  name
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  email
                </th>
                <th scope="col" className="px-6 py-3">
                  options
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className="bg-white text-black">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap "
                  >
                    {user.user.username}
                  </th>
                  <td className="px-6 py-4">{user.user.first_name}</td>
                  <td className="px-6 py-4">{user.user.last_name}</td>
                  <td className="px-6 py-4">{user.role}</td>
                  <td className="px-6 py-4">{user.user.email}</td>
                  <td className="px-6 py-4">
                    <Link to={`/user/kanban/${user.user.id}`} className="underline">
                      {" "}
                      <p className="text-transparent font-bold bg-gradient-to-r from-[#401F71] to-[#BE7B72] via-[#824D74] bg-clip-text">
                        {" "}
                       View Progress
                      </p>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
   </>
  )
}
