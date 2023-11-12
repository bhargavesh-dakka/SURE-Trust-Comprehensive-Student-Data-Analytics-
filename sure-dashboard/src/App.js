import "./App.css";
import Header from "./components/Header";
import Iframe from "./components/Iframe";

function App() {
  return (
    <div>
    <Header />
    <Iframe />
    <p style={{ fontSize: '12px', color: '#888', paddingLeft: '22px' }}>
      Illustrations by: <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">Dribbble</a>
    </p>
    </div>
  );
}

export default App;
