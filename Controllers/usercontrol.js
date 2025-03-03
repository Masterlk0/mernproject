const User = require("../Model/usermodel"); 

// Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err });
  }
};

// Add a New User
exports.addusers = async (req, res) => {
  const { name, email, age, address } = req.body;

  if (!name || !email || !age || !address) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newUser = new User({
      name,
      email,
      age,
      address,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Error adding user", error: err });
  }
};

// Get User by ID
exports.getById = async (req, res,next) => {
  const id = req.params.id;

  let user;

  try {
    user = await User.findById(id); // Use the correct model name (User)
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error fetching user", error: err });
  }

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json(user);
};

//update user details
const updateUser = async(req,res,next)=>{

  const id = req.params.id;
  const { name, gmail, age, address } = req.body;

  let users;

  try{
    users=await User.findByIdAndUpdate(id,{
      name:name,
      gmail:gmail,
      age:age,
      address:address



    });
    users = await users.save();
  }
  catch(err){
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "unable to update" });
  }

  return res.status(200).json(users);

};

//delete user
const deleteUser = async(req,res,next)=>{

  const id = req.params.id;

  let user;

  try{
    user=await User.findByIdAndDelete(id)
      



    
  }
  catch(err){
    console.log(err);
  }
  if (!user) {
    return res.status(404).json({ message: " unable to delete" });
  }

  return res.status(200).json(user);

};


exports.updateUser=updateUser;
exports.deleteUser=deleteUser;
