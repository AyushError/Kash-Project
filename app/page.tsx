'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { ChevronDown } from 'lucide-react'
import Header from '@/components/header'
import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import HistoryTimeline from '@/components/history-timeline'
import TypesComparison from '@/components/types-comparison'
import MechanismSection from '@/components/mechanism-section'
import ClinicalApplications from '@/components/clinical-applications'
import FutureSection from '@/components/future-section'

export default function Page() {
  const [selectedTopic, setSelectedTopic] = useState<string>('overview')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Navigation selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content Tabs */}
        <Tabs value={selectedTopic} onValueChange={setSelectedTopic} className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2 h-auto">
            <TabsTrigger value="overview" className="text-xs sm:text-sm">Overview</TabsTrigger>
            <TabsTrigger value="history" className="text-xs sm:text-sm">History</TabsTrigger>
            <TabsTrigger value="types" className="text-xs sm:text-sm">Types</TabsTrigger>
            <TabsTrigger value="mechanism" className="text-xs sm:text-sm">Mechanism</TabsTrigger>
            <TabsTrigger value="clinical" className="text-xs sm:text-sm">Clinical</TabsTrigger>
            <TabsTrigger value="future" className="text-xs sm:text-sm">Future</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-8 space-y-8">
            <OverviewSection />
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="mt-8 space-y-8">
            <HistoryTimeline />
          </TabsContent>

          {/* Types Tab */}
          <TabsContent value="types" className="mt-8 space-y-8">
            <TypesComparison />
          </TabsContent>

          {/* Mechanism Tab */}
          <TabsContent value="mechanism" className="mt-8 space-y-8">
            <MechanismSection />
          </TabsContent>

          {/* Clinical Applications Tab */}
          <TabsContent value="clinical" className="mt-8 space-y-8">
            <ClinicalApplications />
          </TabsContent>

          {/* Future Tab */}
          <TabsContent value="future" className="mt-8 space-y-8">
            <FutureSection />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

function OverviewSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              What is Insulin?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              Insulin is a hormone produced by the pancreas that regulates blood glucose levels by promoting cellular uptake of glucose. It plays a crucial role in energy metabolism and is essential for life.
            </p>
            <div className="bg-secondary p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Key Functions:</h4>
              <ul className="space-y-1 text-xs">
                <li>✓ Lowers blood glucose after meals</li>
                <li>✓ Promotes glucose storage as glycogen</li>
                <li>✓ Facilitates amino acid uptake</li>
                <li>✓ Enables energy utilization</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Insulin Therapy Evolution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              Insulin therapy has undergone remarkable transformation since its discovery in 1921, evolving from animal-derived preparations to synthetic recombinant forms.
            </p>
            <div className="bg-secondary p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Major Milestones:</h4>
              <ul className="space-y-1 text-xs">
                <li>1921 - Discovery and extraction</li>
                <li>1978 - Recombinant DNA technology</li>
                <li>1982 - First approved recombinant insulin</li>
                <li>Today - Advanced formulations</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-accent/30 bg-accent/5">
        <CardHeader>
          <CardTitle>Evolution Timeline Overview</CardTitle>
          <CardDescription>From discovery to modern biotechnology</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex gap-4">
              <div className="w-24 font-semibold text-primary">1920s-1970s</div>
              <div className="flex-1">
                <p className="font-medium">Animal Insulin Era</p>
                <p className="text-sm text-muted-foreground">Insulin extracted from porcine and bovine pancreases, variable quality and availability</p>
              </div>
            </div>
            <div className="border-l-2 border-secondary my-2"></div>
            <div className="flex gap-4">
              <div className="w-24 font-semibold text-primary">1978-1985</div>
              <div className="flex-1">
                <p className="font-medium">Recombinant Transition</p>
                <p className="text-sm text-muted-foreground">Development of biosynthetic human insulin using genetic engineering techniques</p>
              </div>
            </div>
            <div className="border-l-2 border-secondary my-2"></div>
            <div className="flex gap-4">
              <div className="w-24 font-semibold text-primary">1985-Present</div>
              <div className="flex-1">
                <p className="font-medium">Modern Era</p>
                <p className="text-sm text-muted-foreground">Analog insulins, combination therapies, advanced delivery systems</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Animal Insulin</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <Badge variant="outline" className="w-full justify-center">1920s-1970s</Badge>
            <p className="text-xs">
              Extracted from pancreases of pigs and cows. Limited supply, variable purity, immunogenic reactions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Biosynthetic Insulin</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <Badge variant="outline" className="w-full justify-center">1978-1985</Badge>
            <p className="text-xs">
              Produced using recombinant DNA technology. Identical to human insulin, reliable supply.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Insulin Analogs</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <Badge variant="outline" className="w-full justify-center">1990s-Present</Badge>
            <p className="text-xs">
              Structurally modified insulins with improved kinetics and action profiles.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
