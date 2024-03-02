import CandidateCard from "@/components/CandidateCard";
import React from "react";

export default function page() {
  const mockData = [
    {
      candidateName: "John Doe",
      candidateImage: "https://picsum.photos/id/237/200/300",
      candidateRole: "Software Developer",
      candidateExperience: "Mid-Level",
      candidateLocation: "Makati City, Philippines",
      candidateResume: "https://www.google.com",
    },
    {
      candidateName: "John Smith",
      candidateImage: "https://picsum.photos/id/2/200/300",
      candidateRole: "Data Engineer",
      candidateExperience: "Mid-Level",
      candidateLocation: "Dumaguete City, Philippines",
      candidateResume: "https://www.google.com",
    },
    {
      candidateName: "Jane Doe",
      candidateImage: "https://picsum.photos/id/135/200/300",
      candidateRole: "Project Manager",
      candidateExperience: "Mid-Level",
      candidateLocation: "Cebu City, Philippines",
      candidateResume: "https://www.google.com",
    },
  ];

  return (
    <>
      <div className="flex">
        <div className="grid grid-cols-2 w-9/12">
          {mockData.map((candidate, index) => (
            <CandidateCard key={index} {...candidate} />
          ))}
        </div>
        <div className="flex m-20 p-10">FILTER</div>
      </div>
    </>
  );
}
