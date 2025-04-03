import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About Us - FixBuild Limited",
  description:
    "Learn more about FixBuild Limited, our history, values, and commitment to quality construction and renovation services.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold mb-4 text-center">About FixBuild Limited</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We are a professional building and renovation company based in Fleet, Hampshire, serving clients throughout the
        South East of England.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            FixBuild Limited was established with a simple mission: to provide high-quality construction and renovation
            services with a focus on customer satisfaction.
          </p>
          <p className="mb-4">
            With over 25 years of experience in the industry, our team has developed a reputation for excellence,
            reliability, and attention to detail.
          </p>
          <p>
            We take pride in our work and are committed to delivering projects on time, within budget, and to the
            highest standards.
          </p>
        </div>
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="FixBuild Team"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="font-bold mb-2">Quality</h3>
            <p className="text-gray-600">
              We never compromise on quality. We use only the best materials and employ skilled tradespeople to ensure
              excellent results.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-2">Integrity</h3>
            <p className="text-gray-600">
              We operate with honesty and transparency. We provide accurate quotes and keep our clients informed
              throughout the project.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-2">Customer Focus</h3>
            <p className="text-gray-600">
              We listen to our clients' needs and work collaboratively to bring their vision to life. Your satisfaction
              is our priority.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold mb-2">Experienced Team</h3>
            <p>Our team has over 25 years of experience in the construction and renovation industry.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold mb-2">Quality Workmanship</h3>
            <p>We take pride in our work and ensure that every project is completed to the highest standards.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold mb-2">Competitive Pricing</h3>
            <p>We offer fair and competitive pricing without compromising on quality.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold mb-2">Customer Satisfaction</h3>
            <p>
              Our high rate of repeat business and referrals is a testament to our commitment to customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Contact us today to discuss your requirements and get a free, no-obligation quote.
        </p>
        <Button className="bg-sky-500 hover:bg-sky-600">CONTACT US</Button>
      </div>
    </div>
  )
}

