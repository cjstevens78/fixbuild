import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Garage Conversions - FixBuild Limited",
  description:
    "Professional garage conversion services in Fleet, Hampshire. Transform your unused garage into a functional living space.",
}

export default function GarageConversionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-start">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/garageconversions-BAIQWbHw8afMRj3vmgQ2o9HrISr3t9.png"
            alt="Garage conversion"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Garage Conversions</h1>
          <p className="text-xl max-w-[600px]">
            Transform your unused garage into a valuable living space with our professional conversion services.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-sky-500 hover:bg-sky-600">GET A QUOTE</Button>
            {/* Commented out for future development
            <Link href="/case-studies/garage-conversion-rg42">
              <Button variant="outline" className="text-gray-800 bg-white border-white hover:bg-white/90">
                VIEW CASE STUDY
              </Button>
            </Link>
            */}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Add Valuable Living Space to Your Home</h2>
              <p className="mb-4">
                A garage conversion is one of the most cost-effective ways to add living space to your home. Whether you
                need an extra bedroom, home office, gym, or playroom, converting your garage can provide the perfect
                solution.
              </p>
              <p className="mb-4">
                At FixBuild Limited, we specialize in high-quality garage conversions that seamlessly integrate with
                your existing home. Our team handles every aspect of the project, from initial design to final finishing
                touches.
              </p>
              <p>
                We ensure all work complies with building regulations and is completed to the highest standards, giving
                you a comfortable, functional space that adds value to your property.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/garageconversions-BAIQWbHw8afMRj3vmgQ2o9HrISr3t9.png"
                alt="Completed garage conversion"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us for Your Garage Conversion?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Full Project Management</h3>
                <p className="text-gray-600">
                  We handle every aspect of your conversion, from planning and design to construction and finishing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Quality Craftsmanship</h3>
                <p className="text-gray-600">
                  Our skilled team ensures every detail is finished to the highest standard, creating a space you'll
                  love.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Building Regulation Compliant</h3>
                <p className="text-gray-600">
                  All our conversions meet or exceed current building regulations for safety and energy efficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Garage Conversion Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">Consultation & Design</h3>
                <p className="text-gray-600">
                  We discuss your requirements and create a detailed design for your approval.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">Planning & Preparation</h3>
                <p className="text-gray-600">
                  We handle any necessary planning permissions and prepare the site for conversion.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Construction</h3>
                <p className="text-gray-600">
                  Our team completes all structural work, insulation, electrics, plumbing, and more.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold mb-2">Finishing & Handover</h3>
                <p className="text-gray-600">
                  We complete all decorative finishes and hand over your new living space.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">Do I need planning permission for a garage conversion?</h3>
                <p className="text-gray-600">
                  In most cases, garage conversions fall under permitted development and don't require planning
                  permission. However, there are exceptions, such as if your property is listed or in a conservation
                  area. We'll advise you on the requirements for your specific situation.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">How long does a garage conversion take?</h3>
                <p className="text-gray-600">
                  A typical garage conversion takes 3-4 weeks to complete, depending on the complexity of the project
                  and any additional features required.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">How much does a garage conversion cost?</h3>
                <p className="text-gray-600">
                  The cost varies depending on the size of the garage, the intended use of the space, and the level of
                  finish required. We provide detailed, transparent quotes after an initial consultation.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Will a garage conversion add value to my home?</h3>
                <p className="text-gray-600">
                  Yes, a well-executed garage conversion can add significant value to your property, often more than the
                  cost of the work itself. It adds usable living space without the need for an extension.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-sky-500 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Garage?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your garage conversion project and get a free, no-obligation quote.
            </p>
            <Button className="bg-white text-sky-500 hover:bg-gray-100">GET A QUOTE</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

