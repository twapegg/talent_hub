"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Hero() {
  const router = useRouter();

  const { data: session } = useSession();

  const closeModal = (e) => {
    e.preventDefault();
    setOpenModal(false);
  };

  return (
    <>
      {!session?.user ? (
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-36">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Welcome to Talent Hub!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                TalentHub: a place where quick-witted individuals meet the
                ever-fast pace of the corporate world.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="relative isolate px-6 lg:px-8">
          <div
            class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>
          <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-30">
            <div class="text-center">
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                What best describes you?
              </h1>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <button
                  data-modal-target="select-modal"
                  data-modal-toggle="select-modal"
                  href="#"
                  class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Job Seeker
                </button>
                <a
                  href="#"
                  class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Hiring Manager
                </a>
              </div>
            </div>
          </div>
          <div
            class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          ></div>
        </div>
      )}
      <div
        id="select-modal"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Open positions
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="select-modal"
              >
                Get started
              </button>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
