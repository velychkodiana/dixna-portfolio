import './index.css';
import myPhoto from './assets/profile-pic.png'

export default function App() {
    return (
        <>
            {/* Film-grain texture over the whole site */}
            <div className="noise-overlay"></div>

            <div className="portfolio-container">

                {/* HEADER / HERO */}
                <header className="hero-section">
                    <span className="handwritten">creative portfolio</span>
                    <h1 className="massive-title">Dixna</h1>
                    <h2 className="subtitle">Software Engineer <span className="italic-serif">&</span> UI/UX Designer</h2>
                    <p className="hero-desc">
                        Crafting digital experiences that are beautifully designed and flawlessly engineered. I bring ideas to life through code, aesthetics, and storytelling.
                    </p>
                    <a href="#contact" className="cta-button">Let's Create Together</a>
                </header>

                {/* ABOUT ME */}
                <section className="editorial-section">
                    <div className="editorial-grid">
                        <div className="image-wrapper">
                            {/* Because it's in the public folder, we just use /assets/ */}
                            <img src={myPhoto} alt="Dixna" className="profile-pic" />
                        </div>
                        <div className="text-wrapper">
                            <h3 className="section-title">About <span className="handwritten">me</span></h3>
                            <p className="body-text">
                                I am a passionate developer and designer bridging the gap between aesthetics and functionality. With a strong foundation in software engineering and an eye for modern graphic design, I build digital experiences that are robust under the hood and stunning on the screen.
                            </p>

                            <div className="stats-row">
                                <div className="stat">
                                    <span className="stat-num">TSNU</span>
                                    <span className="stat-label">University</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-num">2026</span>
                                    <span className="stat-label">Graduation</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-num">B.S.</span>
                                    <span className="stat-label">Software Eng.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SKILLS & LANGUAGES */}
                <section className="skills-section">
                    <h3 className="section-title center">My <span className="handwritten">toolkit</span></h3>

                    <div className="skills-container">
                        <span className="skill-tag"><i className="devicon-figma-plain"></i> Figma</span>
                        <span className="skill-tag"><i className="devicon-photoshop-plain"></i> Adobe Photoshop</span>
                        <span className="skill-tag"><i className="devicon-blender-original"></i> Blender 3D</span>
                        <span className="skill-tag"><i className="devicon-python-plain"></i> Python</span>
                        <span className="skill-tag"><i className="devicon-html5-plain"></i> HTML & CSS</span>
                        <span className="skill-tag"><i className="devicon-javascript-plain"></i> JavaScript</span>
                        <span className="skill-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
              </svg>
              UI / UX
            </span>
                    </div>

                    <div className="languages-box">
                        <h4 className="mini-title">Languages</h4>

                        {/* Ukrainian */}
                        <div className="lang-row">
                            <span className="lang-name">Ukrainian <span className="lang-lvl">(Native)</span></span>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                                ))}
                            </div>
                        </div>

                        {/* English */}
                        <div className="lang-row">
                            <span className="lang-name">English <span className="lang-lvl">(B2)</span></span>
                            <div className="stars">
                                {[...Array(4)].map((_, i) => (
                                    <svg key={i} className="star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                                ))}
                                <svg className="star half" viewBox="0 0 24 24">
                                    <path className="fill-left" d="M12 2v15.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    <path className="fill-right" d="M12 2v15.77l6.18 3.25-1.18-6.88 5-4.87-6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROJECTS */}
                <section className="projects-section">
                    <div className="section-header">
                        <h3 className="section-title">Selected <span className="handwritten">works</span></h3>
                        <p className="body-text">A showcase of engineering and design.</p>
                    </div>

                    <div className="projects-grid">
                        <div className="project-card">
                            <div className="project-num">01</div>
                            <h4 className="project-title">Climate Scape</h4>
                            <span className="project-role">Full-Stack & 3D</span>
                            <p className="project-desc">A web application featuring interactive weather visualization using 3D models of cities, built with bilingual support (EN/UA).</p>
                        </div>

                        <div className="project-card">
                            <div className="project-num">02</div>
                            <h4 className="project-title">FitFetish</h4>
                            <span className="project-role">Web & Graphic Design</span>
                            <p className="project-desc">Designed a high-converting, energetic visual identity and modern landing page interface for a premium fitness subscription community.</p>
                            <a href="https://fitfetish.club/" target="_blank" rel="noreferrer" className="project-link">Explore Live →</a>
                        </div>

                        <div className="project-card">
                            <div className="project-num">03</div>
                            <h4 className="project-title">D&D Real Estate</h4>
                            <span className="project-role">UI/UX Design</span>
                            <p className="project-desc">Developed a clean, corporate website interface for a real estate agency, featuring intuitive property search filters.</p>
                            <a href="https://di-di.com.ua/" target="_blank" rel="noreferrer" className="project-link">Explore Live →</a>
                        </div>
                    </div>
                </section>

                {/* CONTACT */}
                <footer id="contact" className="contact-section">
                    <h3 className="massive-title small">Let's talk</h3>
                    <p className="body-text mx-auto">Currently open for new opportunities. Reach out to me directly:</p>

                    <div className="contact-grid">
                        <a href="mailto:your.email@example.com" className="contact-card">
                            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            <span>your.email@example.com</span>
                        </a>

                        <a href="tel:+380XXXXXXXXX" className="contact-card">
                            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <span>+380 XX XXX XXXX</span>
                        </a>

                        <div className="contact-card">
                            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <span>Kyiv, Ukraine</span>
                        </div>

                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="contact-card">
                            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            <span>LinkedIn Profile</span>
                        </a>
                    </div>
                </footer>

            </div>
        </>
    );
}