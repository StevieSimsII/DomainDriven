'use client'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold font-mono tracking-tight mb-4">
              DomainDriven
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering organizations through domain expertise and digital innovation.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span>DomainDrivenDigital.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} DomainDriven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 