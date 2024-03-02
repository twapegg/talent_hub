import JobCard from "@/components/JobCard";
import React from "react";

export default function page() {
  const mockData = [
    {
      jobPosition: "Frontend Developer",
      jobCompany: "Google",
      jobSalary: "£40,000",
      jobLocation: "London",
      jobExperience: "Mid-Level",
      jobDescription:
        "We are looking for a frontend developer to join our team. You will be working on a range of projects and will be responsible for the development of new features and the maintenance of our existing codebase.",
    },
    {
      jobPosition: "Backend Developer",
      jobCompany: "Facebook",
      jobSalary: "£50,000",
      jobLocation: "Manchester",
      jobExperience: "Senior",
      jobDescription:
        "We are looking for a backend developer to join our team. You will be working on a range of projects and will be responsible for the development of new features and the maintenance of our existing codebase.",
    },
    {
      jobPosition: "Full Stack Developer",
      jobCompany: "Amazon",
      jobSalary: "£60,000",
      jobLocation: "Birmingham",
      jobExperience: "Junior",
      jobDescription:
        "We are looking for a full stack developer to join our team. You will be working on a range of projects and will be responsible for the development of new features and the maintenance of our existing codebase.",
    },
  ];

  return (
    <div className="flex">
      <div className="grid grid-cols-2 w-9/12">
        {mockData.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
      <div className="flex m-20 p-10 bg-slate-500">filter</div>
    </div>
  );
}
