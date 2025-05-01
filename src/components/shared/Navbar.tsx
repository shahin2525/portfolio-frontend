// components/Navbar.tsx
"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Or your loading state
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-7xl flex h-14 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex flex-1 items-center justify-start">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">YourLogo</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-end">
          <NavigationMenu>
            <NavigationMenuList>
              {["dashboard", "projects", "blogs", "contact"].map((item) => (
                <NavigationMenuItem key={item} asChild>
                  <Link
                    href={`/${item}`}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden flex-1 items-center justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetTitle className="sr-only">Site Navigation</SheetTitle>
              <SheetDescription className="sr-only">
                Main navigation menu
              </SheetDescription>
              <nav className="flex flex-col space-y-3 pt-6">
                {["dashboard", "projects", "blogs", "contact"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item}`}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "w-full justify-start"
                    )}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
