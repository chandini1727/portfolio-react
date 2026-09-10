import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { 
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const HomeSection = () => (
    <section id="home" className="section hero-section">
        <motion.div 
            className="section-container"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.h1 variants={itemVariants}>
                Chintala Chandini.
            </motion.h1>
            <motion.h2 variants={itemVariants}>I build scalable systems & reliable software.</motion.h2>
            <motion.div variants={itemVariants} style={{marginTop: '1rem', marginBottom: '2rem'}}>
                <span style={{
                    display: 'inline-block',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-heading)'
                }}>
                    1+ Years of Professional Experience
                </span>
            </motion.div>
            <motion.p variants={itemVariants} className="summary">
                Software Engineer with experience in backend development using Go, PostgreSQL, Docker, and Kubernetes.
                Passionate about sandbox management, networking, and platform APIs. Strong foundation in data structures, 
                databases, and distributed systems.
            </motion.p>
            <motion.div variants={itemVariants} style={{marginTop: '3rem', display: 'flex', gap: '1rem'}}>
                <a 
                    href="/chandini%20resume.pdf" 
                    target="_blank" 
                    className="btn btn-primary" 
                >
                    View Resume
                </a>
                <a 
                    href="#contact" 
                    className="btn" 
                >
                    Contact Me
                </a>
            </motion.div>
        </motion.div>
    </section>
);



const EducationSection = () => (
    <section id="education" className="section">
        <motion.div 
            className="section-container"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.h2 variants={itemVariants} className="section-title">Education</motion.h2>
            
            <motion.div variants={itemVariants} className="education-card">
                <div className="edu-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                </div>
                <div className="edu-details">
                    <h3>Gayatri Vidya Parishad College of Engineering</h3>
                    <h4>B.Tech in Computer Science and Engineering</h4>
                </div>
                <div className="edu-meta">
                    <p className="date">2022 — 2026</p>
                    <span className="cgpa-badge">CGPA: 9.4</span>
                </div>
            </motion.div>
            
        </motion.div>
    </section>
);

const ExperienceSection = () => (
    <section id="experience" className="section">
        <motion.div 
            className="section-container"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.h2 variants={itemVariants} className="section-title">Experience</motion.h2>
            
            <div className="timeline">
                
                {/* Grouped Company: NeevCloud */}
                <motion.div variants={itemVariants} className="company-group">
                    <div className="company-header">
                        <img src="/neevcloud.png" alt="NeevCloud Logo" className="company-logo-img" />
                        <div className="company-title-info">
                            <h3>NeevCloud</h3>
                            <p className="company-duration">Aug 2025 - Present</p>
                        </div>
                    </div>
                    
                    <div style={{ position: 'relative' }}>
                        {/* Animated Vertical Line */}
                        <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: 'calc(100% - 40px)' }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            viewport={{ once: true }}
                            style={{ position: 'absolute', left: '27px', top: '-20px', width: '2px', backgroundColor: 'var(--border-color)' }}
                        />
                        <div className="company-roles">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="role-item"
                            >
                                <div className="role-dot"></div>
                                <div className="role-content">
                                    <h4>Software Engineer I</h4>
                                    <p className="date">April 2026 - Present</p>
                                    <ul>
                                        <li>Designed and implemented full memory snapshot and restore workflows for sandboxes using gVisor runsc checkpoint.</li>
                                        <li>Enhanced sandbox networking and resource management with template-based network egress policies.</li>
                                        <li>Built centralized resource quota management and synchronization systems.</li>
                                        <li>Designed BYOT (Bring Your Own Template) functionality with CRUD APIs and schema migrations.</li>
                                    </ul>
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                viewport={{ once: true }}
                                className="role-item"
                            >
                                <div className="role-dot"></div>
                                <div className="role-content">
                                    <h4>Intern</h4>
                                    <p className="date">Aug 2025 - March 2026</p>
                                    <ul>
                                        <li>Conducted end-to-end testing across platform services and improved E2E test suite.</li>
                                        <li>Implemented audit logging across platform services to improve traceability.</li>
                                        <li>Built the Audit Logs UI from Figma designs and integrated it with backend APIs.</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
                
                {/* Single Role: Souloxy */}
                <motion.div variants={itemVariants} className="company-group" style={{marginTop: '3rem'}}>
                    <div className="company-header">
                        <img src="/souloxy.png" alt="Souloxy Logo" className="company-logo-img" />
                        <div className="company-title-info">
                            <h3>Souloxy</h3>
                            <p className="company-duration">Feb 2025 - July 2025</p>
                        </div>
                    </div>
                    
                    <div style={{ position: 'relative' }}>
                        {/* Animated Vertical Line */}
                        <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: 'calc(100% - 40px)' }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            viewport={{ once: true }}
                            style={{ position: 'absolute', left: '27px', top: '-20px', width: '2px', backgroundColor: 'var(--border-color)' }}
                        />
                        <div className="company-roles">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="role-item"
                            >
                                <div className="role-dot"></div>
                                <div className="role-content">
                                    <h4>Product Intern</h4>
                                    <p className="date">Feb 2025 - July 2025</p>
                                    <ul>
                                        <li>Designed and implemented a secure, role-based authentication system using Firebase, React, and Node.js.</li>
                                        <li>Developed a responsive and interactive admin dashboard for managing wellness services.</li>
                                        <li>Built real-time email notification system using SendGrid with over 90% delivery success rate.</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    </section>
);

