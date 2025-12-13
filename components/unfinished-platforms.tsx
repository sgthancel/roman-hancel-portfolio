"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Brain, Shield, Zap, Globe, MapPin, Wrench, Search, Clock, BarChart3 } from "lucide-react"

const platforms = [
  {
    title: "Land Surveyor Portfolio",
    description:
      "Professional portfolio platform for land surveyors with AI-powered document redaction and secure viewing",
    url: "https://land-surveyor-portfolio.vercel.app/",
    icon: <Wrench className="h-6 w-6" />,
    skills: ["AI Document Processing", "Security Implementation", "SaaS Architecture", "Payment Integration"],
    highlights: [
      "Automatic sensitive information redaction",
      "Screenshot protection & secure viewing",
      "Tiered pricing with Stripe integration",
      "Custom branding & analytics dashboard",
    ],
    techShowcase:
      "Demonstrates expertise in AI/ML integration, security-first development, and building scalable SaaS platforms with complex user management systems.",
  },
  {
    title: "RedactAI",
    description:
      "AI-powered document redaction platform that intelligently removes sensitive information from PDFs and images",
    url: "https://redact-ai-delta.vercel.app/",
    icon: <Shield className="h-6 w-6" />,
    skills: ["Machine Learning", "Computer Vision", "API Development", "Document Processing"],
    highlights: [
      "AI-powered sensitive data detection",
      "Multi-format support (PDF, images, scans)",
      "RESTful API for enterprise integration",
      "Intelligent redaction algorithms",
    ],
    techShowcase:
      "Showcases advanced AI/ML implementation, computer vision expertise, and ability to build enterprise-grade APIs with complex document processing workflows.",
  },
  {
    title: "Survey Accuracy Studio",
    description:
      "Office-phase automation platform for land surveyors with AI-powered accuracy analysis and quality control",
    url: "https://ai-autocad-automation.vercel.app/",
    icon: <Brain className="h-6 w-6" />,
    skills: ["CAD Integration", "Geometric Algorithms", "Data Parsing", "Industry Standards"],
    highlights: [
      "PDF/deed parsing with bearing extraction",
      "Intelligent curve detection algorithms",
      "ALTA/NSPS compliance automation",
      "Multi-format export (DXF/DWG/LandXML)",
    ],
    techShowcase:
      "Demonstrates deep domain expertise, complex geometric algorithm implementation, and ability to automate industry-specific workflows with precision.",
  },
  {
    title: "JamStart",
    description:
      "AI-powered startup accelerator platform for Caribbean builders with funding, mentorship, and media integration",
    url: "https://jamaica-startup.vercel.app/",
    icon: <Zap className="h-6 w-6" />,
    skills: ["Community Platform", "Content Management", "Video Integration", "Startup Ecosystem"],
    highlights: [
      "Startup accelerator program management",
      "AI training bootcamp platform",
      "TV-style media series integration",
      "Funding & mentorship matching system",
    ],
    techShowcase:
      "Shows ability to build community-driven platforms, integrate multimedia content, and create systems that connect entrepreneurs with resources and opportunities.",
  },
  {
    title: "GeoStudio",
    description: "Transform geographic stories into cinematic map experiences with AI-powered narration and animation",
    url: "https://geo-studio.vercel.app/",
    icon: <MapPin className="h-6 w-6" />,
    skills: ["Geospatial Processing", "Video Generation", "AI Narration", "Animation Systems"],
    highlights: [
      "AI-powered location detection from text",
      "Cinematic map animation generation",
      "Premium AI voice synthesis",
      "4K video export capabilities",
    ],
    techShowcase:
      "Demonstrates expertise in geospatial technologies, video processing, AI integration for content creation, and building creative tools for storytellers.",
  },
  {
    title: "AI Presentation Studio",
    description:
      "AI-powered platform that creates professional presentations using multiple AI models for content, images, video, and narration",
    url: "https://ai-powerpoint-two.vercel.app/",
    icon: <Brain className="h-6 w-6" />,
    skills: ["Multi-Modal AI", "Content Generation", "Video Processing", "Text-to-Speech"],
    highlights: [
      "LLaMA 3 for intelligent content creation",
      "SDXL for custom image generation",
      "AnimateDiff for video clip creation",
      "Bark TTS for professional narration",
    ],
    techShowcase:
      "Demonstrates expertise in orchestrating multiple AI models, building complex creative workflows, and integrating diverse technologies (LLMs, image generation, video processing, TTS) into a cohesive user experience.",
  },
  {
    title: "Prep Course AI",
    description:
      "AI-powered platform that generates comprehensive study plans from public educational content for licensing exams and certifications",
    url: "https://prep-course-ai.vercel.app/",
    icon: <Brain className="h-6 w-6" />,
    skills: ["Educational AI", "Content Generation", "Learning Analytics", "Community Features"],
    highlights: [
      "AI-generated personalized learning paths",
      "Interactive quizzes and progress tracking",
      "Multi-subject exam preparation support",
      "Community study groups integration",
    ],
    techShowcase:
      "Demonstrates expertise in EdTech innovation, AI-powered content generation, learning management systems, and building scalable educational platforms that adapt to individual learning needs.",
  },
  {
  title: "AYC - AI Startup Scout",
  description:
    "AI-powered platform for founders, investors, and accelerators to discover groundbreaking startup solutions and generate new ideas",
  url: "https://ayc-ten.vercel.app/",
  icon: <Search className="h-6 w-6" />,
  skills: ["AI Analysis", "Startup Ecosystem", "Data Insights", "Partnership Matching"],
  highlights: [
    "Data-driven insights from Y Combinator directories",
    "Tailored recommendations for startup matches",
    "Partnership opportunity identification",
    "Intelligent matching and idea generation",
  ],
  techShowcase:
    "Demonstrates expertise in building AI-powered discovery platforms, processing large datasets from startup ecosystems, and creating intelligent matching algorithms for complex business relationships.",
},
{
  title: "TimeAI - AI-Powered Timesheet Management",
  description:
    "Voice-powered AI timesheet platform that streamlines time tracking for teams through intelligent automation",
  url: "https://ai-timesheet-app.vercel.app/",
  icon: <Clock className="h-6 w-6" />,
  skills: ["Voice AI", "Team Management", "Payroll Integration", "Smart Analytics"],
  highlights: [
    "Voice-first time logging with AI processing",
    "Real-time analytics dashboards",
    "Multi-platform payroll exports (QuickBooks, Gusto, ADP)",
    "Smart suggestions based on patterns and calendar data",
  ],
  techShowcase:
    "Showcases advanced voice AI integration, enterprise payroll system connectivity, and building scalable SaaS platforms with tiered pricing and team management capabilities.",
},
{
  title: "Ambrose AI - Government Research Platform",
  description:
    "Personalized AI research agent for government insights with interactive global trend analysis and reporting",
  url: "https://ai-timesheet-app-1a5n.vercel.app/",
  icon: <BarChart3 className="h-6 w-6" />,
  skills: ["Government Research", "Data Visualization", "Interactive Mapping", "AI Reporting"],
  highlights: [
    "Interactive world map for global governance trends",
    "Drill-down analysis to states and provinces",
    "Automated report generation and search",
    "AI-powered research agent workflow",
  ],
  techShowcase:
    "Demonstrates expertise in building government-grade research platforms, complex geospatial data visualization, and AI-powered analytical tools for policy and governance insights.",
},
{
  title: "PaywallOS",
  description:
    "Protect your features. Grow your revenue. Unlock your app's revenue potential with intelligent paywall management and monetization tools",
  url: "https://pay-wall-os.vercel.app/",
  icon: <Shield className="h-6 w-6" />,
  skills: ["Payment Systems", "Feature Gating", "Revenue Analytics", "Subscription Management"],
  highlights: [
    "Intelligent feature access control",
    "Multi-tier subscription management",
    "Revenue optimization analytics",
    "Easy integration with existing apps",
  ],
  techShowcase:
    "Showcases expertise in building monetization platforms, payment system integration, subscription lifecycle management, and creating developer-friendly tools for SaaS revenue growth.",
},
]

export default function UnfinishedPlatforms() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Unfinished Platforms</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Innovative projects showcasing advanced development skills across AI, geospatial technologies, and
          industry-specific automation. Each platform demonstrates expertise in solving complex, real-world problems
          with cutting-edge technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {platforms.map((platform, index) => (
          <Card
            key={index}
            className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-background to-muted/20"
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  {platform.icon}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {platform.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground leading-relaxed">
                {platform.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {platform.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                <ul className="space-y-2">
                  {platform.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="text-sm text-muted-foreground flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Showcase */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-primary" />
                  Developer Skills Showcase
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{platform.techShowcase}</p>
              </div>

              {/* Visit Platform Button */}
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                  Explore Platform
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16 p-8 bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl">
        <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Build Something Amazing?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          These platforms represent just a glimpse of what's possible when combining domain expertise with cutting-edge
          technology. Let's discuss how we can bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start a Project
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/20 text-primary hover:bg-primary/10 bg-transparent"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Completed Platforms
          </Button>
        </div>
      </div>
    </section>
  )
}
