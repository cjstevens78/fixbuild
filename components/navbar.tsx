"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/placeholder.svg?height=50&width=50" alt="FixBuild Logo" width={50} height={50} />
              <span className="font-bold text-gray-800">FixBuild</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-sky-500">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-sky-500">
              Services
            </Link>
            {/* Commented out for future development
            <Link href="/case-studies" className="text-gray-700 hover:text-sky-500">
              Case Studies
            </Link>
            */}
            <Link href="/about" className="text-gray-700 hover:text-sky-500">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-sky-500">
              Contact Us
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sky-500">
              <Phone className="h-4 w-4 mr-2" />
              <span>07478 885 247</span>
            </div>
            <Button className="bg-sky-500 hover:bg-sky-600">GET A QUOTE</Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-gray-700">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="text-gray-700 hover:text-sky-500">
                  Home
                </Link>
                <Link href="/services" className="text-gray-700 hover:text-sky-500">
                  Services
                </Link>
                {/* Commented out for future development
                <Link href="/case-studies" className="text-gray-700 hover:text-sky-500">
                  Case Studies
                </Link>
                */}
                <Link href="/about" className="text-gray-700 hover:text-sky-500">
                  About
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-sky-500">
                  Contact Us
                </Link>
                <div className="pt-4">
                  <div className="flex items-center text-sky-500 mb-4">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>07478 885 247</span>
                  </div>
                  <Button className="w-full bg-sky-500 hover:bg-sky-600">GET A QUOTE</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

