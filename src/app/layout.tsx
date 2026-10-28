import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Huda University Gusau | Where The Future Begins",
  description:
    "Huda University Gusau (HUG) is the premier accredited private university in Zamfara State, Nigeria. Offering world-class undergraduate programs in Science & Computing, Allied Health Sciences, and Management & Social Sciences.",
  keywords: [
    "Huda University Gusau",
    "HUG",
    "Universities in Zamfara",
    "Private University Nigeria",
    "Cyber Security Degree Nigeria",
    "Nursing Science Zamfara",
    "Software Engineering Degree Nigeria",
    "NUC Accredited University",
  ],
  icons: {
    icon: "/hug/favicon.png",
    apple: "/hug/favicon.png",
  },
  openGraph: {
    title: "Huda University Gusau | Premier Accredited Private University",
    description:
      "Where The Future Begins. NUC-licensed undergraduate degree programs in Computing, Health Sciences, and Management.",
    url: "https://hug.edu.ng",
    siteName: "Huda University Gusau",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakarta.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900 selection:bg-[#c4933f] selection:text-white">
        {children}
      </body>
    </html>
  );
}
