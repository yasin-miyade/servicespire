// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Mock user database
// const users = [{ email: "test@example.com", password: bcrypt.hashSync("password123", 10) }];

// // Login API
// app.post("/api/login", (req, res) => {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = users.find((u) => u.email === email);
//     if (!user) {
//         return res.status(400).json({ message: "User not found" });
//     }

//     // Validate password
//     const isMatch = bcrypt.compareSync(password, user.password);
//     if (!isMatch) {
//         return res.status(400).json({ message: "Invalid credentials" });
//     }

//     // Generate JWT Token
//     const token = jwt.sign({ email: user.email }, "secretkey", { expiresIn: "1h" });
//     res.json({ message: "Login successful", token });
// });

// // Start the server
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
