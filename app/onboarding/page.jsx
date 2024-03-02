"use client";

import industryData from "@/data/industryData";
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

  return (
    <div className="-mt-2 mb-24 lg:mb-0 lg:min-h-screen items-center">
      <div className="bg-gradient-to-r from-sky-600 to-indigo-900">
        <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-36">
          <div className="text-center">
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              What best describes you?
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link onClick={() => setSelectedRole(0)} href="#rolePref">
                <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Job Seeker
                </button>
              </Link>
              <a
                onClick={() => setSelectedRole(1)}
                href="#2"
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Talent Recruiter
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="mb-24 lg:mb-0 lg:min-h-screen flex flex-col items-center pt-24">
        <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-36">
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

      <section className="mb-24 lg:mb-0 lg:min-h-screen flex flex-col items-center pt-10 bg-gradient-to-r from-sky-600 to-indigo-900">
        <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-32">
          <h1 className="text-xl font-bold tracking-tight text-white sm:text-6xl mb-10">
            Level of Experience
          </h1>
          <div className="mt-3 flex items-center justify-center gap-x-6 mb-10">
            <input
              type="number"
              placeholder="Years of Experience"
              className="rounded-md bg-white border px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mt-3 flex items-center justify-center">
            <Link href="/browse/joblistings">
              <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Browse Jobs
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
