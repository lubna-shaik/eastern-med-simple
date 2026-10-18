// src/products.js

export const categories = [
  'Medical Disposables',
  'Emergency Medical Products and Supplies',
  'Hospital Scrubs and Linens',
  'Blood Collection Tubes',
  'Height and Weighing Scales',
  'OB GYN (Gynecological) Products',
  'Medical Rubber Products',
  'Rehabilitation Products and Aids',
  'Cleaning Verification',
  'Labeling',
  'Medical Imaging',
  'Hospital Medical Furniture',
  'Orthopedic Implant and Instruments',
  'Diagnostic Equipment and Products',
  'Anesthesia Equipment and Products',
  'Autoclave and Sterilizers',
  'Suction Machines and Units',
  'Hospital Hollowware',
  'Cold Chain Equipment',
  'Physiotherapy Equipment',
  'Dental Equipment and Products',
  'ICU Equipment',
  'OT Equipment',
  'Medical Refrigerators and Freezers',
  'Sterilization',
  'Storage',
  'Instrument Care',
  'Security Products',
];


// ---------------------------------------------------------
// CATEGORY INFORMATION
// ---------------------------------------------------------

export const categoryData = {

  'Medical Disposables': {
    slug: 'medical-disposables',
    image: '/images/MD1.webp',
    description:
      'Essential disposable medical and clinical supplies for healthcare environments.',
  },

  'Emergency Medical Products and Supplies': {
    slug: 'emergency-medical-products',
    image: '/images/em1.jpg',
    description:
      'Products designed to support emergency response, recovery and patient care.',
  },

  'Hospital Scrubs and Linens': {
    slug: 'hospital-scrubs-and-linens',
    image: '/images/ho1.jpg',
    description:
      'Hospital clothing, protective wear, linens and patient identification supplies.',
  },

  'Blood Collection Tubes': {
    slug: 'blood-collection-tubes',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
    description:
      'Blood collection and laboratory sampling products for healthcare and diagnostic environments.',
  },

  'Height and Weighing Scales': {
    slug: 'height-and-weighing-scales',
    image: '/images/hi1.jpg',
    description:
      'Height and weight measurement solutions for healthcare environments.',
  },

  'OB GYN (Gynecological) Products': {
    slug: 'ob-gyn-products',
    image: '/images/gy1.webp',
    description:
      'Products and equipment supporting obstetric and gynecological care.',
  },

  'Medical Rubber Products': {
    slug: 'medical-rubber-products',
    image: '/images/ru1.webp',
    description:
      'Medical rubber products and healthcare accessories.',
  },

  'Rehabilitation Products and Aids': {
    slug: 'rehabilitation-products',
    image: '/images/r1.webp',
    description:
      'Products and aids supporting mobility, rehabilitation and patient care.',
  },

  'Cleaning Verification': {
    slug: 'cleaning-verification',
    image: '/images/v1.jpg',
    description:
      'Products supporting cleaning and verification processes.',
  },

  'Labeling': {
    slug: 'labeling',
    image: '/images/l1.jpg',
    description:
      'Healthcare labeling and identification solutions.',
  },

  'Medical Imaging': {
    slug: 'medical-imaging',
    image: '/images/M1.jpg',
    description:
      'Equipment and solutions used in medical imaging environments.',
  },

  'Hospital Medical Furniture': {
    slug: 'hospital-medical-furniture',
    image: '/images/FU1.jpg',
    description:
      'Furniture and infrastructure solutions for hospitals and healthcare facilities.',
  },

  'Orthopedic Implant and Instruments': {
    slug: 'orthopedic-implants',
    image: '/images/or1.jpg',
    description:
      'Orthopedic instruments and implant-related healthcare products.',
  },

  'Diagnostic Equipment and Products': {
    slug: 'diagnostic-equipment',
    image: '/images/d1.jpg',
    description:
      'Diagnostic equipment and products for clinical and healthcare environments.',
  },

  'Anesthesia Equipment and Products': {
    slug: 'anesthesia-equipment',
    image: '/images/a1.jpg',
    description:
      'Equipment and products supporting anesthesia and respiratory care.',
  },

  'Autoclave and Sterilizers': {
    slug: 'autoclave-and-sterilizers',
    image: '/images/st1.jpg',
    description:
      'Sterilization equipment and autoclave solutions.',
  },

  'Suction Machines and Units': {
    slug: 'suction-machines',
    image: '/images/su1.jpg',
    description:
      'Suction machines and units for healthcare applications.',
  },

  'Hospital Hollowware': {
    slug: 'hospital-hollowware',
    image: '/images/ha1.jpg',
    description:
      'Hospital hollowware and stainless-steel healthcare products.',
  },

  'Cold Chain Equipment': {
    slug: 'cold-chain-equipment',
    image: '/images/cold1.jpg',
    description:
      'Equipment supporting temperature-sensitive healthcare products.',
  },

  'Physiotherapy Equipment': {
    slug: 'physiotherapy-equipment',
    image: '/images/pys1.jpg',
    description:
      'Equipment and accessories supporting physiotherapy and rehabilitation.',
  },

  'Dental Equipment and Products': {
    slug: 'dental-equipment',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80',
    description:
      'Dental equipment and products for professional healthcare environments.',
  },

  'ICU Equipment': {
    slug: 'icu-equipment',
    image: '/images/icu1.jpg',
    description:
      'Equipment and supplies supporting intensive care environments.',
  },

  'OT Equipment': {
    slug: 'ot-equipment',
    image: '/images/OT1.jpg',
    description:
      'Operating theatre equipment and healthcare solutions.',
  },

  'Medical Refrigerators and Freezers': {
    slug: 'medical-refrigerators',
    image: '/images/frid1.jpg',
    description:
      'Refrigeration and freezer solutions for healthcare environments.',
  },

  'Sterilization': {
    slug: 'sterilization',
    image: '/images/str1.jpg',
    description:
      'Products and solutions supporting medical sterilization processes.',
  },

  'Storage': {
    slug: 'storage',
    image: '/images/storage1.jpg',
    description:
      'Storage solutions designed for healthcare facilities.',
  },

  'Instrument Care': {
    slug: 'instrument-care',
    image: '/images/inst1.jpg',
    description:
      'Products supporting the care and maintenance of medical instruments.',
  },

  'Security Products': {
    slug: 'security-products',
    image: '/images/sec1.jpg',
    description:
      'Security and safety products for healthcare environments.',
  },
};


