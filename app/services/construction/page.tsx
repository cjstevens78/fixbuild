import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Construction & Renovation - FixBuild Limited",
  description:
    "Professional construction and renovation services in Fleet, Hampshire. Transform your property with our expert team.",
}

export default function ConstructionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-start">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/building.jpg-qSbrGNuvnPP2lIiUsXJhrUlok9Mmcx.jpeg"
            alt="Construction and renovation project"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Construction & Renovation</h1>
          <p className="text-xl max-w-[600px]">
            Transform your property with our professional construction and renovation services.
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
              <h2 className="text-3xl font-bold mb-6">Comprehensive Construction & Renovation Services</h2>
              <p className="mb-4">
                Whether you're looking to renovate a single room, extend your property, or undertake a complete home
                transformation, our construction and renovation services are designed to bring your vision to life.
              </p>
              <p className="mb-4">
                At FixBuild Limited, we combine technical expertise with creative design to deliver high-quality
                construction and renovation projects. Our experienced team handles everything from initial planning and
                design to final finishing touches.
              </p>
              <p>
                We pride ourselves on our attention to detail, quality craftsmanship, and commitment to delivering
                projects on time and within budget. Our goal is to exceed your expectations and create spaces that
                you'll love for years to come.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/building.jpg-qSbrGNuvnPP2lIiUsXJhrUlok9Mmcx.jpeg"
                alt="Construction and renovation project"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Construction & Renovation Services Include:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Home Extensions</h3>
                <p className="text-gray-600">
                  Expand your living space with single or double-story extensions that seamlessly integrate with your
                  existing property.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Complete Renovations</h3>
                <p className="text-gray-600">
                  Transform your entire property with comprehensive renovations that update and modernize your home.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Loft Conversions</h3>
                <p className="text-gray-600">
                  Convert unused loft space into functional living areas, bedrooms, or home offices.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Structural Alterations</h3>
                <p className="text-gray-600">
                  Remove walls, add new openings, or reconfigure your space to create open-plan living areas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Property Refurbishment</h3>
                <p className="text-gray-600">
                  Refresh and update your property with comprehensive refurbishment services.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">New Builds</h3>
                <p className="text-gray-600">
                  Build your dream home from the ground up with our comprehensive new build services.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Construction & Renovation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">Consultation & Design</h3>
                <p className="text-gray-600">
                  We discuss your requirements and create detailed plans and designs for your project.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">Planning & Approvals</h3>
                <p className="text-gray-600">
                  We handle planning permissions, building regulations, and other necessary approvals.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Construction</h3>
                <p className="text-gray-600">
                  Our skilled team completes all construction work to the highest standards.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold mb-2">Finishing & Handover</h3>
                <p className="text-gray-600">
                  We complete all finishing touches and hand over your transformed property.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">Do I need planning permission for my project?</h3>
                <p className="text-gray-600">
                  This depends on the nature and scope of your project. Some projects fall under permitted development
                  rights, while others require planning permission. We can advise you on the requirements for your
                  specific project and handle the application process if needed.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">How long will my construction or renovation project take?</h3>
                <p className="text-gray-600">
                  Project timelines vary depending on the scope and complexity of the work. A small renovation might
                  take a few weeks, while a large extension or new build could take several months. We provide detailed
                  timelines during the quoting process.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Can you help with the design of my project?</h3>
                <p className="text-gray-600">
                  Yes, we offer comprehensive design services to help you visualize and plan your project. We can work
                  with your ideas or provide suggestions based on our experience.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Are you insured for construction and renovation work?</h3>
                <p className="text-gray-600">
                  Yes, we have comprehensive public liability and professional indemnity insurance. We can provide proof
                  of insurance upon request.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-sky-500 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Property?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your construction or renovation project and get a free, no-obligation quote.
            </p>
            <Button className="bg-white text-sky-500 hover:bg-gray-100">GET A QUOTE</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

