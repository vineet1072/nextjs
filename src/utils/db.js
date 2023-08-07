import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongo coinnection succsess");
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
