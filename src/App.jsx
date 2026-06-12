// import React, { useState } from 'react';
// import heroImg from './assets/hero_1.png';
// import cloveLogo from './assets/clove.png';
// import productImg from './assets/image_3.png'; // Imported exactly as requested
// import './App.css';

// export default function App() {
//   const [hasGaps, setHasGaps] = useState(null);
//   const [fullName, setFullName] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [consent, setConsent] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ hasGaps, fullName, mobileNumber, consent });
//   };

//   return (
//     <div className="landing-page-container">

//       {/* 1. Hero Banner Block */}
//       <div className="hero-banner-container">
//         <div className="hero-content-wrapper">
//           <div className="hero-text-side">
//             <h1 className="hero-title">Invisible Aligners for a dream smile</h1>
//             <p className="hero-subtitle">
//               Book a Scan and avail a free <br />
//               Orthodontist Consult <span className="purple-highlight">worth ₹1500</span>
//             </p>
//           </div>
//           <div className="hero-image-side">
//             <img 
//               src={heroImg} 
//               alt="Smiling woman holding aligner" 
//               className="hero-main-img" 
//             />
//           </div>
//         </div>
//       </div>

//       {/* 2. Questionnaire & Form Block */}
//       <div className="form-section-container">
//         <h2 className="question-heading">Do you have Teeth Gaps or Crooked Teeth?</h2>

//         <form onSubmit={handleSubmit} className="lead-capture-form">
//           <div className="radio-options-row">
//             <label className="custom-radio-label">
//               <input
//                 type="radio"
//                 name="teethCondition"
//                 value="yes"
//                 checked={hasGaps === 'yes'}
//                 onChange={(e) => setHasGaps(e.target.value)}
//               />
//               <span className="radio-circle"></span>
//               Yes
//             </label>
//             <label className="custom-radio-label">
//               <input
//                 type="radio"
//                 name="teethCondition"
//                 value="no"
//                 checked={hasGaps === 'no'}
//                 onChange={(e) => setHasGaps(e.target.value)}
//               />
//               <span className="radio-circle"></span>
//               No
//             </label>
//           </div>

//           <div className="inputs-action-row">
//             <div className="input-field-box">
//               <span className="floating-input-label">Full Name*</span>
//               <input
//                 type="text"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 placeholder="Ajay Kumar"
//                 required
//               />
//             </div>

//             <div className="input-field-box phone-input-box">
//               <span className="country-prefix">+91</span>
//               <input
//                 type="tel"
//                 value={mobileNumber}
//                 onChange={(e) => setMobileNumber(e.target.value)}
//                 placeholder="Mobile number*"
//                 required
//               />
//             </div>

//             <button type="submit" className="action-submit-btn">
//               Book a Free Scan
//             </button>
//           </div>

//           <div className="form-consent-row">
//             <label className="checkbox-label-wrapper">
//               <input
//                 type="checkbox"
//                 checked={consent}
//                 onChange={(e) => setConsent(e.target.checked)}
//               />
//               <span className="checkbox-square"></span>
//               <span className="consent-text-content">
//                 I hereby consent to receive calls / messages from Whistle and its partners and override DND settings.
//               </span>
//             </label>
//           </div>
//         </form>
//       </div>

//       {/* 3. Clove Dental Clinic Locator Card */}
//       <div className="clove-locator-card">
//         <div className="locator-text-panel">
//           <h3 className="locator-message">
//             Book a Free 3D Teeth Scan and Orthodontist Consult in a <br />
//             Clove Dental Clinic near you.
//           </h3>
//         </div>
//         <div className="locator-brand-panel">
//           <img 
//             src={cloveLogo} 
//             alt="Clove Dental" 
//             className="clove-brand-logo" 
//           />
//           <div className="clinic-dropdown-selector">
//             <span>Find Clinic</span>
//             <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M1 1L5 5L9 1" stroke="#7C59DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* 4. Infinite Launch Benefit Marquee Ticker */}
//       <div className="ticker-tape-marquee">
//         <div className="marquee-content-track">
//           <span>Our inaugural launch benefit</span>
//           <span><strong>Free teeth scan</strong> worth ₹500</span>
//           <span><strong>Free orthodontic consultation</strong> worth ₹1500</span>
//           <span>Our inaugural launch benefit</span>
//           <span><strong>Free teeth scan</strong> worth ₹500</span>
//           <span><strong>Free orthodontic consultation</strong> worth ₹1500</span>
//         </div>
//       </div>

//       {/* 5. Pricing / Product Presentation Section */}
//       <div className="pricing-display-section">
//         <div className="pricing-text-column">
//           <h2 className="pricing-main-title">Dream smiles achieved secretly</h2>
//           <p className="pricing-description">
//             Experience the superior quality of our Whistle Aligners crafted with 3-layer PU material. 
//             With 450+ clinics nationwide, enjoy comfortable treatment by expert orthodontists at House of Clove.
//           </p>
//           <p className="pricing-disclaimer">
//             The pricing is different for every case. Cases with higher complexity requiring more aligners 
//             and additional time and effort from our dentists.
//           </p>
//         </div>

//         <div className="pricing-product-card">
//           <div className="card-info-side">
//             <h3 className="product-brand-title">Whistle Aligners</h3>
//             <div className="price-tag-group">
//               <span className="original-strikethrough-price">₹84,000</span>
//               <div className="current-price-label">
//                 <span className="starting-at-text">starting at</span>
//                 <span className="main-computed-price">₹47,999</span>
//               </div>
//               <span className="tax-inclusion-notice">inc. of all taxes</span>
//             </div>

//             <div className="product-bullet-features">
//               <div className="feature-item">
//                 <span className="green-checkmark-icon">✓</span>
//                 <span className="feature-text">Offer valid for a limited time</span>
//               </div>
//               <div className="feature-item">
//                 <span className="green-checkmark-icon">✓</span>
//                 <span className="feature-text">Easy financing options</span>
//               </div>
//             </div>
//           </div>

//           <div className="card-visual-side">
//             <img 
//               src={productImg} 
//               alt="Whistle Aligners Premium Case Box" 
//               className="product-case-display-img" 
//             />
//             <a href="#learn-more" className="learn-more-anchor-btn">
//               <span>Learn more</span>
//               <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M1 6H15M15 6L10 1M15 6L10 11" stroke="#7C59DF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }





import React, { useState, useEffect } from 'react';
import heroImg from './assets/hero_1.png';
import cloveLogo from './assets/clove.png';
import productImg from './assets/image_3.png';

// Local Mock JSON file import
import localResultsData from './data/resultsData';
import localWhistleData from './data//whyWhistleData.js';
import './App.css';


