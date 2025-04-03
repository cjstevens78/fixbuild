import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CaseStudyNotFound() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 text-center">
      <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Sorry, the case study you're looking for doesn't exist or may have been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/case-studies">
          <Button variant="outline">View All Case Studies</Button>
        </Link>
        <Link href="/services">
          <Button className="bg-sky-500 hover:bg-sky-600">Explore Our Services</Button>
        </Link>
      </div>
    </div>
  )
}

