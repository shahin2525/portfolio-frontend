// components/Footer.tsx
import Link from "next/link";
import { Mail, Github, Linkedin, Facebook } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Brand and description */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="mb-4">
              <Link href="/" className="text-2xl font-bold">
                Md. Shahin
              </Link>
            </div>
            <p className="text-muted-foreground">
              Full-stack developer creating beautiful, functional digital
              experiences.
            </p>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="mb-4 text-lg font-semibold">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="mb-4 text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto: shahin451999@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://github.com/shahin2525"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/md-shahin-4b87712b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.facebook.com/taschowdury.chowdury/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} YourName. All rights reserved.</p>
          <p className="mt-2">
            Built with <span className="text-primary">Next.js</span>,{" "}
            <span className="text-primary">Tailwind CSS</span>, and{" "}
            <span className="text-primary">shadcn/ui</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
