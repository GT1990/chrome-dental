export type ServiceArticle = {
  id: string;
  title: string;
  intro: string;
  benefits: string[];
  process: string[];
};

export const servicesData: ServiceArticle[] = [
  {
    id: "checkups",
    title: "Comprehensive Dental Checkups",
    intro:
      "Routine dental checkups are the foundation of lifelong oral health. At Chrome Dental, our checkups go beyond a quick look at your teeth. We utilize advanced imaging and thorough examination techniques to detect issues like cavities, gum disease, and oral cancer early, ensuring your smile remains vibrant and healthy.",
    benefits: [
      "Early detection of hidden dental issues using digital imaging.",
      "Professional cleaning to remove stubborn plaque and tartar build-up.",
      "Personalized oral hygiene advice tailored to your lifestyle.",
      "Prevention of costly future dental procedures.",
    ],
    process: [
      "Comprehensive examination of teeth, gums, and mouth tissue.",
      "Digital X-rays to check bone health and hidden decay.",
      "Gentle, detailed cleaning by our skilled hygienists.",
      "One-on-one consultation with the dentist to discuss your long-term oral health goals.",
    ],
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry & Smile Makeovers",
    intro:
      "Your smile is your introduction to the world. Chrome Dental offers premier cosmetic dentistry services designed to enhance the natural beauty of your teeth. Whether you are looking to fix discoloration, gaps, or misalignment, our team combines artistry with dental science to craft your perfect smile.",
    benefits: [
      "Achieve the radiant smile you have always dreamed of.",
      "Boost your self-esteem and confidence in social and professional settings.",
      "Correct functional issues like bites or overlapping teeth while improving aesthetics.",
      "Fully customized treatment plans that match your facial features.",
    ],
    process: [
      "Initial consultation to map out your aesthetic goals.",
      "Digital smile design and treatment planning.",
      "Procedural appointments (Whitening, Veneers, Bonding, etc.).",
      "Final reveal and guidance on maintaining your new smile.",
    ],
  },
  {
    id: "dental-bridges",
    title: "Dental Bridges",
    intro:
      "Missing teeth can affect everything from your speech to your ability to chew. Dental bridges at Chrome Dental are a reliable, non-surgical prosthetic solution. By anchoring artificial teeth to your adjacent natural teeth or implants, we can seamlessly restore the gaps in your smile.",
    benefits: [
      "Instantly restores your smile’s appearance and function.",
      "Prevents surrounding teeth from shifting out of position.",
      "Restores proper chewing and speaking ability.",
      "Maintains the natural shape of your face.",
    ],
    process: [
      "Preparation of the anchor teeth (abutments).",
      "Taking precise impressions for a custom fit.",
      "Placement of a temporary bridge while the permanent one is crafted.",
      "Bonding the final custom bridge for a secure, long-lasting fit.",
    ],
  },
  {
    id: "dental-crowns",
    title: "Dental Crowns",
    intro:
      "When a tooth is damaged or weakened, a dental crown acts as a protective shield. At Chrome Dental, we use high-quality materials like porcelain and ceramic to create crowns that look and feel just like your natural teeth, restoring both strength and beauty.",
    benefits: [
      "Repairs and strengthens cracked, decayed, or worn-down teeth.",
      "Protects teeth following root canal therapy.",
      "Improves the shape and color of teeth for a better aesthetic.",
      "Durable, long-lasting solution with proper care.",
    ],
    process: [
      "Evaluation and reshaping of the tooth to fit the crown.",
      "Digital impressions for precise fabrication.",
      "Placement of a temporary crown.",
      "Cementing the final, custom-made crown for a seamless finish.",
    ],
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    intro:
      "Dental implants are the gold standard for replacing missing teeth. Acting as artificial tooth roots, they provide a permanent base for fixed replacement teeth. Chrome Dental specializes in implant dentistry that offers a natural look, feel, and function unachievable with other methods.",
    benefits: [
      "The only restoration that preserves natural jawbone density.",
      "Look, feel, and function exactly like natural teeth.",
      "Permanent solution that can last a lifetime with care.",
      "Eliminates the slipping or discomfort associated with dentures.",
    ],
    process: [
      "Surgical placement of the titanium implant into the jawbone.",
      "Healing period for osseointegration (bonding with the bone).",
      "Placement of the abutment and custom crown.",
      "Final restoration of full bite function.",
    ],
  },
  {
    id: "dental-veneers",
    title: "Porcelain Veneers",
    intro:
      "Veneers are the secret behind many Hollywood smiles. These thin, custom-made shells are bonded to the front of your teeth to mask imperfections instantly. Chrome Dental offers high-grade porcelain veneers that resist staining and mimic the light-reflecting properties of natural teeth.",
    benefits: [
      "Instantly corrects chips, cracks, gaps, and severe discoloration.",
      "Highly resistant to coffee, tea, and smoke stains.",
      "Requires minimal removal of natural tooth structure.",
      "Provides a uniform, bright, and symmetrical smile.",
    ],
    process: [
      "Consultation to choose your ideal shade and shape.",
      "Light preparation of the tooth surface.",
      "Fabrication of custom veneers in a dental lab.",
      "Bonding the veneers to your teeth for a permanent transformation.",
    ],
  },
  {
    id: "dentures",
    title: "Modern Dentures",
    intro:
      "Modern dentures are far more comfortable and natural-looking than those of the past. At Chrome Dental, we design full and partial dentures that fit securely and comfortably, allowing you to eat, speak, and smile with renewed confidence.",
    benefits: [
      "Restores a full smile and facial volume.",
      "Custom-fitted to prevent irritation and slipping.",
      "Improving chewing ability and digestion.",
      "Available in implant-supported options for maximum stability.",
    ],
    process: [
      "Taking detailed molds of your gums and jaw.",
      "Trying in 'wax' models to verify fit and appearance.",
      "Final adjustment and delivery of your custom dentures.",
      "Follow-up visits to ensure perfect comfort.",
    ],
  },
  {
    id: "emergency-care",
    title: "Emergency Dental Care",
    intro:
      "Dental emergencies don't wait for business hours. Whether it's a knocked-out tooth, a severe toothache, or a broken crown, Chrome Dental offers prompt emergency care to relieve pain and save your teeth when it matters most.",
    benefits: [
      "Immediate pain relief and compassionate care.",
      "Prevention of permanent damage or tooth loss.",
      "Treatment of infections before they spread.",
      "Quick repairs for broken restorations.",
    ],
    process: [
      "Contacting our emergency line immediately.",
      "Priority examination to diagnose the trauma.",
      "Immediate treatment (extraction, root canal, or splinting).",
      "Prescription of necessary medications and follow-up plan.",
    ],
  },
  {
    id: "fillings",
    title: "Tooth-Colored Fillings",
    intro:
      "Gone are the days of dark metal fillings. Chrome Dental uses composite resin fillings that blend perfectly with your tooth's natural color. We remove decay and seal the tooth, restoring its integrity without compromising your smile's appearance.",
    benefits: [
      "Aesthetically pleasing and virtually invisible.",
      "Bonds directly to the tooth, restoring strength.",
      "Requires less removal of healthy tooth structure than metal fillings.",
      "Free of mercury and metal.",
    ],
    process: [
      "Local anesthesia to ensure a painless procedure.",
      "Removal of decayed tooth material.",
      "Cleaning and priming the cavity.",
      "Layering and curing the composite resin for a hard, durable finish.",
    ],
  },
  {
    id: "aligners",
    title: "Clear Aligners (Invisalign)",
    intro:
      "Straighten your teeth without the hassle of metal brackets and wires. Chrome Dental offers clear aligner therapy to gradually shift your teeth into alignment using a series of invisible, removable trays.",
    benefits: [
      "Nearly invisible—most people won't know you're wearing them.",
      "Removable for eating, brushing, and flossing.",
      "Smooth plastic design eliminates irritation to cheeks and gums.",
      "Often faster and more convenient than traditional braces.",
    ],
    process: [
      "3D digital scanning of your teeth.",
      "Custom fabrication of your aligner series.",
      "Wearing aligners for 20-22 hours a day, changing weekly.",
      "Regular check-ins to monitor progress until your smile is straight.",
    ],
  },
  {
    id: "oral-surgery",
    title: "Oral Surgery",
    intro:
      "From wisdom teeth removal to corrective jaw procedures, Chrome Dental provides comprehensive oral surgery services in a safe and comfortable environment. Our team is trained to handle complex surgical needs with precision and care.",
    benefits: [
      "Safe removal of impacted or infected teeth.",
      "Preparation of the jaw for dental implants (bone grafting).",
      "Relief from chronic jaw pain or TMJ issues.",
      "Sedation options available for total comfort.",
    ],
    process: [
      "Detailed consultation with 3D imaging.",
      "Surgical procedure under local anesthesia or sedation.",
      "Guided recovery with detailed post-op instructions.",
      "Follow-up appointment to ensure proper healing.",
    ],
  },
  {
    id: "root-canal",
    title: "Root Canal Therapy",
    intro:
      "Root canal therapy is a tooth-saving procedure used to treat infection at the center of a tooth. Contrary to popular belief, modern root canals at Chrome Dental are relatively painless and highly effective at relieving severe toothaches.",
    benefits: [
      "Saves a natural tooth that would otherwise need extraction.",
      "Eliminates severe pain and sensitivity immediately.",
      "Removes infection and prevents it from spreading to the jaw.",
      "Restores full chewing function once crowned.",
    ],
    process: [
      "Anesthesia to numb the area completely.",
      "Creating a small opening to access the infected pulp.",
      "Cleaning and disinfecting the root canals.",
      "Sealing the tooth and placing a protective crown.",
    ],
  },
  {
    id: "tooth-extraction",
    title: "Tooth Extraction",
    intro:
      "While our goal is always to save natural teeth, extraction is sometimes the healthiest option. Chrome Dental performs extractions for damaged, infected, or crowded teeth with a focus on patient comfort and quick recovery.",
    benefits: [
      "Eliminates the source of dangerous infection.",
      "Relieves pain from non-restorable broken teeth.",
      "Creates space for orthodontic treatment.",
      "Removes problematic wisdom teeth preventing future issues.",
    ],
    process: [
      "X-rays to determine the best extraction technique.",
      "Local anesthesia or sedation for a stress-free experience.",
      "Gentle removal of the tooth.",
      "Placement of gauze and instructions for clot formation.",
    ],
  },
];
