import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

export default function MechanismSection() {
  return (
    <div className="space-y-6">
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Insulin Mechanism of Action</CardTitle>
          <CardDescription>Understanding how insulin works at cellular and molecular levels</CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
          <TabsTrigger value="basic">Basic Mechanism</TabsTrigger>
          <TabsTrigger value="cellular">Cellular Level</TabsTrigger>
          <TabsTrigger value="metabolism">Metabolism</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How Insulin Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg space-y-4">
                  <div className="flex gap-4">
                    <div className="text-3xl font-bold text-primary">1</div>
                    <div>
                      <h4 className="font-semibold mb-1">Insulin Binding</h4>
                      <p className="text-sm text-muted-foreground">
                        Insulin is released by pancreatic beta cells in response to elevated blood glucose. It circulates through the bloodstream and binds to insulin receptors on cell surfaces.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-3xl font-bold text-accent">2</div>
                    <div>
                      <h4 className="font-semibold mb-1">Receptor Activation</h4>
                      <p className="text-sm text-muted-foreground">
                        Binding triggers a cascade of intracellular signaling events. The insulin receptor undergoes autophosphorylation and activates tyrosine kinase activity, initiating multiple downstream pathways.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-3xl font-bold text-primary">3</div>
                    <div>
                      <h4 className="font-semibold mb-1">GLUT4 Translocation</h4>
                      <p className="text-sm text-muted-foreground">
                        The signaling cascade activates GLUT4 (glucose transporter 4) proteins, causing them to move from intracellular storage vesicles to the cell membrane, enabling glucose entry.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-3xl font-bold text-accent">4</div>
                    <div>
                      <h4 className="font-semibold mb-1">Glucose Utilization</h4>
                      <p className="text-sm text-muted-foreground">
                        Glucose enters the cell and is either used for immediate energy (ATP production) or stored as glycogen in muscle and liver, or converted to fat in adipose tissue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3">Insulin Receptor Structure</h4>
                  <p className="text-sm mb-4">
                    The insulin receptor is a transmembrane tyrosine kinase receptor composed of two α and two β subunits connected by disulfide bonds.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>α subunits:</strong> Extracellular, contain insulin binding sites</p>
                    <p><strong>β subunits:</strong> Transmembrane and intracellular, contain tyrosine kinase domain</p>
                    <p><strong>Function:</strong> Signal amplification and multi-pathway activation</p>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cellular" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Cellular Effects of Insulin</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-secondary">
                  <CardHeader className="pb-3">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                      Hepatic Effects (Liver)
                    </h4>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>✓ Increases glycogen synthesis</p>
                    <p>✓ Decreases glucose production</p>
                    <p>✓ Enhances lipid synthesis</p>
                    <p>✓ Promotes fatty acid esterification</p>
                    <p>✓ Activates key metabolic enzymes</p>
                  </CardContent>
                </Card>

                <Card className="border-secondary">
                  <CardHeader className="pb-3">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-accent"></span>
                      Muscle Effects
                    </h4>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>✓ Increases glucose uptake (via GLUT4)</p>
                    <p>✓ Promotes glycogen storage</p>
                    <p>✓ Stimulates amino acid uptake</p>
                    <p>✓ Enhances protein synthesis</p>
                    <p>✓ Increases ATP production</p>
                  </CardContent>
                </Card>

                <Card className="border-secondary">
                  <CardHeader className="pb-3">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                      Adipose Tissue Effects
                    </h4>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>✓ Increases glucose uptake</p>
                    <p>✓ Stimulates triglyceride synthesis</p>
                    <p>✓ Inhibits lipolysis</p>
                    <p>✓ Promotes fat storage</p>
                    <p>✓ Activates lipogenic enzymes</p>
                  </CardContent>
                </Card>

                <Card className="border-secondary">
                  <CardHeader className="pb-3">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-accent"></span>
                      Other Tissues
                    </h4>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>✓ Brain glucose uptake (independent)</p>
                    <p>✓ Red blood cell glucose uptake</p>
                    <p>✓ Kidney glucose reabsorption</p>
                    <p>✓ Growth hormone regulation</p>
                    <p>✓ Overall anabolic state</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-secondary/30">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3">Key Signaling Pathways</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">PI3K/Akt Pathway</p>
                      <p className="text-muted-foreground text-xs">Metabolic effects - glucose uptake, glycogen synthesis, protein synthesis</p>
                    </div>
                    <div>
                      <p className="font-medium">MAPK/ERK Pathway</p>
                      <p className="text-muted-foreground text-xs">Growth effects - gene expression, cell proliferation, differentiation</p>
                    </div>
                    <div>
                      <p className="font-medium">GSK3β Inhibition</p>
                      <p className="text-muted-foreground text-xs">Enhanced glycogen synthesis via pathway activation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metabolism" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Metabolic Effects of Insulin</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Card className="border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/20">
                  <CardHeader className="pb-3">
                    <h4 className="font-semibold text-sm">Anabolic (Building) Processes</h4>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <div className="flex justify-between items-start">
                      <span><strong>Glycogenesis:</strong> Glucose → Glycogen</span>
                      <Badge variant="secondary" className="text-xs">Liver & Muscle</Badge>
                    </div>
                    <div className="flex justify-between items-start">
                      <span><strong>Lipogenesis:</strong> Glucose/Amino acids → Fat</span>
                      <Badge variant="secondary" className="text-xs">Adipose Tissue</Badge>
                    </div>
                    <div className="flex justify-between items-start">
                      <span><strong>Protein synthesis:</strong> Amino acids → Proteins</span>
                      <Badge variant="secondary" className="text-xs">Muscle</Badge>
                    </div>
                    <div className="flex justify-between items-start">
                      <span><strong>Nucleotide synthesis:</strong> Building blocks for DNA/RNA</span>
                      <Badge variant="secondary" className="text-xs">All cells</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
                  <CardHeader className="pb-3">
                    <h4 className="font-semibold text-sm">Catabolic (Breaking) Process Inhibition</h4>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <div className="flex justify-between items-start">
                      <span><strong>Glycogenolysis:</strong> ↓ Glycogen breakdown</span>
                      <Badge variant="secondary" className="text-xs">Inhibited</Badge>
                    </div>
                    <div className="flex justify-between items-start">
                      <span><strong>Gluconeogenesis:</strong> ↓ Glucose production</span>
                      <Badge variant="secondary" className="text-xs">Inhibited</Badge>
                    </div>
                    <div className="flex justify-between items-start">
                      <span><strong>Lipolysis:</strong> ↓ Fat breakdown</span>
                      <Badge variant="secondary" className="text-xs">Inhibited</Badge>
                    </div>
                    <div className="flex justify-between items-start">
                      <span><strong>Proteolysis:</strong> ↓ Protein breakdown</span>
                      <Badge variant="secondary" className="text-xs">Inhibited</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-accent/10">
                <CardHeader className="pb-3">
                  <h4 className="font-semibold text-sm">The "Fed State"</h4>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <p>
                    High insulin levels after a meal signal the body that nutrients are abundant. The body shifts into "anabolic" mode, focusing on:
                  </p>
                  <ul className="space-y-1 text-xs">
                    <li>• Energy storage (glycogen and fat)</li>
                    <li>• Growth and tissue building (protein synthesis)</li>
                    <li>• DNA/RNA synthesis for cell division</li>
                    <li>• Inhibition of energy mobilization pathways</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-secondary/30">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3 text-sm">Glucose Homeostasis</h4>
                  <p className="text-sm mb-4">
                    Insulin maintains blood glucose within tight physiological range (70-100 mg/dL fasting). This is achieved through:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="font-medium">Glucose Lowering</p>
                      <p className="text-muted-foreground">↑ Uptake in muscles and fat, ↓ Production in liver</p>
                    </div>
                    <div>
                      <p className="font-medium">Hormone Balance</p>
                      <p className="text-muted-foreground">Counterbalances glucagon, cortisol, and epinephrine</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Why Different Insulin Types Work Differently</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <p>
            All insulin types activate the same receptor and trigger the same molecular pathways. The differences lie in <strong>pharmacokinetics</strong> (when the drug reaches peak concentration) and <strong>duration of action</strong>.
          </p>
          <div className="bg-secondary p-4 rounded-lg space-y-2">
            <p><strong>Animal insulin:</strong> Unchanged molecule with normal absorption kinetics</p>
            <p><strong>Rapid-acting analogs:</strong> Amino acid modifications prevent hexamer formation, allowing monomers to be absorbed quickly</p>
            <p><strong>Long-acting analogs:</strong> Structural changes cause precipitation at injection site or albumin binding, extending duration</p>
            <p><strong>Ultra-rapid:</strong> Addition of absorption enhancers (citrate, niacinamide) increase tissue permeability for faster absorption</p>
          </div>
          <p className="text-muted-foreground italic">
            The molecular mechanism is identical—only the timing of availability differs, allowing physicians to match insulin action to meal timing and lifestyle patterns.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
