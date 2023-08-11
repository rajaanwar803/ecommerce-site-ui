import Hero from "@/components/views/hero";
import Promotions from "@/components/views/promotions-with-grid";
import PromotionsWithFlex from "@/components/views/promotions";
import Products from "@/components/views/products";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="w-full">
        <Hero />
        <PromotionsWithFlex />
        <Products />
      </main>
    </>
  );
}
