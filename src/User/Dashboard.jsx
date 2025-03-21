// import React, { useState } from "react";
// import { Plus, Pencil } from "lucide-react";

// function Dashboard() {
 
//   return (
//     <div className="flex bg-gray-100 min-w-5xl">
      
//       {/* Main Content */}
//       <div>
//         {/* <header className="flex justify-between items-center mb-6 min-h-18">
//           <h2 className="text-3xl font-semibold">Dashboard</h2>
//           <div className="flex items-center gap-4">
//             <div className="relative">
//               <a href="/post">
//               <button className="bg-indigo-600 flex p-2 text-white rounded-md items-center"><Plus size={20} /> Add Post</button>
//               </a>
//             </div>
//           </div>
//         </header> */}
//         {/* Tabs */}
//         {/* <div className="flex gap-6">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               className={`pb-2 transition-all ${
//                 tab === "Integrations"
//                   ? "border-b-2 border-indigo-600 text-indigo-600"
//                   : "text-gray-600"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div> */}

//         {/* Example Content */}
//         <div className="mt-6 bg-white p-6 rounded-xl shadow-md min-w-5xl ml-10">
//           <div className="flex items-center justify-between bg-indigo-100 p-4 rounded-md">
//             <div>
//               <h3 className="text-lg font-semibold">
//                 Learn how to connect new apps with Rareblocks API
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Lorem ipsum dolor sit amet, consectetur.
//               </p>
//             </div>
//             <div className="flex items-center gap-4">
//               <button className=" text-lg p-2 px-4 rounded-md flex gap-2 items-center"><Pencil size={18} />
                
//               </button>
//             </div>
//           </div>
//         </div>

        

//       </div>
//     </div>
//   );
// }

// export default Dashboard;


// import React from "react";

// function Dashboard({ sidebarOpen }) { 
  

//   return (
//     <div className={`transition-all duration-300 ${sidebarOpen ? "ml-0" : "ml-0"} p-6`}>
//       {/* Main Content */}
//       <div className="bg-white p-6 rounded-xl shadow-md">
//         <div className="flex items-center justify-between bg-indigo-100 p-4 rounded-md">
//           <div>
//             <h3 className="text-lg font-semibold">
//               Learn how to connect new apps with Rareblocks API
//             </h3>
//             <p className="text-gray-600 text-sm">
//               Lorem ipsum dolor sit amet, consectetur.
//             </p>
//           </div>
//           <div className="flex items-center gap-4">
//             <button className="text-lg p-2 px-4 rounded-md flex gap-2 items-center">
//               <Pencil size={18} />
//             </button>
//           </div>
//         </div>
//       </div>



//     </div>
//   );
// }

// export default Dashboard;





import React from "react";
import { Pencil } from "lucide-react"; // ✅ Fix: Import Pencil icon

function Dashboard({ sidebarOpen }) { 
  return (
    <div className={`transition-all duration-300 p-6`}>
      {/* Main Content */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-center justify-between bg-indigo-100 p-4 rounded-md">
          <div>
            <h3 className="text-lg font-semibold">
              Learn how to connect new apps with Rareblocks API
            </h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-lg p-2 px-4 rounded-md flex gap-2 items-center bg-blue-500 text-white hover:bg-blue-600 transition">
              <Pencil size={18} />
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
