import { Link } from "react-router-dom";
import Button from "../component/Buttons";
import DashboardPreview from "../component/Dashboard-Preview";
import Navigation from "../component/Navigation";
import HeroSection from "../component/HeroSection";
import FeaturesSection from "../component/Features";
import TestimonialsSection from "../component/Testimonial";



/* --- Components --- */

function Logo() {
    return (
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold">E</span>
        </div>
        <span className="font-semibold text-xl">EventHub</span>
      </div>
    );
  }
  
  
  function AuthButtons() {
    return (
      <div className="flex items-center gap-4">
        <Link to="/signin">
          <Button variant="ghost" className="hidden md:inline-flex">Sign In</Button>
        </Link>
        <Link to="/signup">
          <Button>Get Started</Button>
        </Link>
      </div>
    );
  }
  

  function DashboardSection() {
    return (
      <section className="container mx-auto px-4 py-16">
        <div className="relative mx-auto max-w-5xl rounded-xl overflow-hidden border border-border glow">
          <DashboardPreview />
        </div>
      </section>
    );
  }
  
  

  console.log(typeof DashboardSection,AuthButtons,Logo)

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
        <DashboardSection />
        <FeaturesSection/>
        <TestimonialsSection />
      </main>
    </div>
  );
}


