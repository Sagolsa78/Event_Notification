import { ArrowRight, Check } from "lucide-react";
import Button from "./Buttons";


  function HeroSection() {
    return (
      <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32 text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          Launching Soon
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Elevate Your Events with <span className="gradient-text">EventHub</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            The all-in-one platform that helps teams create, manage, and share events effortlessly.
            Streamline your processes and focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="gap-2">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">Book a Demo</Button>
          </div>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            {["No credit card", "14-day trial", "Cancel anytime"].map(item => (
              <div className="flex items-center gap-1.5" key={item}>
                <Check className="h-4 w-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default HeroSection;
