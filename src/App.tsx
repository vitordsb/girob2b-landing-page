import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import styles from './styles/LandingPage.module.css';

function App() {
  return (
    <Router>
      <div className={styles.appShell}>
        <Header />
        <div className={styles.appContent}>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
