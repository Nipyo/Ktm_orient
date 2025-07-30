import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, Globe, Heart, BookOpen } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Kathmandu Orientation Company</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We are Nepal's leading training provider, dedicated to empowering individuals with the skills and knowledge
            needed to succeed in today's global workforce.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="shadow-lg">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-2xl text-blue-900 flex items-center gap-3">
                <Target className="h-6 w-6" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed">
                To provide comprehensive, high-quality training programs that prepare Nepal's workforce for successful
                careers both domestically and internationally. We bridge the gap between traditional education and
                practical job requirements through innovative training methodologies.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-2xl text-green-900 flex items-center gap-3">
                <Globe className="h-6 w-6" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and recognized training institution in Nepal, known for producing skilled
                professionals who contribute meaningfully to the global economy while maintaining strong connections to
                their homeland.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Founded with the vision of empowering Nepal's workforce, Kathmandu Orientation Company began as a
                  small training center focused on pre-departure orientation programs. Recognizing the growing need for
                  skilled professionals in both blue-collar and white-collar sectors, we expanded our offerings to
                  include comprehensive training programs.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Over the years, we have trained hundreds of individuals, helping them secure better employment
                  opportunities and build successful careers. Our programs have evolved to meet the changing demands of
                  the global job market, incorporating the latest technologies and industry best practices.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, we stand as a comprehensive training provider offering everything from 2-day intensive
                  orientation programs to 6-month diploma courses, serving as a bridge between education and employment
                  for Nepal's ambitious workforce.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We maintain the highest standards in our training programs, ensuring every student receives
                  world-class education and practical skills.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We operate with complete transparency and honesty, building trust with our students, partners, and the
                  community.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We continuously update our curriculum and teaching methods to stay ahead of industry trends and
                  technological advances.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Expert Instructors</h3>
                  <p className="text-gray-600">
                    Our trainers are industry professionals with years of practical experience and proven track records.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Practical Approach</h3>
                  <p className="text-gray-600">
                    We focus on hands-on learning and real-world applications to ensure job-ready skills.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Global Standards</h3>
                  <p className="text-gray-600">
                    Our curriculum meets international standards, preparing students for global opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Flexible Programs</h3>
                  <p className="text-gray-600">
                    From 2-day intensive courses to 6-month diplomas, we offer flexible duration options.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">
                    We provide continuous support even after course completion, helping with job placement and career
                    guidance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-indigo-100 p-2 rounded-lg flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Comprehensive Curriculum</h3>
                  <p className="text-gray-600">
                    Our programs cover both technical skills and soft skills essential for professional success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-blue-50 rounded-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-700">Course Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-700">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Success Story</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Be part of Nepal's most trusted training institution and take the first step towards a successful career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Journey
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
