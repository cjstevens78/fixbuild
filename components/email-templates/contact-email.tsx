import type * as React from "react"

interface ContactEmailTemplateProps {
  name: string
  email: string
  phone: string
  message: string
}

export const ContactEmailTemplate: React.FC<ContactEmailTemplateProps> = ({ name, email, phone, message }) => (
  <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
    <h1 style={{ color: "#0ea5e9", borderBottom: "1px solid #e5e7eb", paddingBottom: "10px" }}>
      New Contact Form Submission
    </h1>
    <p>You have received a new contact form submission from the FixBuild website.</p>

    <h2 style={{ color: "#333", marginTop: "20px" }}>Customer Details:</h2>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Phone:</strong> {phone}
    </p>

    <h2 style={{ color: "#333", marginTop: "20px" }}>Message:</h2>
    <p style={{ backgroundColor: "#f9fafb", padding: "15px", borderRadius: "5px" }}>{message}</p>

    <hr style={{ margin: "30px 0", borderTop: "1px solid #e5e7eb" }} />
    <p style={{ color: "#6b7280", fontSize: "14px" }}>
      This email was sent from the contact form on the FixBuild website.
    </p>
  </div>
)

