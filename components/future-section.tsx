import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function FutureSection() {
  return (
    <div className="space-y-6">
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Future of Insulin Therapy</CardTitle>
          <CardDescription>Emerging technologies and innovations in diabetes management</CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              Artificial Intelligence & Machine Learning
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">AI-Powered Dosing</h4>
              <p className="text-muted-foreground">
                Machine learning algorithms analyze glucose patterns, carbohydrate intake, activity levels, and individual responses to predict optimal insulin doses. Systems like Aidoc and IBM Watson analyzing real-time data.
              </p>
            </div>
            <div className="bg-secondary p-3 rounded-lg space-y-2 text-xs">
              <p className="font-semibold">Current Applications:</p>
              <ul className="space-y-1">
                <li>✓ Predictive hypoglycemia alerts</li>
                <li>✓ Personalized carb-to-insulin ratios</li>
                <li>✓ Automated dose adjustment recommendations</li>
                <li>✓ Pattern recognition in glycemic variability</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold">Expected Impact:</p>
              <p className="text-xs text-muted-foreground">
                Reduced treatment burden, better HbA1c outcomes, lower hypoglycemia risk, improved quality of life.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="w-3 h-3 bg-accent rounded-full"></span>
              Closed-Loop Systems (Artificial Pancreas)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Automated Insulin Delivery</h4>
              <p className="text-muted-foreground">
                CGM sensors feed glucose data to algorithms that automatically adjust insulin pump delivery. FDA-approved systems already available with more advanced versions in development.
              </p>
            </div>
            <div className="bg-secondary p-3 rounded-lg space-y-2 text-xs">
              <p className="font-semibold">Current Systems:</p>
              <ul className="space-y-1">
                <li>✓ Medtronic 780G - hybrid closed-loop</li>
                <li>✓ Tandem Control IQ - supervised learning</li>
                <li>✓ Insulet Omnipod - tubeless pump option</li>
                <li>✓ CamAPS - Cambridge system (emerging)</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold">Future Goals:</p>
              <p className="text-xs text-muted-foreground">
                Fully autonomous systems requiring minimal user intervention. Incorporation of dual-hormone delivery (insulin + glucagon).
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              Next-Generation Insulin Formulations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Oral Insulin</h4>
              <p className="text-muted-foreground">
                Multiple oral insulin formulations in development. Overcome by protecting insulin from gastric degradation using nanoparticles or mucoadhesive polymers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Inhaled Insulin</h4>
              <p className="text-muted-foreground">
                Afrezza already available, others in development. Rapid absorption through lungs, non-invasive route, better adherence potential.
              </p>
            </div>
            <div className="bg-secondary p-3 rounded-lg space-y-2 text-xs">
              <p className="font-semibold">In Development:</p>
              <ul className="space-y-1">
                <li>✓ Needle-free injection devices</li>
                <li>✓ Transdermal patches</li>
                <li>✓ Biodegradable implants</li>
                <li>✓ Smart pills with sensors</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="w-3 h-3 bg-accent rounded-full"></span>
              Immunomodulation & Beta Cell Preservation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Immune Tolerance Therapy</h4>
              <p className="text-muted-foreground">
                Treatments to halt or reverse autoimmune destruction of pancreatic beta cells. Teplizumab (immunosuppressive agent) recently FDA-approved for newly diagnosed type 1.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Beta Cell Regeneration</h4>
              <p className="text-muted-foreground">
                Research into factors promoting beta cell proliferation and preservation. GLP-1 agonists and other therapies showing promise in slowing decline.
              </p>
            </div>
            <div className="bg-secondary p-3 rounded-lg space-y-2 text-xs">
              <p className="font-semibold">Research Focus:</p>
              <ul className="space-y-1">
                <li>✓ Stem cell differentiation to beta cells</li>
                <li>✓ Immune checkpoint inhibitors</li>
                <li>✓ Continuous beta cell assessment</li>
                <li>✓ Prevention in high-risk individuals</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              Smart Wearables & IoT Integration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Integrated Biosensors</h4>
              <p className="text-muted-foreground">
                Wearable devices combining glucose monitoring with activity tracking, heart rate, sleep quality, and stress levels for comprehensive health assessment.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Sweat Biosensors</h4>
              <p className="text-muted-foreground">
                Non-invasive glucose monitoring through sweat analysis. MIT researchers developing tattoo-like patches that can measure glucose without blood draws.
              </p>
            </div>
            <div className="bg-secondary p-3 rounded-lg space-y-2 text-xs">
              <p className="font-semibold">Advantages:</p>
              <ul className="space-y-1">
                <li>✓ Truly non-invasive monitoring</li>
                <li>✓ Real-time multimodal health data</li>
                <li>✓ Predictive analytics capability</li>
                <li>✓ Better patient engagement</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="w-3 h-3 bg-accent rounded-full"></span>
              Gene Therapy & Precision Medicine
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">CRISPR & Gene Editing</h4>
              <p className="text-muted-foreground">
                Potential to correct genetic mutations in monogenic forms of diabetes. CRISPR trials underway for sickle cell disease; diabetes applications anticipated.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Reprogrammed Cell Therapy</h4>
              <p className="text-muted-foreground">
                Converting patient cells to insulin-producing beta cells using induced pluripotent stem cells (iPSCs). Massachusetts General Hospital advancing clinical trials.
              </p>
            </div>
            <div className="bg-secondary p-3 rounded-lg space-y-2 text-xs">
              <p className="font-semibold">Timeline Expectations:</p>
              <ul className="space-y-1">
                <li>✓ Early clinical trials: 2024-2026</li>
                <li>✓ Phase 3 trials: 2026-2030</li>
                <li>✓ Potential commercialization: 2030+</li>
                <li>✓ May be curative for some patients</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              Novel Insulin Analogs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Combination Therapies</h4>
              <p className="text-muted-foreground">
                Insulin co-formulated with GLP-1 agonists or other agents in single injection. Provides glucose control plus weight loss and cardiovascular benefits.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Ultra-Long Duration</h4>
              <p className="text-muted-foreground">
                Insulins requiring dosing once weekly or even longer. Several in late-stage clinical trials, could reduce treatment burden significantly.
              </p>
            </div>
            <div className="bg-secondary p-3 rounded-lg space-y-2 text-xs">
              <p className="font-semibold">In Development:</p>
              <ul className="space-y-1">
                <li>✓ Icodec - once weekly insulin</li>
                <li>✓ Tirzepatide insulin combinations</li>
                <li>✓ Dual GLP-1/GIP/glucagon agonists</li>
                <li>✓ Oral semaglutide-insulin combinations</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="w-3 h-3 bg-accent rounded-full"></span>
              Digital Health & Telemedicine
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Remote Monitoring</h4>
              <p className="text-muted-foreground">
                CGM data automatically shared with healthcare providers via cloud. Real-time alerts for out-of-range values without patient action required.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Virtual Clinic Visits</h4>
              <p className="text-muted-foreground">
                Video consultations with diabetes specialists. AI-assisted platforms providing clinical decision support and evidence-based recommendations.
              </p>
            </div>
            <div className="bg-secondary p-3 rounded-lg space-y-2 text-xs">
              <p className="font-semibold">Impact:</p>
              <ul className="space-y-1">
                <li>✓ Improved access to specialists</li>
                <li>✓ Reduced healthcare disparities</li>
                <li>✓ Cost reduction for patients</li>
                <li>✓ Better adherence tracking</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              Personalized Medicine Approaches
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Pharmacogenomics</h4>
              <p className="text-muted-foreground">
                Genetic testing to predict insulin metabolism and response. Tailored insulin type selection based on individual genetic profiles.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Metabolic Profiling</h4>
              <p className="text-muted-foreground">
                Comprehensive analysis of individual metabolic patterns. Insulin regimens designed specifically for each person&apos;s unique physiology.
              </p>
            </div>
            <div className="bg-secondary p-3 rounded-lg space-y-2 text-xs">
              <p className="font-semibold">Benefits:</p>
              <ul className="space-y-1">
                <li>✓ First-time optimal dosing</li>
                <li>✓ Reduced trial-and-error phase</li>
                <li>✓ Better long-term outcomes</li>
                <li>✓ Prevention of complications</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-accent/10">
        <CardHeader>
          <CardTitle className="text-base">Timeline: What to Expect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border-l-4 border-primary pl-4">
              <p className="font-semibold mb-2">2024-2025</p>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>✓ More advanced AI systems</li>
                <li>✓ Expanded CGM accessibility</li>
                <li>✓ Wider pump adoption</li>
                <li>✓ Biosimilar insulins increase</li>
              </ul>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <p className="font-semibold mb-2">2026-2030</p>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>✓ Ultra-long duration insulins</li>
                <li>✓ Early gene therapy trials</li>
                <li>✓ Fully automated closed-loops</li>
                <li>✓ Non-invasive glucose sensing</li>
              </ul>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="font-semibold mb-2">2030-2035</p>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>✓ Gene therapy availability</li>
                <li>✓ Stem cell treatments</li>
                <li>✓ Potentially curative options</li>
                <li>✓ Oral insulin formulations</li>
              </ul>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <p className="font-semibold mb-2">2035+</p>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>✓ Diabetes prevention breakthroughs</li>
                <li>✓ Fully personalized medicine</li>
                <li>✓ Minimal treatment burden</li>
                <li>✓ Focus on cure research</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-secondary/30">
        <CardHeader>
          <CardTitle className="text-base">Key Takeaway</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-3">
          <p>
            The future of insulin therapy is moving away from simple glucose lowering toward intelligent, automated, and personalized management systems. The evolution that began in 1921 with crude animal insulin extraction continues toward potentially curative therapies.
          </p>
          <p>
            Convergence of AI, biotechnology, nanotechnology, and digital health promises a future where diabetes management becomes less burdensome, more effective, and ultimately preventable or curable for many patients. The next chapter in insulin&apos;s story may be one of transformation from lifelong treatment to actual cure.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
