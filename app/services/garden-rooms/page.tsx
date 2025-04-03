import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Garden Rooms & Sheds - FixBuild Limited",
  description:
    "Professional garden room and shed construction services in Fleet, Hampshire. Create additional space with our expert team.",
}

export default function GardenRoomsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-start">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/garden-room.jpg-gGrhv6HkxnTvjY3qjCKdHzJjt4W6Mc.jpeg"
            alt="Garden room construction"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Garden Rooms & Sheds</h1>
          <p className="text-xl max-w-[600px]">
            Create additional living and storage space with our professional garden room and shed construction services.
          </p>
          <div>
            <Button className="bg-sky-500 hover:bg-sky-600">GET A QUOTE</Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Create Additional Space in Your Garden</h2>
              <p className="mb-4">
                Garden rooms and sheds provide valuable additional space for a variety of uses, from home offices and
                gyms to hobby rooms and storage solutions. These standalone structures can be used year-round and are a
                cost-effective alternative to home extensions.
              </p>
              <p className="mb-4">
                At FixBuild Limited, we design and build high-quality garden rooms and sheds that are tailored to your
                specific requirements. Our structures are built to last, with proper insulation, electrical
                installations, and quality finishes.
              </p>
              <p>
                Whether you need a simple storage shed or a fully-equipped garden office, our team has the expertise to
                create the perfect solution for your needs and budget.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/garden-room.jpg-gGrhv6HkxnTvjY3qjCKdHzJjt4W6Mc.jpeg"
                alt="Garden room construction"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Garden Room & Shed Services Include:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Garden Offices</h3>
                <p className="text-gray-600">
                  Fully insulated and equipped garden offices for comfortable year-round use.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Garden Rooms</h3>
                <p className="text-gray-600">
                  Versatile garden rooms that can be used as gyms, studios, entertainment spaces, or guest
                  accommodation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Storage Sheds</h3>
                <p className="text-gray-600">
                  Practical and durable storage solutions for garden equipment, tools, and outdoor furniture.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Workshops</h3>
                <p className="text-gray-600">
                  Specialized spaces for hobbies, crafts, or DIY projects with appropriate power and lighting.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Summer Houses</h3>
                <p className="text-gray-600">
                  Attractive garden retreats for relaxation and entertainment during the warmer months.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Bespoke Designs</h3>
                <p className="text-gray-600">
                  Custom-designed structures to meet your specific requirements and complement your garden.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Garden Room & Shed Construction Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">Consultation & Design</h3>
                <p className="text-gray-600">
                  We discuss your requirements and create a design that meets your needs and complements your garden.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">Site Preparation</h3>
                <p className="text-gray-600">
                  We prepare the site with appropriate foundations to ensure a stable and durable structure.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Construction</h3>
                <p className="text-gray-600">
                  Our skilled team builds your garden room or shed to the highest standards.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold mb-2">Finishing & Handover</h3>
                <p className="text-gray-600">
                  We complete all finishing touches, including electrics, insulation, and decorative finishes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">Do I need planning permission for a garden room or shed?</h3>
                <p className="text-gray-600">
                  In many cases, garden rooms and sheds fall under permitted development rights and don't require
                  planning permission, provided they meet certain criteria regarding size, height, and position.
                  However, there are exceptions, such as if your property is listed or in a conservation area. We can
                  advise you on the requirements for your specific situation.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Can garden rooms be used all year round?</h3>
                <p className="text-gray-600">
                  Yes, our garden rooms are built with proper insulation, double glazing, and heating options to ensure
                  they can be used comfortably throughout the year, regardless of the weather.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">How long does it take to build a garden room or shed?</h3>
                <p className="text-gray-600">
                  The construction time varies depending on the size and complexity of the project. A simple shed might
                  take a few days, while a fully equipped garden room could take 2-3 weeks.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Can you connect electricity to my garden room?</h3>
                <p className="text-gray-600">
                  Yes, we can install electrical connections to your garden room, including power outlets, lighting, and
                  heating. All electrical work is carried out by qualified electricians and certified to meet current
                  regulations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-sky-500 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Create Your Garden Room or Shed?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your requirements and get a free, no-obligation quote.
            </p>
            <Button className="bg-white text-sky-500 hover:bg-gray-100">GET A QUOTE</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

