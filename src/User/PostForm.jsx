import React, { useState } from "react";
import { motion } from "framer-motion";


const PostForm = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
    work: "",
    message: "",
    deadline: "",
    reward: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Your post has been submitted successfully!");
  };


  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">

        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create a Work Post</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {[  
              { label: "Name", name: "name", type: "text" },
              { label: "Mobile Number", name: "mobile", type: "tel" },
              { label: "City", name: "city", type: "text" },
              { label: "Work", name: "work", type: "text" },
              { label: "Deadline", name: "deadline", type: "date" },
              { label: "Work Reward", name: "reward", type: "text" },
            ].map(({ label, name, type }) => (
              <div key={name} className="relative">
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="absolute left-3 top-1 text-xs text-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500">
                  {label}
                </label>
              </div>
            ))}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder=" "
                className="peer w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="absolute left-3 top-1 text-xs text-blue-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500">
                Message
              </label>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 px-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg shadow-lg font-semibold text-lg focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default PostForm;
