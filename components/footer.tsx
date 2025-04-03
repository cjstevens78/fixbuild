import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FixBuild Limited</h3>
            <p className="mb-2">Building and renovation specialists in Fleet, Hampshire</p>
            <p className="text-gray-400">
              Mon - Sat: 8:00 - 17:30
              <br />
              Sunday: Closed
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/garage-conversions" className="text-gray-400 hover:text-white">
                  Garage Conversions
                </Link>
              </li>
              <li>
                <Link href="/services/bathrooms" className="text-gray-400 hover:text-white">
                  Bathrooms
                </Link>
              </li>
              <li>
                <Link href="/services/kitchens" className="text-gray-400 hover:text-white">
                  Kitchens
                </Link>
              </li>
              <li>
                <Link href="/services/handyman" className="text-gray-400 hover:text-white">
                  Handyman
                </Link>
              </li>
              <li>
                <Link href="/services/construction" className="text-gray-400 hover:text-white">
                  Construction & Renovation
                </Link>
              </li>
              <li>
                <Link href="/services/garden-rooms" className="text-gray-400 hover:text-white">
                  Garden Rooms & Sheds
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Office Address</h3>
            <p className="text-gray-400 mb-4">
              Fleet, Hampshire
              <br />
              GU51 3JT
            </p>
            <div className="flex items-center mb-2">
              <Phone className="h-4 w-4 mr-2 text-sky-500" />
              <span>07478 885 247</span>
            </div>
            <div className="flex items-center mb-4">
              <Mail className="h-4 w-4 mr-2 text-sky-500" />
              <span>info@fix-build.co.uk</span>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-sky-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-sky-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-sky-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <p>
            Copyright © {new Date().getFullYear()} FixBuild Limited - Registered Company 12345678 - Garage Conversion
            and Home Improvements
          </p>
        </div>
      </div>
    </footer>
  )
}

