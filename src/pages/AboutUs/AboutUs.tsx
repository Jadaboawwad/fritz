import React from 'react'
import styles from './AboutUs.module.css'

const AboutUs = () => {
  const coreValues = [
    {
      icon: "🧾",
      title: "Compliance First",
      description: "Every shipment is backed by full EU and U.S. documentation, SQF/BRCGS certificates, and traceability reports."
    },
    {
      icon: "❄️",
      title: "Cold-Chain Integrity",
      description: "We maintain -18 °C storage and continuous temperature monitoring from Belgian producer to Sysco DC."
    },
    {
      icon: "🤝",
      title: "Vendor Partnership",
      description: "Our onboarding toolkit is designed specifically for Sysco procurement, logistics, and quality teams."
    },
    {
      icon: "📈",
      title: "Scalable Supply",
      description: "Full reefer container capacity with private label options ensures rapid scaling for Sysco programs."
    },
  ]

  const leadership = [
    {
      name: "Rashed Abu Awwad",
      title: "Owner & Vendor Lead",
      bio: "Primary contact for Sysco vendor onboarding, overseeing commercial strategy, pricing, and partnerships."
    },
    {
      name: "Belgian Production Partner",
      title: "SQF / BRCGS Certified Facility",
      bio: "Produces Nashmi7 private label French fries with full EU export compliance and U.S. FDA registration."
    },
    {
      name: "Houston Operations Team",
      title: "Warehouse & Cold-Chain",
      bio: "Manages import customs, reefer drayage, and temperature-controlled storage at -18 °C."
    },
    {
      name: "Quality & Regulatory Desk",
      title: "Documentation & Recall",
      bio: "Maintains specification sheets, recall protocol and traceability logs aligned with Sysco standards."
    },
  ]

  const companySnapshot = [
    { label: "Company Name", value: "Nashmi7 LLC" },
    { label: "Business Type", value: "Importer · Distributor · Private Label Supplier" },
    { label: "Headquarters", value: "Houston, Texas – USA" },
    { label: "Owner", value: "Rashed Abu Awwad" },
    { label: "Website", value: "www.nashmi7.com" },
    { label: "Email", value: "rashedalawwadu@gmail.com" },
    { label: "Phone", value: "Add business number" },
  ]

  const complianceBadges = [
    { icon: "🏭", label: "SQF / BRCGS / FSSC 22000 Certificates" },
    { icon: "🩺", label: "Health Certificate & EU Export Docs" },
    { icon: "📑", label: "Recall & Traceability Program" },
    { icon: "🛡️", label: "COI Listing Sysco Corporation" },
  ]

  const timeline = [
    {
      year: "Phase 1",
      event: "European Production Alignment",
      description: "Selected Belgian partner with SQF/BRCGS certification, GS1 GTINs, and private label capability."
    },
    {
      year: "Phase 2",
      event: "U.S. Import Readiness",
      description: "Secured FDA registration, customs brokers, reefer carriers, and Port of Houston receiving slots."
    },
    {
      year: "Phase 3",
      event: "Cold-Chain & Storage",
      description: "Commissioned -18 °C warehouse in Houston with container unloading and palletization workflow."
    },
    {
      year: "Phase 4",
      event: "Sysco Vendor Toolkit",
      description: "Assembled company profile, product catalog, pricing, and compliance PDFs for Sysco onboarding."
    },
  ]

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.heroTitle}>Nashmi7 LLC Company Profile</h1>
          <p className={styles.heroSubtitle}>
            Belgian frozen fries delivered through a certified, temperature-controlled supply chain built for Sysco.
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section section-light">
        <div className="container">
          <div className={styles.storyLayout}>
            <div className={styles.storyContent}>
              <h2 className={styles.sectionHeading}>Who We Are</h2>
              <p className={styles.storyText}>
                Nashmi7 LLC is a Houston-based importer, distributor, and private label supplier specializing in premium
                Belgian frozen French fries. We act as the U.S. commercial arm for a certified European producer,
                providing Sysco and food-service buyers with a turnkey program of straight-cut, shoestring, and skin-on SKUs.
              </p>
              <p className={styles.storyText}>
                Our focus is delivering consistent quality backed by meticulous documentation. Every shipment arrives with
                FDA registration details, EU health certificates, certificates of origin, and insurance listing Sysco
                Corporation. We combine this compliance rigor with agile logistics, ensuring cold-chain integrity from quay to warehouse.
              </p>
              <p className={styles.storyText}>
                Led by owner Rashed Abu Awwad, the team coordinates procurement, quality, and customer service,
                providing Sysco stakeholders with direct access to decision-makers. We strive for professional, responsive
                support at every stage of the onboarding and replenishment process.
              </p>
            </div>
            <div className={styles.storyImage}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.imageIcon}>📊</span>
                <p>Sysco-Ready Snapshot</p>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '25px', textAlign: 'left', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  {companySnapshot.map((item) => (
                    <li key={item.label}><strong>{item.label}:</strong> {item.value}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className={styles.visionSection}>
        <div className="container">
          <div className={styles.visionContent}>
            <h2 className={styles.visionTitle}>Our Promise</h2>
            <p className={styles.visionText}>
              To be Sysco’s most reliable source for Belgian frozen fries by pairing impeccable documentation with an unbroken cold chain and responsive vendor support.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Operational Pillars</h2>
          <p className="section-subtitle">How Nashmi7 LLC delivers value to Sysco buyers</p>
          <div className="grid-4">
            {coreValues.map((value, index) => (
              <div key={index} className="card">
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Leadership & Operations</h2>
          <p className="section-subtitle">Direct lines to the people who own each step of your supply chain</p>
          <div className="grid-4">
            {leadership.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.teamPhoto}>
                  <span className={styles.photoIcon}>👤</span>
                </div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamTitle}>{member.title}</p>
                <p className={styles.teamBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Quality & Compliance Backbone</h2>
          <p className="section-subtitle">Documentation package assembled for Sysco vendor onboarding</p>
          <div className={styles.certGrid}>
            {complianceBadges.map((badge) => (
              <div key={badge.label} className={styles.certBadge}>
                <div className={styles.badgeIcon}>{badge.icon}</div>
                <p>{badge.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Program Roadmap</h2>
          <p className="section-subtitle">Steps that prepare Nashmi7 LLC to serve Sysco nationwide</p>
          <div className={styles.timeline}>
            {timeline.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineEvent}>{item.event}</h3>
                  <p className={styles.timelineDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs

