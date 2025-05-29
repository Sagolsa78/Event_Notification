
function TestimonialsSection() {
    const testimonials = [
      {
        name: "Sarah Johnson",
        title: "Marketing Director, TechCorp",
        text: `"EventHub has transformed how we manage our company events. The notification system ensures everyone is on the same page."`
      },
      // Add more testimonial objects if needed
    ];
  
    return (
      <section id="testimonials" className="container mx-auto px-4 py-24 bg-card/50 rounded-3xl my-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Trusted by Teams Worldwide</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about EventHub
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ name, title, text }, idx) => (
            <div key={idx} className="bg-card p-6 rounded-xl border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">{text}</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20" />
                <div>
                  <p className="font-medium">{name}</p>
                  <p className="text-sm text-muted-foreground">{title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }


  export default TestimonialsSection;
  