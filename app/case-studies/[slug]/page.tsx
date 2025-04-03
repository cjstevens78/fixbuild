import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

// This will be expanded as you add more case studies
const caseStudies = {
  "garage-conversion-rg42": {
    title: "Garage Conversion in RG42",
    service: "Garage Conversion",
    description: "Complete conversion of a garage into a functional living space in RG42.",
    content: [
      {
        type: "text",
        content:
          "This garage conversion project in RG42 transformed an unused garage into a beautiful, functional living space. The client wanted to create an additional room that could serve as both a home office and occasional guest bedroom.",
      },
      {
        type: "text",
        content:
          "We began by assessing the structure and planning the conversion to ensure it would meet building regulations. The project included installing proper insulation, new electrical wiring, plumbing, and heating to make the space comfortable year-round.",
      },
      {
        type: "image",
        src: "https://v0.blob.com/bpZKM.png",
        alt: "Completed garage conversion showing modern living space",
        caption: "The completed conversion - now a functional living space with TV and heating",
      },
      {
        type: "text",
        content: "The conversion process involved several key stages:",
      },
      {
        type: "list",
        items: [
          "Removing the garage door and building a proper insulated wall with a window",
          "Installing proper floor insulation and a new concrete screed",
          "Adding electrical wiring for lighting, heating, and power outlets",
          "Installing drywall and ceiling",
          "Adding proper ventilation and heating",
          "Finishing with high-quality flooring, painting, and trim work",
        ],
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=600",
        alt: "Garage during conversion",
        caption: "Work in progress - new walls and insulation being installed",
      },
      {
        type: "text",
        content:
          "One of the challenges we faced was ensuring the new space would be properly integrated with the rest of the home, both aesthetically and functionally. We worked closely with the client to select materials and finishes that would complement their existing décor.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=600",
        alt: "Completed garage conversion",
        caption: "The completed conversion - now a functional living space",
      },
      {
        type: "text",
        content:
          "The project was completed in 4 weeks, on schedule and within budget. The client was delighted with the transformation, which added approximately 15 square meters of living space to their home and increased the property's value.",
      },
      {
        type: "quote",
        content:
          "FixBuild converted our garage into a home office and living space. Nothing was too much trouble. We loved the extra space it provided with such a great high spec finish! Highly recommended!",
        author: "Client in RG42",
      },
    ],
    completionDate: "June 2023",
    duration: "4 weeks",
    location: "RG42, Bracknell",
  },
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies]

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
    }
  }

  return {
    title: `${caseStudy.title} - FixBuild Limited`,
    description: caseStudy.description,
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies]

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Link href="/case-studies" className="flex items-center text-sky-500 hover:text-sky-600 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Case Studies
      </Link>

      <div className="mb-8">
        <span className="text-sky-500 font-bold">{caseStudy.service}</span>
        <h1 className="text-3xl font-bold mt-2 mb-4">{caseStudy.title}</h1>
        <p className="text-gray-600">{caseStudy.description}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="relative h-[300px] md:h-[400px]">
          <Image src="/placeholder.svg?height=600&width=1200" alt={caseStudy.title} fill className="object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <div className="prose max-w-none">
            {caseStudy.content.map((item, index) => {
              if (item.type === "text") {
                return (
                  <p key={index} className="mb-4">
                    {item.content}
                  </p>
                )
              } else if (item.type === "image") {
                return (
                  <div key={index} className="my-6">
                    <div className="relative h-[300px] rounded-lg overflow-hidden">
                      <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
                    </div>
                    {item.caption && <p className="text-sm text-gray-500 mt-2 text-center">{item.caption}</p>}
                  </div>
                )
              } else if (item.type === "list") {
                return (
                  <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
                    {item.items.map((listItem, listIndex) => (
                      <li key={listIndex}>{listItem}</li>
                    ))}
                  </ul>
                )
              } else if (item.type === "quote") {
                return (
                  <blockquote key={index} className="border-l-4 border-sky-500 pl-4 italic my-6">
                    <p className="mb-2">{item.content}</p>
                    {item.author && <footer className="text-gray-600">— {item.author}</footer>}
                  </blockquote>
                )
              }
              return null
            })}
          </div>
        </div>

        <div>
          <div className="bg-gray-50 p-6 rounded-lg sticky top-6">
            <h3 className="text-xl font-bold mb-4">Project Details</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-700">Location</h4>
                <p>{caseStudy.location}</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-700">Completion Date</h4>
                <p>{caseStudy.completionDate}</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-700">Project Duration</h4>
                <p>{caseStudy.duration}</p>
              </div>
              <div className="pt-4">
                <h4 className="font-bold text-gray-700 mb-2">Interested in a similar project?</h4>
                <Button className="w-full bg-sky-500 hover:bg-sky-600">GET A QUOTE</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Contact us today to discuss your requirements and get a free, no-obligation quote.
        </p>
        <Button className="bg-sky-500 hover:bg-sky-600">CONTACT US</Button>
      </div>
    </div>
  )
}

