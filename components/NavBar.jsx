"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="bg-gradient-to-r from-sky-800 to-white border-gray-200 border-b dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            width={32}
            height={32}
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
            Talent Hub
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
        </button>

        <div
          className="hidden w-full md:block md:w-auto mt-1"
          id="navbar-default"
        >
          <ul
            className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 
          rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            {session?.user ? (
              <div className="flex gap-3 md:gap-5">
                <Link href="/browse/joblistings/create" className="black_btn">
                  Create Job Listing
                </Link>

                <button
                  type="button"
                  onClick={signOut}
                  className="text-white bg-gradient-to-r from-cyan-800 via-cyan-900 to-cyan-600 
                hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg 
                shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Sign Out
                </button>

                <Link href="/profile">
                  <Image
                    src={session?.user.image}
                    width={37}
                    height={37}
                    className="rounded-full"
                    alt="profile"
                  />
                </Link>
              </div>
            ) : (
              <>
                <div className="bg-transparent">
                  {providers &&
                    Object.values(providers).map((provider) => (
                      <button
                        type="button"
                        key={provider.name}
                        onClick={() => {
                          signIn(provider.id);
                        }}
                        className="text-white bg-gradient-to-r from-cyan-800 via-cyan-900 to-cyan-600 
                      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg 
                      shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        Sign in
                      </button>
                    ))}
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
