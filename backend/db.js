const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://yamkarab10:Glitch404@glitch404.qlnc9bz.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    let gfs;
    conn.connection.once("open", () => {
      gfs = new mongoose.mongo.GridFSBucket(conn.connection.db, {
        bucketName: "uploads/",
      });
    });

    console.log(`MongoDB connected : ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
