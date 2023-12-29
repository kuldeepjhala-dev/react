import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'

function App() {
  return (
    <>
      {/* <Navbar title="TextUtiles-kj" about="About"/> */}
      {/* <Navbar /> */}
      <Navbar title="TextUtiles" />
      <div className="container">
        {/* <TextForm heading="Enter the text to analyze" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
