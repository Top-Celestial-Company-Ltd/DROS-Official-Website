import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import ComingSoon from './pages/ComingSoon';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Trust from './pages/Trust';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}