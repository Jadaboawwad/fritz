import { FC, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import AboutUs from 'pages/AboutUs/AboutUs'
import ContactUs from 'pages/ContactUs/ContactUs'

import Footer from 'components/Organisms/Footer/Footer'
import Header from 'components/Organisms/Header/Header'
import Home from 'components/Organisms/Hero/Hero'

import 'styles/App.css'

const productImageFiles = [
  'processed_1_1762471379363_image.png',
  'processed_2_1762472184802_image.png',
  'processed_3_1762472184802_image.png',
  'processed_4_1762472215835_image.png',
  'processed_5_1762472227224_image.png',
  'processed_6_1762472239582_image.png',
  'processed_7_1762472249477_image.png',
  'processed_8_1762472257752_image.png',
  'processed_9_1762472268033_image.png',
  'processed_10_1762472280486_image.png',
  'processed_11_1762472292992_image.png',
  'processed_12_1762472306512_image.png',
  'processed_13_1762472314981_image.png',
  'processed_14_1762472335720_image.png',
  'processed_15_1762472346592_image.png',
  'processed_16_1762472355479_image.png',
  'processed_17_1762472365523_image.png',
  'processed_18_1762472375021_image.png',
  'processed_19_1762472381996_image.png',
  'processed_20_1762472391999_image.png',
  'processed_21_1762472401729_image.png',
  'processed_22_1762472411491_image.png',
  'processed_23_1762472418851_image.png',
  'processed_24_1762472184802_image.png',
  'processed_25_1762472215835_image.png',
  'processed_26_1762472227224_image.png',
  'processed_27_1762472239582_image.png',
  'processed_28_1762472249477_image.png',
  'processed_29_1762472257752_image.png',
  'processed_30_1762472268033_image.png',
  'processed_31_1762472280486_image.png',
  'processed_32_1762472292992_image.png',
  'processed_33_1762472306512_image.png',
  'processed_34_1762472314981_image.png',
  'processed_35_1762472335720_image.png',
  'processed_36_1762472346592_image.png',
  'processed_37_1762472355479_image.png',
  'processed_38_1762472365523_image.png',
  'processed_39_1762472375021_image.png',
  'processed_40_1762472381996_image.png',
  'processed_41_1762472391999_image.png',
  'processed_42_1762472401729_image.png',
  'processed_43_1762472411491_image.png',
  'processed_44_1762472418851_image.png',
  'processed_45_1762472443404_image.png',
  'processed_46_1762472452029_image.png',
  'processed_47_1762472463606_image.png',
  'processed_48_1762472475023_image.png',
  'processed_49_1762472482607_image.png',
  'processed_50_1762472493462_image.png',
  'processed_51_1762472501549_image.png',
  'processed_52_1762472512382_image.png',
  'processed_53_1762472520697_image.png',
  'processed_54_1762472531854_image.png',
  'processed_55_1762472558378_image.png',
  'processed_56_1762472569335_image.png',
  'processed_57_1762472582072_image.png',
  'processed_58_1762472592702_image.png',
  'processed_59_1762472600344_image.png',
  'processed_60_1762472607473_image.png',
  'processed_61_1762472616948_image.png',
]

const App: FC = () => (
  <div className="appContainer">
    <Header />
    <main className="page-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<PlaceholderPage title="Our Services" />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </main>
    <Footer />
  </div>
)

// Simple placeholder component for pages not yet implemented
const PlaceholderPage: FC<{ title: string }> = ({ title }) => (
  <div style={{ 
    padding: '100px 20px', 
    textAlign: 'center', 
    minHeight: '60vh',
    backgroundColor: 'var(--cream-white)'
  }}>
    <h1 style={{ 
      fontSize: '3rem', 
      color: 'var(--russet-brown)', 
      marginBottom: '20px',
      backgroundColor: 'transparent'
    }}>
      {title}
    </h1>
    <p style={{ 
      fontSize: '1.2rem', 
      color: 'var(--earth-brown)',
      backgroundColor: 'transparent'
    }}>
      This page is coming soon. Please check back later!
    </p>
  </div>
)

const ProductsPage: FC = () => {
  const itemsPerPage = 12
  const [currentPage, setCurrentPage] = useState(1)

  const products = productImageFiles.map((file, index) => ({
    id: `product-${index + 1}`,
    imageSrc: `/images/products/${file}`,
    title: `Nashmi7 Belgian Fries ${index + 1}`,
  }))

  const totalPages = Math.ceil(products.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="productsPage">
      <section className="section section-light">
        <div className="container">
          <h1 className="section-title">Product Catalogue</h1>
          <p className="section-subtitle">
            High-resolution visuals of Nashmi7 LLC’s Belgian frozen French fries portfolio prepared for Sysco vendor submission.
          </p>
          <div className="productsGrid">
            {paginatedProducts.map((product) => (
              <div key={product.id} className="productCard">
                <div className="productImageWrapper">
                  <img
                    src={product.imageSrc}
                    alt={`${product.title} packaging`}
                    loading="lazy"
                  />
                </div>
                <div className="productInfo">
                  <h3>{product.title}</h3>
                  <p>Premium frozen potato cuts · Belgian origin · -18 °C cold chain</p>
                </div>
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="paginationControls">
              <button
                className="btn btn-secondary"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
              <span className="paginationStatus">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="btn btn-secondary"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

const QuotePage: FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    productInterest: '',
    volume: '',
    notes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = 'Request for Quote – Nashmi7 LLC'
    const bodyLines = [
      `Company Name: ${formData.companyName}`,
      `Contact Name: ${formData.contactName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Products of Interest: ${formData.productInterest}`,
      `Monthly Volume (cases/containers): ${formData.volume}`,
      '',
      'Additional Notes:',
      formData.notes || 'N/A',
    ]

    const mailtoLink = `mailto:sales@nashmi7.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`
    
    window.location.href = mailtoLink

    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      productInterest: '',
      volume: '',
      notes: '',
    })
  }

  return (
    <div className="quotePage">
      <section className="section section-light">
        <div className="container">
          <h1 className="section-title">Request a Quote</h1>
          <p className="section-subtitle">
            Submit your requirements for Nashmi7 Belgian frozen fries. Our commercial desk will respond from mofeed@nashmi7.com.
          </p>
          <form onSubmit={handleSubmit} className="quoteForm">
            <div className="quoteRow">
              <div className="quoteField">
                <label htmlFor="companyName">Company Name *</label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your company name"
                />
              </div>
              <div className="quoteField">
                <label htmlFor="contactName">Primary Contact *</label>
                <input
                  id="contactName"
                  name="contactName"
                  type="text"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  placeholder="Enter full name"
                />
              </div>
            </div>
            <div className="quoteRow">
              <div className="quoteField">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
              <div className="quoteField">
                <label htmlFor="phone">Phone *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 (443) 397-4814"
                />
              </div>
            </div>
            <div className="quoteField">
              <label htmlFor="productInterest">Products of Interest *</label>
              <input
                id="productInterest"
                name="productInterest"
                type="text"
                value={formData.productInterest}
                onChange={handleChange}
                required
                placeholder="Straight cut, shoestring, skin-on, private label..."
              />
            </div>
            <div className="quoteField">
              <label htmlFor="volume">Estimated Monthly Volume *</label>
              <input
                id="volume"
                name="volume"
                type="text"
                value={formData.volume}
                onChange={handleChange}
                required
                placeholder="e.g., 1 x 40’ reefer (1,890 cases)"
              />
            </div>
            <div className="quoteField">
              <label htmlFor="notes">Additional Notes</label>
              <textarea
                id="notes"
                name="notes"
                rows={5}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Share delivery timelines, Sysco DC destinations, or private label needs..."
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit Request</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default App