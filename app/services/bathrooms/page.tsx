import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Bathroom Installation & Renovation - FixBuild Limited",
  description:
    "Professional bathroom design and installation services in Fleet, Hampshire. Create your dream bathroom with our expert team.",
}

export default function BathroomsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-start">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bathrooms.jpg-d1PCl9BArzFRcjexr3WpstK3dJ8YXy.jpeg"
            alt="Modern bathroom installation"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Bathroom Installation</h1>
          <p className="text-xl max-w-[600px]">
            Create your dream bathroom with our professional design and installation services.
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
              <h2 className="text-3xl font-bold mb-6">Transform Your Bathroom</h2>
              <p className="mb-4">
                Your bathroom is one of the most important rooms in your home. It's where you start and end your day,
                and a well-designed bathroom can be both functional and a luxurious retreat.
              </p>
              <p className="mb-4">
                At FixBuild Limited, we specialize in creating beautiful, practical bathrooms that meet your specific
                needs and preferences. From simple updates to complete renovations, our skilled team delivers
                exceptional results.
              </p>
              <p>
                We handle every aspect of your bathroom project, including plumbing, tiling, electrical work, and
                installation of fixtures and fittings, ensuring a seamless process from start to finish.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bathrooms.jpg-d1PCl9BArzFRcjexr3WpstK3dJ8YXy.jpeg"
                alt="Modern bathroom installation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us for Your Bathroom Project?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Expert Design</h3>
                <p className="text-gray-600">
                  We work with you to create a bathroom design that maximizes your space and meets your specific
                  requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Quality Installation</h3>
                <p className="text-gray-600">
                  Our skilled tradespeople ensure every element of your bathroom is installed to the highest standard.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Complete Project Management</h3>
                <p className="text-gray-600">
                  We coordinate all aspects of your bathroom renovation, from plumbing to tiling to electrical work.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Bathroom Installation Process</h2>
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
                <h3 className="font-bold mb-2">Product Selection</h3>
                <p className="text-gray-600">
                  We help you select the perfect fixtures, fittings, and finishes for your new bathroom.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Installation</h3>
                <p className="text-gray-600">
                  Our skilled team completes all plumbing, tiling, electrical work, and installation.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold mb-2">Final Inspection & Handover</h3>
                <p className="text-gray-600">
                  We ensure everything is perfect before handing over your beautiful new bathroom.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">How long does a bathroom renovation take?</h3>
                <p className="text-gray-600">
                  A typical bathroom renovation takes 2-3 weeks to complete, depending on the scope of work and any
                  special features required.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Can you help with bathroom design?</h3>
                <p className="text-gray-600">
                  Yes, we offer a comprehensive design service to help you create a bathroom that maximizes your space
                  and meets your specific requirements.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Do you supply bathroom fixtures and fittings?</h3>
                <p className="text-gray-600">
                  Yes, we can supply all necessary fixtures, fittings, and materials, or we can work with products
                  you've already purchased.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Do you handle all aspects of the bathroom installation?</h3>
                <p className="text-gray-600">
                  Yes, we handle everything from plumbing and electrical work to tiling and installation of fixtures and
                  fittings.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-sky-500 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Create Your Dream Bathroom?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your bathroom project and get a free, no-obligation quote.
            </p>
            <Button className="bg-white text-sky-500 hover:bg-gray-100">GET A QUOTE</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

