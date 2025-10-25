import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Send, ChevronDown, Play, Check } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import '../styles/landing.css';

const LandingPage = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Newsletter signup: ' + email);
    setEmail('');
  };

  const portfolioVideos = [
    {
      id: 1,
      title: 'Architecture and urban development during the reign of the Temurids AI Film',
      youtubeId: 'oj9ybliR90o',
      thumbnail: 'https://img.youtube.com/vi/oj9ybliR90o/maxresdefault.jpg'
    },
    {
      id: 2,
      title: 'Timurd Princes patrons of knowledge and education AI Film',
      youtubeId: 'yvOXc-FG7bU',
      thumbnail: 'https://img.youtube.com/vi/yvOXc-FG7bU/maxresdefault.jpg'
    },
    {
      id: 3,
      title: "Mughal Woman's contribution to knowledge and science AI Film",
      youtubeId: 'nP7CacC1c_8',
      thumbnail: 'https://img.youtube.com/vi/nP7CacC1c_8/maxresdefault.jpg'
    },
    {
      id: 4,
      title: 'Iron and Fire the battle of Amir Temur - AI Film',
      youtubeId: 'QFOHxQuueJk',
      thumbnail: 'https://img.youtube.com/vi/QFOHxQuueJk/maxresdefault.jpg'
    },
    {
      id: 5,
      title: 'От мысли к жизни',
      youtubeId: 'z4gQ9SRrNtk',
      thumbnail: 'https://img.youtube.com/vi/z4gQ9SRrNtk/maxresdefault.jpg'
    },
    {
      id: 6,
      title: 'Strength Is Not in the Sword',
      youtubeId: 'cwPFCvffyZE',
      thumbnail: 'https://img.youtube.com/vi/cwPFCvffyZE/maxresdefault.jpg'
    },
    {
      id: 7,
      title: 'No Life Perfect',
      youtubeId: 'Fuoygv_Hfxk',
      thumbnail: 'https://img.youtube.com/vi/Fuoygv_Hfxk/maxresdefault.jpg'
    },
    {
      id: 8,
      title: 'NRG Service Ташкент',
      youtubeId: '7dyY28b57w8',
      thumbnail: 'https://img.youtube.com/vi/7dyY28b57w8/maxresdefault.jpg'
    }
  ];

  const shortsVideos = [
    {
      id: 1,
      title: 'Kalit Trailer AI Film',
      youtubeId: 'UvCjJ9I-mRg',
      thumbnail: 'https://img.youtube.com/vi/UvCjJ9I-mRg/maxresdefault.jpg',
      isShort: true
    },
    {
      id: 2,
      title: 'UGC style ad',
      youtubeId: '8WPOYsEmCKQ',
      thumbnail: 'https://img.youtube.com/vi/8WPOYsEmCKQ/maxresdefault.jpg',
      isShort: true
    },
    {
      id: 3,
      title: 'UGC style ad',
      youtubeId: 'HR2HOaYBn6A',
      thumbnail: 'https://img.youtube.com/vi/HR2HOaYBn6A/maxresdefault.jpg',
      isShort: true
    }
  ];

  const educationLessons = [
    { id: 1, title: 'Lesson 1: Introduction to AI Filmmaking', duration: '3:45', thumbnail: 'https://via.placeholder.com/400x225?text=Lesson+1' },
    { id: 2, title: 'Lesson 2: Scriptwriting with AI', duration: '4:20', thumbnail: 'https://via.placeholder.com/400x225?text=Lesson+2' },
    { id: 3, title: 'Lesson 3: AI Visual Effects Basics', duration: '3:15', thumbnail: 'https://via.placeholder.com/400x225?text=Lesson+3' },
    { id: 4, title: 'Lesson 4: Advanced Editing Techniques', duration: '4:00', thumbnail: 'https://via.placeholder.com/400x225?text=Lesson+4' },
    { id: 5, title: 'Lesson 5: Color Grading with AI', duration: '3:30', thumbnail: 'https://via.placeholder.com/400x225?text=Lesson+5' },
    { id: 6, title: 'Lesson 6: Sound Design & Music', duration: '3:50', thumbnail: 'https://via.placeholder.com/400x225?text=Lesson+6' },
    { id: 7, title: 'Lesson 7: Character Animation', duration: '4:10', thumbnail: 'https://via.placeholder.com/400x225?text=Lesson+7' },
    { id: 8, title: 'Lesson 8: Scene Composition', duration: '3:25', thumbnail: 'https://via.placeholder.com/400x225?text=Lesson+8' },
    { id: 9, title: 'Lesson 9: Post-Production Workflow', duration: '4:15', thumbnail: 'https://via.placeholder.com/400x225?text=Lesson+9' },
    { id: 10, title: 'Lesson 10: Final Project & Portfolio', duration: '3:40', thumbnail: 'https://via.placeholder.com/400x225?text=Lesson+10' }
  ];

  const photographyImages = [
    { 
      id: 1, 
      url: 'https://customer-assets.emergentagent.com/job_c300197b-5f56-45dc-b810-546f43651b8f/artifacts/2bfa37hc_freepik__-v15-15-imax-70-__80682.png', 
      title: 'Cinematic Vision' 
    },
    { 
      id: 2, 
      url: 'https://customer-assets.emergentagent.com/job_c300197b-5f56-45dc-b810-546f43651b8f/artifacts/wmxr69ph_render.png', 
      title: 'AI Rendered Masterpiece' 
    },
    { 
      id: 3, 
      url: 'https://customer-assets.emergentagent.com/job_c300197b-5f56-45dc-b810-546f43651b8f/artifacts/e7ndwsml_916300ce-79ec-4195-b001-267b875c3511.jpeg', 
      title: 'Artistic Expression' 
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const benefits = [
    {
      title: 'Faster Post-Production',
      description: 'AI workflows reduce editing time by 60% while maintaining cinematic quality',
    },
    {
      title: 'Cinematic-Quality VFX',
      description: 'Industry-leading visual effects powered by cutting-edge AI technology',
    },
    {
      title: 'Enhanced Storytelling',
      description: 'Creative tools that amplify your narrative vision with generative AI',
    },
    {
      title: 'Cost-Efficient Production',
      description: 'Studio-grade results without the studio budget requirements',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Concept & Script',
      description: 'Share your vision and we craft the perfect story blueprint',
    },
    {
      step: '02',
      title: 'AI-Enhanced Production, Music & VFX',
      description: 'Our AI tools bring your story to life with stunning visuals and sound',
    },
    {
      step: '03',
      title: 'Final Delivery in Record Time',
      description: 'Receive your cinematic masterpiece, polished and ready to launch',
    },
  ];

  const pricingPlans = [
    {
      name: 'Indie Creator',
      price: 'Custom',
      description: 'Perfect for independent filmmakers',
      features: [
        'Professional editing',
        'Basic VFX package',
        'Color grading',
        'Sound design',
        '2 revision rounds',
      ],
    },
    {
      name: 'Studio Pro',
      price: 'Custom',
      description: 'Advanced production capabilities',
      features: [
        'Advanced VFX suite',
        'AI-assisted production',
        'Custom music composition',
        'Motion graphics',
        '4 revision rounds',
        'Priority support',
      ],
      featured: true,
    },
    {
      name: 'Enterprise Film',
      price: 'Custom',
      description: 'Full-scale cinematic projects',
      features: [
        'Full production pipeline',
        'Unlimited VFX',
        'Dedicated team',
        'Custom AI models',
        'Unlimited revisions',
        '24/7 support',
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Independent Filmmaker',
      content: 'Kamod AI transformed our post-production timeline from 3 months to 3 weeks. The quality is outstanding.',
    },
    {
      name: 'James Rodriguez',
      role: 'Creative Director, Vista Studios',
      content: 'The AI-powered VFX are incredible. We achieved visuals we thought were impossible within our budget.',
    },
    {
      name: 'Emily Chen',
      role: 'Producer',
      content: 'Professional results, lightning-fast delivery. Kamod AI is our go-to for every project now.',
    },
  ];

  const faqs = [
    {
      question: 'Do you work with indie filmmakers?',
      answer: 'Absolutely! We have packages specifically designed for independent creators and small productions. Our Indie Creator tier provides professional tools at accessible pricing.',
    },
    {
      question: 'How does AI improve post-production?',
      answer: 'Our AI tools accelerate editing, automate repetitive tasks, enhance color grading, and generate preliminary VFX. This reduces production time by 60% while maintaining full creative control.',
    },
    {
      question: 'Can I request custom VFX styles?',
      answer: 'Yes! We specialize in custom visual effects. Our team works closely with you to create unique styles that match your creative vision perfectly.',
    },
    {
      question: "What's your turnaround time?",
      answer: 'Turnaround varies by project scope. Typically: Indie projects 2-4 weeks, Studio projects 4-8 weeks, Enterprise projects are custom scheduled. Rush delivery available.',
    },
  ];

  return (
    <div className="landing-page">
      {/* Sticky Navbar */}
      <header className="dark-header">
        <div className="dark-logo-text">KAMOD AI</div>
        <nav className="dark-nav">
          <a href="#services" className="dark-nav-link">Services</a>
          <a href="#how-it-works" className="dark-nav-link">How it Works</a>
          <a href="#portfolio" className="dark-nav-link">Portfolio</a>
          <a href="#testimonials" className="dark-nav-link">Testimonials</a>
          <a href="#ai-creators" className="dark-nav-link">AI for Creators</a>
          <a href="#faq" className="dark-nav-link">FAQ</a>
          <a href="https://t.me/timuran1" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Start Your Project
          </a>
        </nav>
      </header>

      {/* Hero Section with Video Background */}
      <section className="hero-section">
        <div className="hero-video-bg">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          >
            <source src="https://customer-assets.emergentagent.com/job_c300197b-5f56-45dc-b810-546f43651b8f/artifacts/9aj92ggq_Show%20reel%20-2.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Kamod AI — Redefining Film, Music & Visual Effects with Artificial Intelligence
            </h1>
            <p className="hero-subtitle">
              We merge storytelling, design, and AI to produce stunning films, seamless post-production, music composing and cutting-edge visual effects.
            </p>
            <div className="hero-cta-group">
              <a href="https://t.me/timuran1" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span>Start Your Project</span>
                <Send size={20} />
              </a>
              <button className="btn-secondary" onClick={() => setSelectedVideo(portfolioVideos[0])}>
                <Play size={20} />
                <span>Watch Showreel</span>
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
          </div>
        </div>
      </section>

      {/* Video Gallery / Portfolio Section */}
      <section className="portfolio-section" id="portfolio">
        <div className="section-header">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">Explore our latest film productions and visual effects</p>
        </div>
        <div className="video-gallery">
          {portfolioVideos.map((video) => (
            <div 
              key={video.id} 
              className="video-card"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="video-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <div className="play-overlay">
                  <Play size={48} />
                </div>
              </div>
              <h3 className="video-title">{video.title}</h3>
            </div>
          ))}
        </div>

        {/* Shorts Section */}
        <div className="shorts-header">
          <h3 className="shorts-title">Shorts & Trailers</h3>
        </div>
        <div className="shorts-gallery">
          {shortsVideos.map((video) => (
            <div 
              key={video.id} 
              className="video-card video-card-vertical"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="video-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <div className="play-overlay">
                  <Play size={48} />
                </div>
              </div>
              <h3 className="video-title">{video.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div 
            className={`video-modal-content ${selectedVideo.isShort ? 'video-modal-vertical' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setSelectedVideo(null)}>
              ×
            </button>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Photography Gallery Section */}
      <section className="photography-section">
        <div className="section-header">
          <h2 className="section-title">Photography</h2>
          <p className="section-subtitle">Capturing moments through the AI lens</p>
        </div>
        <div className="photography-grid">
          {photographyImages.map((photo) => (
            <div 
              key={photo.id} 
              className="photo-card"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img src={photo.url} alt={photo.title} />
              <div className="photo-overlay">
                <h3 className="photo-title">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="photo-modal" onClick={() => setSelectedPhoto(null)}>
          <div className="photo-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedPhoto(null)}>
              ×
            </button>
            <img src={selectedPhoto.url} alt={selectedPhoto.title} />
          </div>
        </div>
      )}

      {/* Music Album Section */}
      <section className="music-section">
        <div className="section-header">
          <h2 className="section-title">Music Albums by Anvar Nadirov</h2>
          <p className="section-subtitle">Original soundtracks and compositions</p>
        </div>
        <div className="music-container">
          <div className="music-player-simple">
            <div className="music-info">
              <h3 className="album-title">Illuminations of the Shahnameh</h3>
              <audio controls className="audio-player">
                <source src="https://customer-assets.emergentagent.com/job_c300197b-5f56-45dc-b810-546f43651b8f/artifacts/ki1bfwlx_Illuminations_of_the_Shahnameh_2025-08-31T173920.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <a 
                href="https://www.youtube.com/@KamodAI" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary music-cta"
              >
                <span>View Full Albums</span>
                <Send size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section" id="services">
        <div className="section-header">
          <h2 className="section-title">Why Choose Kamod AI</h2>
          <p className="section-subtitle">Results that speak for themselves</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works-section" id="how-it-works">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">From concept to delivery in three simple steps</p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.step}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI for Creators Education Section */}
      <section className="education-section" id="ai-creators">
        <div className="section-header">
          <h2 className="section-title">AI for Creators</h2>
          <p className="section-subtitle">Master AI filmmaking with our comprehensive course</p>
        </div>
        <div className="education-coming-soon">
          <div className="coming-soon-card">
            <h3 className="coming-soon-title">Master AI filmmaking with our comprehensive course</h3>
            <p className="coming-soon-message">Lesson content will be available soon. Stay tuned!</p>
            <a href="mailto:timuran1@gmail.com?subject=AI for Creators - Enrollment Inquiry" className="btn-primary">
              <span>Book a Call</span>
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section" id="testimonials">
        <div className="section-header">
          <h2 className="section-title">Trusted by Creators Worldwide</h2>
          <p className="section-subtitle">What filmmakers and producers say about us</p>
        </div>
        {testimonials.length > 0 ? (
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                  <div>
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="testimonials-coming-soon">
            <p className="coming-soon-text">Client testimonials coming soon</p>
          </div>
        )}
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know</p>
        </div>
        <div className="faq-container">
          <Accordion type="single" collapsible className="faq-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="faq-question">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="faq-answer">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Bring Your Vision to Life with Kamod AI</h2>
          <p className="cta-subtitle">Let's create together. Start your cinematic journey today.</p>
          <a href="https://t.me/timuran1" target="_blank" rel="noopener noreferrer" className="btn-primary cta-button">
            <span>Get Started Now</span>
            <Send size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">KAMOD AI</div>
            <p className="footer-tagline">Redefining film production with AI</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="footer-text">Stay updated with our latest projects</p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                <Mail size={20} />
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 Kamod AI. All rights reserved.</p>
          <div className="footer-social">
            <a href="#" aria-label="Social link">Twitter</a>
            <a href="#" aria-label="Social link">LinkedIn</a>
            <a href="#" aria-label="Social link">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;