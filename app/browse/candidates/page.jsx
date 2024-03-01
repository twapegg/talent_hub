import CandidateCard from "@/components/CandidateCard";
import React from "react";

export default function page() {
  const mockData = [
    {
      candidateName: "John Doe",
      candidateImage: "https://picsum.photos/id/237/200/300",
      candidateRole: "Software Developer",
      candidateExperience: "Mid-Level",
      candidateResume: "https://www.google.com",
    },
    {
      candidateName: "John Smith",
      candidateImage: "https://picsum.photos/id/2/200/300",
      candidateRole: "Software Developer",
      candidateExperience: "Mid-Level",
      candidateResume: "https://www.google.com",
    },
    {
      candidateName: "Jane Doe",
      candidateImage: "https://picsum.photos/id/135/200/300",
      candidateRole: "Software Developer",
      candidateExperience: "Mid-Level",
      candidateResume: "https://www.google.com",
    },
  ];

  return (
    <div>
      {mockData.map((candidate, index) => (
        <CandidateCard key={index} {...candidate} />
      ))}
    </div>
  );
}
