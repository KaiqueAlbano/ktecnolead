import CTA from "./pages/CTA";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Howitworks from "./pages/Howitworks";
import Presentation from "./pages/Presentation";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import WhatsApp from "./pages/WhatsApp";

function App() {
  return (
    <>
      <main className="min-h-screen">
        <Header />
        <Presentation />
        <Services />
        <Howitworks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}

export default App;
