"use client";

import Image from "next/image";
import Navbar from "@/components/views/navbar";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import React, { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className=" w-full">
        <div className="flex items-center place-content-between my-8 mx-8 sm:my-8 sm:mx-32">
          <div className="w-36 h-8">
            <Image width={500} height={500} src={"/logo.webp"} alt="logo" />
          </div>
          <div className="hidden lg:flex  items-center">
            <Navbar />
          </div>
          <div className="hidden lg:flex border items-center rounded-lg h-8 relative ">
            <Search className="absolute p-1" />
            <Input
              type="search"
              className="w-80 pl-8 h-8 border-gray-500 "
              placeholder="What you looking for"
            />
          </div>
          <div className="hidden lg:flex bg-gray-100 rounded-full p-3 hover:scale-125 duration-300 transition-all relative">
            <ShoppingCart size={24} />
            <div
              className="bg-red-500 text-white text-xs rounded-full mx-2 px-1
             absolute top-0 right-0"
            >
              0
            </div>
          </div>
          {!toggle ? (
            <Menu className="lg:hidden" onClick={() => setToggle(true)} />
          ) : (
            <X className="lg:hidden" onClick={() => setToggle(false)} />
          )}
        </div>

        {/* Mobile */}
        {toggle && (
          <div className="flex flex-col justify-center items-center lg:hidden space-y-6">
            <div className="bg-gray-100 rounded-full p-3 hover:scale-125 duration-300 transition-all relative">
              <ShoppingCart size={24} />
              <div
                className="bg-red-500 text-white text-xs rounded-full mx-2 px-1
             absolute top-0 right-0"
              >
                0
              </div>
            </div>
            <div className="flex items-center">
              <Navbar mobile="flex flex-col" />
            </div>
            <div className="flex border items-center rounded-lg h-8 relative ">
              <Search className="absolute p-1" />
              <Input
                type="search"
                className="w-60 pl-8 h-8 border-gray-500 "
                placeholder="What you looking for"
              />
            </div>
          </div>
        )}
      </header>
    </>
  );
}
