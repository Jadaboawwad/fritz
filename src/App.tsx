import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import AboutUs from 'pages/AboutUs/AboutUs'
import ContactUs from 'pages/ContactUs/ContactUs'

import Footer from 'components/Organisms/Footer/Footer'
import Header from 'components/Organisms/Header/Header'
import Home from 'components/Organisms/Hero/Hero'

import 'styles/App.css'

const App: FC = () => (
  <div className="appContainer">
    <Header />
    <main className="page-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<PlaceholderPage title="Our Products" />} />
        <Route path="/services" element={<PlaceholderPage title="Our Services" />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/quote" element={<PlaceholderPage title="Request a Quote" />} />
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

export default App