import Link from "next/link"
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">KOC</span>
            </div>
            <p className="text-gray-300 text-sm">
              Kathmandu Orientation Company - Empowering Nepal's workforce through comprehensive training programs.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Training Programs */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Training Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-300">Pre-departure Orientation</span>
              </li>
              <li>
                <span className="text-gray-300">Language Classes</span>
              </li>
              <li>
                <span className="text-gray-300">IT Training</span>
              </li>
              <li>
                <span className="text-gray-300">Professional Development</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📍 Kathmandu, Nepal</li>
              <li>📞 +977-1-XXXXXXX</li>
              <li>✉️ info@koc.com.np</li>
              <li>🕒 Mon-Fri: 9AM-6PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2024 Kathmandu Orientation Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
