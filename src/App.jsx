import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing your components and screens
import Navbar from './components/Navigations/Navbar/Navbar'
import Hero from './components/Home/HeroSection/Hero'
import Footer from './components/Navigations/Footer/Footer';
import Testimonials from './components/Home/Testimonials/Testimonials';
import History from './components/Home/History/History'
import Quote from './components/Home/Quote/Quote'
import ServiceHero from './components/Service/ServiceHero/ServiceHero'
import ServicesProvided from './components/Service/ServicesProvided/ServicesProvided'
import Contact from './components/ContactUs/Contact'
import Skills from './components/Service/Skills/Skills'
import LeadershipHero from './components/Leadership/LeadershipHero/LeadershipHero'
import LeadershipRoles from './components/Leadership/Roles/Roles'
import Stat from './components/Service/Statistics/Statistics'
import AboutHero from './components/About/AboutHero/AboutHero'

function App() {
  return (
    <Router>
      {/* Navbar stays here to remain visible on every page */}
      <Navbar />

      <Routes>
        {/* HOME PAGE: The "Stacked" One-Page Layout */}
        <Route
          path="/"
          element={
            <main>
                <Hero />
                <Testimonials />
                <History />
                <Quote />
            </main>
          }
        />

        {/* OTHER PAGES: Standalone views*/}

        <Route
          path="/about"
          element={
            <main>
             <AboutHero />
             <History />
            </main>
          }
        />

        <Route
          path="/leadership"
          element={
            <main>
             <LeadershipHero />
             <LeadershipRoles />
             <Stat />
            </main>
          }
        />

        <Route
          path="/service"
          element={
            <main>
              <ServiceHero />
              <ServicesProvided />
              <Skills />
            </main>
          }
        />

        {/* OTHER PAGES: Standalone views*/}
        <Route
          path="/contact"
          element={
            <main>
              <Contact />
            </main>
          }
        />

      </Routes>

      {/* Footer stays here to remain visible on every page */}
      <Footer />
    </Router>
  );
}

export default App;