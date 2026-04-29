import { Navbar } from "@/components/Common/Navbar";
import { FeaturePerformance } from "@/components/Home/FeaturePromotions";
import { MainTitle } from "@/components/Home/MainTitle";

export default function Home() {
  return (
    <div className="min-h-screen h-auto w-screen flex flex-col">
      <Navbar />
      <section className="h-fit w-full flex flex-col py-12">
        <MainTitle />
        <div className="h-fit  pt-10 w-full px-5">
          <FeaturePerformance />
        </div>
      </section>
    </div>
  );
}
