'use client'

export default function Taglines() {
  const taglines = [
    "Where Domain Expertise Drives Digital Innovation.",
    "Empowering People. Transforming Processes. Delivering Results.",
    "Citizen Development Starts with Domain Know-How.",
    "Build. Automate. Innovate—with the Experts Who Know Your Business Best.",
    "Bridging Domain Knowledge and Technology for Real-World Impact."
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-16 text-center">
            Our Philosophy
          </h2>
          <div className="grid gap-8 md:gap-12">
            {taglines.map((tagline, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <blockquote className="text-xl sm:text-2xl font-medium text-muted-foreground italic group-hover:text-foreground transition-colors">
                  "{tagline}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 