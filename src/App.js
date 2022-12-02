import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Chefs from './components/Chefs';
import Footer from './components/Footer';
import WeekSpecial from './components/WeekSpecial';
import ContactUs from './components/ContactUs';
import GoToTop from './components/GoToTop';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <div className='top-section'>
        <Navbar />
        <Header />
      </div>
      <GoToTop />
      <AboutUs />
      <Menu />
      <Chefs />
      <ContactUs />
      <WeekSpecial />
      <Footer />
    </>
  );
}

export default App;
