import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="w-full">
        <div className="flex items-center justify-center py-16 px-32">
          <div className="">
            <div className="w-44 h-8">
              <Image src={"/logo.webp"} width={500} height={500} alt="logo" />
            </div>
            <div>
              <p>
                Small, artisan label that offers a thoughtfully curated
                collection of high quality everyday essentials made.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>Company</div>
            <div>Support</div>
            <div>Contact</div>
          </div>
        </div>
      </footer>
    </>
  );
}
