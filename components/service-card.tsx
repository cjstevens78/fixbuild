import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
  caseStudySlug?: string
  serviceSlug?: string
}

export function ServiceCard({ title, description, imageSrc, caseStudySlug, serviceSlug }: ServiceCardProps) {
  // Convert title to slug if serviceSlug is not provided
  const slug = serviceSlug || title.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="bg-white rounded-md overflow-hidden shadow-md flex flex-col h-full">
      <div className="relative h-48">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="min-h-[100px] mb-4">
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="mt-auto space-y-3">
          <Link href={`/services/${slug}`} className="block">
            <Button variant="outline" className="w-full text-gray-700 hover:text-gray-900">
              Learn More
            </Button>
          </Link>

          {/* Commented out for future development
          {caseStudySlug && (
            <Link href={`/case-studies/${caseStudySlug}`} className="block">
              <Button variant="default" className="w-full bg-sky-500 hover:bg-sky-600">
                View Case Study
              </Button>
            </Link>
          )}
          */}
        </div>
      </div>
    </div>
  )
}

