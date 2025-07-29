'use client'

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-12 text-center">
            About DomainDriven
          </h2>
          <div className="prose prose-lg prose-slate dark:prose-invert mx-auto">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              At DomainDriven, we believe real digital transformation starts with the people who know 
              their business best. Our mission is to empower organizations by unlocking the knowledge 
              of subject matter experts and enabling everyone—from frontline workers to business 
              leaders—to become citizen developers and digital innovators.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              By putting domain expertise at the center of every solution, we help teams build apps, 
              automate processes, and drive meaningful change with technology that works for them.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Whether through hands-on training, consultancy, or custom app and automation development, 
              DomainDriven bridges the gap between deep industry insight and the latest tech—so your 
              people can solve their own challenges and lead your digital journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 