
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { CategoriesSection } from "@/components/sections/categories-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { GiftKitsSection } from "@/components/sections/gift-kits-section";
import { AboutSection } from "@/components/sections/about-section";
import { CandleCareSection } from "@/components/sections/candle-care-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { InstagramSection } from "@/components/sections/instagram-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <HeroSection />
      <FeaturedProductsSection />
      <CategoriesSection />
      <BenefitsSection />
      <GiftKitsSection />
      <AboutSection />
      <CandleCareSection />
      <TestimonialsSection />
      <InstagramSection />
      <ContactSection />
    </main>
  );
}
