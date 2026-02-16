import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function TypesComparison() {
  const insulinTypes = [
    {
      name: 'Animal Insulin',
      era: '1920s-1970s',
      category: 'Historical',
      onset: '30-60 min',
      peak: '2-3 hours',
      duration: '6-8 hours',
      source: 'Porcine & Bovine pancreases',
      pros: [
        'Effective glucose control',
        'Well-established clinical use',
        'Affordable historical baseline'
      ],
      cons: [
        'Variable purity and potency',
        'Limited supply and availability',
        'Immunogenic reactions',
        'Batch-to-batch variation',
        'Ethical concerns'
      ],
      examples: 'Beef insulin, Pork insulin',
      details: 'Extracted from pancreases of slaughtered cattle and pigs. Composition slightly differs from human insulin (3 amino acid differences in beef insulin). Immunogenicity led to formation of antibodies in some patients.'
    },
    {
      name: 'Human Insulin (Biosynthetic)',
      era: '1978-Present',
      category: 'Recombinant',
      onset: '30-60 min',
      peak: '2-3 hours',
      duration: '6-8 hours',
      source: 'E. coli bacteria (rDNA)',
      pros: [
        'Identical to natural human insulin',
        'Unlimited production capacity',
        'Consistent quality and purity',
        'Reduced immunogenicity',
        'Cost-effective'
      ],
      cons: [
        'Fixed pharmacokinetics',
        'Multiple daily injections needed',
        'Standard absorption rate'
      ],
      examples: 'Humulin (Eli Lilly), Novolin (Novo Nordisk)',
      details: 'Produced using recombinant DNA technology where the human insulin gene is inserted into E. coli or yeast. The bacteria produce human insulin identical in amino acid sequence to natural insulin. FDA approved in 1982 as Humulin.'
    },
    {
      name: 'Rapid-Acting Analogs',
      era: '1996-Present',
      category: 'Modified',
      onset: '10-15 min',
      peak: '1-2 hours',
      duration: '3-5 hours',
      source: 'Modified human insulin (rDNA)',
      pros: [
        'Very fast onset',
        'Better mealtime coverage',
        'Improved post-prandial control',
        'Flexible dosing schedules',
        'Reduced hypoglycemia risk'
      ],
      cons: [
        'More frequent injections',
        'Higher cost than regular insulin'
      ],
      examples: 'Humalog (lispro), NovoLog (aspart), Apidra (glulisine)',
      details: 'Amino acids in positions 28 and 29 on the B chain are reversed (lispro) or modified (aspart, glulisine). This prevents hexamer formation, allowing rapid absorption from injection site. Onset within minutes of injection.'
    },
    {
      name: 'Intermediate-Acting Insulin',
      era: '1950s-Present',
      category: 'Modified',
      onset: '2-4 hours',
      peak: '6-10 hours',
      duration: '12-16 hours',
      source: 'Human insulin + protamine',
      pros: [
        'Once or twice daily dosing',
        'Bridges fasting and meal periods',
        'Predictable action',
        'Affordable option'
      ],
      cons: [
        'Prominent peak effect',
        'Risk of nocturnal hypoglycemia',
        'Less flexible timing'
      ],
      examples: 'NPH (Neutral Protamine Hagedorn)',
      details: 'Contains protamine, a protein that slows absorption. Neutral pH formulation creates stable suspension. Still widely used in developing countries due to cost and established safety profile.'
    },
    {
      name: 'Long-Acting Analogs',
      era: '2000-Present',
      category: 'Modified',
      onset: '2-4 hours',
      peak: 'Minimal/Flat',
      duration: '20-24+ hours',
      source: 'Modified human insulin (rDNA)',
      pros: [
        'Basal insulin coverage',
        'Once daily dosing',
        'Flat kinetic profile',
        'Lower hypoglycemia risk',
        'Better overnight control'
      ],
      cons: [
        'Higher cost',
        'Cannot be mixed in same syringe (degludec)',
        'Slower onset for corrections'
      ],
      examples: 'Lantus (glargine), Levemir (detemir), Tresiba (degludec)',
      details: 'Modified to slow absorption and extend duration. Glargine has modifications creating microprecipitation at injection site. Detemir binds to albumin for sustained release. Degludec forms multimers for ultra-long action (42 hours).'
    },
    {
      name: 'Ultra-Rapid Analogs',
      era: '2020-Present',
      category: 'Modern Modified',
      onset: '5-10 min',
      peak: '30-60 min',
      duration: '2-3 hours',
      source: 'Modified insulin + absorption enhancers',
      pros: [
        'Fastest mealtime coverage',
        'Closest to natural secretion',
        'Improved glucose variability',
        'More physiologic response'
      ],
      cons: [
        'Very recent, limited long-term data',
        'Premium pricing',
        'Requires careful dosing'
      ],
      examples: 'Afrezza (inhaled), Lyumjev (lispro with citrate)',
      details: 'Next generation includes surfactants and absorption enhancers. Afrezza is inhaled powder, absorbed through lungs for systemic effect. Lyumjev adds citrate to increase tissue permeability.'
    },
    {
      name: 'Combination/Premixed',
      era: '1970s-Present',
      category: 'Formulation',
      onset: 'Variable',
      peak: 'Variable',
      duration: 'Variable',
      source: 'Combinations of above types',
      pros: [
        'Simplified regimens',
        'Better adherence',
        'Single injection covers meals and fasting',
        'Reduces insulin pens needed'
      ],
      cons: [
        'Less flexible dosing',
        'Fixed ratios may not match individual needs',
        'Cannot adjust individual components'
      ],
      examples: '70/30 NPH/Regular, 75/25 NPH/Lispro, 70/30 Glargine/Lispro',
      details: 'Pre-mixed formulations combining long and short-acting insulins. Useful for patients with cognitive impairment or poor dexterity. 70/30 means 70% NPH and 30% regular insulin. Analog versions (Humalog Mix, NovoLog Mix) available.'
    }
  ]

  return (
    <div className="space-y-6">
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Insulin Types & Classification</CardTitle>
          <CardDescription>Comprehensive comparison from animal insulin to modern analogs</CardDescription>
        </CardHeader>
      </Card>

      {/* Tabs for different insulin types */}
      <Tabs defaultValue="Animal Insulin" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 h-auto gap-2">
          {insulinTypes.map((insulin) => (
            <TabsTrigger key={insulin.name} value={insulin.name} className="text-xs sm:text-sm">
              {insulin.name.split(' ')[0]}
            </TabsTrigger>
          ))}
        </TabsList>

        {insulinTypes.map((insulin) => (
          <TabsContent key={insulin.name} value={insulin.name} className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <CardTitle>{insulin.name}</CardTitle>
                    <CardDescription>Source: {insulin.source}</CardDescription>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge>{insulin.era}</Badge>
                    <Badge variant="secondary">{insulin.category}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Pharmacokinetics */}
                <div>
                  <h3 className="font-semibold mb-4">Pharmacokinetic Profile</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-secondary p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground">Onset</p>
                      <p className="text-lg font-semibold">{insulin.onset}</p>
                    </div>
                    <div className="bg-secondary p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground">Peak</p>
                      <p className="text-lg font-semibold">{insulin.peak}</p>
                    </div>
                    <div className="bg-secondary p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="text-lg font-semibold">{insulin.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Advantages and Disadvantages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3">Advantages</h3>
                    <ul className="space-y-2 text-sm">
                      {insulin.pros.map((pro, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-green-600 dark:text-green-400">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-700 dark:text-red-400 mb-3">Disadvantages</h3>
                    <ul className="space-y-2 text-sm">
                      {insulin.cons.map((con, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-red-600 dark:text-red-400">✗</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Examples */}
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-1">Brand Examples</p>
                  <p className="text-sm">{insulin.examples}</p>
                </div>

                {/* Detailed explanation */}
                <div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{insulin.details}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Comparison Table</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 font-semibold">Type</th>
                  <th className="text-left py-3 px-2 font-semibold">Onset</th>
                  <th className="text-left py-3 px-2 font-semibold">Peak</th>
                  <th className="text-left py-3 px-2 font-semibold">Duration</th>
                  <th className="text-left py-3 px-2 font-semibold">Use</th>
                </tr>
              </thead>
              <tbody>
                {insulinTypes.map((insulin, i) => (
                  <tr key={i} className="border-b border-border hover:bg-secondary/50">
                    <td className="py-3 px-2 font-medium">{insulin.name}</td>
                    <td className="py-3 px-2">{insulin.onset}</td>
                    <td className="py-3 px-2">{insulin.peak}</td>
                    <td className="py-3 px-2">{insulin.duration}</td>
                    <td className="py-3 px-2 text-xs">
                      {insulin.name.includes('Rapid') && 'Mealtime'}
                      {insulin.name.includes('Long') && 'Basal'}
                      {insulin.name.includes('Animal') && 'Historical'}
                      {insulin.name === 'Human Insulin (Biosynthetic)' && 'Flexible'}
                      {insulin.name.includes('Intermediate') && 'Basal'}
                      {insulin.name.includes('Ultra') && 'Mealtime'}
                      {insulin.name.includes('Combination') && 'Mixed'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Evolution insight */}
      <Card className="bg-secondary/30">
        <CardHeader>
          <CardTitle className="text-base">Evolution Key Points</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong>From Raw Extract to Engineered Molecules:</strong> The evolution of insulin reflects broader advances in biotechnology, from simple extraction methods to sophisticated molecular engineering.
          </p>
          <p>
            <strong>Pharmacokinetic Optimization:</strong> Each generation of insulin was designed to better match the body&apos;s natural insulin secretion patterns, improving glucose control and reducing complications.
          </p>
          <p>
            <strong>Personalization Potential:</strong> Modern analogs allow for highly individualized therapy regimens, with combination strategies tailored to patient-specific needs and lifestyle patterns.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
