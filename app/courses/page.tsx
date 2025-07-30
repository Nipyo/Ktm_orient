import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Clock,
  Users,
  Award,
  BookOpen,
  Code,
  Coffee,
  Heart,
  Globe,
  Palette,
  BarChart,
  Brain,
  Camera,
} from "lucide-react"

export default function CoursesPage() {
  const courses = [
    {
      category: "Flagship Program",
      icon: Globe,
      color: "bg-blue-600",
      courses: [
        {
          title: "Pre-Departure Orientation Program",
          duration: "2 Days",
          type: "Intensive",
          description:
            "Comprehensive preparation for international employment including cultural adaptation, legal rights, and workplace etiquette.",
          features: ["Cultural Training", "Legal Documentation", "Communication Skills", "Financial Planning"],
        },
      ],
    },
    {
      category: "Language Training",
      icon: BookOpen,
      color: "bg-green-600",
      courses: [
        {
          title: "Japanese Language Course",
          duration: "3-6 Months",
          type: "Diploma",
          description: "Complete Japanese language training from basic to business level with cultural integration.",
          features: ["Hiragana & Katakana", "Business Japanese", "JLPT Preparation", "Cultural Etiquette"],
        },
        {
          title: "English Language Course",
          duration: "2-4 Months",
          type: "Certificate",
          description: "Professional English communication skills for international workplace success.",
          features: ["Business English", "Interview Skills", "Technical Vocabulary", "IELTS/TOEFL Prep"],
        },
      ],
    },
    {
      category: "IT & Technology",
      icon: Code,
      color: "bg-purple-600",
      courses: [
        {
          title: "Full Stack Development",
          duration: "6 Months",
          type: "Diploma",
          description: "Complete web development training covering frontend, backend, and database technologies.",
          features: ["React/Next.js", "Node.js/Express", "Database Design", "Deployment"],
        },
        {
          title: "Digital Marketing & SEO",
          duration: "3 Months",
          type: "Certificate",
          description: "Master digital marketing strategies, SEO techniques, and online advertising.",
          features: ["SEO Optimization", "Social Media Marketing", "Google Ads", "Analytics"],
        },
        {
          title: "Graphic Design",
          duration: "4 Months",
          type: "Certificate",
          description: "Creative design skills using industry-standard software and design principles.",
          features: ["Adobe Creative Suite", "Brand Design", "Print Design", "Digital Graphics"],
        },
        {
          title: "Video Editing",
          duration: "2 Months",
          type: "Certificate",
          description: "Professional video editing and post-production techniques.",
          features: ["Adobe Premiere Pro", "After Effects", "Color Grading", "Audio Editing"],
        },
        {
          title: "Data Science",
          duration: "6 Months",
          type: "Diploma",
          description: "Comprehensive data analysis, visualization, and machine learning fundamentals.",
          features: ["Python/R Programming", "Data Visualization", "Statistical Analysis", "ML Basics"],
        },
        {
          title: "AI & Machine Learning",
          duration: "6 Months",
          type: "Diploma",
          description: "Advanced artificial intelligence and machine learning concepts and applications.",
          features: ["Deep Learning", "Neural Networks", "AI Applications", "Model Deployment"],
        },
      ],
    },
    {
      category: "Blue Collar Training",
      icon: Users,
      color: "bg-orange-600",
      courses: [
        {
          title: "Barista Training",
          duration: "2 Weeks",
          type: "Certificate",
          description: "Professional coffee preparation, latte art, and customer service skills.",
          features: ["Coffee Brewing", "Latte Art", "Equipment Operation", "Customer Service"],
        },
        {
          title: "Sushi Training",
          duration: "1 Month",
          type: "Certificate",
          description: "Traditional Japanese sushi preparation techniques and food safety.",
          features: ["Sushi Preparation", "Knife Skills", "Food Safety", "Japanese Techniques"],
        },
        {
          title: "Nursing Caregiver",
          duration: "3 Months",
          type: "Certificate",
          description: "Healthcare assistance and elderly care with practical training.",
          features: ["Patient Care", "Medical Basics", "Emergency Response", "Communication"],
        },
      ],
    },
  ]

  const getIcon = (iconName: any) => {
    const iconMap: { [key: string]: any } = {
      Globe,
      BookOpen,
      Code,
      Users,
      Coffee,
      Heart,
      Palette,
      BarChart,
      Brain,
      Camera,
    }
    return iconMap[iconName.name] || BookOpen
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Training Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From 2-day intensive programs to 6-month diplomas, we offer comprehensive training solutions for every
            career path.
          </p>
        </div>

        {/* Course Categories */}
        <div className="space-y-16">
          {courses.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <div key={categoryIndex}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`${category.color} p-3 rounded-lg`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.courses.map((course, courseIndex) => (
                    <Card key={courseIndex} className="shadow-lg hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant={course.type === "Diploma" ? "default" : "secondary"}>{course.type}</Badge>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Clock className="h-4 w-4" />
                            {course.duration}
                          </div>
                        </div>
                        <CardTitle className="text-xl">{course.title}</CardTitle>
                        <CardDescription className="text-base">{course.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm text-gray-900 mb-2">Key Features:</h4>
                            <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                              {course.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center gap-1">
                                  <Award className="h-3 w-3 text-blue-600 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="pt-4 border-t">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 p-8 bg-blue-50 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Training Journey?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss which program is right for you. Our counselors will help you choose the perfect
            training path for your career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
