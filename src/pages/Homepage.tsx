
import CTAPage from "@/components/modules/HomePage/CTAPage";
import { HeroSection2 } from "@/components/modules/HomePage/HeroSection2";


export const Homepage = () => {
  return (
    <div className="mx-auto container space-y-8 px-4 py-16">
      <div>
        {/* <HeroSection /> */}
        <HeroSection2 />
        <CTAPage />
      </div>
    </div>
  );
};
