import { ChakraProvider } from "@chakra-ui/react";
import {Header} from "../components/Header";
import {Navbar} from "../components/Navbar";
import { PethomerSection } from "../components/PethomerSection";
import { InstagramSection } from "../components/InstagramSection";
import { TrustSection } from "../components/TrustSection";
import { PressNewsletterSection } from "@/components/PressNewsletterSection";
import { Footer } from "../components/Footer";

export default function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Header />
      <PethomerSection />
      <InstagramSection />
      <TrustSection />
       <PressNewsletterSection />
       < Footer />
      {/* reszta strony */}
    </ChakraProvider>
  );
}
