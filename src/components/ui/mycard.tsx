import Image from "next/image";

export default function MyCard() {
  return (
    <>
      <div className="col-span-2 row-span-1 bg-gray-300 flex px-8  items-center h-min">
        <div className="w-1/2">
          <h3 className="text-3xl font-bold">
            GET UP TO
            <span className="block text-4xl font-extrabold">60%</span>
          </h3>
          <p className="text-lg">For the summer season</p>
        </div>
        <div className="w-1/2 h-full">
          <Image width={200} height={200} src={"/"} alt="event1" />
        </div>
      </div>
    </>
  );
}
