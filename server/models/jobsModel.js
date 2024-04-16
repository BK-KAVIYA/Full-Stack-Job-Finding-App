import mongoose, { Schema } from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    _id: { type: String, required: [true, "id is required"] },
    company: [{ name: { type: String }, location: { type: String },email: { type: String }, contact: { type: String }, about: { type: String },profileUrl: { type: String }}],
    jobTitle: { type: String, required: [true, "Job Title is required"] },
    jobType: { type: String, required: [true, "Job Type is required"] },
    location: { type: String, required: [true, "Location is required"] },
    salary: { type: String, required: [true, "Salary is required"] },
    vacancies: { type: Number },
    experience: { type: Number, default: 0 },
    detail: [{ desc: { type: String }, requirements: { type: String } }],
    application: [{ type: Schema.Types.ObjectId, ref: "Users" }],
  },
  { timestamps: true }
);

const Jobs = mongoose.model("Jobs", jobSchema);

export default Jobs;
