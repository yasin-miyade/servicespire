import React from "react";

import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" mt-24 flex justify-center">
      <button
          onClick={() => navigate(-1)}
          className="absolute top-10 left-20 flex items-center text-gray-600 hover:text-gray-800"
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
        <div className="bg-white shadow-lg rounded-lg w-96 p-8 space-y-6">
          {/* Logo and Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-800">
              Welcome Back!
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Please sign in to continue
            </p>
          </div>
          {/* Login Form */}
          <form action="#" method="POST" className="space-y-6">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required=""
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required=""
                placeholder="Enter your password"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                Forgot password?
              </a>
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <a href="/dashboard">
                  Login
                </a>
              </button>
            </div>
          </form>
          {/* Social Login Options */}
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600">Or sign in with</p>
            <div className="flex justify-center space-x-4">
              {/* Google Button */}
              <button className="flex items-center justify-center px-4 py-2 w-full border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <img
                  src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                <span className="text-sm text-gray-700">Google</span>
              </button>
              {/* Facebook Button */}
              <button className="flex items-center justify-center px-4 py-2 w-full border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="w-5 h-5 mr-2"
                />
                <span className="text-sm text-gray-700">Facebook</span>
              </button>
            </div>
          </div>
          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href='/' className="text-blue-600 hover:text-blue-800">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
      <a href='/dashboard'>Click me</a>

    </>
  );
}

export default Login;
