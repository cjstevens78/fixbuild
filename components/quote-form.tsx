"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendQuoteEmail, type QuoteFormData } from "@/app/actions/send-email"
import { useToast } from "@/hooks/use-toast"
import { ReCaptcha } from "@/components/recaptcha"

export function QuoteForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<QuoteFormData & { recaptchaToken?: string }>({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [recaptchaToken, setRecaptchaToken] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    // Check if reCAPTCHA is completed
    if (!recaptchaToken) {
      setErrors({ recaptcha: "Please complete the reCAPTCHA verification" })
      setIsSubmitting(false)
      return
    }

    try {
      const result = await sendQuoteEmail({
        ...formData,
        recaptchaToken,
      } as QuoteFormData)

      if (result.success) {
        toast({
          title: "Quote request sent!",
          description: "We'll be in touch with you shortly.",
          variant: "default",
        })
        setFormData({ name: "", email: "", message: "" })
        // Reset reCAPTCHA
        if (window.grecaptcha) {
          window.grecaptcha.reset()
          setRecaptchaToken("")
        }
      } else {
        if (result.validationErrors) {
          const newErrors: Record<string, string> = {}
          result.validationErrors.forEach((error) => {
            if (error.path[0]) {
              newErrors[error.path[0] as string] = error.message
            }
          })
          setErrors(newErrors)
        } else if (result.error === "reCAPTCHA verification failed") {
          setErrors({ recaptcha: "reCAPTCHA verification failed. Please try again." })
        } else {
          toast({
            title: "Something went wrong",
            description: result.error || "Please try again later.",
            variant: "destructive",
          })
        }
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRecaptchaVerify = (token: string) => {
    setRecaptchaToken(token)
    // Clear recaptcha error if it exists
    if (errors.recaptcha) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.recaptcha
        return newErrors
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <Input
          type="email"
          name="email"
          placeholder="Your email address"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <Textarea
          name="message"
          placeholder="Your message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <ReCaptcha onVerify={handleRecaptchaVerify} />
      {errors.recaptcha && <p className="text-red-500 text-sm mt-1">{errors.recaptcha}</p>}

      <Button type="submit" className="bg-sky-500 hover:bg-sky-600 w-full" disabled={isSubmitting}>
        {isSubmitting ? "SENDING..." : "GET STARTED"}
      </Button>
    </form>
  )
}

