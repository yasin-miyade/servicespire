// import React, { useState } from "react";
// import { FaHome, FaClipboardList, FaTasks, FaBell, FaUser, FaStar, FaHeadset } from "react-icons/fa";
// // import "tailwindcss/tailwind.css";

// const menuItems = [
//   { name: "Dashboard", icon: <FaHome /> },
//   { name: "Pending Requests", icon: <FaClipboardList /> },
//   { name: "Ongoing Requests", icon: <FaTasks /> },
//   { name: "Completed Tasks", icon: <FaTasks /> },
//   { name: "Alerts & Reminders", icon: <FaBell /> },
//   { name: "Helper Profile", icon: <FaUser /> },
//   { name: "User Feedback", icon: <FaStar /> },
//   { name: "Support Helpdesk", icon: <FaHeadset /> }
// ];

// const pages = {
//   "Dashboard": (
//     <div>
//       <h2 className="text-2xl font-semibold">Welcome to the Dashboard</h2>
//       <p className="mt-2 text-gray-600">Overview of recent activities and statistics.</p>
//       <div className="mt-4 grid grid-cols-3 gap-4">
//         <div className="p-4 bg-blue-100 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold">Total Requests</h3>
//           <p className="text-gray-700">120</p>
//         </div>
//         <div className="p-4 bg-green-100 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold">Ongoing Requests</h3>
//           <p className="text-gray-700">30</p>
//         </div>
//         <div className="p-4 bg-yellow-100 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold">Pending Approvals</h3>
//           <p className="text-gray-700">15</p>
//         </div>

//       </div>
//     </div>
//   ),
//   "Pending Requests": "Pending Requests Content",
//   "Ongoing Requests": "Ongoing Requests Content",
//   "Completed Tasks": "Completed Tasks Content",
//   "Alerts & Reminders": "Alerts & Reminders Content",
//   "Helper Profile": "Helper Profile Content",
//   "User Feedback": "User Feedback Content",
//   "Support Helpdesk": "Support Helpdesk Content"
// };

// const App = () => {
//   const [selectedPage, setSelectedPage] = useState("Dashboard");

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <nav className="w-72 bg-white shadow-lg p-6 fixed h-full overflow-y-auto">
//         <h1 className="flex justify-center p-3 text-3xl font-semibold">ServiceSpire</h1><hr className="pb-5"/>
//         <ul className="space-y-4">
//           {menuItems.map(({ name, icon }) => (
//             <li
//               key={name}
//               className={`flex items-center p-3 text-lg font-medium rounded-lg cursor-pointer transition-colors duration-200 ${
//                 selectedPage === name ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"
//               }`}
//               onClick={() => setSelectedPage(name)}
//             >
//               <span className="mr-3 text-xl">{icon}</span>
//               {name}
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Main Content */}
//       <main className="flex-1 p-8 bg-white shadow-lg rounded-lg ml-80 overflow-auto h-screen scrollbar-hide">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">{selectedPage}</h1>
//         <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
//           {pages[selectedPage]}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import {
  FaHome,
  FaClipboardList,
  FaTasks,
  FaBell,
  FaUser,
  FaStar,
  FaHeadset,
  FaBars,
  FaTimes,
  FaAngleLeft,
} from "react-icons/fa";
import {
  Home,
  History,
  Bell,
  User,
  LogOut,
  Menu,
  ChevronLeft,
} from "lucide-react";
import { Label } from "@radix-ui/react-label";

// import "tailwindcss/tailwind.css";

const menuItems = [
  { name: "Dashboard", icon: <FaHome /> },
  { name: "Pending Requests", icon: <FaClipboardList /> },
  { name: "Ongoing Requests", icon: <FaTasks /> },
  { name: "Completed Tasks", icon: <FaTasks /> },
  { name: "Alerts & Reminders", icon: <FaBell /> },
  { name: "Helper Profile", icon: <FaUser /> },
  { name: "User Feedback", icon: <FaStar /> },
  { name: "Support Helpdesk", icon: <FaHeadset /> },
  // { name: "Back to Home", icon: <LogOut /> }
];

const pages = {
  Dashboard: (
    <div>
      <h2 className="text-2xl font-semibold">Welcome to the Dashboard</h2>
      <p className="mt-2 text-gray-600">
        Overview of recent activities and statistics.
      </p>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-4 bg-blue-100 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Total Requests</h3>
          <p className="text-gray-700">120</p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Ongoing Requests</h3>
          <p className="text-gray-700">30</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Pending Approvals</h3>
          <p className="text-gray-700">15</p>
        </div>
      </div>
    </div>
  ),
  "Pending Requests": "Pending Requests Content",
  "Ongoing Requests": "Ongoing Requests Content",
  "Completed Tasks": "Completed Tasks Content",
  "Alerts & Reminders": "Alerts & Reminders Content",
  "Helper Profile": "Helper Profile Content",
  "User Feedback": "User Feedback Content",
  "Support Helpdesk": "Support Helpdesk Content",
};

const App = () => {
  const [selectedPage, setSelectedPage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Toggle Button */}
      <button
        className="absolute top-6 left-4 z-50 p-2 text-2xl rounded-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <ChevronLeft /> : <ChevronLeft />}
      </button>

      {/* Sidebar */}
      <nav
        className={`bg-white shadow-lg p-6 fixed h-full overflow-y-auto transition-all duration-300 ${
          sidebarOpen ? "w-72" : "w-23"
        }`}
      >
        <h1
          className={`text-3xl font-bold text-center transition-opacity duration-300 ${
            sidebarOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          ServiceSpire
        </h1>
        <hr className="pb-5 mt-5" />
        <ul className="space-y-4">
          {menuItems.map(({ name, icon }) => (
            <li
              key={name}
              className={`flex items-center p-3 text-lg font-medium rounded-lg cursor-pointer transition-colors duration-200 ${
                selectedPage === name
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-blue-100"
              }`}
              onClick={() => setSelectedPage(name)}
            >
              <span className="text-xl ">{icon}</span>
              <span
                className={`ml-3 transition-opacity duration-300 ${
                  sidebarOpen ? "opacity-100" : "opacity-100 hidden"
                }`}
              >
                {name}
              </span>
            </li>
          ))}
          <div className="flex items-center gap-2 p-2">
            <a
              href="/"
              className="no-underline text-gray-700 hover:bg-blue-100 text-lg font-medium flex items-center gap-2"
            >
              <LogOut size={20} />
              <span className={`ml-3 transition-opacity duration-300 ${
                  sidebarOpen ? "opacity-100" : "opacity-0 hidden"
                }`}>Back To Home</span>
            </a>
          </div>
        </ul>
      </nav>

      {/* Main Content */}
      <main
        className={`flex-1 p-8 bg-white shadow-lg rounded-lg transition-all duration-300 ${
          sidebarOpen ? "ml-80" : "ml-24"
        } overflow-auto h-screen scrollbar-hide`}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          {selectedPage}
        </h1>
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          {pages[selectedPage]}
        </div>
      </main>
    </div>
  );
};

export default App;
