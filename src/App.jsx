import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import ComingSoon from './pages/ComingSoon';

export default function App() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
