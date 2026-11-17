
import Overview from "../components/sections/HeroSection";
import ProjectOverview from "../components/sections/ProjectOverview";
import Experience from "../components/sections/ExperienceSection";
import Units from "../components/sections/UnitsSection";
import Pricing from "../components/sections/PricingSection";
import ProjectGallery from "../components/sections/ProjectGallery";
import Amenities from "../components/sections/Amenities";
import LocationSection from "../components/sections/LocationSection";


function AppRoutes() {
  return (
    <>
      <section id="overview"><Overview /></section>
      <ProjectOverview />
      <section id="experience"><Experience /></section>
      <section id="units"><Units /></section>
      <section id="pricing"><Pricing /></section>
      <section id="gallery"><ProjectGallery /></section>
      <section id="amenities"><Amenities /></section>
      <section id="location"><LocationSection /></section>
      
    </>
  );
}

export default AppRoutes;