import Header from "./pages/Header";
import Presentation from "./pages/Presentation";
import Services from "./pages/Services";
import WhatsApp from "./pages/WhatsApp";

function App() {
  return (
    <>
      <main className="min-h-screen">
        <Header />
        <Presentation />
        <Services />
      </main>
      <WhatsApp />
    </>
  );
}

export default App;
