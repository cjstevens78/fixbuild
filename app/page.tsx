import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ServiceCard } from "@/components/service-card"
import { ContactForm } from "@/components/contact-form"
import { Testimonial } from "@/components/testimonial"
import { FAQSection } from "@/components/faq-section"
import { QuoteForm } from "@/components/quote-form"

export default function Home() {
  // FAQ data
  const faqs = [
    {
      question: "How much do you charge?",
      answer:
        "Our pricing varies depending on the scope and complexity of your project. We provide detailed, transparent quotes after an initial consultation to understand your specific requirements. We believe in fair pricing with no hidden costs.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We primarily serve Fleet, Hampshire and surrounding areas including Farnborough, Aldershot, Camberley, and other locations throughout the South East of England. If you're unsure whether we cover your area, please contact us.",
    },
    {
      question: "Do you have work examples?",
      answer:
        "Yes, we have an extensive portfolio of completed projects. You can view examples on our website or contact us to request specific examples relevant to your project. We're proud of our work and happy to share examples.",
    },
    {
      question: "How long will my project take?",
      answer:
        "Project timelines vary based on the scope and complexity of work. A bathroom renovation might take 2-3 weeks, while a garage conversion could take 4-6 weeks. We provide detailed timelines during the quoting process and keep you updated throughout.",
    },
    {
      question: "Are you insured?",
      answer:
        "Yes, FixBuild Limited is fully insured with comprehensive public liability and professional indemnity insurance. We can provide proof of insurance upon request.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-start">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot-2024-02-13-at-13.22.00-Ouzx3VHlvzpRwbZOhYfj5Hgritm7hz.png"
            alt="House renovation and garage conversion project in progress"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">FIXBUILD LIMITED</h1>
          <p className="text-xl max-w-[600px]">Delivering quality first-time, every time.</p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-sky-500 hover:bg-sky-600">OUR SERVICES</Button>
            <Button variant="outline" className="text-gray-800 bg-white border-white hover:bg-white/90">
              CONTACT US
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-sky-500 p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Build Your Dream</h2>
              <h3 className="text-2xl font-bold mb-4">Over 25 Years of building, fixing and improving homes.</h3>
              <p className="mb-6">
                At FixBuild Limited, we specialize in home renovations and extensions. With over 25 years of experience,
                we pride ourselves on delivering quality projects.
              </p>
              <Button variant="outline" className="text-gray-800 bg-white border-white hover:bg-white/90">
                WORK WITH US <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-white p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold">Build Your Dream</h2>
            <h3 className="text-3xl font-bold mt-2">Our Services</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Garage Conversions"
              description="We can handle the full turn key process of converting your garage into a living space, bedroom, office, or gym. We handle everything from design to completion."
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/garageconversions-BAIQWbHw8afMRj3vmgQ2o9HrISr3t9.png"
              serviceSlug="garage-conversions"
              // Commented out for future development
              // caseStudySlug="garage-conversion-rg42"
            />
            <ServiceCard
              title="Bathrooms"
              description="We design and fit bathrooms under quality and to a high standard of workmanship. We pride ourselves on our attention to detail."
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bathrooms.jpg-d1PCl9BArzFRcjexr3WpstK3dJ8YXy.jpeg"
              serviceSlug="bathrooms"
            />
            <ServiceCard
              title="Kitchens"
              description="We fit kitchens of all shapes and sizes. Whether you're looking for a new look or a complete redesign, we can help you create your dream kitchen."
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kitchens.jpg-mMDmLDb4kHKpTjwY0G1e2isB3FcGlF.jpeg"
              serviceSlug="kitchens"
            />
            <ServiceCard
              title="Handyman"
              description="From small handyman services to larger one-off projects, we can help. If you need something fixing or improving in your home, we can do it."
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/handyman.jpg-NKglpBGFzdDCq7W3bjsOJZyJGINaQV.jpeg"
              serviceSlug="handyman"
            />
            <ServiceCard
              title="Construction & Renovation"
              description="We work with clients to transform spaces of all sizes. From small renovations to complete property rebuilds, we handle everything from design to completion."
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/building.jpg-qSbrGNuvnPP2lIiUsXJhrUlok9Mmcx.jpeg"
              serviceSlug="construction"
            />
            <ServiceCard
              title="Garden Rooms & Sheds"
              description="From simple shed to a custom office, we've built them all. Whether you need a garden room, office, or shed, we offer a full supply and fit service."
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/garden-room.jpg-gGrhv6HkxnTvjY3qjCKdHzJjt4W6Mc.jpeg"
              serviceSlug="garden-rooms"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 text-white">
              <h2 className="text-xl font-bold text-sky-400 mb-4">Friendly and approachable</h2>
              <h3 className="text-3xl font-bold mb-6">We pride ourselves on the personalities in our business</h3>
              <p className="mb-6">
                Working in someone's home is a responsibility not to be taken lightly. We strive to be respectful,
                helpful, tidy and true to our word.
              </p>
              <Button className="bg-sky-500 hover:bg-sky-600">GET IN TOUCH</Button>
            </div>
            <div className="bg-sky-500 p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">We Follow Best Practices</h2>
              <p className="mb-6">
                Working on over 100 projects every year means we have developed systems and processes to ensure quality.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-xl">✕</span>
                  <span>Latest Design Software</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">✕</span>
                  <span>Transparent Fees</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">✕</span>
                  <span>Modern Quoting and Invoicing Software</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">✕</span>
                  <span>Licensed Waste Carriers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold">What Our Clients Say</h2>
            <h3 className="text-3xl font-bold mt-2">Testimonials</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Testimonial
              category="Garage Conversion"
              name="Matt O'Connell"
              content="FixBuild converted our garage into a home office and living space. Nothing was too much trouble. We loved the extra meeting space it provided at such a great high spec finish! Highly recommended!"
            />
            <Testimonial
              category="Garage Conversion"
              name="Diane Westbrook"
              content="FixBuild were fantastic from start to finish. They completely transformed our garage conversion over the past three weeks. It has been efficient, on time and to budget. I would highly recommend them to anyone looking to have their garage converted."
            />
            <Testimonial
              category="Bathroom"
              name="Matt Shaw"
              content="Thanks to Chris who fitted a wonderful new family bathroom which far exceeded our expectations. The quality of work was excellent and the finish was of a very high standard. Chris worked to the agreed timescale and budget and was a pleasure to have around. We would highly recommend FixBuild for central heating and bathroom work."
            />
            <Testimonial
              category="Kitchen Installation"
              name="Ann Smith"
              content="FixBuild did an excellent job on our kitchen. We arrived on time, kept to the price of the job and completed the work to a high standard and left everything clean and tidy."
            />
          </div>
        </div>
      </section>

      {/* Quote and FAQ Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
              <p className="mb-6">Ready to start? Tell us what you'd like done!</p>
              <QuoteForm />
            </div>

            <FAQSection title="Learn More From" subtitle="Frequently Asked Questions" faqs={faqs} />
          </div>
        </div>
      </section>
    </div>
  )
}

