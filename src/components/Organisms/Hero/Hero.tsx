import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Hero.module.css'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [counters, setCounters] = useState({ years: 0, tons: 0, clients: 0, countries: 0 })

  const slides = [
    {
      title: "Premium Quality Potatoes from Farm to Your Business",
      subtitle: "Delivering excellence in every shipment",
    },
    {
      title: "Reliable Import Solutions for Restaurants & Retailers",
      subtitle: "Your trusted potato supply partner",
    },
    {
      title: "Multiple Varieties, Consistent Supply",
      subtitle: "Year-round availability guaranteed",
    },
    {
      title: "Certified Quality, Competitive Prices",
      subtitle: "Best value for your business",
    },
  ]

  const potatoVarieties = [
    { name: "Russet", origin: "USA & Canada", uses: "Perfect for fries, baking, and mashing" },
    { name: "Yukon Gold", origin: "North America", uses: "Ideal for roasting, mashing, and salads" },
    { name: "Red Potato", origin: "USA", uses: "Great for boiling, roasting, and salads" },
    { name: "Fingerling", origin: "Europe", uses: "Gourmet dishes and roasting" },
    { name: "Purple", origin: "South America", uses: "Specialty dishes and unique presentations" },
  ]

  const testimonials = [
    {
      quote: "Premium Potato Imports has been our reliable partner for 5 years. Their quality is consistently excellent!",
      name: "John Smith",
      company: "Smith's Restaurant Chain",
    },
    {
      quote: "The variety and quality of potatoes we receive are unmatched. Highly recommend for any food business.",
      name: "Sarah Johnson",
      company: "Fresh Market Grocers",
    },
    {
      quote: "Their import process is seamless, and delivery is always on time. A true professional partner.",
      name: "Michael Chen",
      company: "Chen's Food Distribution",
    },
  ]

  // Auto-rotate slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  // Animated counters
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = {
      years: 15 / steps,
      tons: 500 / steps,
      clients: 200 / steps,
      countries: 10 / steps,
    }

    let step = 0
    const timer = setInterval(() => {
      if (step < steps) {
        setCounters((prev) => ({
          years: Math.min(15, prev.years + increment.years),
          tons: Math.min(500, prev.tons + increment.tons),
          clients: Math.min(200, prev.clients + increment.clients),
          countries: Math.min(10, prev.countries + increment.countries),
        }))
        step++
      } else {
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.homePage}>
      {/* Hero Slider Section */}
      <section className={styles.heroSlider}>
        <div className={styles.sliderContainer}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentSlide ? styles.activeSlide : ''}`}
              style={{ background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.9) 0%, rgba(139, 111, 71, 0.9) 100%)' }}
            >
              <div className={styles.slideContent}>
                <h1 className={styles.slideTitle}>{slide.title}</h1>
                <p className={styles.slideSubtitle}>{slide.subtitle}</p>
                <Link to="/quote" className="btn btn-primary">Get Started</Link>
              </div>
            </div>
          ))}
          <div className={styles.sliderControls}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">Your trusted partner in premium potato imports</p>
          <div className="grid-4">
            <div className="card">
              <div className={styles.iconBox}>✓</div>
              <h3>Quality Assurance</h3>
              <p>Every batch undergoes rigorous quality checks to ensure premium standards</p>
            </div>
            <div className="card">
              <div className={styles.iconBox}>🌍</div>
              <h3>Global Sourcing</h3>
              <p>We source from the finest potato farms across 10+ countries worldwide</p>
            </div>
            <div className="card">
              <div className={styles.iconBox}>🚚</div>
              <h3>Timely Delivery</h3>
              <p>Reliable logistics ensuring fresh potatoes delivered right on schedule</p>
            </div>
            <div className="card">
              <div className={styles.iconBox}>💰</div>
              <h3>Competitive Pricing</h3>
              <p>Best market rates without compromising on quality or service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Potato Varieties Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Premium Potato Varieties We Import</h2>
          <p className="section-subtitle">From classic favorites to specialty varieties</p>
          <div className={styles.varietyGrid}>
            {potatoVarieties.map((variety, index) => (
              <div key={index} className={styles.varietyCard}>
                <div className={styles.varietyIcon}>🥔</div>
                <h3 className={styles.varietyName}>{variety.name}</h3>
                <p className={styles.varietyOrigin}>Origin: {variety.origin}</p>
                <p className={styles.varietyUses}>{variety.uses}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Counter Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>🏆</div>
              <div className={styles.statNumber}>{Math.floor(counters.years)}+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>📦</div>
              <div className={styles.statNumber}>{Math.floor(counters.tons)}+</div>
              <div className={styles.statLabel}>Tons Monthly</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>😊</div>
              <div className={styles.statNumber}>{Math.floor(counters.clients)}+</div>
              <div className={styles.statLabel}>Happy Clients</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>🌍</div>
              <div className={styles.statNumber}>{Math.floor(counters.countries)}+</div>
              <div className={styles.statLabel}>Source Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Import Process Section */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Our Import Process</h2>
          <p className="section-subtitle">Simple, transparent, and efficient</p>
          <div className={styles.processTimeline}>
            <div className={styles.processStep}>
              <div className={styles.processIcon}>🌾</div>
              <h3>Source</h3>
              <p>Select premium potatoes from certified farms worldwide</p>
            </div>
            <div className={styles.processLine}></div>
            <div className={styles.processStep}>
              <div className={styles.processIcon}>✓</div>
              <h3>Quality Check</h3>
              <p>Rigorous inspection and quality assurance testing</p>
            </div>
            <div className={styles.processLine}></div>
            <div className={styles.processStep}>
              <div className={styles.processIcon}>📋</div>
              <h3>Import & Customs</h3>
              <p>Handle all documentation and customs clearance</p>
            </div>
            <div className={styles.processLine}></div>
            <div className={styles.processStep}>
              <div className={styles.processIcon}>🚚</div>
              <h3>Delivery</h3>
              <p>Fast, reliable delivery to your business location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Trusted by businesses across the industry</p>
          <div className="grid-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.testimonialQuote}>{testimonial.quote}</p>
                <div className={styles.testimonialAuthor}>
                  <p className={styles.authorName}>{testimonial.name}</p>
                  <p className={styles.authorCompany}>{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaText}>Contact us today for a free quote and discover the Premium Potato Imports difference</p>
          <div className={styles.ctaButtons}>
            <Link to="/quote" className="btn btn-primary">Request Quote</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
