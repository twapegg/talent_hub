"use client";

import industryData from "@/data/industryData";
import { Yesteryear } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

export default function page() {
  const [selectedField, setSelectedField] = useState("");

  // 0 -> job seeker
  // 1 -> talent recruiter
  const [selectedRole, setSelectedRole] = useState(0);

  const handleFieldChange = (event) => {
    setSelectedField(event.target.value);
  };

  const [selectedExperience, setSelectedExperience] = useState("");

  const handleExperienceChange = (event) => {
    setSelectedExperience(event.target.value);
  };

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (selectedField && selectedRole && selectedExperience) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [selectedField, selectedRole, selectedExperience]);

  return (
    <div className="mb-24 border-red-500 border lg:mb-0 lg:min-h-screen items-center pt-24">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            What best describes you?
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link onClick={() => setSelectedRole(0)} href="#rolePref">
              <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Job Seeker
              </button>
            </Link>
            <a
              onClick={() => setSelectedRole(1)}
              href="#2"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Talent Recruiter
            </a>
          </div>
        </div>
      </div>

      {selectedRole ? (
        <section className="mb-24 border-red-500 border lg:mb-0 lg:min-h-screen flex flex-col items-center pt-24">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {!selectedRole ? "Job" : "Candidate"} Preferences
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <select
                id="#rolePref"
                value={selectedField}
                onChange={handleFieldChange}
                className="rounded-md bg-white border px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select an industry</option>
                {industryData.map((field) => (
                  <option key={field} value={field}>
                    {field}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>
      ) : null}

      {selectedField ? (
        <section className="mb-24 border-red-500 border lg:mb-0 lg:min-h-screen flex flex-col items-center pt-24">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Level of Experience
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <input
                type="number"
                placeholder="Years of Experience"
                className="rounded-md bg-white border px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <Link href="/browse/joblistings">
            <button
              disabled={isDisabled}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Browse Jobs
            </button>
          </Link>
        </section>
      ) : null}
    </div>
  );
}
