
import practicalModel from '../models/Practical.js';  
import Subject from '../models/Subject.js'

   
export const createPractical = async (req, res) => {

    try {

        const {subjectId, title, description,createdBy } = req.body;
        const subjectinfo = await Subject.findOne({ name: subjectId });

        const practicalobj = new practicalModel({
            subjectId:subjectinfo.id,
            title,
            description,
            createdBy
        });

        const savedpracticalObj = await practicalobj.save();

        res.json({

            savedpracticalObj,
            message: "Subject created successfully"
        });

    } catch (error) {

        console.log(error);

        res.json({

            error: "Error occured",
        });

    }
}
   
export const getAllPracticals=async(req,res)=>{  
    
        try {
            const getPracticals=await practicalModel.find()
            res.json({
                getPracticals            })
          } catch (error) {
            res.json({
              error:"Cannot fetch data"
            })
            console.log(error)
          }
};


// export const enrollInPractical = async (req, res) => {
//     try {
//         const { practicalId } = req.body;

//         const practical = await Practical.findById(practicalId);
//         if (!practical) {
//             return res.status(404).json({ error: 'Practical not found' });
//         }

//         // Prevent duplicate enrollment
//         if (practical.enrolledStudents.includes(req.user.id)) {
//             return res.status(400).json({ error: 'Already enrolled' });
//         }

//         practical.enrolledStudents.push(req.user.id);
//         await practical.save();

//         res.status(200).json({ message: 'Enrolled successfully', practical });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
