import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/Components/theme-provider";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import LayoutWrapper from "@/Components/LayoutWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "DoroPocket",
  description: "Modern Gadget Ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light" 
        >
          {/* <Navbar></Navbar> */}
          <LayoutWrapper>
          {children}
          {/* <Footer></Footer> */}
          </LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}