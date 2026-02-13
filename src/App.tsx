import CTA from "./pages/CTA";
import CTAEFD from "./pages/EFD/CTAEFD";
import HowitworksEFD from "./pages/EFD/HowitworksEFD";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Howitworks from "./pages/Howitworks";
import NewServices from "./pages/NewServices";
import Presentation from "./pages/Presentation";
import PresentationEFD from "./pages/PresentationEFD";
import Testimonials from "./pages/Testimonials";
import WhatsApp from "./pages/WhatsApp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Divider from "./pages/Divider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main className="min-h-screen">
              <Header system={1} />
              <Presentation />
              <NewServices />
              <Divider
                title="Automatize. Escale. Cresça."
                subtitle="Empresas já estão transformando seus resultados com nossas soluções"
              />
              <Howitworks />
              <Testimonials />
              <CTA />
              <WhatsApp system={1} />
            </main>
          }
        />
        <Route
          path="/automatizacao-efd-contribuicao"
          element={
            <main className="min-h-screen">
              <Header system={2} />
              <PresentationEFD />
              <HowitworksEFD />
              {/* <Presentation /> */}
              {/* <Services /> */}
              {/* <Howitworks /> */}
              <Testimonials />
              <CTAEFD />
              <WhatsApp system={2} />
            </main>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
