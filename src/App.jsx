import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing your components and screens
import Navbar from './components/Navigations/Navbar/Navbar'
import Hero from './components/Home/HeroSection/Hero'
import Footer from './components/Navigations/Footer/Footer';
import Testimonials from './components/Home/Testimonials/Testimonials';
import History from './components/Home/History/History'

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
            </main>
          }
        />

        {/* OTHER PAGES: Standalone views*/}
        {/*
        <Route
          path="/about"
          element={
            <main>
              <AboutUs />
              <Team />
              <Events />
            </main>
          }
        />
        */}

      </Routes>

      {/* Footer stays here to remain visible on every page */}
      <Footer />
    </Router>
  );
}

export default App;