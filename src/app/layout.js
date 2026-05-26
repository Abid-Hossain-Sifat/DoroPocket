import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navbar from "@/Components/Navbar";

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
          <Navbar></Navbar>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}