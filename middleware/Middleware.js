import UserModel from "../models/User.js"

export const isAdmin = async (req, res, next) => {
  try {
    const { email } = req.body;

    const userInfo = await UserModel.findOne({ email })

    if(userInfo && userInfo.role=="Admin")
    {
        next();
        //proceed
    }
    else{
        res.status(403).json({
            message:"Access Denied, only Admin can access"
        })
    }

  } catch (error) {
    res.status(500).json({
        message:"Internal server error"
    })
  }
};


// export const isTeacher = async (req, res, next) => {
//   try {
//     const { email } = req.body;

//     const userInfo = await UserModel.findOne({ email });

//     if (userInfo && userInfo.role === "Teacher") {
//       next(); // Proceed to the next middleware or route handler
//     } else {
//       res.status(403).json({
//         message: "Access Denied, only Teachers can access",
//       });
//     }
//   } catch (error) {
//     res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// };
export const isTeacher = async(req, res, next) => {
  try {
      const {email}=req.body;

      const userInfo =await User.findOne({email})

      if(userInfo && userInfo.role=="Teacher")
      {
          next();
      }
      else{
          res.status(403).json({
              message:"Access denied. Only Teachers can access this route."
          })
      }
  } catch (error) {
      res.status(500).json({
          message:"Internal Server Error"
      })   
  }
};


export const isAdminOrTeacher = async (req, res, next) => {
  try {
      const email = req.body['email'];

      if (!email) {
          return res.status(400).json({
              message: "Email is required"
          });
      }

      const userInfo = await UserModel.findOne({ email });

      if (userInfo && (userInfo.role === "Admin" || userInfo.role === "Teacher")) {
          next(); 
      } else {
          res.status(403).json({
              message: "Access Denied, only Admin or Teacher can access..."
          });
      }
  } catch (error) {
      console.error("Error in isAdminOrTeacher middleware:", error);
      res.status(500).json({
          message: "Internal server error"
      });
  }
};