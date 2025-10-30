export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Stratem Accounting Services</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Professional accounting, payroll, and tax solutions for Namibian businesses.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
              <li>Serving clients across Namibia</li>
              <li>Phone: +264 XX XXX XXXX</li>
              <li>Email: info@stratem.na</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm md:text-base text-muted-foreground">
          <p>&copy; {currentYear} Stratem Accounting Services. Serving Namibia.</p>
        </div>
      </div>
    </footer>
  );
}
