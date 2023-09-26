
import './App.css';
import Hero from './Pages/Hero'
import Aboutus from './Pages/Aboutus'
import Twopeople from './Pages/Twopeople'
import Artists from './Pages/Artists'
import Highlights from './Pages/Highlights';
import AnotherAbout from './Pages/AnotherAbout';
import YoutubeEmbed from './Pages/EmbedVideo';
import Footer from './Pages/Footer';
function App() {
  return (
    <div className="App">
      <Hero />
      <Aboutus />
      <Twopeople />
      <Artists />
      <Highlights />
      <AnotherAbout />
      <YoutubeEmbed embedId="BY7dTK9v9FQ" />
      <Footer />
    </div>
  );
}

export default App;
