import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
