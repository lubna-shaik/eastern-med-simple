import { useEffect, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Truck,
  X
} from 'lucide-react';

import {
  categories,
  products,
  categoryData,
  getCategoryBySlug
} from './products';

const COMPANY_EMAIL = 'info@easternmedsupplies.com';
const COMPANY_PHONE = '+966 54 195 1966';
const DETAILED_CATEGORIES = new Set(categories.slice(0, 4));
const CATEGORY_GALLERY_IMAGES = {
  'Medical Disposables': ['/images/MD2.webp', '/images/MD3.webp', '/images/MD4.jpg', '/images/MD5.jpg'],
  'Emergency Medical Products and Supplies': ['/images/em2.jpg', '/images/em3.avif', '/images/em4.webp', '/images/em5.avif'],
  'Hospital Scrubs and Linens': ['/images/ho2.webp', '/images/ho3.png', '/images/ho4.jpg', '/images/ho5.webp'],
  'Blood Collection Tubes': ['/images/bl1.webp', '/images/bl2.webp', '/images/bl3.avif', '/images/bl4.webp'],
};


// ---------------------------------------------------------
// BRAND
// ---------------------------------------------------------

function Brand() {
  return (
    <a
      className="brand"
      href="#home"
      aria-label="Eastern Med Supplies home"
    >
      <img src="/Logo & Tagline.png" alt="" />
      <span>
        <b>Eastern Med Supplies</b>
        <small>Better Supplies. Healthier Tomorrow.</small>
      </span>
    </a>
  );
}


// ---------------------------------------------------------
// PRODUCT CARD
// ---------------------------------------------------------

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-img">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-body">
        <span>{product.category}</span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <a
          className="btn outline"
          href={`mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(
            'Product enquiry: ' + product.name
          )}`}
        >
          Enquire <Mail size={16} />
        </a>
      </div>
    </article>
  );
}


// ---------------------------------------------------------
// PRODUCTS HOME PAGE
// ---------------------------------------------------------

function ProductsPage({ initialExpandedCategory = null }) {
  const [expandedCategory, setExpandedCategory] = useState(initialExpandedCategory);
  return (
    <section className="section products-page">
      <div className="container">

        <div className="section-head reveal">
          <p className="eyebrow">Product Catalogue</p>

          <h2>Explore Our Product Categories</h2>

          <p>
            Browse our healthcare product categories and explore
            the products available within each range.
          </p>
        </div>


        <div className="category-grid">

          {categories.map((category) => {

            const data = categoryData[category];
            const hasProducts = products.some(product => product.category === category && product.name?.trim());
            const hasDetailPage = DETAILED_CATEGORIES.has(category);
            const slug = data?.slug || category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            const cardContent = <>

                <div className="category-image">

                  <img
                    src={
                      data?.image ||
                      'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=80'
                    }
                    alt={category}
                  />

                </div>

                <div className="category-content">

                  <h3>{category}</h3>

                  {(hasDetailPage || hasProducts) && <span>{hasDetailPage ? 'View Products' : expandedCategory === category ? 'Hide Products' : 'View Products'}<ArrowRight size={16} /></span>}

                </div>

            </>;

            return hasDetailPage ? (
              <a key={category} href={`#products/${slug}`} className="category-card reveal">{cardContent}</a>
            ) : hasProducts ? (
              <button key={category} type="button" className="category-card category-toggle reveal"
                aria-expanded={expandedCategory === category} aria-controls={`inline-products-${slug}`}
                onClick={() => setExpandedCategory(current => current === category ? null : category)}>
                {cardContent}
              </button>
            ) : (
              <article key={category} className="category-card reveal">{cardContent}</article>
            );

          })}

        </div>

        {expandedCategory && !DETAILED_CATEGORIES.has(expandedCategory) && (() => {
          const names = products.filter(product => product.category === expandedCategory);
          const slug = categoryData[expandedCategory]?.slug || expandedCategory.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return <section className="inline-category-products" id={`inline-products-${slug}`} aria-live="polite">
            <div className="inline-category-heading">
              <h3>{expandedCategory}</h3>
              <button type="button" className="inline-category-collapse" onClick={() => setExpandedCategory(null)} aria-label={`Collapse ${expandedCategory}`}>Close <X size={15} /></button>
            </div>
            {names.length > 0 && <ul>{names.map(product => <li key={product.id}>{product.name}</li>)}</ul>}
          </section>;
        })()}

      </div>
    </section>
  );
}


