"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const { setTheme, theme } = useTheme()
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter transition-colors">
          Shifat E Arman
        </Link>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.name}
            </Link>
          ))}
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden border-b bg-background/95 backdrop-blur-sm">
          <nav className="container flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

