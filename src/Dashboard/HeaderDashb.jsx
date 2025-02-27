// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { Home, History, Bell, User, LogOut } from 'lucide-react'
// import {MdPostAdd} from 'react-icons/md'

// function header() {
//   return (
//     <>
//         <section className=" h-screen flex fixed">
//           <aside className=" w-64 bg-gray-900 text-white p-4 flex flex-col justify-between">
//             <div>
//               <h1 className="text-xl font-bold mb-6">ServiceSpire</h1>
//               <nav>
//                 <ul>
//                   <li>
//                     <NavLink
//                       to={"/dashboard"}
//                       className={({
//                         isActive,
//                       }) => `mb-4 flex items-center gap-2  p-3 rounded 
//               ${isActive ? "bg-indigo-600" : "text-black"}`}
//                     ><Home size={20} />
//                       Dashboard
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       className={({
//                         isActive,
//                       }) => `mb-4 flex items-center gap-2  p-3 rounded 
//               ${isActive ? "bg-indigo-600" : "text-white"}`}
//                     ><MdPostAdd size={23} />
//                       Posts
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       className={({
//                         isActive,
//                       }) => `mb-4 flex items-center gap-2  p-3 rounded 
//               ${isActive ? "bg-indigo-600" : "text-white"}`}
//                     ><History size={20} />
//                       History
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       className={({
//                         isActive,
//                       }) => `mb-4 flex items-center gap-2  p-3 rounded 
//               ${isActive ? "bg-indigo-600" : "text-black"}`}
//                     ><Bell size={20} />
//                       Notification
//                     </NavLink>
//                   </li>

//                   <li>
//                     <NavLink
//                       className={({
//                         isActive,
//                       }) => `mb-4 flex items-center gap-2  p-3 rounded 
//               ${isActive ? "bg-indigo-600" : "text-white"}`}
//                     ><User size={20} />
//                       Profile
//                     </NavLink>
//                   </li>
//                 </ul>
//               </nav>
//             </div>

//             <div className="flex items-center gap-2 p-2">
//               <a href="/" className='texdecoration-none text-white flex items-center gap-2'>
//               <LogOut size={20} />
//               <span>Back To Home</span>
//               </a>
//             </div>
//           </aside>
//         </section>
//     </>
//   )
// }

// export default header



import React from "react";
import { NavLink } from "react-router-dom";
import { Home, History, Bell, User, LogOut, Menu, ChevronLeft } from "lucide-react";
import { MdPostAdd } from "react-icons/md";

function HeaderDashb({ isCollapsed, toggleSidebar }) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-gray-900 text-white p-4 flex flex-col justify-between transition-all duration-600 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div>
        <div className="flex items-center justify-between ">
          <button onClick={toggleSidebar} className="text-white flex gap-3 focus:outline-none mb-10">
            {isCollapsed ? <Menu size={25} /> : <ChevronLeft size={25} />}
            {!isCollapsed && <h1 className="text-xl font-bold mb-6">ServiceSpire</h1>}

          </button>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `mb-4 flex items-center gap-2 p-3 rounded ${isActive ? "bg-indigo-600" : ""}`
                }
              >
                <Home size={20} />
                {!isCollapsed && "Dashboard"}
              </NavLink>
            </li>
            <li>
              <NavLink
              to={"/post"}
                className={({ isActive }) =>
                  `mb-4 flex items-center gap-2 p-3 rounded ${isActive ? "bg-indigo-600" : ""}`
                }
              >
                <MdPostAdd size={23} />
                {!isCollapsed && "Posts"}
              </NavLink>
            </li>
            <li>
              <NavLink
              to={"/history"}
                className={({ isActive }) =>
                  `mb-4 flex items-center gap-2 p-3 rounded ${isActive ? "bg-indigo-600" : ""}`
                }
              >
                <History size={20} />
                {!isCollapsed && "History"}
              </NavLink>
            </li>
            <li>
              <NavLink
              to={'/notifaction'}
                className={({ isActive }) =>
                  `mb-4 flex items-center gap-2 p-3 rounded ${isActive ? "bg-indigo-600" : ""}`
                }
              >
                <Bell size={20} />
                {!isCollapsed && "Notification"}
              </NavLink>
            </li>
            <li>
              <NavLink
              to={'/profile'}
                className={({ isActive }) =>
                  `mb-4 flex items-center gap-2 p-3 rounded ${isActive ? "bg-indigo-600" : ""}`
                }
              >
                <User size={20} />
                {!isCollapsed && "Profile"}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-2 p-2">
        <a href="/" className="no-underline text-white flex items-center gap-2">
          <LogOut size={20} />
          {!isCollapsed && <span>Back To Home</span>}
        </a>
      </div>
    </aside>
  );
}

export default HeaderDashb;