export default function App() {
  // 1. Existing Lead Form State
  const [hasGaps, setHasGaps] = useState(null);
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [consent, setConsent] = useState(false);

  // 2. Existing Transformation Showcase States
  const [caseStudies, setCaseStudies] = useState([]);
  const [isLoadingResults, setIsLoadingResults] = useState(true);
  const [resultsError, setResultsError] = useState(null);

  // 3. New "Why Whistle?" Showcase States
  const [whistleFeatures, setWhistleFeatures] = useState([]);
  const [isLoadingWhistle, setIsLoadingWhistle] = useState(true);
  const [whistleError, setWhistleError] = useState(null);


  const [selectedFilter, setSelectedFilter] = useState("all");

  const [openFaq, setOpenFaq] = useState(null);

  const [activeTab, setActiveTab] = useState("results");

  // Lifecycle fetch for Transformation Cards
  useEffect(() => {
    const fetchTransformationData = async () => {
      try {
        setIsLoadingResults(true);
        await new Promise((resolve) => setTimeout(resolve, 1200)); // Delay
        if (!localResultsData) throw new Error("Could not resolve transformation data.");
        setCaseStudies(localResultsData);
      } catch (err) {
        setResultsError(err.message);
      } finally {
        setIsLoadingResults(false);
      }
    };
    fetchTransformationData();
  }, []);

  // Lifecycle fetch for "Why Whistle?" Section
  useEffect(() => {
    const fetchWhistleData = async () => {
      try {
        setIsLoadingWhistle(true);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay
        if (!localWhistleData) throw new Error("Could not load features database.");
        setWhistleFeatures(localWhistleData);
      } catch (err) {
        setWhistleError(err.message);
      } finally {
        setIsLoadingWhistle(false);
      }
    };
    fetchWhistleData();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({ hasGaps, fullName, mobileNumber, consent });
  };


  const filteredCaseStudies = caseStudies.filter((item) => {
    if (selectedFilter === "all") return true;

    const months = parseInt(item.duration);

    if (selectedFilter === "short") return months < 6;

    if (selectedFilter === "long") return months >= 6;

    return true;
  });


  const faqData = [
    {
      id: 1,
      question: "How long does treatment take?",
      answer: "Treatment duration varies depending on case complexity."
    },
    {
      id: 2,
      question: "Are aligners painful?",
      answer: "Most patients experience only mild pressure during adjustments."
    },
    {
      id: 3,
      question: "How often should I wear aligners?",
      answer: "Typically 20–22 hours per day for best results."
    }
  ];

  return (
    <div className="landing-page-container">

      {/* 1. Hero Banner Block */}
      <div className="hero-banner-container">
        <div className="hero-content-wrapper">
          <div className="hero-text-side">
            <h1 className="hero-title">Invisible Aligners for a dream smile</h1>
            <p className="hero-subtitle">
              Book a Scan and avail a free <br />
              Orthodontist Consult <span className="purple-highlight">worth ₹1500</span>
            </p>
          </div>
          <div className="hero-image-side">
            <img src={heroImg} alt="Dream Smile Banner Model" className="hero-main-img" />
          </div>
        </div>
      </div>

      {/* 2. Questionnaire & Capture Form Block */}
      <div className="form-section-container">
        <h2 className="question-heading">Do you have Teeth Gaps or Crooked Teeth?</h2>
        <form onSubmit={handleFormSubmit} className="lead-capture-form">
          <div className="radio-options-row">
            <label className="custom-radio-label">
              <input
                type="radio"
                name="teethCondition"
                value="yes"
                checked={hasGaps === 'yes'}
                onChange={(e) => setHasGaps(e.target.value)}
              />
              <span className="radio-circle"></span>Yes
            </label>
            <label className="custom-radio-label">
              <input
                type="radio"
                name="teethCondition"
                value="no"
                checked={hasGaps === 'no'}
                onChange={(e) => setHasGaps(e.target.value)}
              />
              <span className="radio-circle"></span>No
            </label>
          </div>

          <div className="inputs-action-row">
            <div className="input-field-box">
              <span className="floating-input-label">Full Name*</span>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ajay Kumar"
                required
              />
            </div>
            <div className="input-field-box phone-input-box">
              <span className="country-prefix">+91</span>
              <input
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Mobile number*"
                required
              />
            </div>
            <button type="submit" className="action-submit-btn">Book a Free Scan</button>
          </div>

          <div className="form-consent-row">
            <label className="checkbox-label-wrapper">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
              <span className="checkbox-square"></span>
              <span className="consent-text-content">
                I hereby consent to receive calls / messages from Whistle and its partners and override DND settings.
              </span>
            </label>
          </div>
        </form>
      </div>

      {/* 3. Clove Dental Clinic Locator Card */}
      <div className="clove-locator-card">
        <div className="locator-text-panel">
          <h3 className="locator-message">
            Book a Free 3D Teeth Scan and Orthodontist Consult in a <br />
            Clove Dental Clinic near you.
          </h3>
        </div>
        <div className="locator-brand-panel">
          <img src={cloveLogo} alt="Clove Dental Clinics" className="clove-brand-logo" />
          <div className="clinic-dropdown-selector">
            <span>Find Clinic</span>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L5 5L9 1" stroke="#7C59DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* 4. Infinite Launch Benefit Marquee Ticker */}
      <div className="ticker-tape-marquee">
        <div className="marquee-content-track">
          <span>Our inaugural launch benefit</span>
          <span><strong>Free teeth scan</strong> worth ₹500</span>
          <span><strong>Free orthodontic consultation</strong> worth ₹1500</span>
          <span>Our inaugural launch benefit</span>
          <span><strong>Free teeth scan</strong> worth ₹500</span>
          <span><strong>Free orthodontic consultation</strong> worth ₹1500</span>
        </div>
      </div>



      {/* 6. Pricing Presentation Section */}
      <div className="pricing-display-section">
        <div className="pricing-text-column">
          <h2 className="pricing-main-title">Dream smiles achieved secretly</h2>
          <p className="pricing-description">
            Experience the superior quality of our Whistle Aligners crafted with 3-layer PU material.
            With 450+ clinics nationwide, enjoy comfortable treatment by expert orthodontists at House of Clove.
          </p>
          <p className="pricing-disclaimer">
            The pricing is different for every case. Cases with higher complexity requiring more aligners
            and additional time and effort from our dentists.
          </p>
        </div>

        <div className="pricing-product-card">
          <div className="card-info-side">
            <h3 className="product-brand-title">Whistle Aligners</h3>
            <div className="price-tag-group">
              <span className="original-strikethrough-price">₹84,000</span>
              <div className="current-price-label">
                <span className="starting-at-text">starting at</span>
                <span className="main-computed-price">₹47,999</span>
              </div>
              <span className="tax-inclusion-notice">inc. of all taxes</span>
            </div>
            <div className="product-bullet-features">
              <div className="feature-item"><span className="green-checkmark-icon">✓</span><span className="feature-text">Offer valid for a limited time</span></div>
              <div className="feature-item"><span className="green-checkmark-icon">✓</span><span className="feature-text">Easy financing options</span></div>
            </div>
          </div>
          <div className="card-visual-side">
            <img src={productImg} alt="Whistle Aligners Case" className="product-case-display-img" />
            <a href="#learn-more" className="learn-more-anchor-btn">
              <span>Learn more</span>
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M1 6H15M15 6L10 1M15 6L10 11" stroke="#7C59DF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>


      <div className="tab-switch-container">
        <button
          className={activeTab === "results" ? "active-tab" : ""}
          onClick={() => setActiveTab("results")}
        >
          Results
        </button>

        <button
          className={activeTab === "whistle" ? "active-tab" : ""}
          onClick={() => setActiveTab("whistle")}
        >
          Why Whistle
        </button>
      </div>

      {activeTab === "results" && (

        <div className="results-showcase-section">
          <h2 className="showcase-section-title">Results You'll Love</h2>

          <div className="results-filter-buttons">
            <button
              className={selectedFilter === "all" ? "active" : ""}
              onClick={() => setSelectedFilter("all")}
            >
              All
            </button>

            <button
              className={selectedFilter === "short" ? "active" : ""}
              onClick={() => setSelectedFilter("short")}
            >
              Under 6 Months
            </button>

            <button
              className={selectedFilter === "long" ? "active" : ""}
              onClick={() => setSelectedFilter("long")}
            >
              6+ Months
            </button>
          </div>
          {isLoadingResults && (
            <div className="showcase-grid-layout">
              {[1, 2, 3, 4].map((id) => (
                <div key={id} className="showcase-profile-card skeleton-card">
                  <div className="skeleton-image-split"></div>
                  <div className="skeleton-line-item title-shimmer"></div>
                  <div className="skeleton-line-item subtitle-shimmer"></div>
                </div>
              ))}
            </div>
          )}
          {resultsError && (
            <div className="showcase-error-fallback-box">
              <p className="error-message-text">⚠️ {resultsError}</p>
            </div>
          )}
          {!isLoadingResults && !resultsError && (
            <div className="showcase-grid-layout">
              {filteredCaseStudies.map((profile) => (
                <div key={profile.id} className="showcase-profile-card">
                  <div className="profile-comparison-frame">
                    <div className="image-half">
                      <img src={profile.beforeImg} alt="Before" className="comparison-img" />
                      <span className="timeline-badge-label">Before</span>
                    </div>
                    <div className="image-half">
                      <img src={profile.afterImg} alt="After" className="comparison-img" />
                      <span className="timeline-badge-label">After</span>
                    </div>
                  </div>
                  <div className="profile-data-footer">
                    <div className="data-row-item border-bottom-divider">
                      <span className="metric-label">Concern</span>
                      <span className="metric-value text-bold-dark">{profile.concern}</span>
                    </div>
                    <div className="data-row-item">
                      <span className="metric-label">Treatment Duration</span>
                      <span className="metric-value">{profile.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}


      {/* 5. NEW: Why Whistle Section */}


      {activeTab === "whistle" && (
        <div className="whistle-features-section">
          <h2 className="whistle-section-title">Why Whistle?</h2>

          {/* Loading Lifecycle Block */}
          {isLoadingWhistle && (
            <div className="whistle-grid-layout">
              {[1, 2, 3, 4].map((id) => (
                <div key={id} className="whistle-feature-card skeleton-whistle-card">
                  <div className="skeleton-image-placeholder"></div>
                  <div className="skeleton-text-line headline"></div>
                  <div className="skeleton-text-line line-1"></div>
                  <div className="skeleton-text-line line-2"></div>
                </div>
              ))}
            </div>
          )}

          {/* Error Fallback Block */}
          {whistleError && (
            <div className="showcase-error-fallback-box">
              <p className="error-message-text">⚠️ Failed to load reasons panel: {whistleError}</p>
            </div>
          )}

          {/* Resolved Content State Render */}
          {!isLoadingWhistle && !whistleError && (
            <div className="whistle-grid-layout">
              {whistleFeatures.map((item) => (
                <div key={item.id} className="whistle-feature-card">
                  <div className="feature-card-image-box">
                    <img src={item.image} alt={item.title} className="feature-main-img" />
                  </div>
                  <div className="feature-card-text-box">
                    <h3 className="feature-card-title">{item.title}</h3>
                    <p className="feature-card-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}


      <div className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        {faqData.map((faq) => (
          <div key={faq.id} className="faq-item">
            <div
              className="faq-question"
              onClick={() =>
                setOpenFaq(openFaq === faq.id ? null : faq.id)
              }
            >
              <span>{faq.question}</span>
              <span>{openFaq === faq.id ? "-" : "+"}</span>
            </div>

            {openFaq === faq.id && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}