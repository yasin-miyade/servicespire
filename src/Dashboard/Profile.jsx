// import React from 'react'
// import { useState } from 'react';
// import HeaderDashb from "./HeaderDashb";

// function Profile() {

//     const [isCollapsed, setIsCollapsed] = useState(true);

//             const toggleSidebar = () => {
//               setIsCollapsed(!isCollapsed);
//             };

//   return (
//     <>
//         <div className="flex min-h-screen bg-gray-100">
//         <HeaderDashb isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
//         <div
//         className={`transition-all duration-300 p-5 mt-1 w-full ${
//           isCollapsed ? "ml-20" : "ml-64"
//         }`}>
//             hiiiii
//         </div>
//         </div>
//     </>
//   )
// }

// export default Profile

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Edit, LogOut, Trash } from "lucide-react";
import HeaderDashb from "./HeaderDashb";

const UserProfile = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Yasin");
  const [email, setEmail] = useState("Yasin@gmail.com");
  const [avatar, setAvatar] = useState("https://via.placeholder.com/150");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setAvatar("https://via.placeholder.com/150");
  };

  return (
    <>
    <div className="flex min-h-screen bg-gray-100">
    <HeaderDashb isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
    <div
        className={`transition-all duration-300 p-5 mt-1 w-full ${
          isCollapsed ? "ml-20" : "ml-64"
        }`}>
          <h1 className="text-3xl font-semibold mt-5 pb-10">Profile</h1>
          <hr />
    <Card className="w-full max-w-md mx-auto p-6 mt-10 shadow-xl rounded-2xl text-black">
      <CardContent className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2 ">
          <label htmlFor="avatar-upload" className="cursor-pointer">
            <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
              <AvatarImage src={avatar} alt="User Profile" />
              <AvatarFallback className="bg-gray-300 text-gray-700 font-bold text-xl">
                U
              </AvatarFallback>
            </Avatar>
            {isEditing && (
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            )}
          </label>
          {isEditing && (
            <Button
              variant="destructive"
              className="flex items-center gap-2 bg-red-600 text-white hover:bg-red-700 shadow-md"
              onClick={handleImageRemove}
            >
              <Trash size={16} /> Delete Photo
            </Button>
          )}
        </div>

        <div className="text-center">
          {isEditing ? (
            <input
              type="text"
              className="text-black p-1 rounded-lg bg-white px-4 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <h2 className="text-2xl font-bold">{name}</h2>
          )}
          {isEditing ? (
            <input
              type="email"
              className="text-black p-1 rounded-lg mt-2 bg-white px-4 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <p className="text-gray-400">{email}</p>
          )}
        </div>

        {!isEditing && (
          <div className="flex flex-col w-full gap-3 mt-4 bg-white bg-opacity-20 p-4 rounded-lg shadow-md text-black">
            <div className="flex justify-between">
              <span className="font-medium">Role:</span>
              <span>User</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Joined:</span>
              <span>Jan 10, 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Status:</span>
              <span className="text-green-600 font-semibold">Active</span>
            </div>
          </div>
        )}

        <div className="flex gap-4 mt-6">
          <Button
            className="flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 shadow-md "
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit size={16} /> {isEditing ? "Save" : "Edit Profile"}
          </Button>
          <a href="/">
          <Button
            variant="destructive"
            className="flex items-center gap-2 bg-red-600 text-white hover:bg-red-700 shadow-md"
          >
            <LogOut size={16} /> Logout
          </Button>
          </a>
        </div>
      </CardContent>
    </Card>
    </div>
    </div>
    </>
  );
};

export default UserProfile;
