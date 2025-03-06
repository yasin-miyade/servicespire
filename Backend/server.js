import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import cors from "cors"; // ✅ Import CORS

// Load environment variables
dotenv.config();

const app = express();

// ✅ Enable CORS before routes
app.use(
  cors({
    origin: "http://localhost:5173", // React frontend
    credentials: true, // Allow cookies & sessions
  })
);

// ✅ Session setup (only once)
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true, // ✅ Change from false to true
    cookie: {
      secure: false, // Change to true if using HTTPS
      httpOnly: true,
      sameSite: "lax",
    },
  })
);

// ✅ Initialize Passport
app.use(passport.initialize());
app.use(passport.session()); // ✅ Removed duplicate session config

// Serialize & Deserialize user
passport.serializeUser((user, done) => {
    console.log("Serializing user:", user);
    done(null, user); // ✅ Store the full user object in session
  });
  
  passport.deserializeUser((user, done) => {
    console.log("Deserializing user:", user);
    done(null, user); // ✅ Return full user data
  });
  

// Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

// Google Authentication Routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    console.log("🚀 User logged in:", req.user); // ✅ Debug log
    console.log("📂 Session after login:", req.session); // ✅ Debug log
    res.redirect("http://localhost:5173/header");
  }
);

// Profile Route
app.get("/profile", (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not logged in" });
  }
  console.log("User Profile Data Sent:", req.user); // Debugging
  res.json({
    displayName: req.user.displayName,
    email: req.user.emails?.[0]?.value || req.user.email, // Ensure email is included
    photos: req.user.photos,
  });
});





// ✅ Logout Route (Proper Logout Handling)
app.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err); // Handle error if any
    req.session.destroy((err) => {
      if (err) console.error("Session destruction error:", err);
      res.redirect("http://localhost:5173/"); // Redirect to React frontend
    });
  });
});

// Root Route
app.get("/", (req, res) => {
  res.send("Server is running! 🚀");
});

// ✅ Debug Route: Check Session & User Data
app.get("/check-session", (req, res) => {
  console.log("Session Data:", req.session);
  console.log("User Data:", req.user);
  res.json({ session: req.session, user: req.user || null });
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));