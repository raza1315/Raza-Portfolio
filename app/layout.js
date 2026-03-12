import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Syed Raza Mehdi Rizvi — Full Stack Developer",
  description: "Portfolio of Syed Raza Mehdi Rizvi, a Full Stack Developer specialising in React, Next.js, Node.js, and cloud-native systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-sans), 'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
