import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Shield,
  LightbulbOff,
  CheckCircle,
  Clock,
  FileText,
} from "lucide-react";
import { Zap, Activity, AlertTriangle, Gift } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-muted/50 to-background py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Shield className="h-20 w-20 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Empowering Citizens to Create Change
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Report street light issues in your area and track their status
              from complaint to repair. Together, we can make our streets safer
              and brighter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/report">
                <Button size="lg" className="text-lg px-8 py-3">
                  Report an Issue
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-3 bg-transparent"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Categories */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Common Issues We Help Solve
            </h2>
            <p className="text-muted-foreground text-lg">
              Keep your streets safe and bright—report streetlight problems and
              track repairs in real time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Short Circuit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Fixing dangerous electrical short circuits in streetlight
                  wiring
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Activity className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Voltage Surge</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Handling sudden power surges that damage streetlight systems
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <LightbulbOff className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Bulb Failure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Replacing faulty or burnt-out bulbs to restore proper lighting
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Light Flickering</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Repairing unstable or flickering lights that affect visibility
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              How LightFix Works
            </h2>
            <p className="text-muted-foreground text-lg">
              Simple, transparent, and effective streetlight repair reporting in
              four easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                1. Report
              </h3>
              <p className="text-muted-foreground">
                Submit details about the issue including photos, location, and
                description. Our system automatically categorizes your report.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                2. Track
              </h3>
              <p className="text-muted-foreground">
                Monitor the progress of your report as it moves from received to
                in progress. Get updates on the status and assigned department.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Gift className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                3. Rewards
              </h3>
              <p className="text-muted-foreground">
                Earn reward points for every valid complaint you submit.
                Contribute actively and get recognized for making streets safer
                and brighter.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                4. Resolve
              </h3>
              <p className="text-muted-foreground">
                Receive notification when your issue is resolved. Help build a
                better community through transparent civic engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of citizens who are actively improving their
            communities through LightFix
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/report">
              <Button size="lg" className="text-lg px-8 py-3">
                Report Your First Issue
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3 bg-transparent"
              >
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
