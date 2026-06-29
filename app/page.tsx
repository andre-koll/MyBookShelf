"use client";

import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic'
import Footer from "../components/layout/Footer"

const RandomBackground = dynamic(() => import('../components/layout/RandomBackground'), { ssr: false })

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-row gap-4 justify-center items-center h-screen">
        <RandomBackground />
        <div className="flex flex-col md:flex-row gap-4 justify-center z-10">
          <button
            className="bg-white border-2 border-black text-black py-3 px-12 rounded-full cursor-pointer hover:bg-neutral-300"
            onClick={() => router.push("/sign-up")}>
            Sign Up
          </button>
          <button
            className="bg-gray-900 border-2 border-white text-white py-3 px-12 rounded-full cursor-pointer hover:bg-white hover:text-black"
            onClick={() => router.push("/sign-in")}>
            Sign In
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>

  );
}
