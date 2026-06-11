import React, { useEffect, useState } from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'

const NAV_LINKS = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'footer', label: 'Contact' },
]

const SERVICES = [
    {
        icon: '🛒',
        title: 'Buy & Sell',
        desc: 'List items from your campus and discover deals from fellow PICT students.',
    },
    {
        icon: '🔒',
        title: 'Secure Trading',
        desc: 'Verified student accounts and safe in-campus exchanges for peace of mind.',
    },
    {
        icon: '⚡',
        title: 'Quick Listings',
        desc: 'Post your items in minutes and reach buyers across campus instantly.',
    },
]

const Home = () => {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal')
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        )
        reveals.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting)
                if (visible.length > 0) {
                    setActiveSection(visible[0].target.id)
                }
            },
            { threshold: 0.4, rootMargin: '-20% 0px -55% 0px' }
        )
        sections.forEach((s) => observer.observe(s))
        return () => observer.disconnect()
    }, [])

    const scrollTo = (id) => {
        setMenuOpen(false)
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="home-page">
            {/* Animated Floating Background Orbs */}
            <div className="bg-orbs-container" aria-hidden="true">
                <div className="bg-orb bg-orb--1" />
                <div className="bg-orb bg-orb--2" />
                <div className="bg-orb bg-orb--3" />
            </div>

            <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
                <div className="navbar__inner">
                    <button
                        type="button"
                        className="navbar__logo"
                        onClick={() => scrollTo('home')}
                    >
                        PICT
                    </button>

                    <button
                        type="button"
                        className={`navbar__toggle ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span />
                        <span />
                        <span />
                    </button>

                    <div className={`navbar__links ${menuOpen ? 'open' : ''}`}>
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.id}
                                type="button"
                                className={`navbar__link ${activeSection === link.id ? 'active' : ''}`}
                                onClick={() => scrollTo(link.id)}
                            >
                                {link.label}
                            </button>
                        ))}
                        <button
                            type="button"
                            className="navbar__login"
                            onClick={() => {
                                setMenuOpen(false)
                                navigate('/login')
                            }}
                        >
                            Log In
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section id="home" className="hero">
                <div className="hero__inner">
                    <div className="hero__content">
                        <p className="hero__badge animate-fade-up">PICT Marketplace</p>
                        <h1 className="hero__title animate-fade-up delay-1">
                            Your Campus<br />
                            <span>Marketplace</span>
                        </h1>
                        <p className="hero__subtitle animate-fade-up delay-2">
                            Buy, sell, and trade with students at PICT. Simple, fast, and built for your campus community.
                        </p>
                        <div className="hero__actions animate-fade-up delay-3">
                            <button type="button" className="btn-primary" onClick={() => scrollTo('services')}>
                                Explore Services
                            </button>
                            <button type="button" className="btn-secondary" onClick={() => navigate('/sign')}>
                                Get Started
                            </button>
                        </div>
                    </div>

                    <div className="hero__graphics animate-fade-up delay-3">
                        <div className="floating-card floating-card--1" onClick={() => navigate('/sign')}>
                            <div className="fc-header">
                                <span className="fc-category">Books</span>
                                <span className="fc-badge">₹250</span>
                            </div>
                            <h4 className="fc-title">Calculus Volume II</h4>
                            <p className="fc-desc">Perfect condition, used for FE Sem II. Minimal annotations.</p>
                            <div className="fc-footer">
                                <span className="fc-author">
                                    <span className="fc-author-dot" /> Yash M. (SE)
                                </span>
                            </div>
                        </div>

                        <div className="floating-card floating-card--2" onClick={() => navigate('/login')}>
                            <div className="fc-header">
                                <span className="fc-category">Electronics</span>
                                <span className="fc-badge fc-badge--verified">₹1,200</span>
                            </div>
                            <h4 className="fc-title">RGB Mechanical Keyboard</h4>
                            <p className="fc-desc">Blue switches, hot-swappable layout. Like new condition.</p>
                            <div className="fc-footer">
                                <span className="fc-author">
                                    <span className="fc-author-dot" /> Aditi K. (TE)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero__scroll-hint">
                    <span>Scroll</span>
                    <div className="hero__scroll-line" />
                </div>
            </section>

            {/* Services */}
            <section id="services" className="section services">
                <div className="section__inner">
                    <div className="reveal">
                        <p className="section__label">What we offer</p>
                        <h2 className="section__title">Our Services</h2>
                        <p className="section__desc">
                            Everything you need to trade within the PICT community.
                        </p>
                    </div>
                    <div className="services__grid">
                        {SERVICES.map((s, i) => (
                            <div
                                key={s.title}
                                className={`service-card reveal delay-${i + 1}`}
                            >
                                <div className="service-card__icon-container">
                                    <span className="service-card__icon">{s.icon}</span>
                                </div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="section about">
                <div className="section__inner about__layout">
                    <div className="about__visual reveal">
                        <div className="about__card">
                            <div className="about__stat">
                                <div className="about__stat-icon">🎓</div>
                                <div className="about__stat-text">
                                    <strong>500+</strong>
                                    <span>Active Students</span>
                                </div>
                            </div>
                            <div className="about__stat">
                                <div className="about__stat-icon">🛍️</div>
                                <div className="about__stat-text">
                                    <strong>1,200+</strong>
                                    <span>Items Listed</span>
                                </div>
                            </div>
                            <div className="about__stat">
                                <div className="about__stat-icon">⭐</div>
                                <div className="about__stat-text">
                                    <strong>98%</strong>
                                    <span>Satisfaction</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about__text reveal delay-1">
                        <p className="section__label">Who we are</p>
                        <h2 className="section__title">About PICT Marketplace</h2>
                        <p>
                            PICT Marketplace is a student-driven platform designed exclusively for the PICT campus community.
                            Whether you're selling old textbooks, finding lab equipment, or picking up gadgets at student-friendly prices — we've got you covered.
                        </p>
                        <p>
                            Built by students, for students. No middlemen, no hassle — just direct connections with people you trust on campus.
                        </p>
                        <button type="button" className="btn-primary" onClick={() => navigate('/sign')}>
                            Join the Community
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer / Contact */}
            <footer id="footer" className="footer">
                <div className="footer__inner reveal">
                    <div className="footer__brand">
                        <span className="footer__logo">PICT</span>
                        <p>The campus marketplace for PICT students.</p>
                    </div>
                    <div className="footer__links">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.id}
                                type="button"
                                onClick={() => scrollTo(link.id)}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                    <div className="footer__contact">
                        <p>Contact us</p>
                        <a href="mailto:marketplace@pict.edu">marketplace@pict.edu</a>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>&copy; {new Date().getFullYear()} PICT Marketplace. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Home
