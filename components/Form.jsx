import React from "react";

// form for creating a job listing

export default function Form() {
  const [submitted, setSubmitted] = useState(false);

  const [jobListing, setJobListing] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    industry: "",
  });

  const createJobListing = async (e) => {
    e.preventDefault();

    // call the API to create a new job listing
    const response = await fetch("/api/joblisting/new", {
      method: "POST",
      body: JSON.stringify(jobListing),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // if the response is not okay, throw an error
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // return the response
    return response;
  };
  return (
    <div>
      <form className="max-w-md mx-auto">
        <label htmlFor="title" className="block mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={jobListing.title}
          onChange={(e) =>
            setJobListing({ ...jobListing, title: e.target.value })
          }
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
        <label htmlFor="company" className="block mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          value={jobListing.company}
          onChange={(e) =>
            setJobListing({ ...jobListing, company: e.target.value })
          }
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
        <label htmlFor="location" className="block mb-2">
          Location
        </label>
        <input
          type="text"
          id="location"
          value={jobListing.location}
          onChange={(e) =>
            setJobListing({ ...jobListing, location: e.target.value })
          }
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
        <label htmlFor="salary" className="block mb-2">
          Salary
        </label>
        <input
          type="text"
          id="salary"
          value={jobListing.salary}
          onChange={(e) =>
            setJobListing({ ...jobListing, salary: e.target.value })
          }
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
        <label htmlFor="description" className="block mb-2">
          Description
        </label>
        <textarea
          id="description"
          value={jobListing.description}
          onChange={(e) =>
            setJobListing({ ...jobListing, description: e.target.value })
          }
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
        <label htmlFor="industry" className="block mb-2">
          Industry
        </label>
        <input
          type="text"
          id="industry"
          value={jobListing.industry}
          onChange={(e) =>
            setJobListing({ ...jobListing, industry: e.target.value })
          }
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <button
          onClick={createJobListing}
          disabled={submitted}
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
