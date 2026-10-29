"use client";

import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();

  function handleLogin() {
    router.push("/week07/login");
  }

  return (
    <button
      onClick={handleLogin}
      className="m-2 flex items-center gap-2 rounded-full bg-green-600 px-6 py-2.5 font-medium text-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-green-700 hover:shadow-lg active:scale-95"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
      </svg>
      Login
    </button>
  );
}