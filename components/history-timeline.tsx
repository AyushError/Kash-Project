import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function HistoryTimeline() {
  const events = [
    {
      year: 1889,
      title: 'Discovery of Pancreatic Function',
      category: 'Foundation',
      description: 'Minkowski and von Mering discover the pancreas controls blood glucose by removing pancreases from dogs and observing diabetes development.',
    },
    {
      year: 1921,
      title: 'Insulin Isolation',
      category: 'Breakthrough',
      description: 'Frederick Banting and Charles Best successfully extract insulin from dog pancreases at University of Toronto. First patient receives insulin on January 23, 1922.',
      highlight: true,
    },
    {
      year: 1923,
      title: 'Nobel Prize Recognition',
      category: 'Recognition',
      description: 'Frederick Banting and John Macleod receive Nobel Prize in Physiology/Medicine for insulin discovery.',
    },
    {
      year: 1926,
      title: 'Insulin Structure Determined',
      category: 'Science',
      description: 'Frederick Sanger sequences insulin, revealing its amino acid composition. Receives Nobel Prize in 1958 for this work.',
    },
    {
      year: 1950,
      title: 'Protamine Insulin Development',
      category: 'Innovation',
      description: 'Protamine-containing insulin preparations developed, allowing longer duration of action.',
    },
    {
      year: 1970,
      title: 'Insulin Purification Advances',
      category: 'Technology',
      description: 'Development of single-peak insulin preparations with improved purity and consistency.',
    },
    {
      year: 1978,
      title: 'Recombinant DNA Technology',
      category: 'Revolution',
      description: 'Herbert Boyer and colleagues develop recombinant DNA technique to produce human insulin using E. coli bacteria.',
      highlight: true,
    },
    {
      year: 1982,
      title: 'First Recombinant Insulin Approved',
      category: 'FDA Approval',
      description: 'Humulin (human insulin made using rDNA technology) becomes first genetically engineered drug approved by FDA.',
      highlight: true,
    },
    {
      year: 1985,
      title: 'Insulin Analog Research Begins',
      category: 'Innovation',
      description: 'Development of modified insulin analogs with altered amino acid sequences for improved kinetics.',
    },
    {
      year: 1996,
      title: 'Insulin Lispro (Humalog)',
      category: 'Analog Launch',
      description: 'Eli Lilly introduces rapid-acting insulin analog with faster onset and shorter duration.',
    },
    {
      year: 2000,
      title: 'Insulin Glargine (Lantus)',
      category: 'Analog Launch',
      description: 'Long-acting insulin analog introduced, providing better basal glucose control.',
    },
    {
      year: 2015,
      title: 'Biosimilar Insulins',
      category: 'Advancement',
      description: 'FDA approves biosimilar insulins, providing more affordable alternatives to brand-name products.',
    },
    {
      year: 2020,
      title: 'Ultra-Rapid Insulins',
      category: 'Innovation',
      description: 'Faster-acting insulin analogs with absorption enhancers approved for clinical use.',
    },
    {
      year: 2024,
      title: 'AI-Integrated Therapy',
      category: 'Future',
      description: 'Artificial intelligence and machine learning increasingly used to optimize insulin dosing and prediction.',
    },
  ]

  return (
    <div className="space-y-6">
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Complete History of Insulin Therapy</CardTitle>
          <CardDescription>From discovery to modern biotechnology (1889-2024)</CardDescription>
        </CardHeader>
      </Card>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent opacity-30"></div>

        {/* Timeline events */}
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="relative pl-24">
              {/* Timeline dot */}
              <div className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center -translate-x-6 top-0 ${
                event.highlight ? 'bg-gradient-to-r from-primary to-accent text-white' : 'bg-secondary text-foreground'
              }`}>
                <span className="font-bold text-sm">{event.year}</span>
              </div>

              {/* Event card */}
              <Card className={event.highlight ? 'border-accent/50 bg-accent/5' : ''}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                    </div>
                    <Badge variant={event.highlight ? 'default' : 'secondary'}>
                      {event.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Card className="bg-secondary/30">
        <CardHeader>
          <CardTitle className="text-base">Key Insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong>Animal Era (1921-1978):</strong> Limited supply from animal pancreases, variable quality, and potential for immune reactions.
          </p>
          <p>
            <strong>Recombinant Era (1978-1985):</strong> Breakthrough in biotechnology allowed production of pure human insulin in unlimited quantities.
          </p>
          <p>
            <strong>Analog Era (1985-Present):</strong> Structural modifications enable better glucose control with formulations matching physiological needs.
          </p>
          <p>
            <strong>Future (2024+):</strong> Integration of AI, closed-loop systems, and personalized medicine approaches.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
