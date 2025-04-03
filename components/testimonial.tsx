interface TestimonialProps {
  category: string
  name: string
  content: string
}

export function Testimonial({ category, name, content }: TestimonialProps) {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-md">
      <div className="text-sky-500 font-bold mb-2">{category}</div>
      <div className="font-bold mb-4">{name}</div>
      <p className="text-gray-300">{content}</p>
    </div>
  )
}

