
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users } from "lucide-react";
import { useEffect } from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Monthly Subscription",
      price: "R1,000/month",
      features: [
        "Access to all self-paced courses",
        "Discounts on certification exams",
        "Priority support",
        "Monthly progress reports",
      ],
    },
    {
      name: "Annual Subscription",
      price: "R10,000/year",
      features: [
        "All Monthly features",
        "2 months free",
        "Free certification exam vouchers",
        "1-on-1 mentoring sessions",
      ],
    },
    {
      name: "Enterprise Plan",
      price: "Custom pricing",
      features: [
        "All Annual features",
        "Custom learning paths",
        "Dedicated account manager",
        "Team analytics dashboard",
      ],
    },
  ];

    useEffect(() => {
    // Clear session storage to restart session-specific data
    sessionStorage.clear();
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <img 
              src="/Bij7Ox0h80RC5Csb-lM4J.jpg" 
              alt="Pricing overview" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-center mb-12 text-gradient">Choose the Plan That Works for You</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card key={index} className="flex flex-col bg-purple-900/10 border-purple-500/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-200">{plan.name}</CardTitle>
                    <p className="text-3xl font-bold mt-4 text-gradient">{plan.price}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-purple-200">
                          <Check className="h-5 w-5 text-purple-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Choose Plan</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16 bg-purple-900/10 rounded-lg p-8 text-center border border-purple-500/20">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Earn Discounts by Referring Friends</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto text-purple-200">
              Refer a friend to Forge Talent, and when they enroll in a course, you'll receive a discount
              on your next course. It's our way of saying thank you for spreading the word!
            </p>
            <Button variant="outline" className="gap-2 border-purple-500 text-purple-200 hover:text-purple-100" asChild>
              <a href="/referral">
                <Users className="h-5 w-5" />
                Learn More
              </a>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
