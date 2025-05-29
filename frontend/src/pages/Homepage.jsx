
import Navigation from "../component/Navigation";
import HeroSection from "../component/HeroSection";
import FeaturesSection from "../component/Features";
import TestimonialsSection from "../component/Testimonial";
import Logo from "../component/Logo";
import AuthButtons from "../component/Auth";


export default function Homepage() {
  return (
    <div className="min-h-screen bg-background text-foreground grid-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Logo />
        <Navigation />
        <AuthButtons />
      </header>
 
      <main>
        <HeroSection />
        {/* <DashboardSection /> */}
        <FeaturesSection/>
        <TestimonialsSection />
      </main>
    </div>
  );
}


