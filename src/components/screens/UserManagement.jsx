// import React, { useState } from "react";
// import Sidebar from "../Sidebar";
// import { FaRegUser } from "react-icons/fa";
// import { FiMail, FiEye, FiEyeOff } from "react-icons/fi";
// import { api } from "../../variable";

// export default function UserManagement() {
//   const [name, setName] = useState("");
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [password1, setPassword1] = useState("");
//   const [active, setActive] = useState(false);
//   const [isStaff, setIsStaff] = useState(false);
//   const [role, setRole] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const check = () => {
//     console.log(role);
//   };

//   const signup = async () => {
//     // e.preventDefault();
//     if (email !== "" && password !== "" && name !== "") {
//       if (password === password1) {
//         await fetch(`${api}user/register`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             username: name,
//             email: email,
//             password: password,
//             first_name: fname,
//             last_name: lname,
//             role: role,
//           }),
//         });

//         setEmail("");
//         setName("");
//         setPassword("");
//         setFname("")
//         setLname("")
//         setPassword("")
//         setPassword1("")
//         setActive(false)
//         setIsStaff(false)
//         setRole("")
//         window.alert("Account created");
//       } else {
//         window.alert("Password Doesn't match");
//       }
//     } else {
//       setError("Fields can't be empty");
//     }
//   };
//   return (
//     <div>
//       <Sidebar></Sidebar>
//       <div className="p-4 sm:ml-64">
//         <div className="text-center flex flex-row items-center justify-center gap-x-3 text-3xl font-bold">
//           <FaRegUser></FaRegUser>
//           User Management
//         </div>
//         <div className=" h-3/4 flex flex-row justify-center">
//           <div className="bg-white p-8 rounded shadow-md md:w-3/4 md:h-3/4 flex flex-col justify-center items-center my-6 ">
//             {/* <img src={logo} alt="" className="w-[20vh] h-auto my-3 mx-auto" /> */}

