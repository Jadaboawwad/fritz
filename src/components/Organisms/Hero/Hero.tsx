import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Hero.module.css'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Nashmi7 LLC — Belgian Fries Delivered with Precision",
      subtitle: "Certified supply partner for Sysco and leading food-service distributors",
    },
    {
      title: "Private Label & Food-Service Solutions",
      subtitle: "Importer · Distributor · Private Label Supplier based in Houston, Texas",
    },
    {
      title: "Cold Chain You Can Trust",
      subtitle: "Continuous -18 °C monitoring from European producer to Sysco DC",
    },
  ]

  const companyFacts = [
    { label: "Business Type", value: "Importer / Distributor / Private Label Supplier" },
    { label: "Headquarters", value: "Houston, Texas – USA" },
    { label: "Owner", value: "Rashed Abu Awwad" },
    { label: "Website", value: "www.nashmi7.com" },
    { label: "Email", value: "rashedalawwadu@gmail.com" },
    { label: "Phone", value: "Add business number" },
  ]

  const logisticsHighlights = [
    {
      icon: "🚢",
      title: "Import Point",
      detail: "Port of Houston, Texas with on-dock quick release to cold storage"
    },
    {
      icon: "🏬",
      title: "Warehouse Capacity",
      detail: "Temperature-controlled facility maintained at -18 °C"
    },
    {
      icon: "📦",
      title: "Supply Volume",
      detail: "Full 40′ reefer containers (~1,890 cases per arrival)"
    },
    {
      icon: "⏱️",
      title: "Lead Time",
      detail: "3–4 weeks from purchase order to Houston delivery"
    },
    {
      icon: "⚓",
      title: "Shipping Terms",
      detail: "CIF Houston with Delivered Duty Paid available on request"
    },
    {
      icon: "❄️",
      title: "Cold Chain Integrity",
      detail: "Continuous frozen chain tracked from Belgian producer to Sysco DC"
    },
  ]

  const products = [
    {
      name: "Belgian Straight Cut Fries (9×9 mm)",
      cutType: "3/8″ Straight Cut",
      packaging: "4 × 5 lb bags / case",
      netWeight: "20 lb",
      shelfLife: "24 months (frozen)",
      origin: "Belgium",
      storageTemp: "-18 °C or below",
    },
    {
      name: "Belgian Shoestring Fries (7×7 mm)",
      cutType: "Thin Cut",
      packaging: "4 × 5 lb bags / case",
      netWeight: "20 lb",
      shelfLife: "24 months (frozen)",
      origin: "Belgium",
      storageTemp: "-18 °C or below",
    },
    {
      name: "Belgian Skin-On Fries (9×9 mm)",
      cutType: "Rustic Skin-On",
      packaging: "4 × 5 lb bags / case",
      netWeight: "20 lb",
      shelfLife: "24 months (frozen)",
      origin: "Belgium",
      storageTemp: "-18 °C or below",
    },
  ]

  const catalogRequirements = [
    "High-resolution photos of retail and food-service packaging (bag, carton, pallet)",
    "Ingredient list, nutritional facts panel, and allergen statement per SKU",
    "Case dimensions, pallet TI/HI configuration, and GS1 GTIN barcode",
    "Import compliance note covering FDA facility number and EU exporter registration",
  ]

  const complianceDocs = [
    "Food-safety certificate (SQF / BRCGS / FSSC 22000) from the Belgian producer",
    "Certificate of Origin and EU Health Certificate for each shipment",
    "Manufacturer-signed product specification sheets",
    "Recall & traceability program statement outlining escalation steps",
    "Certificate of Insurance listing Sysco Corporation as certificate holder",
    "FDA registration number for U.S. import operations",
    "Completed W-9 or W-8BEN-E for vendor setup",
  ]

  const deliverables = [
    "Nashmi7 LLC Company Profile (PDF)",
    "Product Catalogue & Specifications (PDF)",
    "Certifications & Food-Safety Documentation Pack (PDF, zipped bundle)",
    "Pricing Sheet (Excel or PDF format)",
    "Curated photo assets (PNG / JPEG)",
    "Personalized cover letter addressed to Sysco vendor onboarding",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

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

      {/* Company Overview */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Company Overview</h2>
          <p className="section-subtitle">
            Nashmi7 LLC is a Houston-based importer bringing premium Belgian frozen fries to Sysco and food-service partners.
          </p>
          <div className={styles.profileLayout}>
            <div className={styles.profileNarrative}>
              <p>
                Nashmi7 LLC operates as an importer, distributor, and private label supplier for high-quality frozen potato
                products. We specialize in Belgian-produced French fries sourced directly from audited European plants with
                globally recognized food-safety certifications.
              </p>
              <p>
                Our cold-chain program safeguards every shipment from the factory blast freezer to final delivery in Houston,
                allowing Sysco distribution centers and regional buyers to receive product with full traceability,
                documentation, and insurance coverage.
              </p>
            </div>
            <div className={styles.factGrid}>
              {companyFacts.map((fact) => (
                <div key={fact.label} className={styles.factCard}>
                  <span className={styles.factLabel}>{fact.label}</span>
                  <span className={styles.factValue}>{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & Capabilities */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Logistics & Capability Summary</h2>
          <p className="section-subtitle">Configured to support Sysco vendor onboarding and continuous supply</p>
          <div className={styles.logisticsGrid}>
            {logisticsHighlights.map((item) => (
              <div key={item.title} className={styles.logisticsCard}>
                <div className={styles.logisticsIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Belgian Frozen Potato Portfolio</h2>
          <p className="section-subtitle">Core SKUs configured for Sysco vendor folio submissions</p>
          <div className={styles.tableWrapper}>
            <table className={styles.productTable}>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Cut Type</th>
                  <th>Packaging</th>
                  <th>Net Weight</th>
                  <th>Shelf Life</th>
                  <th>Origin</th>
                  <th>Storage Temp</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.name}>
                    <td>{product.name}</td>
                    <td>{product.cutType}</td>
                    <td>{product.packaging}</td>
                    <td>{product.netWeight}</td>
                    <td>{product.shelfLife}</td>
                    <td>{product.origin}</td>
                    <td>{product.storageTemp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Catalog Requirements */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Product Folio Requirements</h2>
          <p className="section-subtitle">Assets to include in the Sysco-ready catalog</p>
          <div className={styles.docGrid}>
            {catalogRequirements.map((item) => (
              <div key={item} className={styles.docCard}>
                <span className={styles.docIcon}>📌</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Checklist */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Quality & Compliance Documents</h2>
          <p className="section-subtitle">Prepare the following PDF packets for Sysco vendor review</p>
          <ul className={styles.complianceList}>
            {complianceDocs.map((doc) => (
              <li key={doc}>
                <span className={styles.checkIcon}>✓</span>
                {doc}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Submission Deliverables</h2>
          <p className="section-subtitle">Package these files for Sysco's vendor onboarding portal</p>
          <ul className={styles.deliverablesList}>
            {deliverables.map((item) => (
              <li key={item}>
                <span className={styles.assetIcon}>📄</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Ready to Finalize Your Sysco Vendor Folio?</h2>
          <p className={styles.ctaText}>
            Connect with Nashmi7 LLC to confirm documentation, pricing, and delivery schedules tailored for Sysco distribution.
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/about" className="btn btn-primary">Company Profile</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Rashed Abu Awwad</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
