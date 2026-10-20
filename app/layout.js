import "./globals.css";
import { Footer, Header } from "@/components/SiteShell";

export const metadata = {
  title: {
    default: "Droidex | Robotics for real-world work",
    template: "%s | Droidex",
  },
  description: "Droidex Australia develops aerial drones, underwater robotics, electric marine propulsion and imaging systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
