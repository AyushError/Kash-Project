import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function ClinicalApplications() {
  return (
    <div className="space-y-6">
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Clinical Applications of Insulin Therapy</CardTitle>
          <CardDescription>Real-world uses, regimens, and outcomes</CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="conditions" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
          <TabsTrigger value="conditions">Conditions</TabsTrigger>
          <TabsTrigger value="regimens">Regimens</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
        </TabsList>

        <TabsContent value="conditions" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Type 1 Diabetes Mellitus</CardTitle>
                <CardDescription className="text-xs">Insulin-dependent</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Overview</h4>
                  <p className="text-muted-foreground">
                    Autoimmune condition where pancreatic beta cells are destroyed, resulting in absolute insulin deficiency. Requires insulin therapy from diagnosis.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Epidemiology</h4>
                  <p className="text-muted-foreground">
                    ~5-10% of diabetes cases. Peak onset in children (5-6 years and 11-13 years) and young adults. Worldwide incidence: ~3-4 per 100,000 per year.
                  </p>
                </div>
                <div className="bg-secondary p-3 rounded-lg space-y-2">
                  <p className="font-semibold text-xs">Insulin Therapy Requirements:</p>
                  <ul className="text-xs space-y-1">
                    <li>✓ Mandatory for survival</li>
                    <li>✓ Multiple daily injections or pumps</li>
                    <li>✓ Basal-bolus regimens</li>
                    <li>✓ Intensive management crucial</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs"><strong>Target HbA1c:</strong> &lt;7% for most adults, &lt;6.5% if achievable without hypoglycemia</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Type 2 Diabetes Mellitus</CardTitle>
                <CardDescription className="text-xs">Often progresses to insulin requirement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Overview</h4>
                  <p className="text-muted-foreground">
                    Insulin resistance with relative insulin deficiency. Initially managed with diet, lifestyle, and oral agents, but requires insulin as beta cell function declines.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Epidemiology</h4>
                  <p className="text-muted-foreground">
                    ~90-95% of diabetes cases. Incidence rising dramatically. ~15-20% require insulin at 10-year follow-up.
                  </p>
                </div>
                <div className="bg-secondary p-3 rounded-lg space-y-2">
                  <p className="font-semibold text-xs">Insulin Therapy Approach:</p>
                  <ul className="text-xs space-y-1">
                    <li>✓ Added when other drugs fail</li>
                    <li>✓ Often basal insulin only initially</li>
                    <li>✓ May transition to basal-bolus</li>
                    <li>✓ Combination with oral agents common</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs"><strong>Target HbA1c:</strong> &lt;7-8% depending on age/comorbidities</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Gestational Diabetes</CardTitle>
                <CardDescription className="text-xs">Pregnancy-related hyperglycemia</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Overview</h4>
                  <p className="text-muted-foreground">
                    Glucose intolerance first recognized during pregnancy, usually 2nd or 3rd trimester. Caused by pregnancy hormones causing insulin resistance.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Epidemiology</h4>
                  <p className="text-muted-foreground">
                    Affects 2-10% of pregnancies. Risk increases with maternal age, BMI, and ethnicity. High risk of type 2 diabetes later (30-40%).
                  </p>
                </div>
                <div className="bg-secondary p-3 rounded-lg space-y-2">
                  <p className="font-semibold text-xs">Insulin Role:</p>
                  <ul className="text-xs space-y-1">
                    <li>✓ After dietary measures fail</li>
                    <li>✓ Typically basal-bolus regimen</li>
                    <li>✓ Safety profile crucial for fetus</li>
                    <li>✓ Usually resolves postpartum</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs"><strong>Target glucose:</strong> &lt;95 fasting, &lt;140 1-hour post-meal</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Secondary Hyperglycemia</CardTitle>
                <CardDescription className="text-xs">Glucose elevation from other causes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Causes Requiring Insulin</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    <li>• Cystic fibrosis-related diabetes</li>
                    <li>• Hemochromatosis</li>
                    <li>• Pancreatitis or pancreatectomy</li>
                    <li>• Steroid-induced hyperglycemia</li>
                    <li>• Acromegaly</li>
                  </ul>
                </div>
                <div className="bg-secondary p-3 rounded-lg space-y-2">
                  <p className="font-semibold text-xs">Treatment Approach:</p>
                  <ul className="text-xs space-y-1">
                    <li>✓ Address underlying cause</li>
                    <li>✓ Insulin regimen varies</li>
                    <li>✓ Often temporary requirement</li>
                    <li>✓ Intensive monitoring essential</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="regimens" className="space-y-6">
          <div className="space-y-4">
            <Card className="border-primary/30 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-base">Common Insulin Regimens</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Basal-Bolus (MDI - Multiple Daily Injections)</h4>
                    <p className="text-muted-foreground text-xs mb-2">
                      Most physiologic approach combining long-acting basal insulin with rapid-acting bolus doses.
                    </p>
                    <div className="bg-secondary p-2 rounded text-xs space-y-1">
                      <p><strong>Basal:</strong> Long-acting insulin (glargine, detemir, degludec) once or twice daily</p>
                      <p><strong>Bolus:</strong> Rapid-acting insulin (lispro, aspart, glulisine) with each meal</p>
                      <p><strong>Correction:</strong> Additional rapid-acting for high pre-meal glucose</p>
                      <p><strong>Flexibility:</strong> High - can adjust doses for carbs and activity</p>
                      <p><strong>Best for:</strong> Type 1, motivated Type 2, variable schedules</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold mb-1">Basal Insulin Monotherapy</h4>
                    <p className="text-muted-foreground text-xs mb-2">
                      Single long-acting insulin injection, often with oral agents.
                    </p>
                    <div className="bg-secondary p-2 rounded text-xs space-y-1">
                      <p><strong>Insulin:</strong> Once daily long-acting (usually evening)</p>
                      <p><strong>Oral agents:</strong> Continued for mealtime control</p>
                      <p><strong>Simplicity:</strong> Single injection, easier adherence</p>
                      <p><strong>Flexibility:</strong> Low - fixed basal coverage</p>
                      <p><strong>Best for:</strong> Type 2 with declining beta cell function</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Insulin Pump (CSII - Continuous Subcutaneous Insulin Infusion)</h4>
                    <p className="text-muted-foreground text-xs mb-2">
                      Programmable pump delivering rapid-acting insulin continuously.
                    </p>
                    <div className="bg-secondary p-2 rounded text-xs space-y-1">
                      <p><strong>Basal:</strong> Programmed hourly rates throughout day/night</p>
                      <p><strong>Bolus:</strong> User-activated doses with meals</p>
                      <p><strong>Advantages:</strong> Precise control, multiple basal rates, reduced hypoglycemia</p>
                      <p><strong>Flexibility:</strong> Very high - fully customizable</p>
                      <p><strong>Best for:</strong> Type 1, brittle diabetes, pregnancy</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold mb-1">Premixed/Biphasic Regimens</h4>
                    <p className="text-muted-foreground text-xs mb-2">
                      Fixed-ratio combinations of short and long-acting insulins.
                    </p>
                    <div className="bg-secondary p-2 rounded text-xs space-y-1">
                      <p><strong>Examples:</strong> 70/30, 75/25 regimens, twice daily</p>
                      <p><strong>Simplicity:</strong> Pre-mixed eliminates mixing steps</p>
                      <p><strong>Flexibility:</strong> Low - fixed ratios limit personalization</p>
                      <p><strong>Best for:</strong> Cognitive impairment, poor dexterity, simplicity preference</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary/30">
              <CardHeader>
                <CardTitle className="text-base">Dosing Considerations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold mb-1">Initial Dosing</p>
                  <p className="text-xs text-muted-foreground">
                    Typically 0.3-0.5 units/kg/day total divided into basal (50%) and bolus (50%) components. Adjusted based on glucose response.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Carbohydrate Counting</p>
                  <p className="text-xs text-muted-foreground">
                    Insulin-to-carb ratio (e.g., 1 unit per 10g carbs) determined for each patient. Adjusted based on postprandial glucose response.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Correction Factors</p>
                  <p className="text-xs text-muted-foreground">
                    1800 rule (regular insulin) or 1700 rule (rapid analogs) used to calculate how much 1 unit lowers glucose.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Target Ranges</p>
                  <div className="grid grid-cols-2 gap-2 text-xs mt-1">
                    <div className="bg-primary/10 p-2 rounded">
                      <p>Fasting: 70-130 mg/dL</p>
                    </div>
                    <div className="bg-accent/10 p-2 rounded">
                      <p>Postprandial: &lt;180 mg/dL</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Monitoring Insulin Therapy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-secondary">
                  <CardHeader className="pb-3">
                    <h4 className="font-semibold text-sm">Short-term Monitoring</h4>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <div>
                      <p className="font-medium text-xs">Fingerstick Blood Glucose</p>
                      <p className="text-xs text-muted-foreground">
                        4-6 times daily (before meals and bedtime). More frequent if hypoglycemia suspected.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-xs">Continuous Glucose Monitors (CGM)</p>
                      <p className="text-xs text-muted-foreground">
                        Real-time glucose trends every 5-15 minutes. Enables pattern recognition and hypoglycemia alarms.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-xs">Insulin Pump Data</p>
                      <p className="text-xs text-muted-foreground">
                        Tracks basal/bolus delivery, timing, and amounts. Downloadable for analysis.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-secondary">
                  <CardHeader className="pb-3">
                    <h4 className="font-semibold text-sm">Long-term Monitoring</h4>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <div>
                      <p className="font-medium text-xs">HbA1c (Glycated Hemoglobin)</p>
                      <p className="text-xs text-muted-foreground">
                        Every 3 months. Reflects average glucose over 2-3 months. Target &lt;7% for most patients.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-xs">Glucose Variability</p>
                      <p className="text-xs text-muted-foreground">
                        SD (standard deviation) or CV (coefficient of variation). Lower is better, reduced hypoglycemia risk.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-xs">Time in Range</p>
                      <p className="text-xs text-muted-foreground">
                        % time glucose 70-180 mg/dL. Target &gt;70%. More important than HbA1c alone.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-primary/30 bg-primary/5">
                <CardHeader className="pb-3">
                  <h4 className="font-semibold text-sm">Hypoglycemia Management</h4>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <div className="space-y-2">
                    <p className="font-medium text-xs">Recognition &amp; Symptoms:</p>
                    <p className="text-xs text-muted-foreground">
                      Tremor, tachycardia, sweating, anxiety (&lt;70 mg/dL), confusion, seizure (&lt;40 mg/dL). Not all diabetics feel symptoms (hypoglycemia unawareness).
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-xs">15-15 Rule (Treatment):</p>
                    <p className="text-xs text-muted-foreground">
                      Consume 15g fast carbs, recheck in 15 minutes. If still low, repeat. Once recovered, eat complex carbs to prevent rebound.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-xs">Prevention:</p>
                    <p className="text-xs text-muted-foreground">
                      Regular glucose monitoring, education on carb counting, awareness of activity effects, timing of insulin doses.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/30">
                <CardHeader className="pb-3">
                  <h4 className="font-semibold text-sm">Complications Monitoring</h4>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-xs text-muted-foreground">
                    Annual screening for diabetic complications helps ensure treatment is preventing long-term complications:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs">
                    <div>✓ Retinopathy - dilated eye exam</div>
                    <div>✓ Nephropathy - urine albumin, creatinine</div>
                    <div>✓ Neuropathy - monofilament testing</div>
                    <div>✓ Cardiovascular - ECG, lipids, BP</div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Evolution of Clinical Practice</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong>Animal Era:</strong> Limited dosing flexibility, less frequent glucose monitoring, higher hypoglycemia rates, poor glycemic control.
          </p>
          <p>
            <strong>Recombinant Era:</strong> Consistent insulin quality, more predictable dosing, improved regimen flexibility, better long-term outcomes.
          </p>
          <p>
            <strong>Analog Era:</strong> Physiologic regimens possible, rapid and ultra-rapid options for meal coverage, long-acting for basal needs, CGM and pump integration.
          </p>
          <p>
            <strong>Modern Era:</strong> Artificial intelligence for dose prediction, closed-loop systems, personalized targets, integration with EHR systems, telemedicine management.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