// ---------------------------------------------------------
// CATEGORY PAGE
// ---------------------------------------------------------

function CategoryPage({ category }) {

  const data = getCategoryBySlug(category);

  if (!data) {

    return (
      <section className="section">
        <div className="container">
          <h2>Category not found</h2>

          <a href="#products" className="btn primary">
            Back to Products
          </a>
        </div>
      </section>
    );

  }


  const categoryProducts = products.filter(
    product => product.category === Object.keys(categoryData)
      .find(key => categoryData[key].slug === category)
  );


  const categoryName = Object.keys(categoryData)
    .find(key => categoryData[key].slug === category);


  return (
    <section className="section category-page">

      <div className="container">

        {/* BACK BUTTON */}

        <a href="#products" className="back-link">
          ← Back to Product Categories
        </a>


        {/* CATEGORY HERO */}

        <div className="category-hero reveal">

          <img
            src={data.image}
            alt={categoryName}
          />

          <div className="category-hero-content">

            <p className="eyebrow">
              Product Category
            </p>

            <h1>{categoryName}</h1>

            <p>
              {data.description}
            </p>

          </div>

        </div>


        {/* PRODUCTS */}

        <div className="category-products">

          <div className="section-head">

            <p className="eyebrow">
              Products
            </p>

            <h2>
              Products in {categoryName}
            </h2>

          </div>


          {categoryProducts.length > 0 && (

            <div className="category-products-layout">
              <div className="category-product-list" aria-label={`Products in ${categoryName}`}>
                {categoryProducts.map(product => (
                  <a
                    className="category-product-name"
                    key={product.id}
                    href={`mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent('Product enquiry: ' + product.name)}`}
                  >
                    <span>{product.name}</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>

              <div className="category-product-gallery" aria-label={`${categoryName} product images`}>
                {CATEGORY_GALLERY_IMAGES[categoryName] ? (
                  CATEGORY_GALLERY_IMAGES[categoryName].map((image, index) => (
                    <div className="category-gallery-image" key={image}>
                      <img src={image} alt={`${categoryName} product image ${index + 1}`} loading="lazy" />
                    </div>
                  ))
                ) : categoryProducts.slice(0, 4).map(product => (
                  <div className="category-gallery-image" key={product.id}>
                    <img src={product.image || data.image} alt={`${product.name} - ${categoryName}`} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </section>
  );
}


function AnimatedHeroWord() {
  const words = ['Trust', 'Quality', 'Reliability', 'Excellence'];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener?.('change', update);
    return () => query.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayWord('Trust');
      return undefined;
    }
    const target = words[wordIndex];
    let timer;
    if (!deleting && displayWord.length < target.length) {
      timer = window.setTimeout(() => setDisplayWord(target.slice(0, displayWord.length + 1)), 115);
    } else if (!deleting) {
      timer = window.setTimeout(() => setDeleting(true), 1300);
    } else if (displayWord.length > 0) {
      timer = window.setTimeout(() => setDisplayWord(displayWord.slice(0, -1)), 70);
    } else {
      timer = window.setTimeout(() => {
        setWordIndex((wordIndex + 1) % words.length);
        setDeleting(false);
      }, 260);
    }
    return () => window.clearTimeout(timer);
  }, [displayWord, wordIndex, deleting, reducedMotion]);

  return <span className="typewriter-word" aria-label={reducedMotion ? 'Trust' : undefined} aria-live="polite">{displayWord}<span className="typewriter-cursor" aria-hidden="true" /></span>;
}


// ---------------------------------------------------------
// HOME PAGE
// ---------------------------------------------------------

function HomePage({ go }) {

  return (
    <>

      {/* HERO */}

      <section id="home" className="hero">

        <div className="hero-bg"></div>

        <div className="container hero-grid">

          <div className="hero-copy reveal">

            <p className="eyebrow">
              Eastern Med Supplies
            </p>

            <h1>Healthcare Excellence, Built on <em><AnimatedHeroWord />.</em></h1>

            <p className="lead">
              Professional medical supplies, equipment and
              healthcare solutions for hospitals, clinics
              and institutions.
            </p>

            <div className="actions">

              <button
                className="btn primary"
                onClick={() => go('products')}
              >
                Explore Products
                <ArrowRight size={18} />
              </button>

              <a
                className="btn light"
                href={`mailto:${COMPANY_EMAIL}`}
              >
                Contact Us
                <Mail size={17} />
              </a>

            </div>

          </div>


          <div className="hero-card reveal">

            <img
              src="/assets/hero-medical.jpg"
              alt="Medical supplies"
            />

            <div className="hero-badge">

              <ShieldCheck />

              <div>
                <b>Healthcare-focused supply</b>
                <span>
                  Professional service & support
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SMALL PRODUCT PREVIEW */}

      <section className="section soft">

        <div className="container">

          <div className="section-head row reveal">

            <div>
              <p className="eyebrow">Our Products</p>
              <h2>Healthcare products for every need.</h2>
            </div>

            <a
              href="#products"
              className="btn primary"
            >
              See All Products
              <ArrowRight size={17} />
            </a>

          </div>


        </div>

      </section>

      <section className="section home-services-preview">
        <div className="container home-services-row">
          <div><p className="eyebrow">Our Services</p><h2>Support from sourcing through delivery.</h2><p>Explore our healthcare supply, procurement and logistics services.</p></div>
          <a className="btn outline" href="#services">Explore Our Services <ArrowRight size={17} /></a>
        </div>
      </section>

    </>
  );
}

const serviceItems = [
  ['Medical Supply & Distribution', 'Coordinated supply and distribution for healthcare requirements.'],
  ['Procurement Support', 'Product sourcing and procurement coordination for institutions.'],
  ['Delivery & Logistics', 'Planned delivery and logistics coordination for orders.'],
  ['Equipment Installation', 'Setup and installation support where applicable.'],
  ['Maintenance Support', 'Product guidance and ongoing assistance.'],
  ['Institutional Healthcare Supply', 'Structured support for hospitals, clinics and institutions.']
];

function AboutPage() {
  const reasons = [
    ['Quality', 'A careful, professional approach to the products and solutions we represent.'],
    ['Reliability', 'Clear communication and dependable support throughout every enquiry.'],
    ['Customer Support', 'Responsive assistance focused on practical requirements and continuity.'],
    ['Healthcare Focus', 'An understanding of medical supply environments and priorities.'],
    ['Trusted Partnerships', 'Long-term relationships guided by transparency and shared value.'],
    ['Responsive Service', 'A clear point of contact from initial enquiry to delivery.']
  ];
  return <>
    <section className="section about-intro"><div className="container split">
      <div className="about-intro-heading reveal"><p className="eyebrow">About Us</p><h2>About Eastern Med Supplies</h2></div>
      <div className="copy about-intro-copy reveal"><p>Eastern Med Supplies is focused on providing dependable medical products and healthcare supply solutions for professional and institutional requirements.</p><p>We support hospitals, clinics and institutions with medical supplies, equipment and responsive service.</p></div>
    </div></section>
    <section className="section soft why-us-section"><div className="container">
      <div className="section-head reveal"><p className="eyebrow">Why Eastern Med Supplies</p><h2>Professional service with a healthcare focus.</h2></div>
      <div className="cards three">{reasons.map(([title, body], i) => <article className="why-card reveal" style={{ '--card-index': i }} key={title}><span>0{i + 1}</span><ShieldCheck /><h3>{title}</h3><p>{body}</p></article>)}</div>
    </div></section>
    <section className="section leadership-section"><div className="container">
      <div className="section-head"><p className="eyebrow">Leadership</p><h2>Leadership</h2></div>
      <div className="leadership-grid">
        <article className="leader reveal" tabIndex={0}>
          <img src="/assets/leadership/ceo-ibrahim.jpeg" alt="Mr. Ibrahim Saeed Al Ghamdi" />
          <h3>Mr. Ibrahim Saeed Al Ghamdi</h3>
          <p className="leader-role">CEO</p>
          <div className="leader-message">
            <p>At Eastern Med Supplies, our vision is to build a trusted name in the healthcare supply industry through integrity, reliability, and an unwavering commitment to quality.</p>
            <p>We believe that access to dependable medical products plays an important role in strengthening healthcare services.</p>
            <p>Our long-term goal is to expand our reach, build lasting partnerships, and contribute meaningfully to better healthcare outcomes across the region and beyond.</p>
          </div>
        </article>
        <article className="leader reveal" tabIndex={0}>
          <img src="/assets/leadership/executive-samir.jpeg" alt="Mr. Samir Ahmed Shaik" />
          <h3>Mr. Samir Ahmed Shaik</h3>
          <p className="leader-role">Executive Director</p>
          <div className="leader-message">
            <p>Our commitment goes beyond supplying medical products; it is about understanding the evolving needs of healthcare professionals and delivering solutions they can depend on.</p>
            <p>Through strong customer relationships, operational excellence, and continuous improvement, we aim to provide reliable, high-quality, and cost-effective solutions.</p>
            <p>We remain focused on strengthening our capabilities and building long-term partnerships founded on trust and service.</p>
          </div>
        </article>
      </div>
    </div></section>
    <section className="section soft"><div className="container">
      <div className="section-head team-section-head"><p className="eyebrow">Our Team</p><h2>Our Team</h2><p className="team-intro">Behind every successful partnership is a team committed to excellence. At Eastern Med Supplies, our people bring together expertise, dedication, and collaboration to ensure dependable service, meaningful customer relationships, and solutions that support better healthcare.</p></div>
      <div className="team-grid">
        {[
          ['Rayed Ahmed', 'Procurement Specialist'],
          ['Tutail Raza', 'Business Development Manager'],
          ['Safvan Nazeer', 'Financial Analyst'],
          ['Hamad Al Shehri', 'HR Manager']
        ].map(([name, role], index) => <article className="team-member reveal" style={{ '--stagger-index': index }} key={name}><h3>{name}</h3><p>{role}</p></article>)}
      </div>
    </div></section>
  </>;
}

function ServicesPage() {
  return <section className="section dark"><div className="container">
    <div className="section-head reveal"><p className="eyebrow teal">Our Services</p><h2>From sourcing to supply, with clear support.</h2><p>Practical healthcare supply services for hospitals, clinics and institutions.</p></div>
    <div className="cards three">{serviceItems.map(([title, body]) => <article className="service-card reveal" key={title}><Truck/><h3>{title}</h3><p>{body}</p></article>)}</div>
    <a className="btn light services-enquiry" href={`mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent('Service enquiry')}`}>Contact us about our services <ArrowRight size={17}/></a>
  </div></section>;
}

function ContactPage() {
  return <section className="contact contact-page"><div className="container contact-grid">
    <div><p className="eyebrow teal">Contact</p><h2>Get in touch with Eastern Med Supplies.</h2><p>Eastern Med Supplies provides dependable medical products and healthcare supply solutions for hospitals, clinics and institutions.</p><a className="btn light" href={`mailto:${COMPANY_EMAIL}`}><Mail size={17}/> Contact Us</a></div>
      <div className="contact-box contact-info">
        <div className="contact-info-item"><MapPin/><span><small>Company Address</small><address>Building No. 7759,<br/>Prince Thamer 17th Street,<br/>P.O. Box 20030, Al Shamaliya,<br/>Al Khobar 31952,<br/>Kingdom of Saudi Arabia.</address></span></div>
        <a className="contact-info-item" href={`mailto:${COMPANY_EMAIL}`}><Mail/><span><small>EMAIL</small>{COMPANY_EMAIL}</span></a>
        <a className="contact-info-item" href="tel:+966541951966"><Phone/><span><small>Phone</small>{COMPANY_PHONE}</span></a>
    </div>
  </div></section>;
}


// ---------------------------------------------------------
// MAIN APP
// ---------------------------------------------------------

function App() {

  const [menu, setMenu] = useState(false);

  const [route, setRoute] = useState(
    window.location.hash || '#home'
  );


  useEffect(() => {

    const handleHashChange = () => {

      setRoute(window.location.hash || '#home');

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

    };

    window.addEventListener(
      'hashchange',
      handleHashChange
    );

    return () =>
      window.removeEventListener(
        'hashchange',
        handleHashChange
      );

  }, []);


  useEffect(() => {
    const targets = [...document.querySelectorAll('.reveal:not(.visible)')];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('visible'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [route]);


  const go = (id) => {

    setMenu(false);

    window.location.hash = id;

  };


  // -------------------------------------------------------
  // DETERMINE PAGE
  // -------------------------------------------------------

  let page;

  if (route.startsWith('#products/')) {
    const slug = route.replace(
      '#products/',
      ''
    );
    const categoryName = categories.find(name => categoryData[name]?.slug === slug);
    if (categoryName && DETAILED_CATEGORIES.has(categoryName)) {
      page = <CategoryPage category={slug} />;
    } else {
      page = <ProductsPage key={slug} initialExpandedCategory={categoryName || null} />;
    }

  } else if (route === '#products') {

    page = <ProductsPage />;

  } else if (route === '#about') {
    page = <AboutPage />;
  } else if (route === '#services') {
    page = <ServicesPage />;
  } else if (route === '#contact') {
    page = <ContactPage />;
  } else {

    page = <HomePage go={go} />;

  }


  return (

    <>

      {/* HEADER */}

      <header className="header">

        <div className="container nav">

          <Brand />


          <nav
            className={
              menu
                ? 'mobile-open'
                : ''
            }
          >

            <a
              href="#home"
              onClick={() => setMenu(false)}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMenu(false)}
            >
              About Us
            </a>

            <a
              href="#products"
              onClick={() => setMenu(false)}
            >
              Products
            </a>

            <a
              href="#services"
              onClick={() => setMenu(false)}
            >
              Services
            </a>

            <a
              href="#contact"
              onClick={() => setMenu(false)}
            >
              Contact
            </a>

          </nav>


          <a
            className="nav-cta"
            href="#products"
          >
            Explore Products
            <ArrowRight size={16} />
          </a>


          <button
            className="menu-btn"
            onClick={() =>
              setMenu(!menu)
            }
            aria-label="Menu"
          >

            {menu
              ? <X />
              : <Menu />
            }

          </button>

        </div>

      </header>


      <main>

        {page}

      </main>


      {/* FOOTER */}

      <footer>

        <div className="container footer-grid">

          <Brand />

          <p>
            Better Supplies. Healthier Tomorrow.
          </p>

          <div className="footer-company-info">
            <strong>Eastern Med Supplies</strong>
            <p><b>Address:</b> Building No. 7759,<br/>Prince Thamer 17th Street,<br/>P.O. Box 20030, Al Shamaliya,<br/>Al Khobar 31952,<br/>Kingdom of Saudi Arabia.</p>
            <p><b>Phone:</b> <a href="tel:+966541951966">+966 54 195 1966</a></p>
            <p><b>Email:</b> <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a></p>
          </div>

        </div>

      </footer>

    </>

  );

}

export default App;
