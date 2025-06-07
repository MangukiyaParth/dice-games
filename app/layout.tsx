import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" crossOrigin="anonymous" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" strategy="beforeInteractive"></Script>
      </head>
      <body
        className={`${montserrat.variable} antialiased flex justify-center flex-col`}
      >
        <header className="text-center z-99 py-4 px-2 border-b-2 border-zinc-600 backdrop-blur-lg shadow-xl text-center">
          <img src="/logo.png" alt="Logo" className="h-[50px]" />
        </header>
        {children}
        <footer className="flex flex-col sm:flex-row items-center sm:justify-center gap-2 sm:gap-5 text-gray-500 py-4 border-t-2 border-zinc-300">
          <a href="/">Home</a>
          <a href="/policy">About Us</a>
          <a href="/policy">Disclaimer</a>
          <a href="/policy">Privacy Policy</a>
        </footer>
      </body>
    </html>
  );
}
