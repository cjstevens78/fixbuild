"use server"

import nodemailer from "nodemailer"
import { QuoteEmailTemplate } from "@/components/email-templates/quote-email"
import { ContactEmailTemplate } from "@/components/email-templates/contact-email"
import { z } from "zod"
import { renderAsync } from "@react-email/render"

// Create a nodemailer transporter using SMTP2GO
const transporter = nodemailer.createTransport({
  host: "mail.smtp2go.com",
  port: 2525, // You can also use 8025, 587 or 25
  secure: false, // true for 465, false for other ports
  auth: {
    user: "fix-build.co.uk", // SMTP2GO username
    pass: "KQl8S04CNAiXH44H", // SMTP2GO password
  },
})

// Validation schemas
const quoteFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  recaptchaToken: z.string().min(1, { message: "reCAPTCHA verification is required" }),
})

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(5, { message: "Please enter a valid phone number" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  recaptchaToken: z.string().min(1, { message: "reCAPTCHA verification is required" }),
})

export type QuoteFormData = z.infer<typeof quoteFormSchema>
export type ContactFormData = z.infer<typeof contactFormSchema>

// Function to verify reCAPTCHA token
async function verifyRecaptcha(token: string) {
  try {
    const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY

    if (!RECAPTCHA_SECRET_KEY) {
      console.error("RECAPTCHA_SECRET_KEY is not defined in environment variables")
      return false
    }

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    })

    const data = await response.json()
    return data.success
  } catch (error) {
    console.error("reCAPTCHA verification error:", error)
    return false
  }
}

export async function sendQuoteEmail(formData: QuoteFormData) {
  try {
    // Validate form data
    const validatedData = quoteFormSchema.parse(formData)

    // Verify reCAPTCHA token
    const isRecaptchaValid = await verifyRecaptcha(validatedData.recaptchaToken)
    if (!isRecaptchaValid) {
      return {
        success: false,
        error: "reCAPTCHA verification failed",
      }
    }

    // Render the React email template to HTML
    const emailHtml = await renderAsync(
      QuoteEmailTemplate({
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
      }),
    )

    // Send email using nodemailer
    const info = await transporter.sendMail({
      from: '"FixBuild Website" <info@fix-build.co.uk>',
      to: "info@fix-build.co.uk",
      subject: "New Quote Request from FixBuild Website",
      html: emailHtml,
    })

    return { success: true, data: info }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Validation failed",
        validationErrors: error.errors,
      }
    }

    console.error("Email sending error:", error)
    return {
      success: false,
      error: "Failed to send email. Please try again later.",
    }
  }
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(formData)

    // Verify reCAPTCHA token
    const isRecaptchaValid = await verifyRecaptcha(validatedData.recaptchaToken)
    if (!isRecaptchaValid) {
      return {
        success: false,
        error: "reCAPTCHA verification failed",
      }
    }

    // Render the React email template to HTML
    const emailHtml = await renderAsync(
      ContactEmailTemplate({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        message: validatedData.message,
      }),
    )

    // Send email using nodemailer
    const info = await transporter.sendMail({
      from: '"FixBuild Website" <info@fix-build.co.uk>',
      to: "info@fix-build.co.uk",
      subject: "New Contact Form Submission from FixBuild Website",
      html: emailHtml,
    })

    return { success: true, data: info }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Validation failed",
        validationErrors: error.errors,
      }
    }

    console.error("Email sending error:", error)
    return {
      success: false,
      error: "Failed to send email. Please try again later.",
    }
  }
}

