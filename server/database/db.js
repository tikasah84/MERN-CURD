import mongoose from "mongoose";
const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-nzu09ee-shard-00-00.hxhmnon.mongodb.net:27017,ac-nzu09ee-shard-00-01.hxhmnon.mongodb.net:27017,ac-nzu09ee-shard-00-02.hxhmnon.mongodb.net:27017/?ssl=true&replicaSet=atlas-2p43f8-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Database connected`);
  } catch (error) {
    console.log("Error while connection with the database", error);
  }
};
export default Connection;
