import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Clock, Award, Globe, Code, Coffee, Heart, GraduationCap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Kathmandu Orientation Company</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Empowering Nepal's workforce through comprehensive training programs
            </p>
            <p className="text-lg mb-10 text-blue-200 max-w-3xl mx-auto">
              From 2-day orientation programs to 6-month diplomas, we prepare you for success in both blue-collar and
              white-collar careers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="#courses">Explore Courses</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-gray-600">Course Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">2-180</div>
              <div className="text-gray-600">Days Duration</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Program */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Flagship Program</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The most comprehensive pre-departure orientation program in Nepal
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-2 border-blue-200 shadow-xl">
            <CardHeader className="bg-blue-50">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="h-8 w-8 text-blue-600" />
                <Badge className="bg-orange-500">Featured Program</Badge>
              </div>
              <CardTitle className="text-2xl text-blue-900">Pre-Departure Orientation Program</CardTitle>
              <CardDescription className="text-lg">
                2-day intensive program preparing you for international employment
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-gray-900">What You'll Learn:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                      Cultural adaptation and workplace etiquette
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      Communication skills and language basics
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-blue-600" />
                      Legal rights and documentation
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      Financial planning and remittance
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-gray-900">Program Details:</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">2 Days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Schedule:</span>
                      <span className="font-medium">Flexible</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certificate:</span>
                      <span className="font-medium">Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Support:</span>
                      <span className="font-medium">Ongoing</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Enroll Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Course Categories */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training solutions for blue-collar and white-collar careers
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Blue Collar Jobs */}
            <Card className="shadow-lg">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Users className="h-6 w-6" />
                  Blue Collar Training
                </CardTitle>
                <CardDescription className="text-blue-100">Practical skills for hands-on careers</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Coffee className="h-5 w-5 text-brown-600" />
                    <div>
                      <div className="font-medium">Barista Training</div>
                      <div className="text-sm text-gray-600">Professional coffee preparation</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium">Sushi Training</div>
                      <div className="text-sm text-gray-600">Japanese cuisine preparation</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Heart className="h-5 w-5 text-red-600" />
                    <div>
                      <div className="font-medium">Nursing Caregiver</div>
                      <div className="text-sm text-gray-600">Healthcare and elderly care</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* White Collar Jobs */}
            <Card className="shadow-lg">
              <CardHeader className="bg-indigo-600 text-white">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Code className="h-6 w-6" />
                  White Collar Training
                </CardTitle>
                <CardDescription className="text-indigo-100">Technical and professional skills</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Code className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Full Stack Development</div>
                      <div className="text-sm text-gray-600">Web development mastery</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <BookOpen className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="font-medium">Digital Marketing & SEO</div>
                      <div className="text-sm text-gray-600">Online marketing expertise</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Award className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="font-medium">Data Science & AI/ML</div>
                      <div className="text-sm text-gray-600">Future-ready tech skills</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Language Training */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Language Training</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master essential languages for global opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-lg border-2 border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-xl text-red-800 flex items-center gap-2">🇯🇵 Japanese Language</CardTitle>
                <CardDescription>From basic conversation to business-level proficiency</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2 text-gray-700">
                  <li>• Hiragana, Katakana, and basic Kanji</li>
                  <li>• Workplace communication</li>
                  <li>• Cultural etiquette and customs</li>
                  <li>• JLPT preparation support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-2 border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-800 flex items-center gap-2">🇺🇸 English Language</CardTitle>
                <CardDescription>Professional English for international careers</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2 text-gray-700">
                  <li>• Business English communication</li>
                  <li>• Interview preparation</li>
                  <li>• Technical vocabulary</li>
                  <li>• IELTS/TOEFL preparation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact us today to learn more about our training programs and how we can help you achieve your career
              goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-4">📍</div>
                <h3 className="font-semibold mb-2 text-white">Visit Us</h3>
                <p className="text-gray-300">Kathmandu, Nepal</p>
                <p className="text-gray-300">Training Center Location</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-4">📞</div>
                <h3 className="font-semibold mb-2 text-white">Call Us</h3>
                <p className="text-gray-300">+977-1-XXXXXXX</p>
                <p className="text-gray-300">Mon-Fri: 9AM-6PM</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-4">✉️</div>
                <h3 className="font-semibold mb-2 text-white">Email Us</h3>
                <p className="text-gray-300">info@koc.com.np</p>
                <p className="text-gray-300">Quick response guaranteed</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
