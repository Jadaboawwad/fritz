import React, { useState } from 'react'
import styles from 'pages/ContactUs/ContactUs.module.css'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: '',
  })

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = 'Nashmi7 LLC Inquiry from Website'
    const bodyLines = [
      `Full Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Company: ${formData.company || 'Not provided'}`,
      `Inquiry Type: ${formData.inquiryType || 'Not selected'}`,
      '',
      'Message:',
      formData.message,
    ]

    const mailtoLink = `mailto:sales@nashmi7.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`

    // Open mail client
    try {
      window.open(mailtoLink, '_self')
    } catch (error) {
      console.error('Failed to open mail client:', error)
      // Fallback to direct assignment
      window.location.href = mailtoLink
    }

    // Clear form after a short delay to ensure mailto link is processed
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        message: '',
      })
    }, 100)
  }

  const faqs = [
    {
      question: "What documentation do you provide with each shipment?",
      answer: "Every load includes SQF/BRCGS certificate copies, EU Health Certificate, Certificate of Origin, FDA registration confirmation, and full traceability logs."
    },
    {
      question: "How fast can you deliver after a purchase order?",
      answer: "Our standard lead time is 3–4 weeks door-to-door into Houston, including production slot, ocean freight, customs clearance, and cold storage intake."
    },
    {
      question: "Which SKUs are available for Sysco vendor onboarding?",
      answer: "We currently offer Belgian straight cut (9×9 mm), shoestring (7×7 mm), and skin-on straight cut (9×9 mm) fries in 4 × 5 lb food-service cases."
    },
    {
      question: "Do you support private label programs?",
      answer: "Yes. Our Belgian partner can produce Sysco-exclusive or customer-branded bags and cartons with approved artwork and GS1 GTIN coding."
    },
    {
      question: "How is cold chain monitored?",
      answer: "Temperature is verified at loading, during ocean transit, at Port of Houston arrival, and at warehouse receiving with -18 °C data-logger reports."
    },
    {
      question: "Who is my primary contact?",
      answer: "Owner Rashed Abu Awwad personally manages vendor onboarding and can coordinate directly with Sysco procurement, QA, and logistics teams."
    },
  ]

  return (
    <div className={styles.contactPage}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Connect with Nashmi7 LLC</h1>
          <p className={styles.pageSubtitle}>
            Reach out to align on Sysco vendor onboarding, documentation, and delivery schedules. Our team responds quickly through sales@nashmi7.com.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="section section-light">
        <div className="container">
          <div className={styles.contactLayout}>
            {/* Contact Form */}
            <div className={styles.formColumn}>
              <h2 className={styles.formTitle}>Request Documentation or Schedule a Call</h2>
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="fullName" className={styles.label}>Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.input}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={styles.input}
                      placeholder="+1 (443) 397-4814"
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.label}>Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="Your company name"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="inquiryType" className={styles.label}>Inquiry Type *</label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className={styles.select}
                    >
                      <option value="">Select inquiry type</option>
                      <option value="quote">Request Pricing Sheet</option>
                      <option value="product">Product Specifications</option>
                      <option value="partnership">Sysco Vendor Onboarding</option>
                      <option value="support">Logistics & Delivery Coordination</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={styles.textarea}
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className={styles.infoColumn}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Contact Information</h3>
                
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📍</div>
                  <div className={styles.infoContent}>
                    <h4>Headquarters</h4>
                    <p>Houston, Texas<br />United States</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📞</div>
                  <div className={styles.infoContent}>
                    <h4>Phone | WhatsApp</h4>
                    <p>+1 (443) 397-4814</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>✉️</div>
                  <div className={styles.infoContent}>
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:sales@nashmi7.com" className={styles.emailLink}>sales@nashmi7.com</a>
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>🕒</div>
                  <div className={styles.infoContent}>
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM CST<br />Saturday: 9:00 AM - 1:00 PM CST<br />Sunday: By appointment</p>
                  </div>
                </div>

                <div className={styles.socialLinks}>
                  <h4>Follow Us</h4>
                  <div className={styles.socialIcons}>
                    <a href="https://wa.me/14433974814" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>💬</a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>💼</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>📷</a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>📘</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapPlaceholder}>
          <div className={styles.mapOverlay}>
            <p>📍 Houston, Texas — Nashmi7 LLC Cold-Chain Hub</p>
            <p className={styles.mapNote}>Map placeholder – embed warehouse location once confirmed</p>
            <a href="mailto:sales@nashmi7.com" className={styles.emailCta}>Email sales@nashmi7.com</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Quick answers to common questions</p>
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={`${styles.faqQuestion} ${expandedFaq === index ? styles.active : ''}`}
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className={styles.faqToggle}>{expandedFaq === index ? '−' : '+'}</span>
                </button>
                {expandedFaq === index && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs