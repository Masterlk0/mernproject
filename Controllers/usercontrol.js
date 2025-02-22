// Sample User Controller Functions

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
    const { name, email, age } = req.body;
  
    try {
      const newUser = new User({
        name,
        email,
        age,
      });
  
      await newUser.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ message: "Error adding user", error: err });
    }
  };
  