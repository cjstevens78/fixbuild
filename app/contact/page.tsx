import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin } from "lucide-react"
import { MapComponent } from "@/components/map-component"

export const metadata = {
  title: "Contact Us - FixBuild Limited",
  description: "Get in touch with FixBuild Limited for all your construction and renovation needs in Fleet, Hampshire.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <p className="mb-6">
            We'd love to hear from you. Whether you have a question about our services, want to request a quote, or just
            want to say hello, we're here to help.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <Phone className="h-5 w-5 mr-3 text-sky-500 mt-1" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>07478 885 247</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-5 w-5 mr-3 text-sky-500 mt-1" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p>info@fix-build.co.uk</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 text-sky-500 mt-1" />
              <div>
                <h3 className="font-bold">Address</h3>
                <p>Fleet, Hampshire, GU51 3JT</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Working Hours</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Monday - Saturday</span>
              <span>8:00 - 17:30</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Service Area</h2>
        <div className="h-[400px] rounded-lg overflow-hidden">
          <MapComponent />
        </div>
        <p className="mt-4 text-gray-600">
          We provide our services throughout the South East of England, with a focus on Fleet, Farnborough, Aldershot,
          Camberley, and surrounding areas.
        </p>
      </div>

      <div className="bg-sky-500 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="mb-6">Contact us today to discuss your requirements and get a free, no-obligation quote.</p>
        <Button className="bg-white text-sky-500 hover:bg-gray-100">GET A QUOTE</Button>
      </div>
    </div>
  )
}

