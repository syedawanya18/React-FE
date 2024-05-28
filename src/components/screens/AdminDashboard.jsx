import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import prodbacklog from "../../assets/productbacklog.png";
import planningmeeting from "../../assets/sprintplanningmeeting.png";
import backlog from "../../assets/sprintbacklog.png";
// import Arrow from '../../assets/arrow.jsx';
import finishedwork from "../../assets/finishedwork.png";
import productowner from "../../assets/productowner.png";
import team from "../../assets/team.png";
import scrummaster from "../../assets/scrummaster.png";
import sprint from "../../assets/sprint2.png";
import sprintreview from "../../assets/review.png";
import arrow from "../../assets/arrow.png";



export default function AdminDashboard() {
    return (
        <div className="flex">
            <Sidebar></Sidebar>
            <div className="p-4 sm:ml-64 bg-gradient-to-r from-[#401F71] to-[#BE7B72] via-[#824D74]  items-center justify-center w-screen h-screen">

                <div className="flex gap-14 mt-8 h-44  ">
                    <div className="flex justify-center gap-20 mt-20 w-[27%] h-40 ml-20">

                         {/* product owner*/}
                        <div className="flex flex-col items-center ">
                            <img src={productowner} alt="Product Owner" className="w-26 h-46" />
                            <h2 className=" text-center text-lg text-white font-semibold">Product Owner</h2>
                        </div>

                         {/* team */}
                        <div className="flex flex-col items-center ">
                            <img src={team} alt="Team" className="mt-3 w-26 h-46" />
                            <h2 className=" text-lg text-white font-semibold -m-3">Team</h2>
                        </div>

                    </div>

                    {/* Scrum Master */}
                    <div className="flex  justify-center gap-20 w-[10%] h-40 ml-20">
                        <div className="flex flex-col items-center">
                            <img src={scrummaster} alt="Scrum Master" className="w-26 h-46" />
                            <h2 className="text-lg ml-1 text-white font-semibold">Scrum Master</h2>
                        </div>
                    </div>

                     {/* Sprint Review */}
                    <div className="flex  justify-center w-[13%] h-40 ml-96 mt-36 ">
                        <div className="flex flex-col items-center">
                            <img src={sprintreview} alt="Sprint Review" className="w-26 h-46" />
                            <h2 className="text-lg text-white font-semibold">Sprint Review</h2>
                        </div>
                    </div>
                </div>

                {/* Sprint */}
                <div className="relative flex gap-0 justify-end mt-2">
                    <div className="ml-80 absolute mt-10 mr-36 right-20 w-[45%] flex justify-end items-center h-40">
                        <img src={sprint} alt="sprint" className="w-[95%] h-46" />
                    </div>

                    {/* Finished Work */}
                    <div className="absolute flex flex-col items-end mt-56 mr-24">
                        <img src={finishedwork} alt="finished work" className="mt-4 w-[25%] h-46" />
                        <h2 className="text-lg text-white font-semibold">Finished Work</h2>
                    </div>
                </div>


                <div className=" mt-60 relative flex flex-row w-[45%] h-40 ">


                    {/* Arrow Image */}
                    <div className="">
                        <img src={arrow} alt="Arrow" className="absolute right-0 left-0 top-1/2 transform -translate-y-1/2 w-full h-54 object-contain ml-6" />
                    </div>

                    {/* Product Backlog */}
                    <div className="relative z-10 col-span-1 mt-4 ">
                        <div className="relative pt-4 pl-6 -m-4  ml-4    ">
                            <img src={prodbacklog} alt="Product Backlog" className=" mr-0 mb-2 w-[65%] h-full object-cover " />
                            <h2 className="text-lg text-white font-semibold">Product Backlog</h2>
                        </div>
                    </div>

                    {/* Sprint Plannigng Meeting*/}
                    <div className="relative z-10 col-span-1 mt-4">
                        <div className="relative pt-4 pl-6 -m-4 ml-1 ">
                            <img src={planningmeeting} alt="Sprint Backlog" className=" mr-0 mb-2 w-[65%] h-full object-cover" />
                            <h2 className="text-lg text-white text-center font-semibold pr-10 mr-3">Sprint Planning Meeting</h2>
                        </div>
                    </div>

                    {/* Sprint Backlog */}
                    <div className="relative z-10 col-span-1 mt-4">
                        <div className="relative pt-4 pl-6 -m-4 mr-6 ">
                            <img src={backlog} alt="Sprint Backlog" className=" mr-0 mb-2 w-[65%] h-full object-cover" />
                            <h2 className="text-lg  text-white text-center font-semibold pr-10 mr-2">Sprint Backlog</h2>
                        </div>
                    </div>




                </div>

            </div>
        </div >

    );
}

// import React from "react";
// import Sidebar from "../Sidebar";
// import prodbacklog from "../../assets/productbacklog.png";
// import planningmeeting from "../../assets/sprintplanningmeeting.png";
// import backlog from "../../assets/sprintbacklog.png";
// import finishedwork from "../../assets/finishedwork.png";
// import productowner from "../../assets/productowner.png";
// import team from "../../assets/team.png";
// import scrummaster from "../../assets/scrummaster.png";
// import sprint from "../../assets/sprint.png";
// import sprintreview from "../../assets/review.png";

