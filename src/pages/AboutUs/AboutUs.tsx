import React from 'react'
import styles from './AboutUs.module.css'

const AboutUs = () => {
  const coreValues = [
    {
      icon: "🤝",
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in every transaction."
    },
    {
      icon: "✓",
      title: "Quality",
      description: "We never compromise on quality, ensuring every potato meets our rigorous standards."
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description: "We partner with farms that practice sustainable agriculture and environmental stewardship."
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "We build long-term relationships based on trust, reliability, and mutual success."
    },
  ]

  const team = [
    {
      name: "Robert Thompson",
      title: "Founder & CEO",
      bio: "25 years of experience in agricultural imports and global trade."
    },
    {
      name: "Maria Garcia",
      title: "Head of Operations",
      bio: "Expert in logistics and supply chain management with 15 years in the industry."
    },
    {
      name: "David Chen",
      title: "Quality Assurance Director",
      bio: "Certified agricultural specialist ensuring top-quality standards for every shipment."
    },
    {
      name: "Sarah Williams",
      title: "Client Relations Manager",
      bio: "Dedicated to building strong client relationships and providing excellent service."
    },
  ]

  const timeline = [
    { year: "2010", event: "Company Founded", description: "Started with a vision to revolutionize potato imports" },
    { year: "2013", event: "First International Partnership", description: "Established relationships with premium farms in 5 countries" },
    { year: "2016", event: "Expanded Operations", description: "Opened new distribution centers and increased capacity to 300 tons monthly" },
    { year: "2019", event: "Quality Certification", description: "Achieved ISO 9001 and organic certification" },
    { year: "2023", event: "Industry Leader", description: "Became top 3 potato importer with 200+ satisfied clients" },
  ]

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.heroTitle}>About Premium Potato Imports</h1>
          <p className={styles.heroSubtitle}>
            Excellence in Every Shipment, Trust in Every Partnership
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section section-light">
        <div className="container">
          <div className={styles.storyLayout}>
            <div className={styles.storyContent}>
              <h2 className={styles.sectionHeading}>Our Story</h2>
              <p className={styles.storyText}>
                Founded in 2010, Premium Potato Imports began with a simple mission: to connect businesses 
                with the world's finest potatoes. What started as a small operation has grown into one of 
                the leading potato import agencies in North America.
              </p>
              <p className={styles.storyText}>
                Our founder, Robert Thompson, recognized a gap in the market for reliable, high-quality 
                potato imports. With his background in agricultural trade and a passion for excellence, 
                he built relationships with premium farms worldwide, ensuring consistent quality and supply.
              </p>
              <p className={styles.storyText}>
                Today, we serve over 200 clients including restaurants, retailers, and food service companies. 
                Our commitment to quality, reliability, and customer service has made us a trusted partner 
                in the industry.
              </p>
            </div>
            <div className={styles.storyImage}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.imageIcon}>🌾</span>
                <p>Premium Quality From Farm to Table</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className={styles.visionSection}>
        <div className="container">
          <div className={styles.visionContent}>
            <h2 className={styles.visionTitle}>Our Vision</h2>
            <p className={styles.visionText}>
              To be the world's most trusted potato import agency, setting the standard for quality, 
              sustainability, and customer service in the agricultural import industry.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>
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
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">Dedicated professionals committed to your success</p>
          <div className="grid-4">
            {team.map((member, index) => (
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
          <h2 className="section-title">Certifications & Partnerships</h2>
          <p className="section-subtitle">Certified quality you can trust</p>
          <div className={styles.certGrid}>
            <div className={styles.certBadge}>
              <div className={styles.badgeIcon}>✓</div>
              <p>ISO 9001 Certified</p>
            </div>
            <div className={styles.certBadge}>
              <div className={styles.badgeIcon}>🌱</div>
              <p>Organic Certified</p>
            </div>
            <div className={styles.certBadge}>
              <div className={styles.badgeIcon}>🌍</div>
              <p>Global GAP</p>
            </div>
            <div className={styles.certBadge}>
              <div className={styles.badgeIcon}>🏆</div>
              <p>Quality Assurance Int.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">Key milestones in our growth</p>
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

