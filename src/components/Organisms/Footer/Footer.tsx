import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import Container from 'components/Atoms/Container/Container';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Newsletter signup logic would go here
        alert('Thank you for subscribing to our newsletter!');
        setEmail('');
    };

    return (
        <footer className={styles.footer}>
            <Container className={styles.footerWrapper}>
                <div className={styles.footerMain}>
                    {/* About Us Column */}
                    <div className={styles.footerColumn}>
                        <h3 className={styles.footerTitle}>About Premium Potato Imports</h3>
                        <p className={styles.footerText}>
                            We are a leading potato import agency specializing in premium quality potatoes
                            from the finest farms worldwide. With over 15 years of experience, we deliver
                            excellence from farm to your business.
                        </p>
                        <div className={styles.logo}>
                            <span className={styles.potatoIcon}>🥔</span>
                            <span className={styles.logoText}>Farm to Business Excellence</span>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className={styles.footerColumn}>
                        <h3 className={styles.footerTitle}>Quick Links</h3>
                        <ul className={styles.footerLinks}>
                            <li><Link to="/" className={styles.footerLink}>Home</Link></li>
                            <li><Link to="/about" className={styles.footerLink}>About Us</Link></li>
                            <li><Link to="/products" className={styles.footerLink}>Our Products</Link></li>
                            <li><Link to="/services" className={styles.footerLink}>Services</Link></li>
                            <li><Link to="/contact" className={styles.footerLink}>Contact Us</Link></li>
                            <li><Link to="/quote" className={styles.footerLink}>Request Quote</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info Column */}
                    <div className={styles.footerColumn}>
                        <h3 className={styles.footerTitle}>Contact Information</h3>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <span className={styles.icon}>📍</span>
                                <span className={styles.contactText}>123 Import Boulevard, Trade City, TC 12345</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.icon}>📞</span>
                                <span className={styles.contactText}>+1 (555) 123-4567</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.icon}>✉️</span>
                                <span className={styles.contactText}>info@premiumpotato.com</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.icon}>🕒</span>
                                <span className={styles.contactText}>Mon-Fri: 8:00 AM - 6:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className={styles.newsletter}>
                    <h3 className={styles.newsletterTitle}>Subscribe to Our Newsletter</h3>
                    <p className={styles.newsletterText}>Stay updated with the latest potato varieties and industry insights</p>
                    <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={styles.newsletterInput}
                        />
                        <button type="submit" className={styles.newsletterButton}>Subscribe</button>
                    </form>
                </div>

                {/* Bottom Bar */}
                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        © 2025 Premium Potato Imports. All Rights Reserved.
                    </p>
                    <div className={styles.socialMedia}>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <span className={styles.socialIcon}>📘</span>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <span className={styles.socialIcon}>📷</span>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <span className={styles.socialIcon}>💼</span>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <span className={styles.socialIcon}>🐦</span>
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
