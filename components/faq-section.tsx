"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title: string
  subtitle: string
  faqs: FAQItem[]
}

export function FAQSection({ title, subtitle, faqs }: FAQSectionProps) {
  return (
    <div className="bg-gray-50 p-8">
      <h2 className="text-sky-500 font-bold mb-2">{title}</h2>
      <h3 className="text-2xl font-bold mb-6">{subtitle}</h3>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b pb-2">
            <AccordionTrigger className="font-bold text-left hover:no-underline">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

