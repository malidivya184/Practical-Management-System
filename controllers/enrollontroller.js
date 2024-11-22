import practicalModel from '../models/Practical.js';  
import User from '../models/User.js';  // Assuming student data is in the User model

export const enrollInPractical = async (req, res) => {
  try {
    const { practicalId, studentId } = req.body;  // Extract practicalId and studentId from the request body
    
    // Find the practical by ID
    const practical = await practicalModel.findById(practicalId);
    if (!practical) {
      return res.status(404).json({ error: 'Practical not found' });
    }

    // Check if the student is already enrolled
    if (practical.enrolledStudents.includes(studentId)) {
      return res.status(400).json({ error: 'Student is already enrolled in this practical' });
    }

    // Add student ID to the enrolledStudents array
    practical.enrolledStudents.push(studentId);

    // Save the updated practical document
    await practical.save();

    // Optionally, you can fetch the updated practical (with populated students) if needed
    const updatedPractical = await practicalModel.findById(practicalId).populate('enrolledStudents', 'name email');

    res.status(200).json({
      message: 'Enrolled successfully',
      practical: updatedPractical,  // Send back the updated practical data
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error enrolling student in practical', message: error.message });
  }
};
