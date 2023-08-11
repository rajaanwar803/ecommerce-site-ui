import Image from "next/image";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="w-full">
        <div className="flex flex-col lg:flex-row mx-8 sm:mx-24 xl:mx-32 my-16 space-x-0 lg:space-x-24 space-y-8 lg:space-y-0">
          {/* Logo Div */}
          <div className="h-56 space-y-8">
            {/* Logo */}
            <div className="w-44 h-8">
              <Link href={"/"}>
                <Image src={"/logo.webp"} width={500} height={500} alt="logo" />
              </Link>
            </div>
            <div>
              <p className="text-base text-gray-500">
                Small, artisan label that offers a thoughtfully curated
                collection of high quality everyday essentials made.
              </p>
            </div>

            {/* Social Links */}
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

          {/* <div className="flex flex-col lg:flex-row h-56 text-gray-500 space-y-8 lg:space-y-0"> */}

          {/* Company Links */}
          <div className="w-60 space-y-5 text-gray-500">
            <h3 className="font-bold text-xl">Company</h3>
            <div className="space-y-3 ">
              <p className="">About</p>
              <p className="">Terms of Use</p>
              <p className="">Privacy Policy</p>
              <p className="">How it works</p>
              <p className="">Contact Us</p>
            </div>
          </div>

          {/* Support Links */}
          <div className="w-60 space-y-5 text-gray-500">
            <h3 className="font-bold text-xl">Support</h3>
            <div className="space-y-3">
              <p className="">Support Career</p>
              <p className="">24h Service</p>
              <p className="">Quick Chat</p>
            </div>
          </div>

          {/* Contact Links */}
          <div className="w-60 space-y-5 text-gray-500">
            <h3 className="font-bold text-xl">Contact</h3>
            <div className="space-y-3">
              <p className="">Whatsapp</p>
              <p className="">Support 24h</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
