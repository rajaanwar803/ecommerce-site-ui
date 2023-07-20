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

export default function PromotionsWithFlex() {
  return (
    <>
      <section className="mx-8 sm:mx-24 xl:mx-32 my-16 py-16">
        <div className="space-y-4 mb-8">
          <span className="block text-center text-xs uppercase font-bold text-blue-600 tracking-widest">
            Promotions
          </span>
          <h2 className="text-center font-bold uppercase text-[28px] md:text-3xl tracking-wide ">
            Our Promotions Events
          </h2>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="flex flex-col gap-4 w-full">
            {/* Event 1 */}
            <div className="">
              <Card className="bg-gray-300 ">
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
                  <CardContent>
                    {/* <Image width={200} height={200} src={"/"} alt="event1" /> */}
                  </CardContent>
                </div>
              </Card>
            </div>

            {/* Event 2 */}
            <div className="">
              <Card className="uppercase flex flex-col items-center p-8 pt-12 bg-gray-900 text-white">
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
                    className="tracking-[0.3rem] text-lg font-bold text-white bg-gray-500 hover:bg-gray-500"
                  >
                    DINEWEEKENDSALE
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row w-full gap-4">
            {/* Event 3 */}
            <div className="w-full">
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
                  {/* <Image src={"/"} alt="event 2" width={300} height={300} /> */}
                </CardContent>
              </Card>
            </div>

            {/* Event 4 */}
            <div className="w-full">
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
                  {/* <Image src={"/"} alt="event 3" width={300} height={300} /> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
