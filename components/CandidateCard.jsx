import { FaArrowRightLong } from "react-icons/fa6";

export default function CandidateCard({
  candidateName,
  candidateImage,
  candidateRole,
  candidateExperience,
  candidateLocation,
  candidateResume,
}) {
  return (
    <div class="m-5">
      <div class="group mx-2 mt-3 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
        <a
          href="#"
          class="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
        >
          <div class="group relative h-16 w-16 overflow-hidden rounded-lg">
            <img
              src={candidateImage}
              alt=""
              class="h-full w-full object-cover text-gray-700"
            />
          </div>
        </a>
        <div class="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
          <h3 class="text-sm text-gray-600 pl-4">{candidateName}</h3>
          <a
            href="#"
            class="mb-3 overflow-hidden mt-3 pl-4 pr-7 text-lg font-semibold sm:text-xl"
          >
            {candidateRole}
          </a>

          <div class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
            <div class="pl-4 -mt-4">
              Experience:
              <span class="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                {candidateExperience}
              </span>
            </div>
          </div>
          <div class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
            <div class="pl-4 mt-0">
              Location:
              <span class="mt-3 ml-2 mr-3 rounded-full bg-blue-200 px-2 py-0.5 text-blue-900">
                {candidateLocation}
              </span>
            </div>
          </div>

          <button
            class="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded bg-gradient-to-r from-blue-500 
          via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
          shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 text-sm text-center me-2 mb-2"
          >
            View Resume →
          </button>
        </div>
      </div>
    </div>
  );
}
