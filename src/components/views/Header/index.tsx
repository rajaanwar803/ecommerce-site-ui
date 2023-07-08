import Image from "next/image";
import Navbar from "@/components/views/Navbar";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <>
      <header className=" w-full mt-8">
        <div className="flex items-center place-content-between mx-28">
          <div className="w-36 ">
            <Image width={500} height={500} src={"/logo.webp"} alt="logo" />
          </div>
          <div className="flex items-center">
            <Navbar />
          </div>
          <div className="flex border items-center rounded-full h-6 relative">
            <Search className="absolute p-1" />
            <Input
              type="search"
              className="w-80 pl-8 h-6 border-none"
              placeholder="What you looking for"
            />
          </div>
          <div className="bg-gray-100 rounded-full w-10 h-10 flex justify-center items-center">
            <ShoppingCart />
          </div>
        </div>
      </header>
    </>
  );
}
