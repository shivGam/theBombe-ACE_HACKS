// server.js

const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(
  express.urlencoded({ extended: true, limit: "50mb", parameterLimit: 50000 })
);
app.use(express.json({ limit: "50mb" }));
app.use;
const mongoose = require("mongoose");
const connectDB = require("./db");
const { Server } = require("socket.io");

connectDB();

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  },
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const User = mongoose.model("User", userSchema);

const chatMessageSchema = new mongoose.Schema({
  user: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Create the ChatMessage model using the schema
const ChatMessage = mongoose.model("ChatMessage", chatMessageSchema);

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Here you might generate and send a JWT token for authentication
    // For simplicity, we'll just send a success message for now
    res.json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Routes
app.get("/messages", async (req, res) => {
  try {
    const messages = await ChatMessage.find();
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/messages", async (req, res) => {
  try {
    const { user, message } = req.body;

    if (!user || !message) {
      return res.status(400).json({ error: "User and message are required" });
    }

    const chatMessage = new ChatMessage({
      user,
      message,
    });

    await chatMessage.save();

    res.status(201).json(chatMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

global.currentUsers = {};

io.on("connection", (socket) => {
  socket.on("addUser", (userId) => {
    currentUsers[userId] = socket.id;
    log(currentUsers[userId]);
  });

  socket.on("joinGroup", (groupId) => {
    socket.join(groupId);
    // log("joined groupId", groupId);
  });

  socket.on("sendMsg", async ({ data, recieverId, senderId }) => {
    const recieverSocketId = currentUsers[recieverId];

    if (recieverSocketId) {
      io.to(recieverSocketId).emit("recieveMsg", {
        message: {
          text: data.text,
          time_stamp: data.time_stamp,
          date_stamp: data.date_stamp,
        },
        senderId,
      });
      log("sent to", recieverSocketId);
    } else {
      io.in(recieverId).emit("recieveMsg", {
        message: {
          text: data.text,
          time_stamp: data.time_stamp,
          date_stamp: data.date_stamp,
        },
        senderId,
      });
      log("sent to group no", recieverId);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
