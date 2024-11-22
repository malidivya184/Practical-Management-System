import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  

  code: {
    type: String,
    required: true,
    unique: true,
  },

  createdBy: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Practical",
    required: true,
  },],
});

const subjectModel = mongoose.model("Subject", subjectSchema);

export default subjectModel ;
