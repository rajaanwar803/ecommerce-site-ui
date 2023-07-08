import Image from "next/image";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="w-full">
        <div className="flex items-center justify-center py-16 px-32 space-x-24">
          <div className="w-80 h-56 space-y-8">
            <div className="w-44 h-8">
              <Image src={"/logo.webp"} width={500} height={500} alt="logo" />
            </div>
            <div>
              <p className="text-base text-gray-500">
                Small, artisan label that offers a thoughtfully curated
                collection of high quality everyday essentials made.
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <FaTwitter />
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <FaFacebookF />
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          <div className="flex h-56  text-gray-500">
            <div className="pr-32 space-y-5">
              <h3 className="font-bold text-lg text-gray-500">Company</h3>
              <div>
                <p className="">About</p>
              </div>
            </div>

            <div className="pr-32 space-y-5">
              <h3 className="font-bold text-lg text-gray-500">Support</h3>
              <div className="space-y-2">
                <p className="">Support Career</p>
                <p className="">24h Service</p>
                <p className="">Quick Chat</p>
              </div>
            </div>
            <div className="pr-32 space-y-5">
              <h3 className="font-bold text-lg text-gray-500">Contact</h3>
              <div>
                <p className="">Whatsapp</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
