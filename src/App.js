import React, { useEffect } from 'react';
import './styles.css';

import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import About     from './components/About';
import Hosts     from './components/Hosts';
import Listen    from './components/Listen';
import Episodes  from './components/Episodes';
import Sponsors  from './components/Sponsors';
import Footer    from './components/Footer';

function App() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-cubic',
        offset: 60,
      });
    }
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Hosts />
        <Episodes />
        <Listen />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}

export default App;

