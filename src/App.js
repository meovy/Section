import Features from "./components/Feature";
import Headers from "./components/Header";
import NavBar from "./components/NavBar";
import LatestBlogposts1 from './components/Blogs/LatestBlogposts1';
import LatestBlogposts2 from './components/Blogs/LatestBlogposts2';
import LatestBlogposts3 from './components/Blogs/LatestBlogposts3';
import LatestBlogposts4 from './components/Blogs/LatestBlogposts4';
import LatestBlogposts5 from './components/Blogs/LatestBlogposts5';
import OurAwesomeTeam1 from './components/Teams/OurAwesomeTeam1';
import OurAwesomeTeam2 from './components/Teams/OurAwesomeTeam2';
import OurAwesomeTeam3 from './components/Teams/OurAwesomeTeam3';
import OurAwesomeTeam4 from './components/Teams/OurAwesomeTeam4';
import OurAwesomeTeam5 from './components/Teams/OurAwesomeTeam5';
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
import './style/App.scss';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Headers />
      <Features />
      <LatestBlogposts1 />
      <LatestBlogposts2 />
      <LatestBlogposts3 />
      <LatestBlogposts4 />
      <LatestBlogposts5 />
      <OurAwesomeTeam1 />
      <OurAwesomeTeam2 />
      <OurAwesomeTeam3 />
      <OurAwesomeTeam4 />
      <OurAwesomeTeam5 />
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
