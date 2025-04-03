import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Handyman Services - FixBuild Limited",
  description:
    "Professional handyman services in Fleet, Hampshire. From small repairs to larger projects, we've got you covered.",
}

export default function HandymanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-start">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/handyman.jpg-NKglpBGFzdDCq7W3bjsOJZyJGINaQV.jpeg"
            alt="Handyman services"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Handyman Services</h1>
          <p className="text-xl max-w-[600px]">
            From small repairs to larger projects, our skilled handymen have you covered.
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
              <h2 className="text-3xl font-bold mb-6">Professional Handyman Services</h2>
              <p className="mb-4">
                Maintaining your home or business premises can be time-consuming and sometimes requires specialized
                skills or tools. Our professional handyman services are designed to take care of all those tasks that
                you don't have time for or prefer not to tackle yourself.
              </p>
              <p className="mb-4">
                At FixBuild Limited, our skilled handymen can handle a wide range of jobs, from simple repairs and
                installations to more complex projects. We pride ourselves on delivering high-quality workmanship with
                attention to detail.
              </p>
              <p>
                Whether you have a list of small jobs that need attention or a larger one-off project, we're here to
                help. No job is too small or too large for our experienced team.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/handyman.jpg-NKglpBGFzdDCq7W3bjsOJZyJGINaQV.jpeg"
                alt="Handyman services"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Handyman Services Include:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">General Repairs</h3>
                <p className="text-gray-600">
                  Fixing leaky taps, repairing doors and windows, patching drywall, and more.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Installations</h3>
                <p className="text-gray-600">
                  Installing shelves, curtain rails, TV mounts, light fixtures, and other items.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Painting & Decorating</h3>
                <p className="text-gray-600">
                  Interior and exterior painting, wallpaper hanging, and general decorating.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Carpentry</h3>
                <p className="text-gray-600">
                  Building custom shelving, fitting doors, repairing wooden structures, and more.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Tiling</h3>
                <p className="text-gray-600">Bathroom and kitchen tiling, repairing damaged tiles, and re-grouting.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sky-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-2">Garden Maintenance</h3>
                <p className="text-gray-600">
                  Fence repairs, deck maintenance, shed assembly, and general garden tasks.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Handyman Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Skilled Professionals</h3>
                <p className="text-gray-600">Our handymen are experienced professionals with a wide range of skills.</p>
              </div>
              <div className="text-center">
                <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Quality Workmanship</h3>
                <p className="text-gray-600">
                  We take pride in our work and ensure every job is completed to a high standard.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Reliable Service</h3>
                <p className="text-gray-600">We arrive on time, work efficiently, and clean up after ourselves.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">How do you charge for handyman services?</h3>
                <p className="text-gray-600">
                  We charge either by the hour or provide a fixed quote for specific jobs. For smaller jobs, hourly
                  rates usually apply, while larger projects typically receive a comprehensive quote.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">How quickly can you respond to requests?</h3>
                <p className="text-gray-600">
                  We aim to respond to all requests within 24 hours and can often schedule work within a few days,
                  depending on our current workload.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Is there a minimum charge for small jobs?</h3>
                <p className="text-gray-600">
                  Yes, we have a minimum call-out charge which covers the first hour of work. We'll always be
                  transparent about our pricing before starting any work.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Do you provide the materials needed for repairs?</h3>
                <p className="text-gray-600">
                  We can supply all necessary materials for your job, or you can provide them yourself. If we supply
                  materials, they will be itemized on your invoice.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-sky-500 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Handyman?</h2>
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

