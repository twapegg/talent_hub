export default function JobCard({
  jobPosition,
  jobCompany,
  jobSalary,
  jobLocation,
  jobExperience,
  jobDescription,
}) {
  return (
    <div className="m-5">
      <div className="group mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
        <div class="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
          <h3 class="text-sm text-gray-600">{jobCompany}</h3>
          <a
            href="#"
            class="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
          >
            {jobPosition}
          </a>
          <p class="overflow-hidden pr-7 text-sm">{jobDescription}</p>

          <div class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
            <div class="">
              Experience:
              <span class="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                {jobExperience}
              </span>
            </div>
            <div class="">
              Salary:
              <span class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                {jobSalary}
              </span>
            </div>
            <div class="">
              Location:
              <span class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                {jobLocation}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
