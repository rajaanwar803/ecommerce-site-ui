import Hero from "@/components/views/hero";
import Promotions from "@/components/views/promotions";
import PromotionsWithFlex from "@/components/views/promotions/withFlex";

export default function Home() {
  return (
    <>
      <main className="w-full">
        <Hero />
        <PromotionsWithFlex />
      </main>
    </>
  );
}
