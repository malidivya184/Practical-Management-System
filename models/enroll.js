import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
  practicalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Practical",
    required: true,
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  enrolledAt: {
    type: Date,
    default: Date.now,
  },
});

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
export default Enrollment;