const skillTagVariants = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

const SkillsSection = () => {
    const skillsData = [
        {
            title: "Languages",
            icon: <>{'</>'}</>,
            skills: ['Go', 'Java', 'C', 'JavaScript', 'SQL']
        },
        {
            title: "Backend",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>,
            skills: ['Node.js', 'REST APIs', 'PostgreSQL', 'MySQL']
        },
        {
            title: "Frontend",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
            skills: ['React', 'Next.js', 'HTML', 'Tailwind CSS']
        },
        {
            title: "Infrastructure",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
            skills: ['Kubernetes', 'Docker', 'Linux', 'Firebase', 'Git']
        }
    ];

    return (
        <section id="skills" className="section">
            <motion.div 
                className="section-container"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.h2 variants={itemVariants} className="section-title">Skills</motion.h2>
                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <motion.div key={index} variants={itemVariants} className="skill-card">
                            <div className="skill-icon">{category.icon}</div>
                            <h3>{category.title}</h3>
                            <motion.div 
                                className="skill-tags"
                                variants={staggerContainer}
                                initial="initial"
                                whileInView="whileInView"
                                viewport={{ once: true }}
                            >
                                {category.skills.map((skill, i) => (
                                    <motion.span 
                                        key={i}
                                        variants={skillTagVariants}
                                        whileHover={{ 
                                            scale: 1.1, 
                                            backgroundColor: 'var(--text-primary)', 
                                            color: 'var(--bg-main)',
                                            borderColor: 'var(--text-primary)'
                                        }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

const ProjectsSection = () => (
    <section id="projects" className="section">
        <motion.div 
            className="section-container"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.h2 variants={itemVariants} className="section-title">Projects</motion.h2>
            <div className="projects-grid">
                <motion.div 
                    variants={itemVariants} 
                    className="project-card"
                >
                    <div className="project-header">
                        <div>
                            <h3>Smart Learn and Career AI</h3>
                            <p className="date" style={{marginTop: '0.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>March 2026</p>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/chandini1727/ai" target="_blank" rel="noopener noreferrer" aria-label="GitHub Link"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                        </div>
                    </div>
                    <p className="project-desc">
                        A full-stack document intelligence platform that extracts, analyzes, and synthesizes structured data from multi-format files. 
                        It leverages NLP transformers to generate vector embeddings entirely locally, enabling fast, offline-capable real-time resume matching and study kit generation.
                    </p>
                    <div className="tech-stack">
                        <span>Next.js</span><span>PostgreSQL</span><span>Prisma</span><span>NLP</span>
                    </div>
                </motion.div>
                
                <motion.div 
                    variants={itemVariants} 
                    className="project-card"
                >
                    <div className="project-header">
                        <div>
                            <h3>AI Chatbot</h3>
                            <p className="date" style={{marginTop: '0.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Feb 2025</p>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/chandini1727/CHATBOT-QA" target="_blank" rel="noopener noreferrer" aria-label="GitHub Link"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                        </div>
                    </div>
                    <p className="project-desc">
                        A scalable AI-powered Q&A platform utilizing a complete RAG pipeline. It supports uploads of multiple file types and 
                        uses LangChain alongside local LLaMA 3 embeddings to generate highly contextual and accurate answers with minimal latency.
                    </p>
                    <div className="tech-stack">
                        <span>React</span><span>Node.js</span><span>LangChain</span><span>LLaMA 3</span>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
);

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "c0927e1d-97bc-471e-9347-0ada3bff7825",
                    subject: `New Portfolio Message from ${formData.name}`,
                    from_name: formData.name,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            const result = await response.json();
            if (result.success) {
                alert("Email sent successfully! I will get back to you soon.");
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert("Something went wrong sending the email. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while sending the email.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section">
            <motion.div 
                className="section-container contact-container"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.h2 variants={itemVariants} className="section-title" style={{textAlign: 'center', marginBottom: '2rem'}}>Get In Touch</motion.h2>
                <motion.p variants={itemVariants} style={{textAlign: 'center', margin: '0 auto 3rem auto'}}>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </motion.p>
                
                <motion.form variants={itemVariants} className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} disabled={isSubmitting} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} disabled={isSubmitting} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" required placeholder="How can I help you?" value={formData.message} onChange={handleChange} disabled={isSubmitting}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{marginTop: '1rem'}} disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </motion.form>
                
                <motion.div variants={itemVariants} style={{marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '2rem'}}>
                    <a href="mailto:chandinichintala17@gmail.com" style={{color: 'var(--text-secondary)', textDecoration: 'none'}}>chandinichintala17@gmail.com</a>
                    <a href="tel:+916305527301" style={{color: 'var(--text-secondary)', textDecoration: 'none'}}>+91 6305527301</a>
                </motion.div>
            </motion.div>
        </section>
    );
};

const App = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="portfolio-app">
            <header className="navbar">
                <div className="logo" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setIsMobileMenuOpen(false);}} style={{cursor: 'pointer'}}>
                    Chandini.
                </div>
                <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                </button>
                <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <a href="#education" onClick={(e) => handleScroll(e, 'education')}>Education</a>
                    <a href="#experience" onClick={(e) => handleScroll(e, 'experience')}>Experience</a>
                    <a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Skills</a>
                    <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a>
                    <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
                </nav>
            </header>
            
            <main className="app-container">
                <HomeSection />
                <EducationSection />
                <ExperienceSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
        </div>
    );
};

export default App;
