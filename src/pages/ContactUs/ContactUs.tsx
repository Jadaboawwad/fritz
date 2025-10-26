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
    alert('Thank you for your inquiry! We will get back to you soon.')
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      inquiryType: '',
      message: '',
    })
  }

  const faqs = [
    {
      question: "What is the minimum order quantity?",
      answer: "Our minimum order quantity is 5 tons per variety. However, we can discuss custom arrangements for mixed orders."
    },
    {
      question: "What are your delivery times?",
      answer: "Standard delivery times are 2-3 weeks from order confirmation, depending on origin and destination. Express shipping options are available."
    },
    {
      question: "Do you provide quality certificates?",
      answer: "Yes, all our shipments come with complete quality certificates, phytosanitary certificates, and origin certificates."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, letters of credit (L/C), and for established clients, we offer net payment terms."
    },
    {
      question: "Can you supply organic potatoes?",
      answer: "Yes, we have partnerships with certified organic farms and can supply organic potatoes with full certification."
    },
    {
      question: "Do you offer storage solutions?",
      answer: "We have temperature-controlled storage facilities and can arrange storage solutions as per your requirements."
    },
  ]

  return (
    <div className={styles.contactPage}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Get In Touch With Us</h1>
          <p className={styles.pageSubtitle}>
            We're here to answer your questions and discuss your potato import needs
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="section section-light">
        <div className="container">
          <div className={styles.contactLayout}>
            {/* Contact Form */}
            <div className={styles.formColumn}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>
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
                      placeholder="+1 (555) 000-0000"
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
                      <option value="quote">Request Quote</option>
                      <option value="product">Product Information</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="support">Customer Support</option>
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
                    <h4>Office Address</h4>
                    <p>123 Import Boulevard<br />Trade City, TC 12345<br />United States</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📞</div>
                  <div className={styles.infoContent}>
                    <h4>Phone Numbers</h4>
                    <p>Main: +1 (555) 123-4567<br />Support: +1 (555) 123-4568</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>✉️</div>
                  <div className={styles.infoContent}>
                    <h4>Email</h4>
                    <p>info@premiumpotato.com<br />sales@premiumpotato.com</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>🕒</div>
                  <div className={styles.infoContent}>
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>

                <div className={styles.socialLinks}>
                  <h4>Follow Us</h4>
                  <div className={styles.socialIcons}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>📘</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>📷</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>💼</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>🐦</a>
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
            <p>📍 123 Import Boulevard, Trade City, TC 12345</p>
            <p className={styles.mapNote}>Interactive map would be embedded here</p>
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
