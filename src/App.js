import './style/App.scss';
import ProjectOne from './components/ProjectOne';
import ProjectTwo from './components/ProjectTwo';
import ProjectThree from './components/ProjectThree';
import ProjectFour from './components/ProjectFour';
import ProjectFive from './components/ProjectFive';
import PriceOne from './components/PriceOne';
import PriceTwo from './components/PriceTwo';
import PriceThree from './components/PriceThree';
import PriceFour from './components/PriceFour';
import PriceFive from './components/PriceFive';
import Contact from './components/Contact';
import TestimonialsTwo from './components/TestimonialsTwo';
import Testimonials from './components/TestimonialsOne';
function App() {
  return (
    <div className="App">
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
      <ProjectFour />
      <ProjectFive />
      <PriceOne />
      <PriceTwo />
      <PriceThree />
      <PriceFour />
      <PriceFive />
      <Testimonials />
      <TestimonialsTwo />
      <Contact />
    </div>
  );
}

export default App;
