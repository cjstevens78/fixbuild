import type * as React from "react"

interface QuoteEmailTemplateProps {
  name: string
  email: string
  message: string
}

export const QuoteEmailTemplate: React.FC<QuoteEmailTemplateProps> = ({ name, email, message }) => (
  <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
    <h1 style={{ color: "#0ea5e9", borderBottom: "1px solid #e5e7eb", paddingBottom: "10px" }}>New Quote Request</h1>
    <p>You have received a new quote request from the FixBuild website.</p>

    <h2 style={{ color: "#333", marginTop: "20px" }}>Customer Details:</h2>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>

    <h2 style={{ color: "#333", marginTop: "20px" }}>Message:</h2>
    <p style={{ backgroundColor: "#f9fafb", padding: "15px", borderRadius: "5px" }}>{message}</p>

    <hr style={{ margin: "30px 0", borderTop: "1px solid #e5e7eb" }} />
    <p style={{ color: "#6b7280", fontSize: "14px" }}>
      This email was sent from the quote form on the FixBuild website.
    </p>
  </div>
)

