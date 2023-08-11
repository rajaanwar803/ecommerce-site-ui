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

export default function Products() {
  return (
    <>
      <section className="px-8 sm:px-24 xl:px-32 py-6 sm:py-8 xl:py-16">
        <div className="space-y-4 mb-12">
          <span className="block text-center text-xs uppercase font-bold text-blue-600 tracking-widest">
            Products
          </span>
          <h2 className="text-center font-bold uppercase text-2xl sm:text-3xl tracking-wide ">
            Check What We Have
          </h2>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="flex flex-col sm:flex-row w-full gap-4">
            {/* Pic 1*/}
            <figure>
              <Image src={"/fig1.png"} width={400} height={400} alt="fig" />
              <figcaption></figcaption>
            </figure>

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
