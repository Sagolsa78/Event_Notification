
  /* --- Helper --- */
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  function Navigation() {
    const links = ["features", "testimonials", "pricing", "faq"];
    return (
      <nav className="hidden md:flex items-center gap-8">
        {links.map(link => (
          <a
            key={link}
            href={`#${link}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {capitalize(link)}
          </a>
        ))}
      </nav>
    );
  }

  export default Navigation;
  