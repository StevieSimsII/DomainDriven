'use client'

export default function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Where Domain Expertise{' '}
            <span className="text-muted-foreground">Drives</span>{' '}
            Digital Innovation
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Empowering organizations by unlocking the knowledge of subject matter experts 
            and enabling everyone to become citizen developers and digital innovators.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 