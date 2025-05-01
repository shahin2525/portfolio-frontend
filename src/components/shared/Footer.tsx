// components/Footer.tsx
import Link from "next/link";
import { Mail, Github, Linkedin, Facebook } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Brand and description */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="mb-4">
              <Link
                href="/"
                className="text-2xl font-bold text-slate-50 hover:text-blue-400 transition-colors"
              >
                Md. Shahin
              </Link>
            </div>
            <p className="text-slate-400">
              Full-stack developer creating beautiful, functional digital
              experiences.
            </p>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="mb-4 text-lg font-semibold text-slate-200">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="mb-4 text-lg font-semibold text-slate-200">
              Connect
            </h3>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-blue-900/30 border-slate-700"
              >
                <Link href="mailto:shahin451999@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4 text-slate-300" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-blue-900/30 border-slate-700"
              >
                <Link
                  href="https://github.com/shahin2525"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4 text-slate-300" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-blue-900/30 border-slate-700"
              >
                <Link
                  href="https://www.linkedin.com/in/md-shahin-4b87712b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4 text-slate-300" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-blue-900/30 border-slate-700"
              >
                <Link
                  href="https://www.facebook.com/taschowdury.chowdury/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4 text-slate-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>© {currentYear} Md. Shahin. All rights reserved.</p>
          <p className="mt-2">
            Built with <span className="text-blue-400">Next.js</span>,{" "}
            <span className="text-blue-400">Tailwind CSS</span>, and{" "}
            <span className="text-blue-400">shadcn/ui</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
