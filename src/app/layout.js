import { Inter } from 'next/font/google'
import "./globals.css";


const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "Nexus Hub",
  description: "Nexus Hub is a modern team collaboration tool that helps teams communicate, manage tasks, and share files in one unified platform — fast, secure, and easy to use.",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
