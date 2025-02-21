import { Geist } from "next/font/google"
import { Github, Mail, Linkedin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"

const geist = Geist({
  subsets: ["latin"],
})

export default function Home() {
  const techStack = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Docker", "AWS", "Tailwind CSS"]

  return (
    <main className={`${geist.className} min-h-screen p-8 md:p-12 lg:p-24 space-y-16 max-w-6xl mx-auto`}>
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">codex</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Building exceptional digital experiences with cutting-edge web technologies.
        </p>
        <div className="flex items-center gap-4 pt-2">
          <Link href="mailto:contact@codex.dev" className="hover:text-primary">
            <Mail className="w-5 h-5" />
          </Link>
          <Link href="https://github.com/codex" className="hover:text-primary">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com/company/codex" className="hover:text-primary">
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
      </header>

      {/* About */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">About</h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          We specialize in crafting modern web solutions that empower businesses to thrive in the digital age. Our
          expertise in full-stack development, combined with a deep understanding of scalable architecture, enables us
          to build robust applications that drive growth and innovation.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="pb-4">
            <CardHeader>
              <CardTitle>Web Development</CardTitle>
              <CardDescription>
                Creating scalable and performant web applications with modern frameworks and best practices.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="pb-4">
            <CardHeader>
              <CardTitle>API Development</CardTitle>
              <CardDescription>Building robust and secure APIs that power your digital ecosystem.</CardDescription>
            </CardHeader>
          </Card>
          <Card className="pb-4">
            <CardHeader>
              <CardTitle>Technical Consulting</CardTitle>
              <CardDescription>
                Expert guidance on architecture, technology selection, and best practices.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-8 border-t text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Codex. All rights reserved.</p>
      </footer>
    </main>
  )
}

