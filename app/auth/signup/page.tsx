"use client"

import { redirect } from "next/navigation"

export default async function signup() {
    return <div>
    <div className="flex items-center bg-slate-100 h-screen justify-center">
      <div className="border rounded-xl w-96 border-slate-200 bg-white py-10 px-5 gap-4 ">
        <div className="flex pb-6 justify-center font-serif text-2xl font-bold">
          signup page
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-sm text-gray-600 pb-1 font-semibold border-white">
              Enter username
            </p>
            <input
              className="bg-white border  px-3 py-1.5 w-full border-gray-300 rounded-md"
              type="text"
              placeholder="deepak"
            />
          </div>
          <div>
            <p className="text-sm text-gray-600 pb-1 font-semibold border-white">
              Enter password
            </p>
            <input
              className="bg-white border  px-3 py-1.5 w-full border-gray-300 rounded-md"
              type="text"
              placeholder="*********"
            />
          </div>
          <div>
            <p className="text-sm text-gray-600 pb-1 font-semibold border-white">
              Enter email
            </p>
            <input
              className="bg-white border  px-3 py-1.5 w-full border-gray-300 rounded-md"
              type="text"
              placeholder="deepak@gmail.com"
            />
          </div>
          <button className="bg-blue-500 w-full text-white py-1.5 rounded text-md cursor-pointer"> 
            Sign Up
          </button>
        </div>
        <div className="text-gray-600 mt-2 flex justify-center flex-row gap-2">
            already have an account <span className="text-blue-600 cursor-pointer" onClick={() => redirect("/auth/signin")}> Sign in</span>
        </div>
      </div>
    </div>
  </div>
}