// export default function AdminDashboard() {
//   return (
//     <div className="flex flex-col h-screen">
//       <Sidebar />
//       <div className="flex-1 bg-gradient-to-r from-[#401F71] to-[#BE7B72] via-[#824D74] flex items-center justify-center">
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-2">
//           {/*
//             Iterate over the data and create cards for each item
//           */}
//           {[
//             { title: "Product Backlog", image: prodbacklog },
//             { title: "Sprint Planning Meeting", image: planningmeeting },
//             { title: "Sprint Backlog", image: backlog },
//             { title: "Finished Work", image: finishedwork },
//             { title: "Product Owner", image: productowner },
//             { title: "Team", image: team },
//             { title: "Scrum Master", image: scrummaster },
//             { title: "Sprint Review", image: sprintreview },
//             { title: "Sprint", image: sprint },
//           ].map((item, index) => (
//             <div key={index} className="rounded-lg overflow-hidden bg-white shadow-md">
//               <img src={item.image} alt={item.title} className="w-24 h-24 md:w-32 md:h-32" />
//               <div className="p-4">
//                 <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
//                 {/* Add additional details if necessary */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


// import React from "react";
// import Sidebar from "../Sidebar";
// import prodbacklog from "../../assets/productbacklog.png";
// import planningmeeting from "../../assets/sprintplanningmeeting.png";
// import backlog from "../../assets/sprintbacklog.png";
// import finishedwork from "../../assets/finishedwork.png";
// import productowner from "../../assets/productowner.png";
// import team from "../../assets/team.png";
// import scrummaster from "../../assets/scrummaster.png";
// import sprint from "../../assets/sprint.png";
// import sprintreview from "../../assets/review.png";

// export default function AdminDashboard() {
//     return (
//         <div>
//             <Sidebar />
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
//                 {/* Product Backlog */}
//                 <div className="col-span-1 md:col-span-2">
//                     <div className="rounded-lg overflow-hidden">
//                         <img src={prodbacklog} alt="Product Backlog" className="w-full" />
//                         <div className="bg-white p-4">
//                             <h2 className="text-lg font-semibold mb-2">Product Backlog</h2>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Sprint Planning Meeting */}
//                 <div className="col-span-1 md:col-span-1">
//                     <div className="rounded-lg overflow-hidden">
//                         <img src={planningmeeting} alt="Sprint Planning Meeting" className="w-full" />
//                         <div className="bg-white p-4">
//                             <h2 className="text-lg font-semibold mb-2">Sprint Planning Meeting</h2>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Sprint Backlog */}
//                 <div className="col-span-1 md:col-span-1">
//                     <div className="rounded-lg overflow-hidden">
//                         <img src={backlog} alt="Sprint Backlog" className="w-full" />
//                         <div className="bg-white p-4">
//                             <h2 className="text-lg font-semibold mb-2">Sprint Backlog</h2>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Finished Work */}
//                 <div className="col-span-1 md:col-span-1">
//                     <div className="rounded-lg overflow-hidden">
//                         <img src={finishedwork} alt="Finished Work" className="w-full" />
//                         <div className="bg-white p-4">
//                             <h2 className="text-lg font-semibold mb-2">Finished Work</h2>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Product Owner */}
//                 <div className="col-span-1 md:col-span-1">
//                     <div className="rounded-lg overflow-hidden">
//                         <img src={productowner} alt="Product Owner" className="w-full" />
//                         <div className="bg-white p-4">
//                             <h2 className="text-lg font-semibold mb-2">Product Owner</h2>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Team */}
//                 <div className="col-span-1 md:col-span-1">
//                     <div className="rounded-lg overflow-hidden">
//                         <img src={team} alt="Team" className="w-full" />
//                         <div className="bg-white p-4">
//                             <h2 className="text-lg font-semibold mb-2">Team</h2>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Scrum Master */}
//                 <div className="col-span-1 md:col-span-1">
//                     <div className="rounded-lg overflow-hidden">
//                         <img src={scrummaster} alt="Scrum Master" className="w-full" />
//                         <div className="bg-white p-4">
//                             <h2 className="text-lg font-semibold mb-2">Scrum Master</h2>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Sprint Review */}
//                 <div className="col-span-1 md:col-span-1">
//                     <div className="rounded-lg overflow-hidden">
//                         <img src={sprintreview} alt="Sprint Review" className="w-full" />
//                         <div className="bg-white p-4">
//                             <h2 className="text-lg font-semibold mb-2">Sprint Review</h2>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Sprint */}
//                 <div className="col-span-1 md:col-span-1">
//                     <div className="rounded-lg overflow-hidden">
//                         <img src={sprint} alt="Sprint" className="w-full" />
//                         <div className="bg-white p-4">
//                             <h2 className="text-lg font-semibold mb-2">Sprint</h2>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


