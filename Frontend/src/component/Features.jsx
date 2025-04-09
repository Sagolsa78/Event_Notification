 import React from "react";


 
function FeaturesSection() {
    const features = [
      {
        title: "Event Creation",
        desc: "Create and customize events with all the details your attendees need in minutes.",
        iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      },
      {
        title: "Smart Notifications",
        desc: "Automated reminders and updates keep everyone informed about upcoming events.",
        iconPath: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      },
      {
        title: "Attendee Management",
        desc: "Easily invite, track, and manage attendees with powerful collaboration tools.",
        iconPath: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      }
    ];
  
    return (
      <section id="features" className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create and manage successful events in one place
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ title, desc, iconPath }) => (
            <div key={title} className="bg-card p-6 rounded-xl border border-border">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default FeaturesSection;
