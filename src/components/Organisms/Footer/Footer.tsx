import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import Container from 'components/Atoms/Container/Container';

const Footer = () => (
    <footer className={styles.footer}>
            <Container className={styles.footerWrapper}>
                <div className={styles.footerMain}>
                    {/* About Us Column */}
                    <div className={styles.footerColumn}>
                        <h3 className={styles.footerTitle}>About Nashmi7 LLC</h3>
                        <p className={styles.footerText}>
                            Nashmi7 LLC is a Houston-based importer, distributor, and private label supplier delivering
                            certified Belgian frozen fries to Sysco distribution centers and food-service partners across the U.S.
                        </p>
                        <div className={styles.logo}>
                            <span className={styles.potatoIcon}>🥔</span>
                            <span className={styles.logoText}>Certified Belgian Fries · Cold-Chain Ready</span>
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
                                <span className={styles.contactText}>Houston, Texas · United States</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.icon}>📞</span>
                                <span className={styles.contactText}>+1 (443) 397-4814 (WhatsApp enabled)</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.icon}>✉️</span>
                                <span className={styles.contactText}>sales@nashmi7.com</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.icon}>🕒</span>
                                <span className={styles.contactText}>Mon-Fri: 8:00 AM - 6:00 PM CST</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        © 2025 Nashmi7 LLC. All Rights Reserved.
                    </p>
                    <div className={styles.socialMedia}>
                        <a href="https://wa.me/14433974814" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <span className={styles.socialIcon}>💬</span>
                        </a>
                        <a href="https://www.linkedin.com/in/rashed-awwad-1999y/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <span className={styles.socialIcon}>💼</span>
                        </a>
                    </div>
                </div>
            </Container>
    </footer>
);

export default Footer;
