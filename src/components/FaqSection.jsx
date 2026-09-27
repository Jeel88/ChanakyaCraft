import React, { useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';
import backdropWoolWebp from '../assets/images/BackdropWool.webp';
import backdropWoolPng from '../assets/images/BackdropWool.png';
import './FaqSection.css';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null); // All closed by default
  const [searchQuery, setSearchQuery] = useState('');

  const faqData = [
    {
      id: 1,
      question: 'Who can participate in Chanakya?',
      answer: 'Participation is exclusively open to Diploma (Polytechnic), BSc-IT, and B.Tech / B.E. students from any recognized college or institution. Whether you are in your 1st, 2nd, 3rd, or final year, you are welcome to form a squad and compete!'
    },
    {
      id: 2,
      question: 'What is the required team size for the Hackathon?',
      answer: 'Teams must consist of 2 to 4 members. Individual (solo) participation is not allowed as team collaboration and peer learning are key aspects of Chanakya.'
    },
    {
      id: 3,
      question: 'What is Chanakya and what happens during the event?',
      answer: "Chanakya is an 18-hour Industry-cum-Hackathon, not a typical hackathon. Teams don't just build: they pitch what they build as a startup to a panel of real industry judges. Problem statements are drawn directly from real-time projects contributed by industry experts, so teams solve problems that actually matter."
    },
    {
      id: 4,
      question: 'What domains and problem statements can teams build on?',
      answer: 'Teams can build innovative software or hardware prototypes across emerging domains including Web Development, Artificial Intelligence & Machine Learning, Cyber Security, Cloud Computing, IoT, Mobile Apps, and Open Innovation.'
    },
    {
      id: 5,
      question: 'What is the total duration and schedule of the Hackathon?',
      answer: 'The Hackathon features 18 hours of continuous, non-stop development and building at the campus venue, followed by project evaluation rounds by an expert jury panel.'
    },
    {
      id: 6,
      question: 'Will accommodation, food, and Wi-Fi be provided at the venue?',
      answer: "Yes! High-speed Wi-Fi, power backup, designated resting areas, and meals/refreshments will be provided to all registered participants during their stay at SVKM's SBMPCOE campus."
    },
    {
      id: 7,
      question: 'What should participants bring to the venue?',
      answer: 'Every team member must bring a valid College ID Card, personal laptops, chargers, extension boards, hardware components (if building IoT projects), and personal necessities.'
    },
    {
      id: 8,
      question: 'What are the prizes and recognition for winners?',
      answer: 'Winning teams will compete for cash prizes up to ₹50,000, alongside official trophies, certificates of excellence, and networking opportunities with industry mentors.'
    },
    {
      id: 9,
      question: 'Will all participants get certificates?',
      answer: 'Yes! Official Certificates of Participation will be issued to all eligible registered team members who complete and submit their hackathon projects.'
    }
  ];

  // Filter FAQ based on search query
  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mc-faq-page-wrapper">
      <div className="mc-faq-container">

        {/* Header Title Section */}
        <div className="mc-faq-header">
          <div className="mc-faq-badge">
            <span>SVKM'S SBMPCOE — CHANAKYA</span>
          </div>
          <h1 className="mc-faq-main-title">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="mc-faq-subtitle">
            Everything you need to know about Chanakya.
          </p>

          {/* Search Box */}
          <div className="mc-faq-search-box">
            <Search size={18} className="mc-search-icon" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mc-search-input"
            />
          </div>
        </div>

        {/* ACCORDION QUESTIONS LIST */}
        <div className="mc-faq-accordion-stack">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className={`mc-faq-item-card ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="mc-faq-question-btn"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="mc-faq-question-text">{faq.question}</h3>

                    <div className="mc-faq-toggle-icon">
                      {isOpen ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mc-faq-answer-pane">
                      <p className="mc-faq-answer-text">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="mc-faq-empty-state">
              <p>No questions matched your search query "{searchQuery}".</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
