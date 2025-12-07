"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">WordStack</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {/* About Us */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">About Us</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/about/beliefs">What We Believe</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/creed">Our Creed</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/story">Our Story</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/partners">Partner Communities</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Calendar */}
            <Link href="/calendar">
              <Button variant="ghost">Calendar</Button>
            </Link>

            {/* Get Involved */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Get Involved</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/get-involved/youth">Youth</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/get-involved/youth-group">Youth Group</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/get-involved/mother-child">Mother Child Groups</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/get-involved/bible-school">Bible School (TTZ)</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/get-involved/blog">Church Blog / News</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Contact</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/contact/pastors">Pastors</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact/music">Music Group</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact/it">IT Support</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact/admin">Admin</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Media */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Media</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/media/sermons">Sermons (Weekly)</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/media/lectures">Lectures (Theology)</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/media/youtube">Public Media (YouTube)</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/media/biblical-education">Biblical Education</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            {/* Language Selector */}
            <Select defaultValue="en">
              <SelectTrigger className="w-[100px] hidden sm:flex">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="it">Italiano</SelectItem>
                <SelectItem value="hi">हिन्दी</SelectItem>
              </SelectContent>
            </Select>

            <ThemeToggle />

            {/* Mobile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/about/beliefs">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/calendar">Calendar</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/get-involved/youth">Get Involved</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact/pastors">Contact</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/media/sermons">Media</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <div className="px-2 py-2">
                  <Select defaultValue="en">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="it">Italiano</SelectItem>
                      <SelectItem value="hi">हिन्दी</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
