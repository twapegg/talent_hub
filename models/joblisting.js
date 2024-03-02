import { Schema, model, models } from "mongoose";

const jobListingSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required!"],
  },
  company: {
    type: String,
    required: [true, "Company is required!"],
  },
  location: {
    type: String,
    required: [true, "Location is required!"],
  },
  salary: {
    type: Number,
    required: [true, "Salary is required!"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
  },
  industry: {
    type: String,
    required: [true, "Industry is required!"],
  },
});

export default models.JobListing || model("JobListing", jobListingSchema);
