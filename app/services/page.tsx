import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"

export const metadata = {
  title: "Our Services - FixBuild Limited",
  description:
    "Explore our range of construction and renovation services including garage conversions, bathrooms, kitchens, and more.",
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold mb-4 text-center">Our Services</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        At FixBuild Limited, we offer a comprehensive range of building and renovation services. From garage conversions
        to complete home renovations, we have the expertise to bring your vision to life.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="font-bold mb-2">Consultation</h3>
            <p className="text-gray-600">We meet with you to discuss your requirements, budget, and timeline.</p>
          </div>
          <div className="text-center">
            <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="font-bold mb-2">Design & Quote</h3>
            <p className="text-gray-600">We create a detailed design and provide a comprehensive quote.</p>
          </div>
          <div className="text-center">
            <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="font-bold mb-2">Implementation</h3>
            <p className="text-gray-600">Our skilled team completes the work to the highest standards.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Contact us today to discuss your requirements and get a free, no-obligation quote.
        </p>
        <Button className="bg-sky-500 hover:bg-sky-600">GET A QUOTE</Button>
      </div>
    </div>
  )
}

