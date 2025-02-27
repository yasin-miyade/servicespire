import React from 'react'
import { useNavigate } from "react-router-dom";


function Option() {

    const navigate = useNavigate();


  return (
    <div>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-gray-200">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-15 left-40 flex items-center text-gray-600 hover:text-gray-800 text-xl"
          // style={{transform: 'translateX(-300px)'}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
      <div className="bg-white p-14 rounded-3xl shadow-2xl w-md text-center border border-gray-300">
        <h1 className="text-4xl font-extrabold mb-8 text-gray-800">Select Your Role</h1>
        <p className="text-lg text-gray-600 mb-6">Choose how you want to proceed</p>
        <div className="space-y-6">
            <a href="/login" className='s'>
          <button className="w-full py-4 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300">
            Continue as User
          </button>
          </a>
          <a href="" className='mt-5 flex justify-center'>
          <button className="w-full py-4 text-lg font-bold text-white bg-green-600 rounded-xl hover:bg-green-700 transition transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300">
            Continue as Helper
          </button>
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Option