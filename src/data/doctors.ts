import drHussamJaberImg from "../img/doctors/dr-hussam-jaber.webp";
import drGauravSoodImg from "../img/doctors/dr-gaurav-sood.webp";

export type Doctor = {
  id: string;
  name: string;
  imageSrc: string;
  bio: string[];
  trustText: string;
  funFact?: string;
  summary: string;
};

export const doctors: Doctor[] = [
  {
    id: "dr-hussam-jaber",
    name: "Dr. Hussam Jaber",
    imageSrc: drHussamJaberImg,
    summary:
      "Dr. Hussam Jaber, DDS, MBA, is a skilled and caring dentist committed to delivering high-quality, comfortable, and modern dental care. With advanced clinical training and a gentle approach, he focuses on helping patients feel confident, informed, and relaxed at every visit.",
    bio: [
      "Dr. Hussam Jaber, DDS, MBA, is a skilled and caring dentist committed to delivering high-quality, comfortable, and modern dental care.",
      "Dr. Jaber completed his dental training at the VCU School of Dentistry, where he built strong expertise in restorative, surgical, and endodontic procedures. He also earned his first DDS degree from Ajman University and completed a General Practice Residency at the Royal Medical Services Hospitals in Amman, Jordan.",
      "To further strengthen his leadership and patient-centered philosophy, Dr. Jaber completed an MBA in Healthcare Management, enhancing his ability to deliver high-quality, efficient, and compassionate care.",
    ],
    trustText:
      "With advanced clinical training and a gentle approach, Dr. Jaber focuses on helping patients feel confident, informed, and relaxed at every visit.",
    funFact:
      "Enjoys sushi, hot pot, and Korean barbecue, as well as playing badminton, swimming, and exploring new experiences.",
  },
  {
    id: "dr-gaurav-sood",
    name: "Dr. Gaurav Sood",
    imageSrc: drGauravSoodImg,
    summary:
      "Dr. Sood is known for his gentle touch, attention to detail, and commitment to excellence. He takes time to understand each patient's individual needs and works closely with them to achieve confident, healthy smiles that last.",
    bio: [
      "Dr. Sood earned his Bachelor of Dental Surgery in India before completing his Doctor of Dental Surgery degree at Loma Linda University in California.",
      "He is certified by The American Board of Dental Examiners (ADEX) and is passionate about providing high-quality, patient-focused dental care.",
    ],
    trustText:
      "Dr. Sood is known for his gentle touch, attention to detail, and commitment to excellence. He takes time to understand each patient's individual needs and works closely with them to achieve confident, healthy smiles that last.",
    funFact:
      "Enjoys traveling, exploring new cuisines, and spending time with family and friends.",
  },
];
