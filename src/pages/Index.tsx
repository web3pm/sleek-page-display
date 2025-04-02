import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Layers, Zap, LineChart, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-10 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-br from-indigo-light to-indigo rounded-md"></div>
              <span className="ml-2 text-lg font-medium text-navy">Horizon</span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#features" className="text-sm text-gray-600 hover:text-navy transition-colors">Features</a>
              <a href="#" className="text-sm text-gray-600 hover:text-navy transition-colors">Solutions</a>
              <a href="#" className="text-sm text-gray-600 hover:text-navy transition-colors">Resources</a>
              <a href="/pricing" className="text-sm text-gray-600 hover:text-navy transition-colors">Pricing</a>
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy leading-tight mb-6">
              Beautiful interfaces, <br />
              <span className="bg-clip-text text-transparent bg-hero-gradient">powerful experiences</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Create stunning user interfaces that delight your users and elevate your brand with our modern design system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo hover:bg-indigo-dark">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Live Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Powerful Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to create beautiful interfaces and deliver exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Code className="h-8 w-8 text-indigo" />}
              title="Clean Code"
              description="Well-structured code that's easy to read, maintain and extend. Built with modern best practices."
            />
            <FeatureCard 
              icon={<Layers className="h-8 w-8 text-indigo" />}
              title="Component-based"
              description="Modular components that can be combined to build complex interfaces with consistent design."
            />
            <FeatureCard 
              icon={<Zap className="h-8 w-8 text-indigo" />}
              title="Optimized Performance"
              description="Lightning-fast performance with optimized code and efficient rendering techniques."
            />
            <FeatureCard 
              icon={<LineChart className="h-8 w-8 text-indigo" />}
              title="Analytics"
              description="Built-in analytics to track user interactions and make data-driven decisions."
            />
            <FeatureCard 
              icon={<Shield className="h-8 w-8 text-indigo" />}
              title="Security"
              description="Enterprise-grade security features to keep your application and user data safe."
            />
            <FeatureCard 
              icon={<svg className="h-8 w-8 text-indigo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>}
              title="Accessibility"
              description="WCAG-compliant components that ensure your application is accessible to all users."
            />
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
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => window.location.href = '/pricing'}>
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Card className="animate-fade-in hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="mb-4 rounded-full bg-gray-50 w-16 h-16 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-navy mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Index;
