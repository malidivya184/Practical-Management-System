import subjectModel from "../models/Subject.js";

export const createSubject=async (req, res) => {
    try {
      const { name, code ,createdBy } = req.body;
  
      const subjectObj = new subjectModel({
        name,
        code,
        createdBy
      });
  
      const savedsubjectObj = await subjectObj.save();
  
      res.json({
        savedsubjectObj ,
        message: "Subject created successfully"
      });
  
    } catch (error) {
        console.log(error);
        
      res.json({
        error: "Error occured",
      });
  
    }
  };

  export const getSubjects=async(req,res)=>{
    try {
      const getSubjects=await subjectModel.find()
      res.json({
        getSubjects
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }