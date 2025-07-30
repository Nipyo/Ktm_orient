import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, MessageCircle, Users } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your training journey? Contact us today and let our counselors help you choose the perfect
            program for your career goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+977-XXXXXXXXX" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="course">Interested Course</Label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="">Select a course</option>
                  <option value="pre-departure">Pre-Departure Orientation</option>
                  <option value="japanese">Japanese Language</option>
                  <option value="english">English Language</option>
                  <option value="fullstack">Full Stack Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="data-science">Data Science</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="barista">Barista Training</option>
                  <option value="sushi">Sushi Training</option>
                  <option value="nursing">Nursing Caregiver</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your training goals and any questions you have..."
                  rows={4}
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Kathmandu, Nepal
                      <br />
                      Training Center Location
                      <br />
                      Postal Code: 44600
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      +977-1-XXXXXXX
                      <br />
                      +977-98XXXXXXXX (Mobile)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@koc.com.np
                      <br />
                      admissions@koc.com.np
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Quick Actions</CardTitle>
                <CardDescription>Get started with these popular options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start bg-transparent" variant="outline" size="lg">
                  <MessageCircle className="h-5 w-5 mr-3" />
                  Schedule a Consultation
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline" size="lg">
                  <Users className="h-5 w-5 mr-3" />
                  Join Information Session
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline" size="lg">
                  <Mail className="h-5 w-5 mr-3" />
                  Download Course Brochure
                </Button>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Frequently Asked</CardTitle>
                <CardDescription>Quick answers to common questions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What are your admission requirements?</h4>
                  <p className="text-sm text-gray-600">
                    Requirements vary by program. Generally, we accept students with basic education and strong
                    motivation to learn.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Do you offer payment plans?</h4>
                  <p className="text-sm text-gray-600">
                    Yes, we offer flexible payment options including installment plans for longer courses.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Is job placement assistance provided?</h4>
                  <p className="text-sm text-gray-600">
                    We provide career guidance and job placement assistance to all our graduates.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Find Us</CardTitle>
              <CardDescription>Visit our training center in Kathmandu</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p>Interactive Map Coming Soon</p>
                  <p className="text-sm">Kathmandu Training Center Location</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
