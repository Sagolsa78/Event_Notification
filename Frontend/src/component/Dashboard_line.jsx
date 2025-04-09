import DashboardPreview from "./Dashboard-Preview";

function DashboardSection() {
    return (
      <section className="container mx-auto px-4 py-16">
        <div className="relative mx-auto max-w-5xl rounded-xl overflow-hidden border border-border glow">
          <DashboardPreview />
        </div>
      </section>
    );
  }
  

  export default DashboardSection;
