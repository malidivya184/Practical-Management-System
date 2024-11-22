import User from "../models/User.js"

export const createAdmin=async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = new User({
        name,
        email,
        password,
        role: "Admin",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "User created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  };

  export const createTeacher=async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = new User({
        name,
        email,
        password,
        role: "Teacher",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "Teacher created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  };

  export const createStudent=async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = new User({
        name,
        email,
        password,
        role: "Student",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "Student created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  };

  export const getAllUsers=async(req,res)=>{
    try {
      const getusers=await User.find()
      res.json({
        getusers
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }

  export const getAllAdmins = async (req, res) => {
    try {
      const admins = await User.find({ role: "Admin" });
      res.json({ admins });
    } catch (error) {
      res.status(500).json({ error: "Cannot fetch Admins" });
      console.log(error);
    }
  };
  
  // Get a list of all Teachers (Admin-only access)
  export const getAllTeachers = async (req, res) => {
    try {
      const teachers = await User.find({ role: "Teacher" });
      res.json({ teachers });
    } catch (error) {
      res.status(500).json({ error: "Cannot fetch Teachers" });
      console.log(error);
    }
  };
  
  // Get a list of all Students (Admin-only access)
  export const getAllStudents = async (req, res) => {
    try {
      const students = await User.find({ role: "Student" });
      res.json({ students });
    } catch (error) {
      res.status(500).json({ error: "Cannot fetch Students" });
      console.log(error);
    }
  };
  