import Image from "next/image";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="w-full">
        <div className="flex items-center justify-center mx-8 sm:mx-24 xl:mx-32 my-16 space-x-24">
          <div className="h-56 space-y-8">
            <div className="w-44 h-8">
              <Image src={"/logo.webp"} width={500} height={500} alt="logo" />
            </div>
            <div>
              <p className="text-base text-gray-500">
                Small, artisan label that offers a thoughtfully curated
                collection of high quality everyday essentials made.
              </p>
            </div>
            <div className="flex space-x-4 h-12">
              <div className="bg-gray-100 p-4 rounded-lg">
                <FaTwitter size={20} />
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <FaFacebookF size={20} />
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <FaLinkedinIn size={20} />
              </div>
            </div>
          </div>

          <div className="flex h-56 text-gray-500">
            <div className=" w-60 space-y-5">
              <h3 className="font-bold text-lg text-gray-500">Company</h3>
              <div className="space-y-3">
                <p className="">About</p>
                <p className="">Terms of Use</p>
                <p className="">Privacy Policy</p>
                <p className="">How it works</p>
                <p className="">Contact Us</p>
              </div>
            </div>

            <div className="w-60 space-y-5">
              <h3 className="font-bold text-lg text-gray-500">Support</h3>
              <div className="space-y-3">
                <p className="">Support Career</p>
                <p className="">24h Service</p>
                <p className="">Quick Chat</p>
              </div>
            </div>
            <div className="w-60 space-y-5">
              <h3 className="font-bold text-lg text-gray-500">Contact</h3>
              <div className="space-y-3">
                <p className="">Whatsapp</p>
                <p className="">Support 24h</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
