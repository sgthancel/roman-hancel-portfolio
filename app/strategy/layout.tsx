import { ReactNode } from 'react'
import Link from 'next/link'
import { FileText, LogOut, LayoutDashboard, Menu, Shield } from 'lucide-react'
import { cookies } from 'next/headers'
import { strategyContent } from '@/lib/strategy-content'
import { Button } from '@/components/ui/button'
import { logoutAction } from '@/app/login/actions'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from '@/components/ui/sheet'

const navItems = Object.entries(strategyContent).map(([slug, data]) => ({
  title: data.title,
  href: `/strategy/${slug}`,
}))

export default async function StrategyLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies()
  const role = cookieStore.get('strategy_session')?.value || 'guest'

  const NavLinks = () => (
    <div className="space-y-1 py-4">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors"
        >
          <FileText className="h-4 w-4" />
          {item.title}
        </Link>
      ))}
    </div>
  )

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="p-4 border-b">
                  <div className="flex items-center gap-2 font-handwriting text-2xl text-primary">
                    <Shield className="h-5 w-5" />
                    Strategy Portal
                  </div>
                </div>
                <div className="px-2">
                  <NavLinks />
                </div>
              </SheetContent>
            </Sheet>
            
            <div className="hidden md:flex items-center gap-2 font-handwriting text-2xl text-primary">
              <Shield className="h-5 w-5" />
              Strategy Portal
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground mr-4">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Logged in as {role === 'founder' ? 'Founder' : 'Guest'}
            </div>
            <ThemeToggle />
            <form action={logoutAction}>
              <Button variant="outline" size="sm" className="gap-2">
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </form>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for Desktop */}
        <aside className="hidden md:flex w-64 flex-col border-r bg-muted/20">
          <div className="flex-1 overflow-auto py-2 px-3">
            <NavLinks />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto py-6 md:py-8 px-4 md:px-8 max-w-4xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
