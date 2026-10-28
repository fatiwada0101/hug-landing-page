export interface FAQItem { question: string; answer: string; category: "Admissions" | "Academics" | "Campus & Housing" | "Fees & Aid"; }
export const FAQS: FAQItem[] = [
  { question: "How do I apply for admission?", answer: "Visit portal.hug.edu.ng for the admission application process and registration guidance.", category: "Admissions" },
  { question: "Can I reserve bedspace online?", answer: "Contact the university for the hostel accommodation reservation procedure.", category: "Campus & Housing" },
  { question: "What is the annual registration amount?", answer: "Request the approved fee structure for the current session from the university.", category: "Fees & Aid" },
];
