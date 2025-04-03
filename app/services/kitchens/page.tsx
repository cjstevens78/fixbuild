import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Kitchen Installation & Renovation - FixBuild Limited",
  description:
    "Professional kitchen design and installation services in Fleet, Hampshire. Create your dream kitchen with our expert team.",
}

export default function KitchensPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-start">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kitchens.jpg-mMDmLDb4kHKpTjwY0G1e2isB3FcGlF.jpeg"
            alt="Modern kitchen installation"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Kitchen Installation</h1>
          <p className="text-xl max-w-[600px]">
            Create your dream kitchen with our professional design and installation services.
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
              <h2 className="text-3xl font-bold mb-6">Transform Your Kitchen</h2>
              <p className="mb-4">
                The kitchen is the heart of your home - a place for cooking, dining, and gathering with family and
                friends. A well-designed kitchen can transform your daily life and add significant value to your
                property.
              </p>
              <p className="mb-4">
                At FixBuild Limited, we specialize in creating beautiful, functional kitchens that reflect your style
                and meet your specific needs. From simple updates to complete renovations, our skilled team delivers
                exceptional results.
              </p>
              <p>
                We handle every aspect of your kitchen project, including plumbing, electrical work, installation of
                cabinets and appliances, and finishing touches, ensuring a seamless process from start to finish.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kitchens.jpg-mMDmLDb4kHKpTjwY0G1e2isB3FcGlF.jpeg"
                alt="Modern kitchen installation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us for Your Kitchen Project?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Expert Design</h3>
                <p className="text-gray-600">
                  We work with you to create a kitchen design that maximizes your space and meets your specific
                  requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Quality Installation</h3>
                <p className="text-gray-600">
                  Our skilled tradespeople ensure every element of your kitchen is installed to the highest standard.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Complete Project Management</h3>
                <p className="text-gray-600">
                  We coordinate all aspects of your kitchen renovation, from plumbing to electrical work to cabinet
                  installation.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Kitchen Installation Process</h2>
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
                  We help you select the perfect cabinets, countertops, appliances, and finishes.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Installation</h3>
                <p className="text-gray-600">
                  Our skilled team completes all plumbing, electrical work, and installation of cabinets and appliances.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold mb-2">Final Inspection & Handover</h3>
                <p className="text-gray-600">
                  We ensure everything is perfect before handing over your beautiful new kitchen.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">How long does a kitchen renovation take?</h3>
                <p className="text-gray-600">
                  A typical kitchen renovation takes 3-4 weeks to complete, depending on the scope of work and any
                  special features required.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Can you help with kitchen design?</h3>
                <p className="text-gray-600">
                  Yes, we offer a comprehensive design service to help you create a kitchen that maximizes your space
                  and meets your specific requirements.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Do you supply kitchen cabinets and appliances?</h3>
                <p className="text-gray-600">
                  Yes, we can supply all necessary cabinets, countertops, appliances, and materials, or we can work with
                  products you've already purchased.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Do you handle all aspects of the kitchen installation?</h3>
                <p className="text-gray-600">
                  Yes, we handle everything from plumbing and electrical work to installation of cabinets, countertops,
                  and appliances.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-sky-500 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Create Your Dream Kitchen?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your kitchen project and get a free, no-obligation quote.
            </p>
            <Button className="bg-white text-sky-500 hover:bg-gray-100">GET A QUOTE</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

