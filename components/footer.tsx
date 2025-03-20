import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/30 dark:bg-muted/10">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Shifat E Arman Bhuiyan</h3>
          <p className="text-sm text-muted-foreground">
            Lecturer at University of Dhaka
            <br />
            Researcher in AI, Machine Learning & Computer Vision
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#publications" className="text-muted-foreground hover:text-foreground transition-colors">
                Publications
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Research Areas</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-muted-foreground">Artificial Intelligence</li>
            <li className="text-muted-foreground">Computer Vision</li>
            <li className="text-muted-foreground">Healthcare AI</li>
            <li className="text-muted-foreground">Smart Agriculture</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Connect</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Shifat E Arman Bhuiyan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

