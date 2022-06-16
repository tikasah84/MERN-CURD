import express from "express";
import User from "../schema/user-schema.js";
const router = express.Router();

router.post("/add", async (request, response) => {
  const user = request.body;
  const newUser = new User(user);

  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (err) {
    response.status(409).json({ message: err.message });
  }
});

router.get("/all", async (request, response) => {
  try {
    const users = await User.find({});
    response.status(200).json(users);
    // console.log(users);
  } catch (error) {
    response.status(409).json({ message: err.message });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const users = await User.find({ _id: request.params.id });
    response.status(200).json(users);
    // console.log(users);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
});

router.post("/:id", async (request, response) => {
  // console.log(request);
  let user = request.body;
  const editUser = new User(user);
  // console.log(request.params);

  try {
    await User.updateOne({ _id: request.params.id }, editUser);
    response.status(201).json(editUser);
  } catch (err) {
    response.status(409).json({ message: err.message });
  }
});
router.delete("/:id", async (request, response) => {
  try {
    await User.findOneAndDelete({ _id: request.params.id });
    response.status(200).json({ message: "Deleted " });
  } catch (error) {
    console.log("Error while calling add user api", error);
  }
});
export default router;