//             <form
//               className="flex flex-wrap justify-center gap-x-3  "
//             >
//               <div className="mb-3">
//                 <label
//                   className="block text-gray-700 text-sm font-medium mb-2"
//                   htmlFor="name"
//                 >
//                   {" "}
//                   {/* New name field */}
//                  User Name
//                 </label>
//                 <input
//                   className="w-full border rounded px-10 py-2 outline-none focus:border-blue-500"
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={name}
//                   onChange={(e) => {
//                     setName(e.target.value);
//                   }}
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div className="mb-3">
//                 <label
//                   className="block text-gray-700 text-sm font-medium mb-2"
//                   htmlFor="name"
//                 >
//                   {" "}
//                   {/* New name field */}
//                   First Name
//                 </label>
//                 <input
//                   className="w-full border rounded px-10 py-2 outline-none focus:border-blue-500"
//                   type="text"
//                   id="fname"
//                   value={fname}
//                   name="fname"
//                   onChange={(e) => {
//                     setFname(e.target.value);
//                   }}
//                   placeholder="Enter your first name"
//                 />
//               </div>
//               <div className="mb-3">
//                 <label
//                   className="block text-gray-700 text-sm font-medium mb-2"
//                   htmlFor="last name"
//                 >
//                   {" "}
//                   {/* New name field */}
//                   Last Name
//                 </label>
//                 <input
//                   className="w-full border rounded px-10 py-2 outline-none focus:border-blue-500"
//                   type="text"
//                   value={lname}
//                   id="lname"
//                   name="lname"
//                   onChange={(e) => {
//                     setLname(e.target.value);
//                   }}
//                   placeholder="Enter your last name"
//                 />
//               </div>
//               <div className="mb-3">
//                 <label
//                   className="block text-gray-700 text-sm font-medium mb-2"
//                   htmlFor="email"
//                 >
//                   Email
//                 </label>
//                 {/* Rest of the code remains the same */}
//                 <div className="relative">
//                   <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
//                     <FiMail className="text-gray-400" />
//                   </span>
//                   <input
//                     className="w-full border rounded px-10 py-2 outline-none focus:border-blue-500"
//                     type="email"
//                     value={email}
//                     id="email"
//                     name="email"
//                     onChange={(e) => {
//                       setEmail(e.target.value);
//                     }}
//                     placeholder="Enter your email"
//                   />
//                 </div>
//               </div>
//               <div className="mb-3">
//                 <label
//                   className="block text-gray-700 text-sm font-medium mb-2"
//                   htmlFor="password"
//                 >
//                   Password
//                 </label>
//                 {/* Rest of the code remains the same */}
//                 <div className="relative">
//                   <input
//                     className="w-full border rounded px-10 py-2 outline-none focus:border-blue-500"
//                     type={showPassword ? "text" : "password"}
//                     onChange={(e) => {
//                       setPassword(e.target.value);
//                     }}
//                     value={password}
//                     id="password"
//                     name="password"
//                     placeholder="Enter your password"
//                   />
//                   <span
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {showPassword ? (
//                       <FiEyeOff className="text-gray-400" />
//                     ) : (
//                       <FiEye className="text-gray-400" />
//                     )}
//                   </span>
//                 </div>
//               </div>
//               <div className="mb-3">
//                 <label
//                   className="block text-gray-700 text-sm font-medium mb-2"
//                   htmlFor="password"
//                 >
//                   Re-enter Password
//                 </label>
//                 {/* Rest of the code remains the same */}
//                 <div className="relative">
//                   <input
//                   value={password1}
//                     className="w-full border rounded px-10 py-2 outline-none focus:border-blue-500"
//                     type={showPassword ? "text" : "password"}
//                     id="password1"
//                     name="password"
//                     onChange={(e) => setPassword1(e.target.value)}
//                     placeholder="Enter your password"
//                   />
//                   <span
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {showPassword ? (
//                       <FiEyeOff className="text-gray-400" />
//                     ) : (
//                       <FiEye className="text-gray-400" />
//                     )}
//                   </span>
//                 </div>
//               </div>
//               <div className="mb-3">
//                 <label
//                   className="block text-gray-700 text-sm font-medium mb-2"
//                   htmlFor="role"
//                 >
//                   Role
//                 </label>
//                 <select
//                   className="w-full border rounded px-10 py-2 outline-none focus:border-blue-500"
//                   id="role"
//                   name="role"
//                   value={role}
//                   onChange={(e) => setRole(e.target.value)}
//                 >
//                   <option value="">Select your role</option>
//                   <option value="sales">Sales</option>
//                   <option value="cto">CTO</option>
//                   <option value="developer">Developer</option>
//                 </select>
//               </div>
//               <div className="mb-3">
//                 <label
//                   className="block text-gray-700 text-sm font-medium mb-2"
//                   htmlFor="role"
//                 >
//                   Team
//                 </label>
//                 <select
//                   className="w-full border rounded px-10 py-2 outline-none focus:border-blue-500"
//                   id="role"
//                   name="role"
//                   value={role}
//                   onChange={(e) => setRole(e.target.value)}
//                 >
//                   <option value="">Select your role</option>
//                   <option value="sales">Sales</option>
//                   <option value="cto">CTO</option>
//                   <option value="developer">Developer</option>
//                 </select>
//               </div>

//               <div className="mb-3">
//                 <label className="block text-gray-700 text-sm font-medium mb-2">
//                   Active
//                 </label>
//                 <input
//                   className="mr-2 leading-tight"
//                   type="checkbox"

//                   checked={active}
//                   onChange={() => setActive(!active)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="block text-gray-700 text-sm font-medium mb-2">
//                   Is Staff
//                 </label>
//                 <input
//                   className="mr-2 leading-tight"
//                   type="checkbox"
//                   checked={isStaff}
//                   onChange={() => setIsStaff(!isStaff)}
//                 />
//               </div>


//             </form>
//             <button
//               onClick={()=>{signup()}}
//                 className="my-2 w-3/4 rounded py-2 transition duration-1000 bg-gradient-to-r from-[#401F71] to-[#BE7B72] via-[#824D74] text-white shadow-md hover:from-[#824D74] hover:to-[#401F71]"

//               >
//                 Create User
//               </button>
//             <div className="text-red-500 text-center my-2">{error}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { FaRegUser } from "react-icons/fa";
import { FiMail, FiEye, FiEyeOff } from "react-icons/fi";
import { api } from "../../variable";
import picture from "../../assets/AddUser.gif"

export default function UserManagement() {
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [active, setActive] = useState(false);
  const [isStaff, setIsStaff] = useState(false);
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const check = () => {
    console.log(role);
  };

  const signup = async () => {
    if (email !== "" && password !== "" && name !== "") {
      if (password === password1) {
        await fetch(`${api}user/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: name,
            email: email,
            password: password,
            first_name: fname,
            last_name: lname,
            role: role,
          }),
        });

        setEmail("");
        setName("");
        setPassword("");
        setFname("");
        setLname("");
        setPassword("");
        setPassword1("");
        setActive(false);
        setIsStaff(false);
        setRole("");
        window.alert("Account created");
      } else {
        window.alert("Password Doesn't match");
      }
    } else {
      setError("Fields can't be empty");
    }
  };

  return (
    <div>
      <Sidebar></Sidebar>
      <div className="p-4 sm:ml-64 bg-gradient-to-r from-[#401F71] to-[#BE7B72] via-[#824D74] min-h-screen">
        <div className="text-center flex flex-row items-center justify-center gap-x-3 text-3xl font-bold text-white mb-8">
          <FaRegUser />
          User Management
        </div>
        <div className="h-3/4 flex flex-row justify-center">

          <div className="bg-white p-8 rounded md:w-3/4 md:h-3/4 justify-center items-center my-6 border border-gray-300  shadow-custom-xl ">

            <div className=" grid grid-cols-2 justify-between items-center pr-12">

              {/* form */}
              <div className="flex flex-row  w-[80%]">
                <form className=" flex flex-wrap justify-start ml-12">

                  <div className="mb-3 w-full">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                      User Name
                    </label>

                    <input
                      className="[40%] border rounded-full px-3 py-2 focus:border-blue-500 bg-white-light focus:ring-[#faa54b] focus:outline-none focus:ring-1 "

                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      placeholder="Enter your name"
                    />
                  </div>



                  <div className="mb-3 w-full">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="fname">
                      First Name
                    </label>
                    <input
                      className="w-[70%]  border rounded-full px-3 py-2 focus:border-blue-500 bg-white-light focus:ring-[#faa54b] focus:outline-none focus:ring-1"
                      type="text"
                      id="fname"
                      value={fname}
                      name="fname"
                      onChange={(e) => {
                        setFname(e.target.value);
                      }}
                      placeholder="Enter your first name"
                    />
                  </div>



                  <div className="mb-3 w-full">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="lname">
                      Last Name
                    </label>
                    <input
                      className="[40%]  border rounded-full px-3 py-2 focus:border-blue-500 bg-white-light focus:ring-[#faa54b] focus:outline-none focus:ring-1"
                      type="text"
                      value={lname}
                      id="lname"
                      name="lname"
                      onChange={(e) => {
                        setLname(e.target.value);
                      }}
                      placeholder="Enter your last name"
                    />
                  </div>



                  <div className="mb-3 w-full">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                      Email
                    </label>
                    <div className="relative">
                      {/* <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <FiMail className="text-gray-400" />
                      </span> */}
                      <input
                        className="[40%]  border rounded-full px-3 py-2 focus:border-blue-500 bg-white-light focus:ring-[#faa54b] focus:outline-none focus:ring-1"
                        type="email"
                        value={email}
                        id="email"
                        name="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>



                  <div className="mb-3">

                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                      Password
                    </label>


                    <div className="relative">
                      <input
                        className="  border rounded-full px-3 py-2 focus:border-blue-500 bg-white-light focus:ring-[#faa54b] focus:outline-none focus:ring-1"
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        value={password}
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                      />

                      <div className=" bg-white-medium rounded-full">
                        <span
                          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <FiEyeOff className="text-gray-400" />
                          ) : (
                            <FiEye className="text-gray-400" />
                          )}
                        </span>
                      </div>

                    </div>
                  </div>

                  <div className="mb-3 ">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password1">
                      Re-enter Password
                    </label>
                    <div className="relative">
                      <input
                        className=" border rounded-full px-3 py-2 focus:border-blue-500 bg-white-light focus:ring-[#faa54b] focus:outline-none focus:ring-1"
                        type={showPassword ? "text" : "password"}
                        id="password1"
                        name="password"
                        onChange={(e) => setPassword1(e.target.value)}
                        value={password1}
                        placeholder="Enter your password"
                      />
                      <span
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <FiEyeOff className="text-gray-400" />
                        ) : (
                          <FiEye className="text-gray-400" />
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="mb-3 w-full">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="role">
                      Role
                    </label>
                    <select
                      className="border rounded-full px-3 py-2 focus:border-blue-500 bg-white-light focus:ring-[#faa54b] focus:outline-none focus:ring-1"
                      id="role"
                      name="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="">Select your role</option>
                      <option value="sales">Sales</option>
                      <option value="cto">CTO</option>
                      <option value="developer">Developer</option>
                    </select>
                  </div>
                  <div className="mb-3 w-full">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="team">
                      Team
                    </label>
                    <select
                      className="[40%] border rounded-full px-3 py-2 focus:border-blue-500 bg-white-light focus:ring-[#faa54b] focus:outline-none focus:ring-1"
                      id="team"
                      name="team"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="">Select your team</option>
                      <option value="sales">Sales</option>
                      <option value="cto">CTO</option>
                      <option value="developer">Developer</option>
                    </select>
                  </div>

                  <div className="mb-3 w-full flex flex-row gap-4 justify-between">
                    <div className="flex-1 flex flex-col items-center">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Active
                      </label>
                      <input
                        className="leading-tight"
                        type="checkbox"
                        checked={active}
                        onChange={() => setActive(!active)}
                      />
                    </div>

                    <div className="flex-1 flex flex-col items-center">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Is Staff
                      </label>
                      <input
                        className="leading-tight"
                        type="checkbox"
                        checked={isStaff}
                        onChange={() => setIsStaff(!isStaff)}
                      />
                    </div>
                  </div>


                </form>
              </div>

              {/* image*/}
              <div className=" -ml-28 " style={{
                width: '650px',
                height: '650px',
                backgroundSize: `cover`,
                backgroundImage: `url(${picture})`,

              }}>
              </div>
              {/* <div className=" flex w-full relative ">
                <img src={picture} alt="Add User" className="w-full h-full" />
              </div> */}

              <button
                onClick={() => {
                  signup();
                }}
                className="my-2 w-3/4 rounded py-2 transition duration-1000 bg-[#faa54b] text-white shadow-md hover:from-[#824D74] hover:to-[#401F71]"
              >
                Create User
              </button>
              <div className="text-red-500 text-center my-2">{error}</div>


            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
