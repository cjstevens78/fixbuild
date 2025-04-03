"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
      render: (container: string | HTMLElement, parameters: any) => number
      reset: (widgetId?: number) => void
    }
  }
}

interface ReCaptchaProps {
  onVerify: (token: string) => void
}

export function ReCaptcha({ onVerify }: ReCaptchaProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetId = useRef<number | null>(null)

  useEffect(() => {
    // Cleanup function to handle component unmounting
    return () => {
      if (widgetId.current !== null && window.grecaptcha) {
        try {
          window.grecaptcha.reset(widgetId.current)
        } catch (e) {
          console.error("Error resetting reCAPTCHA:", e)
        }
      }
    }
  }, [])

  const renderReCaptcha = () => {
    if (window.grecaptcha && containerRef.current && !widgetId.current) {
      try {
        widgetId.current = window.grecaptcha.render(containerRef.current, {
          sitekey: "6LeyfAQrAAAAAPakxZsifWzDULP2rzaRaA7_6X6c",
          callback: onVerify,
          theme: "light",
          size: "normal",
        })
      } catch (e) {
        console.error("Error rendering reCAPTCHA:", e)
      }
    }
  }

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
        strategy="afterInteractive"
        onReady={renderReCaptcha}
      />
      <div ref={containerRef} className="mb-4"></div>
    </>
  )
}