// ---------------------------------------------------------
// PRODUCTS
// ---------------------------------------------------------

export const products = [

  // MEDICAL DISPOSABLES
  {
    id: 'surgical-medical-gloves',
    name: 'Surgical Medical Gloves',
    category: 'Medical Disposables',
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80',
    description: 'Medical gloves intended for surgical and clinical applications.',
  },
  {
    id: 'plastic-scissors',
    name: 'Plastic Scissors',
    category: 'Medical Disposables',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80',
    description: 'Disposable plastic scissors for suitable clinical applications.',
  },
  {
    id: 'plastic-mouth-piece-endoscopes',
    name: 'Plastic Mouth Piece for Endoscopes',
    category: 'Medical Disposables',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80',
    description: 'Disposable mouth piece designed for endoscopic procedures.',
  },
  {
    id: 'surgical-blades-scalpels',
    name: 'Surgical Blades & Scalpels',
    category: 'Medical Disposables',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80',
    description: 'Surgical blades and scalpels for clinical applications.',
  },
  {
    id: 'plastic-vaginal-speculum',
    name: 'Plastic Vaginal Speculum',
    category: 'Medical Disposables',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    description: 'Disposable plastic speculum for gynecological applications.',
  },
  {
    id: 'plastic-sponge-holder',
    name: 'Plastic Sponge Holder',
    category: 'Medical Disposables',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80',
    description: 'Disposable sponge holder for appropriate clinical use.',
  },
  {
    id: 'plastic-tweezers',
    name: 'Plastic Tweezers',
    category: 'Medical Disposables',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80',
    description: 'Disposable plastic tweezers for suitable medical applications.',
  },
  {
    id: 'surgical-dressings',
    name: 'Surgical Dressings',
    category: 'Medical Disposables',
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80',
    description: 'Dressings and wound-care products for clinical use.',
  },
  {
    id: 'laryngeal-mask',
    name: 'Laryngeal Mask',
    category: 'Medical Disposables',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80',
    description: 'Laryngeal mask for appropriate airway management applications.',
  },
  {
    id: 'tube-with-swab',
    name: 'Tube with Swab',
    category: 'Medical Disposables',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    description: 'Tube and swab products for sample collection.',
  },
  {
    id: 'ecg-electrodes',
    name: 'ECG Electrodes',
    category: 'Medical Disposables',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    description: 'Electrodes intended for ECG monitoring applications.',
  },
  {
    id: 'blood-bag-systems',
    name: 'Blood Bag Systems',
    category: 'Medical Disposables',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    description: 'Blood bag systems for appropriate blood collection and handling applications.',
  },


  // EMERGENCY MEDICAL PRODUCTS
  {
    id: 'emergency-recovery-trolley',
    name: 'Emergency & Recovery Trolley',
    category: 'Emergency Medical Products and Supplies',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9c2ca9badb?auto=format&fit=crop&w=800&q=80',
    description: 'Emergency and recovery trolley solutions for healthcare environments.',
  },
  {
    id: 'iv-poles',
    name: 'IV Poles',
    category: 'Emergency Medical Products and Supplies',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
    description: 'IV pole solutions for clinical and patient-care environments.',
  },
  {
    id: 'torches',
    name: 'Torches',
    category: 'Emergency Medical Products and Supplies',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9c2ca9badb?auto=format&fit=crop&w=800&q=80',
    description: 'Medical examination and emergency-use torch products.',
  },
  {
    id: 'emergency-stretchers',
    name: 'Emergency Stretchers',
    category: 'Emergency Medical Products and Supplies',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    description: 'Stretchers for emergency transport and patient handling.',
  },
  {
    id: 'laryngoscopes',
    name: 'Laryngoscopes',
    category: 'Emergency Medical Products and Supplies',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80',
    description: 'Laryngoscope products for airway management applications.',
  },


  // HOSPITAL SCRUBS & LINENS
  {
    id: 'cotton-surgical-clothing',
    name: 'Cotton Surgical Clothing',
    category: 'Hospital Scrubs and Linens',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
    description: 'Cotton surgical clothing for healthcare environments.',
  },
  {
    id: 'hospital-linens',
    name: 'Hospital Linens',
    category: 'Hospital Scrubs and Linens',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
    description: 'Hospital linen products for healthcare facilities.',
  },
  {
    id: 'disposable-surgical-scrubs',
    name: 'Disposable Surgical Scrubs',
    category: 'Hospital Scrubs and Linens',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
    description: 'Disposable surgical clothing for clinical environments.',
  },
  {
    id: 'disposable-hiv-kit',
    name: 'Disposable HIV Kit',
    category: 'Hospital Scrubs and Linens',
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80',
    description: 'Disposable protective kit for appropriate healthcare applications.',
  },
  {
    id: 'facemask-shoe-covers',
    name: 'Facemask and Shoe Covers',
    category: 'Hospital Scrubs and Linens',
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80',
    description: 'Protective facemasks and shoe covers for healthcare environments.',
  },
  {
    id: 'protective-goggles',
    name: 'Disposable Protective Goggles',
    category: 'Hospital Scrubs and Linens',
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80',
    description: 'Disposable protective goggles for clinical environments.',
  },
  {
    id: 'hospital-bracelets',
    name: 'Hospital Bracelets / Patient Wristband',
    category: 'Hospital Scrubs and Linens',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
    description: 'Patient identification wristbands and hospital bracelets.',
  },


  // BLOOD COLLECTION TUBES
  {
    id: 'serum-test-tubes',
    name: 'Serum Test Tubes',
    category: 'Blood Collection Tubes',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    description: 'Test tubes for appropriate blood and laboratory sample collection.',
  },
  {
    id: 'serum-separating-tubes',
    name: 'Serum Separating Tubes',
    category: 'Blood Collection Tubes',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    description: 'Serum separating tubes for laboratory sample processing.',
  },
  {
    id: 'edta-blood-draw-tubes',
    name: 'EDTA Blood Draw Tubes',
    category: 'Blood Collection Tubes',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    description: 'EDTA blood collection tubes for laboratory applications.',
  },
  {
    id: 'sodium-citrate-tubes',
    name: 'Sodium Citrate Tubes',
    category: 'Blood Collection Tubes',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    description: 'Sodium citrate tubes for appropriate blood sample collection.',
  },
  {
    id: 'lithium-heparin-tubes',
    name: 'Lithium Heparin Tubes',
    category: 'Blood Collection Tubes',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    description: 'Lithium heparin tubes for laboratory blood collection.',
  },
  {
    id: 'esr-vacuum-blood-tubes',
    name: 'ESR Vacuum Blood Tubes',
    category: 'Blood Collection Tubes',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    description: 'Vacuum blood collection tubes for ESR applications.',
  },
  {
    id: 'multi-sample-needles',
    name: 'Multi-Sample Blood Collection Needles',
    category: 'Blood Collection Tubes',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80',
    description: 'Multi-sample blood collection needles for clinical use.',
  },
  {
    id: 'fluoride-oxalate-tubes',
    name: 'Fluoride Oxalate Tubes',
    category: 'Blood Collection Tubes',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    description: 'Fluoride oxalate tubes for appropriate laboratory sample collection.',
  },
  {
    id: 'esr-rack',
    name: 'ESR Rack',
    category: 'Blood Collection Tubes',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    description: 'Rack for organizing and supporting ESR tubes.',
  },
  {
    id: 'safety-lancets',
    name: 'Safety Lancets Twist Off',
    category: 'Blood Collection Tubes',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80',
    description: 'Safety lancets for appropriate blood sampling applications.',
  },
  {
    id: 'tourniquets',
    name: 'Tourniquets',
    category: 'Blood Collection Tubes',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80',
    description: 'Tourniquets for appropriate blood collection procedures.',
  },

];


// ---------------------------------------------------------
// HELPER
// ---------------------------------------------------------

export function getCategoryBySlug(slug) {
  return Object.values(categoryData).find(
    category => category.slug === slug
  );
}