import './App.css';
import Navbar from './components/header'
import Footer from './components/footer';
import Cards from './components/main';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cards/>
      <Footer/>
      
    </div>
  );
}

export default App;
