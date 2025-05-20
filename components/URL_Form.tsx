"use client";

import axios from "axios";
import Link from "next/link";
import { useRef, useState } from "react";
import Copy_URL from "./Copy_URL";

export default function URL_Form() {

    const urlRef = useRef<HTMLInputElement | null>(null);
    const [isCopied, setIsCopied] = useState(false)
    const [shortURL, setShortURL] = useState<string>();

    async function submit() {
        const response = await axios.post("http://localhost:3000/api/v1/create", {
            longURL: urlRef.current?.value,
        });
        setShortURL(response.data.shortURL);
    }

    function handleCopy() {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false)
        }, 2000);
    }

    return (
      <div>
        <div className="flex w-full justify-center text-center">
          <h1 className="text-2xl flex items-center font-bold ">
            URL Shortner
          </h1>
        </div>
        <div className="flex flex-col gap-4 pt-6">
          <div className="flex flex-col">
            <p className="text-sm text-gray-600 pb-1 font-semibold">
              Enter you URL
            </p>
            <input
              ref={urlRef}
              className="bg-blue-100 px-3 py-1.5 w-full border-gray-100 rounded-md"
              type="text"
              placeholder="https://www.google.com"
            />
          </div>
          <button
            onClick={() => submit()}
            className="bg-blue-500 w-full text-white py-1.5  rounded text-md"
          >
            Shorten URL
          </button>
          {shortURL && (
            <div className="border border-slate-300 rounded flex items-center justify-between">
              <div className="px-2">
                <Link href={shortURL} target="_blank" rel="noopener noreferrer">
                  {shortURL}
                </Link>
              </div>
              <div
                className={`transition-colors duration-20 borderl-1 ${isCopied ? "bg-green-500" : "bg-slate-300"}`}
              >
                <button
                  className="py-2 px-4 cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(shortURL);
                    handleCopy();
                  }}
                >
                  {isCopied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}