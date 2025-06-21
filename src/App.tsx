import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import AISection from './components/AISection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SolutionsAI from './components/SolutionsAI';
import ProjectDetail from './components/ProjectDetail';
import './i18n';

const HomePage = () => (
  <main>
    <HeroBanner />
    <AboutSection />
    <ServicesSection />
    <AISection />
    <PortfolioSection />
    <ContactSection />
  </main>
);

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-zinc-800 dark:text-white transition-colors duration-200">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ai-solutions" element={<SolutionsAI />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;