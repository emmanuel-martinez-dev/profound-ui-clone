import { Header } from "@/components/dashboard/header"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { VisibilityChart } from "@/components/dashboard/visibility-chart"
import { BrandRanking } from "@/components/dashboard/brand-ranking"
import { MetricDisplay } from "@/components/dashboard/metric-display"

export default function Dashboard() {
  return (
    <div className="min-h-full">
      <Header />
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Brand Visibility Card */}
        <div className="xl:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Brand visibility</CardTitle>
              <CardDescription>
                Percentage of AI answers about Business credit cards that mention Rho
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MetricDisplay
                value={89.8}
                label="Visibility score"
                change={1}
                className="mb-6"
              />
              
              <VisibilityChart />
            </CardContent>
          </Card>
        </div>

        {/* Brand Industry Ranking Card */}
        <div className="xl:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Brand Industry Ranking</CardTitle>
            </CardHeader>
            <CardContent>
              <BrandRanking />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Topic Visibility Card - Placeholder for future expansion */}
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Topic visibility</CardTitle>
            <CardDescription>
              Performance across different business topics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center text-text-muted">
              <div className="text-center">
                <p className="text-lg mb-2">Additional Analytics</p>
                <p className="text-sm">Charts and metrics for topic-specific performance can be added here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
