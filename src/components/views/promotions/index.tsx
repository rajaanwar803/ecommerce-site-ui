import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Promotions() {
  return (
    <>
      <section className="mx-8 sm:mx-24 xl:mx-32 my-16 py-16">
        <div className="space-y-4 mb-8">
          <span className="block text-center text-xs uppercase font-bold text-blue-600 tracking-widest">
            Promotions
          </span>
          <h2 className="text-center font-bold uppercase text-3xl">
            Our Promotions Events
          </h2>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-4 grid-rows-2 gap-6">
          {/* Event 1 */}
          <div className="col-span-2 ">
            <Card className="bg-gray-300 h-52">
              <div className="flex">
                <CardHeader className="flex justify-center items-center">
                  <CardTitle className="text-3xl font-bold uppercase tracking-wide">
                    Get up to{" "}
                    <span className="text-4xl font-extrabold">60%</span>
                  </CardTitle>
                  <CardDescription className="text-black text-lg">
                    For the summer season
                  </CardDescription>
                </CardHeader>

                {/* Image */}
                <CardContent className="h-52">
                  <Image width={200} height={200} src={"/"} alt="event1" />
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Event 2 */}
          <div className="col-span-1 row-span-2">
            <Card className="h-full bg-orange-100">
              <CardHeader>
                <CardTitle className="py-1 font-normal">
                  Flex Sweat Shirt
                </CardTitle>
                <CardDescription className="space-x-2 text-black">
                  <span className="text-base line-through">$100.00</span>
                  <span className="text-lg font-semibold">$75.00</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="">
                <Image src={"/"} alt="event 2" width={500} height={500} />
              </CardContent>
            </Card>
          </div>

          {/* Event 3 */}
          <div className="col-span-1 row-span-2 ">
            <Card className="h-full bg-gray-300">
              <CardHeader>
                <CardTitle className="py-1 font-normal">
                  Flex Push Button Bomber
                </CardTitle>
                <CardDescription className="space-x-2 text-black">
                  <span className="text-base line-through">$225.00</span>
                  <span className="text-lg font-semibold">$190.00</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="">
                <Image src={"/"} alt="event 3" width={500} height={500} />
              </CardContent>
            </Card>
          </div>

          {/* Event 4 */}
          <div className="col-span-2 ">
            <Card className="uppercase h-52 flex flex-col items-center p-8 pt-12 bg-gray-900 text-white">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-4xl font-extrabold tracking-wide">
                  Get 30% off
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm tracking-wide">Use Promo Code</p>
              </CardContent>
              <CardFooter className=" p-0">
                <Button
                  variant={"secondary"}
                  className=" tracking-[0.3rem] text-lg font-bold text-white bg-gray-500 hover:bg-gray-500"
                >
                  DINEWEEKENDSALE
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
