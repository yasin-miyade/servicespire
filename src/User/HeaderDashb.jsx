
import React, { useState, useEffect } from "react";
import { MdPostAdd } from "react-icons/md";
import { FaHome, FaUser } from "react-icons/fa";
import { History, Bell, LogOut, ChevronLeft, Plus } from "lucide-react";

import Dashboard from "./Dashboard";
import PostForm from "./PostForm";
import Profile from "./Profile";

const handleLogout = () => {
  window.location.href = "http://localhost:5000/logout"; // Redirect to backend logout
};

const menuItems = [
  { name: "Dashboard", icon: <FaHome /> },
  { name: "Posts", icon: <MdPostAdd size={25} /> },
  { name: "History", icon: <History size={20} /> },
  { name: "Notification", icon: <Bell size={20} /> },
  { name: "User Profile", icon: <FaUser /> },
  { name: "Back to Home", icon: <LogOut />, action: handleLogout },
];

const App = () => {
  const [selectedPage, setSelectedPage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState(null); // ✅ Fix: Add missing state for user

  const pages = {
    Dashboard: <Dashboard sidebarOpen={sidebarOpen} />, // Pass sidebar state
    Posts: <PostForm />,
    History: "History Content",
    Notification: "Notification Content",
    "User Profile": <Profile />,
  };

  useEffect(() => {
    fetch("http://localhost:5000/profile", {
      credentials: "include", // ✅ Required for session cookies
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched User Data:", data); // ✅ Debug
        setUser(data);
      })
      .catch((err) => console.log("Not logged in"));
  }, []);

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
      {/* Sidebar */}
<nav
  className={`bg-white shadow-lg p-6 fixed h-full overflow-y-auto transition-all duration-300 ${
    sidebarOpen ? "w-72" : "w-20"
  }`}
>
  <h1
    className={`text-3xl font-bold text-center transition-opacity duration-300 ${
      sidebarOpen ? "opacity-100" : "opacity-0"
    }`}
  >
    ServiceSpire
  </h1>
  <hr className={`pb-5 mt-5 ${sidebarOpen ? "block" : "hidden"}`} />

  {/* User Info */}
  {user && (
    <div className="flex items-center gap-3 mb-5 p-1 bg-gray-100 rounded-lg">
      <img
        src={user.photos?.[0]?.value || "https://via.placeholder.com/40"}
        alt="User"
        className="w-10 h-10 rounded-full object-cover"
      />
      {sidebarOpen && <span className="font-medium">{user.displayName || "User"}</span>}
    </div>
  )}

  <ul className="space-y-4">
    {menuItems.map(({ name, icon, action }) => (
      <li
        key={name}
        className={`flex items-center p-3 text-lg font-medium rounded-lg cursor-pointer transition-colors duration-200 ${
          selectedPage === name
            ? "bg-blue-500 text-white"
            : "text-gray-700 hover:bg-blue-100"
        }`}
        onClick={() => (action ? action() : setSelectedPage(name))}
      >
        <span className="text-xl">{icon}</span>
        {sidebarOpen && <span className="ml-3">{name}</span>}
      </li>
    ))}
  </ul>
</nav>

{/* Main Content */}
<main
  className={`p-8 bg-white shadow-lg rounded-lg transition-all duration-300 w-full h-screen scrollbar-hide ${
    sidebarOpen ? "ml-72" : "ml-20"
  }`}
>
  {/* Top Heading Section */}
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-3xl font-bold text-gray-800">{selectedPage}</h1>

    {/* Show "Create Post" Button ONLY for Dashboard */}
    {selectedPage === "Dashboard" && (
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300"
        onClick={() => setSelectedPage("Posts")}
      >
        <Plus size={18} />
        Create Post
      </button>
    )}
  </div>

  <div className="bg-gray-50 p-6 rounded-lg shadow-inner w-full">
    {pages[selectedPage]}
  </div>
</main>

    </div>
  );
};

export default App;
