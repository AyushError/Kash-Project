import { Card, CardContent } from '@/components/ui/card'

export default function HeroSection() {
  return (
    <section className="bg-secondary/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-3">
                <div className="text-4xl font-bold text-primary">1921</div>
                <p className="text-sm font-medium">Insulin Discovery</p>
                <p className="text-xs text-muted-foreground">
                  Banting and Best isolate insulin from dog pancreases
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-3">
                <div className="text-4xl font-bold text-accent">1982</div>
                <p className="text-sm font-medium">Recombinant Insulin</p>
                <p className="text-xs text-muted-foreground">
                  FDA approves first genetically engineered human insulin
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-3">
                <div className="text-4xl font-bold text-primary">2024+</div>
                <p className="text-sm font-medium">Modern Era</p>
                <p className="text-xs text-muted-foreground">
                  Advanced analogs and AI-guided therapy management
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
