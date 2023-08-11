import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="flex mx-8 sm:mx-24 xl:mx-32 my-4 sm:my-8 xl:my-16 relative gap-16 ">
        <div className="w-full xl:w-3/5 pt-12 pb-4  space-y-10">
          <div className="space-y-10">
            <Badge
              variant={"secondary"}
              className="h-10 w-28 text-base font-semibold text-blue-700 flex justify-center"
            >
              Sale 70%
            </Badge>
            <div>
              <h1 className="text-5xl sm:text-5xl font-bold tracking-wide">
                An Industrial Take on Streetwear
              </h1>
            </div>
            <div>
              <p>
                Anyone can beat you but no one can beat your outfit as long as
                you wear Dine outfits.
              </p>
            </div>
            <div>
              <Button className="h-14 flex place-content-between text-base gap-2">
                <ShoppingCart />
                Start Shopping
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap place-content-between space-y-2 lg:space-y-0">
            <div className="w-1/2">
              <Image
                width={100}
                height={100}
                src={"/Featured1.webp"}
                alt={"featured 1"}
              />
            </div>
            <div className="w-1/2">
              <Image
                width={100}
                height={100}
                src={"/Featured2.webp"}
                alt={"featured 2"}
              />
            </div>
            <div className="w-1/2">
              <Image
                width={100}
                height={100}
                src={"/Featured3.webp"}
                alt={"featured 3"}
              />
            </div>
            <div className="w-1/2">
              <Image
                width={100}
                height={100}
                src={"/Featured4.webp"}
                alt={"featured 4"}
              />
            </div>
          </div>
        </div>

        {/* Header Picture */}
        <div className="hidden xl:block">
          <div className="w-[600px] h-[600px] bg-[#ffece3] rounded-full ">
            <div className="absolute w-[680px] h-[650px] top-[-30px] right-[-50px]">
              <Image
                width={680}
                height={650}
                src={"/header.webp"}
                alt="header image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
