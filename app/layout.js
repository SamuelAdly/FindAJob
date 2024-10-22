import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "FindAJob",
  description: "Find Your Dream Job Today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-grow pt-20">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
