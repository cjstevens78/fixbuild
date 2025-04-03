import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Case Studies - FixBuild Limited",
  description:
    "Explore our portfolio of completed projects including garage conversions, bathrooms, kitchens, and more.",
}

interface CaseStudy {
  id: string
  title: string
  category: string
  description: string
  imageSrc: string
}

const caseStudies: CaseStudy[] = [
  {
    id: "garage-conversion-fleet",
    title: "Modern Garage Conversion",
    category: "Garage Conversion",
    description: "Conversion of a double garage into a home office and gym in Fleet.",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "bathroom-renovation-farnborough",
    title: "Luxury Bathroom Renovation",
    category: "Bathroom",
    description: "Complete renovation of a family bathroom in Farnborough.",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "kitchen-installation-aldershot",
    title: "Contemporary Kitchen Installation",
    category: "Kitchen",
    description: "Installation of a modern kitchen with island in Aldershot.",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "garden-room-camberley",
    title: "Garden Office Room",
    category: "Garden Rooms & Sheds",
    description: "Construction of a fully insulated garden office in Camberley.",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "house-renovation-fleet",
    title: "Complete House Renovation",
    category: "Construction & Renovation",
    description: "Full renovation of a 3-bedroom property in Fleet.",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "handyman-services-farnham",
    title: "Multiple Handyman Projects",
    category: "Handyman",
    description: "Various handyman services for a property in Farnham.",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold mb-4 text-center">Our Case Studies</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Explore our portfolio of completed projects. These case studies showcase our expertise, attention to detail, and
        commitment to delivering high-quality results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {caseStudies.map((study) => (
          <div key={study.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48">
              <Image src={study.imageSrc || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="text-sky-500 font-bold mb-2">{study.category}</div>
              <h2 className="text-xl font-bold mb-2">{study.title}</h2>
              <p className="text-gray-600 mb-4">{study.description}</p>
              <Link href={`/case-studies/${study.id}`}>
                <Button variant="outline" className="w-full">
                  View Case Study
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Want to See More?</h2>
        <p className="mb-6">
          These are just a few examples of our work. Contact us to discuss your project and see more relevant examples.
        </p>
        <Button className="bg-sky-500 hover:bg-sky-600">CONTACT US</Button>
      </div>
    </div>
  )
}

