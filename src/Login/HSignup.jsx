// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";


// const SignupForm = () => {

//     const navigate = useNavigate();


//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     dob: "",
//     gender: "",
//     idProof: null,
//     mobile: "",
//     address: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, idProof: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white">
//         <button
//         onClick={() => navigate(-1)}
//         className="absolute top-10 left-20 flex items-center text-gray-600 hover:text-gray-800"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={2}
//           stroke="currentColor"
//           className="w-6 h-6 mr-2"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//         </svg>
//         Back
//       </button>
//       <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg mt-10 mb-10">
//         <h2 className="text-2xl font-bold mb-6 flex justify-center text-center">Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block mb-1 font-medium">First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-2 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-2 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Date of Birth</label>
//             <input
//               type="date"
//               name="dob"
//               value={formData.dob}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-2 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Gender</label>
//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-2 rounded"
//               required
//             >
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">ID Proof Image</label>
//             <input
//               type="file"
//               name="idProof"
//               onChange={handleFileChange}
//               className="w-full border border-gray-300 p-2 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Mobile Number</label>
//             <input
//               type="tel"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-2 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Address</label>
//             <textarea
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-2 rounded"
//               required
//             ></textarea>
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-2 rounded"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded font-medium"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;





import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export default function SignUp() {

  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [idProof, setIdProof] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size > 500 * 1024) {
      alert("File size must be less than 500KB");
      setFile(null);
    } else {
      setFile(selectedFile);
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-10 left-20 flex items-center text-gray-600 hover:text-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>
      <Card className="w-full max-w-lg shadow-lg p-6 rounded-2xl">
        <CardContent>
          <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
          <form onSubmit='' className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>First Name</Label>
                <Input type="text" required />
              </div>
              <div>
                <Label>Last Name</Label>
                <Input type="text" required />
              </div>
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" required />
            </div>
            <div>
              <Label>Mobile Number</Label>
              <Input type="tel" required />
            </div>
            <div>
              <Label>Gender</Label>
              <Select>
                <SelectTrigger>Select Gender</SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Date of Birth</Label>
              <Input type="date" required />
            </div>
            <div>
              <Label>Address</Label>
              <Input type="text" required />
            </div>
            <div>
              <Label>ID Proof</Label>
              <Select onValueChange={setIdProof}>
                <SelectTrigger>Select ID Proof</SelectTrigger>
                <SelectContent>
                  <SelectItem value="aadhaar">Aadhaar Card</SelectItem>
                  <SelectItem value="pan">PAN Card</SelectItem>
                  <SelectItem value="voter">Voter ID</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {idProof && (
              <div>
                <Label>Upload Document (Max 500KB)</Label>
                <Input type="file" accept="image/*,application/pdf" onChange={handleFileChange} required />
              </div>
            )}
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}