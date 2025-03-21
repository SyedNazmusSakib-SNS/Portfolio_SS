import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Publications from "@/components/publications"
import Skills from "@/components/skills"
import Volunteering from "@/components/volunteering"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Publications />
      <Skills />
      <Volunteering />
      <Contact />
    </main>
  )
}

