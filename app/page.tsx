import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Twitter, Facebook, Instagram, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import UnfinishedPlatforms from "../components/unfinished-platforms"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-handwriting text-2xl">
            <span className="text-primary">Roman Hancel</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/strategy" className="text-sm font-medium hover:text-primary">
              Strategy
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="#donate" className="text-sm font-medium hover:text-primary">
              Support
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <ThemeToggle />
          </nav>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-handwriting tracking-tight">
              Building Tools to Modernize <span className="text-primary">Surveying & GIS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px]">
              Professional applications that help surveyors track experience, manage data, and streamline workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="#projects">View My Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image src="/profile-parchment.png" alt="Roman Hancel" fill className="object-cover object-top" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-24 space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-handwriting tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Professional applications built to support the surveying industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Existing Cards */}
          <Card className="card-highlight">
            <CardHeader>
              <CardTitle className="font-handwriting text-2xl">SurveyPath</CardTitle>
              <CardDescription>surveypath.net</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/cards/surveypath.jpg"
                alt="SurveyPath"
                width={350}
                height={200}
                className="rounded-md mb-4 object-cover w-full"
              />
              <p className="text-sm text-muted-foreground">
                Licensure experience tracker for Surveyors-In-Training. Built to support professional growth and fight
                back against toxic gatekeeping.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="https://surveypath.net" target="_blank" rel="noopener noreferrer">
                  Visit Site
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-highlight">
            <CardHeader>
              <CardTitle className="font-handwriting text-2xl">Survey Manager Website</CardTitle>
              <CardDescription>surveymanagerapp.com</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/cards/survey-manager-web.jpg"
                alt="Survey Manager Website"
                width={350}
                height={200}
                className="rounded-md mb-4 object-cover w-full"
              />
              <p className="text-sm text-muted-foreground">
                Modern web platform for managing survey data, clients, maps, and exports. Includes the SurveyBot AI
                chatbot, custom AI services, and website templates for surveying professionals.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button asChild className="w-full">
                <a href="https://surveymanagerapp.com" target="_blank" rel="noopener noreferrer">
                  Visit Site
                </a>
              </Button>
              <div className="grid grid-cols-2 gap-2 w-full">
                <Button asChild variant="outline" className="w-full">
                  <a href="https://surveymanagerapp.com/services/ai" target="_blank" rel="noopener noreferrer">
                    SurveyBot &amp; AI
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://surveymanagerapp.com/website_templates" target="_blank" rel="noopener noreferrer">
                    Templates
                  </a>
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card className="card-highlight">
            <CardHeader>
              <CardTitle className="font-handwriting text-2xl">Survey Manager App</CardTitle>
              <CardDescription>app.surveymanagerapp.com</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/cards/survey-manager-app.jpg"
                alt="Survey Manager App"
                width={350}
                height={200}
                className="rounded-md mb-4 object-cover w-full"
              />
              <p className="text-sm text-muted-foreground">
                Offline-ready version of the Survey Manager designed for field use and data reliability. Perfect for
                remote locations.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="https://app.surveymanagerapp.com" target="_blank" rel="noopener noreferrer">
                  Visit Site
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* New Cards */}
          <Card className="card-highlight">
            <CardHeader>
              <CardTitle className="font-handwriting text-2xl">Elevatr</CardTitle>
              <CardDescription>elevatr.dev</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/cards/elevatr.jpg"
                alt="Elevatr"
                width={350}
                height={200}
                className="rounded-md mb-4 object-cover w-full"
              />
              <p className="text-sm text-muted-foreground">
                A platform for tracking professional experience, documenting work, and preparing for licensure.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="https://elevatr.dev" target="_blank" rel="noopener noreferrer">
                  Visit Site
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-highlight">
            <CardHeader>
              <CardTitle className="font-handwriting text-2xl">Vibe Marketing Studio</CardTitle>
              <CardDescription>vibemarketingstudio.com</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/cards/vibemarketingstudio.jpg"
                alt="Vibe Marketing Studio"
                width={350}
                height={200}
                className="rounded-md mb-4 object-cover w-full"
              />
              <p className="text-sm text-muted-foreground">
                Powerful marketing automation platform with AI-powered automated social media marketing, including auto-posting, content generation, and analytics.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="https://vibemarketingstudio.com" target="_blank" rel="noopener noreferrer">
                  Visit Site
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-highlight">
            <CardHeader>
              <CardTitle className="font-handwriting text-2xl">AI Tracker</CardTitle>
              <CardDescription>aitracker.dev</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/cards/aitracker.jpg"
                alt="AI Tracker"
                width={350}
                height={200}
                className="rounded-md mb-4 object-cover w-full"
              />
              <p className="text-sm text-muted-foreground">
                Discover the latest AI platforms, tools, and market trends, providing a comprehensive guide to the AI ecosystem.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="https://www.aitracker.dev" target="_blank" rel="noopener noreferrer">
                  Visit Site
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-highlight">
            <CardHeader>
              <CardTitle className="font-handwriting text-2xl">Folder Copilot</CardTitle>
              <CardDescription>AI-Powered File Management</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/cards/foldercopilot.jpg"
                alt="Folder Copilot"
                width={350}
                height={200}
                className="rounded-md mb-4 object-cover w-full"
              />
              <p className="text-sm text-muted-foreground">
                AI-powered file organization tool for students, developers, and professionals. Automatically generates
                course folders from syllabi, creates project scaffolds with boilerplate code, and builds customized
                organizational systems.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="https://foldercopilot.com" target="_blank" rel="noopener noreferrer">
                  Visit Site
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-highlight">
            <CardHeader>
              <CardTitle className="font-handwriting text-2xl">CareVoice AI</CardTitle>
              <CardDescription>Healthcare Communication Platform</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/cards/carevoiceai.jpg"
                alt="CareVoice AI"
                width={350}
                height={200}
                className="rounded-md mb-4 object-cover w-full"
              />
              <p className="text-sm text-muted-foreground">
                Healthcare patient protection platform featuring a 24/7 AI emergency hotline for symptom triage and
                automated care report generation. Protects vulnerable patients through documentation and legal-grade medical
                records.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="https://carevoiceai.org" target="_blank" rel="noopener noreferrer">
                  Visit Site
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-highlight">
            <CardHeader>
              <CardTitle className="font-handwriting text-2xl">OpenVerb</CardTitle>
              <CardDescription>openverb.org</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/cards/openverb.jpg"
                alt="OpenVerb"
                width={350}
                height={200}
                className="rounded-md mb-4 object-cover w-full"
              />
              <p className="text-sm text-muted-foreground">
                The open standard for AI actions. A unified framework for building and integrating AI-powered actions across platforms.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="https://www.openverb.org/" target="_blank" rel="noopener noreferrer">
                  Visit Site
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-highlight">
            <CardHeader>
              <CardTitle className="font-handwriting text-2xl">Topics</CardTitle>
              <CardDescription>topics-beta.vercel.app</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/cards/topics.jpg"
                alt="Topics"
                width={350}
                height={200}
                className="rounded-md mb-4 object-cover w-full"
              />
              <p className="text-sm text-muted-foreground">
                AI-assisted music about real life. Create, share, and discover music that tells authentic stories powered by AI collaboration.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="https://topics-beta.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Visit Site
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-2 border-primary card-highlight">
            <CardHeader>
              <CardTitle className="font-handwriting text-2xl">Roman Hancel Digital Twin</CardTitle>
              <CardDescription>AI-Powered Digital Assistant</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/cards/digital-twin.jpg"
                alt="Roman Hancel Digital Twin"
                width={350}
                height={200}
                className="rounded-md mb-4 object-cover w-full"
              />
              <p className="text-sm text-muted-foreground">
                Chat with my AI digital twin! Ask questions about my work, get advice on surveying and development, or discuss project ideas 24/7.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="https://www.vibeflyers.com/twin/6snlg3gjb1prbk4w9yd40q" target="_blank" rel="noopener noreferrer">
                  Chat with Digital Twin
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-highlight">
            <CardHeader>
              <CardTitle className="font-handwriting text-2xl">GroceryAI</CardTitle>
              <CardDescription>grocery.openverb.org</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/cards/groceryai.jpg"
                alt="GroceryAI"
                width={350}
                height={200}
                className="rounded-md mb-4 object-cover w-full"
              />
              <p className="text-sm text-muted-foreground">
                Your intelligent grocery assistant. AI-powered pantry tracking, expiration alerts, and instant grocery ordering.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="https://grocery.openverb.org/" target="_blank" rel="noopener noreferrer">
                  Visit Site
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-highlight">
            <CardHeader>
              <CardTitle className="font-handwriting text-2xl">OpenBlog</CardTitle>
              <CardDescription>openblog.openverb.org</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/cards/openblog.jpg"
                alt="OpenBlog"
                width={350}
                height={200}
                className="rounded-md mb-4 object-cover w-full"
              />
              <p className="text-sm text-muted-foreground">
                Blogs were never meant to be silent. OpenBlog restores the web's missing connective tissue by turning blogs into visible, navigable, and connected streams of thought.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="https://openblog.openverb.org/" target="_blank" rel="noopener noreferrer">
                  Visit Site
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-highlight">
            <CardHeader>
              <CardTitle className="font-handwriting text-2xl">OpenMusicAtlas</CardTitle>
              <CardDescription>openmusicatlas.org</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/cards/openmusicatlas.jpg"
                alt="OpenMusicAtlas"
                width={350}
                height={200}
                className="rounded-md mb-4 object-cover w-full"
              />
              <p className="text-sm text-muted-foreground">
                The world, mapped in music. An atlas where places are the subject of the music: one original song for each of 203 places, each heard in its own musical tradition.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="https://openmusicatlas.org/" target="_blank" rel="noopener noreferrer">
                  Visit Site
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Unfinished Platforms Section */}
      <UnfinishedPlatforms />

      {/* Books & Music Section */}
      <section className="container py-24 space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-handwriting tracking-tight">Books & Music</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Creative works and resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
          <Card className="card-highlight">
            <CardHeader>
              <CardTitle className="font-handwriting text-2xl">Built From the Ground Up</CardTitle>
              <CardDescription>By Roman Hancel</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/cards/built-from-the-ground-up.jpg"
                alt="Built From the Ground Up"
                width={350}
                height={200}
                className="rounded-md mb-4 object-cover w-full"
              />
              <p className="text-sm text-muted-foreground">
                A comprehensive summary of the techniques and methodologies used to build my applications. Learn the strategies behind successful app development.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="https://6829743742592.gumroad.com/l/builtfromthegroundup" target="_blank" rel="noopener noreferrer">
                  Get the Book
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-highlight">
            <CardHeader>
              <CardTitle className="font-handwriting text-2xl">The Smear Campaign</CardTitle>
              <CardDescription>Debut Album by Roman Hancel</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/cards/the-smear-campaign.jpg"
                alt="The Smear Campaign"
                width={350}
                height={200}
                className="rounded-md mb-4 object-cover w-full"
              />
              <p className="text-sm text-muted-foreground">
                My debut album featuring AI-assisted music about real life. Available on YouTube and Topics.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button asChild className="w-full">
                <a href="https://topics-beta.vercel.app/albums/the-smear-campaign" target="_blank" rel="noopener noreferrer">
                  Listen on Topics
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <a href="https://youtube.com/playlist?list=PLUPR89uUIsA84wyqSY230lMMbQ_GtWQPs&si=E59ugY6qs9Mqv20X" target="_blank" rel="noopener noreferrer">
                  Listen on YouTube
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="bg-muted py-24">
        <div className="container space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-handwriting tracking-tight">Support My Work</h2>
            <p className="text-muted-foreground max-w-[700px]">
              Your contributions help keep these tools alive and growing. Every donation makes a difference.
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-[#6772E5] hover:bg-[#5469D4]">
              <a href="https://buy.stripe.com/5kAcPU1PsfE0d5C8ww" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2">💳 Donate via Stripe</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-24 space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-handwriting tracking-tight">Get In Touch</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Have questions or want to discuss a project? Send me a message.
          </p>
        </div>

        <div className="max-w-[600px] mx-auto mt-8">
          <form className="space-y-4" action="https://formspree.io/f/mgvkoadq" method="POST">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input name="name" placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <Input name="email" type="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="space-y-2">
              <Textarea name="message" placeholder="Your Message" className="min-h-[150px]" required />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="container py-12 space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-handwriting tracking-tight">Follow Me</h2>
          <p className="text-muted-foreground max-w-[700px]">Connect with me on social media</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <Link
            href="https://github.com/sgthancel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <Github className="h-8 w-8" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/roman-hancel-bb0b49196"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <Linkedin className="h-8 w-8" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://x.com/surveydbapp?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <Twitter className="h-8 w-8" />
            <span className="sr-only">Twitter/X</span>
          </Link>
          <Link
            href="https://www.facebook.com/land.surveyor.gis.database.manager.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <Facebook className="h-8 w-8" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="https://www.instagram.com/romanhancel/profilecard/?igsh=MW5lcmhja2hoM2hveA=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <Instagram className="h-8 w-8" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="http://www.youtube.com/@GeoDevSpace"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
            <span className="sr-only">YouTube</span>
          </Link>
          <Link href="mailto:surveypath1@gmail.com" className="text-muted-foreground hover:text-primary">
            <Mail className="h-8 w-8" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container py-8 md:py-12 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Roman Hancel. All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              <span className="font-handwriting text-lg">Built with ❤️ for the future of surveying</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
