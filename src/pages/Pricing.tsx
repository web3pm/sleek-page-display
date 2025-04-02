
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, CreditCard, Shield, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

const PricingToggle = ({ annually, setAnnually }: { annually: boolean; setAnnually: (value: boolean) => void }) => {
  return (
    <div className="flex items-center justify-center space-x-4 mb-12">
      <span className={`text-sm font-medium ${!annually ? 'text-navy' : 'text-gray-500'}`}>Monthly</span>
      <div
        className="w-16 h-8 bg-gray-200 rounded-full p-1 cursor-pointer"
        onClick={() => setAnnually(!annually)}
      >
        <div 
          className={`w-6 h-6 rounded-full transform transition-transform duration-300 ${
            annually ? 'translate-x-8 bg-indigo' : 'translate-x-0 bg-navy'
          }`}
        />
      </div>
      <div className="flex items-center">
        <span className={`text-sm font-medium ${annually ? 'text-navy' : 'text-gray-500'}`}>Annually</span>
        <span className="ml-2 py-1 px-2 text-xs bg-indigo/20 text-indigo rounded-full font-medium">
          Save 20%
        </span>
      </div>
    </div>
  );
};

const PricingCard = ({ 
  plan, 
  price, 
  annually, 
  description, 
  features, 
  highlighted = false,
  icon: Icon
}: { 
  plan: string; 
  price: number; 
  annually: boolean;
  description: string; 
  features: string[];
  highlighted?: boolean;
  icon: React.ElementType;
}) => {
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);

  const handleSubscribe = () => {
    toast({
      title: `${plan} Plan Selected`,
      description: `You've selected the ${plan} plan. This would proceed to checkout.`,
    });
  };

  const annualPrice = Math.floor(price * 12 * 0.8);
  const displayPrice = annually ? annualPrice : price;

  return (
    <Card 
      className={`animate-fade-in flex flex-col w-full transform transition-all duration-300 ${
        highlighted ? 'border-indigo shadow-lg' : 'border-gray-200'
      } ${isHovered ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className={`${highlighted ? 'bg-indigo text-white' : 'bg-gray-50'} rounded-t-lg p-6`}>
        <div className="flex items-center gap-3 mb-2">
          <Icon className={`h-6 w-6 ${highlighted ? 'text-white' : 'text-indigo'}`} />
          <CardTitle className="text-xl">{plan}</CardTitle>
        </div>
        <p className="text-sm opacity-80">{description}</p>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <div className="mb-6">
          <div className="flex items-end">
            <span className="text-4xl font-bold">${displayPrice}</span>
            <span className="text-gray-500 ml-2">/{annually ? 'year' : 'month'}</span>
          </div>
          {annually && (
            <p className="text-sm text-indigo mt-1">
              ${price}/mo when billed monthly
            </p>
          )}
        </div>

        <Separator className="my-4" />
        
        <ul className="space-y-3 mt-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className={`h-5 w-5 mr-2 flex-shrink-0 ${highlighted ? 'text-indigo' : 'text-gray-600'}`} />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          className={`w-full ${highlighted ? 'bg-indigo hover:bg-indigo-dark' : 'bg-navy hover:bg-navy-light'}`}
          onClick={handleSubscribe}
        >
          <CreditCard className="mr-2 h-4 w-4" />
          {highlighted ? 'Get Started' : 'Subscribe'}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Pricing = () => {
  const [annually, setAnnually] = useState(true);
  const [animateFeature, setAnimateFeature] = useState<number | null>(null);

  const handleFeatureHighlight = (index: number) => {
    setAnimateFeature(index);
    setTimeout(() => setAnimateFeature(null), 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - kept from original design */}
      <nav className="fixed w-full z-10 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-br from-indigo-light to-indigo rounded-md"></div>
              <span className="ml-2 text-lg font-medium text-navy">Horizon</span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="/" className="text-sm text-gray-600 hover:text-navy transition-colors">Home</a>
              <a href="#features" className="text-sm text-gray-600 hover:text-navy transition-colors">Features</a>
              <a href="#" className="text-sm text-gray-600 hover:text-navy transition-colors">Solutions</a>
              <a href="/pricing" className="text-sm text-navy font-medium transition-colors">Pricing</a>
              <Button variant="outline" className="ml-4">Log In</Button>
              <Button className="bg-indigo hover:bg-indigo-dark">Sign Up</Button>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Pricing Header Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy leading-tight mb-6">
              Simple, transparent
              <span className="bg-clip-text text-transparent bg-hero-gradient"> pricing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the perfect plan that works for you or your team. No hidden fees, no surprises.
            </p>
          </div>
          
          <PricingToggle annually={annually} setAnnually={setAnnually} />

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <PricingCard
              plan="Starter"
              price={12}
              annually={annually}
              description="Perfect for individuals and small projects."
              features={[
                "Up to 3 projects",
                "Basic components",
                "Community support",
                "1GB storage",
                "Monthly updates"
              ]}
              icon={Users}
            />
            
            <PricingCard
              plan="Pro"
              price={29}
              annually={annually}
              description="Ideal for professionals and growing teams."
              features={[
                "Unlimited projects",
                "Advanced components",
                "Priority support",
                "10GB storage",
                "Weekly updates",
                "API access",
                "Custom themes"
              ]}
              highlighted={true}
              icon={CreditCard}
            />
            
            <PricingCard
              plan="Enterprise"
              price={79}
              annually={annually}
              description="For large teams and organizations."
              features={[
                "Unlimited everything",
                "Dedicated support",
                "Custom integrations",
                "100GB storage",
                "Daily updates",
                "Advanced security",
                "Team management",
                "Analytics dashboard"
              ]}
              icon={Shield}
            />
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Compare Features</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-4 text-left text-lg font-semibold text-navy">Feature</th>
                  <th className="pb-4 text-center text-lg font-medium text-gray-600">Starter</th>
                  <th className="pb-4 text-center text-lg font-medium text-indigo">Pro</th>
                  <th className="pb-4 text-center text-lg font-medium text-gray-600">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Number of Projects", starter: "3", pro: "Unlimited", enterprise: "Unlimited" },
                  { name: "Team Members", starter: "1", pro: "5", enterprise: "Unlimited" },
                  { name: "Storage", starter: "1GB", pro: "10GB", enterprise: "100GB" },
                  { name: "API Access", starter: "", pro: "✓", enterprise: "✓" },
                  { name: "Custom Domain", starter: "", pro: "✓", enterprise: "✓" },
                  { name: "Analytics", starter: "Basic", pro: "Advanced", enterprise: "Enterprise" },
                  { name: "Support", starter: "Community", pro: "Priority", enterprise: "Dedicated" },
                  { name: "White Labeling", starter: "", pro: "", enterprise: "✓" },
                ].map((feature, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-200 hover:bg-gray-100 transition-colors ${
                      animateFeature === index ? 'animate-pulse bg-indigo/10' : ''
                    }`}
                    onClick={() => handleFeatureHighlight(index)}
                  >
                    <td className="py-4 text-left font-medium text-navy">{feature.name}</td>
                    <td className="py-4 text-center text-gray-700">
                      {feature.starter || <span className="text-gray-400">—</span>}
                    </td>
                    <td className="py-4 text-center text-gray-700 font-medium">
                      {feature.pro || <span className="text-gray-400">—</span>}
                    </td>
                    <td className="py-4 text-center text-gray-700">
                      {feature.enterprise || <span className="text-gray-400">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            {[
              {
                question: "Can I change my plan later?",
                answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes to your subscription will be applied at the end of your billing cycle."
              },
              {
                question: "How does billing work?",
                answer: "We offer both monthly and annual billing options. Annual plans come with a 20% discount. You'll be charged at the beginning of each billing period."
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 14-day money-back guarantee. If you're not satisfied with our service, you can request a full refund within the first 14 days of your subscription."
              },
              {
                question: "Is there a free trial?",
                answer: "We offer a 7-day free trial on all our plans. No credit card required to start your trial."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg p-6 hover:border-indigo transition-colors cursor-pointer"
                onClick={() => setAnimateFeature(index + 8)}
              >
                <h3 className={`text-lg font-semibold mb-2 ${animateFeature === index + 8 ? 'text-indigo' : 'text-navy'}`}>
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-navy rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers building better interfaces with our platform. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo hover:bg-indigo-light text-white">
                Start Your Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - kept from original design */}
      <footer className="py-12 px-4 sm:px-6 border-t border-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-navy mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo">Features</a></li>
                <li><a href="/pricing" className="text-sm text-gray-600 hover:text-indigo">Pricing</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo">Integrations</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-navy mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo">About</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo">Blog</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo">Careers</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-navy mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo">Case Studies</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo">Help Center</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-navy mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo">Twitter</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo">LinkedIn</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo">GitHub</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-gradient-to-br from-indigo-light to-indigo rounded-md"></div>
                <span className="ml-2 text-lg font-medium text-navy">Horizon</span>
              </div>
              <p className="text-sm text-gray-500 mt-4 md:mt-0">
                © 2023 Horizon. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
