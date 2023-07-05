import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Content from './Component/Content';
import Footer from './Component/Footer';
import Confetti from './Component/Confetti';

function App() {
  
  return (
    <>
    <Confetti  />
    <div className="container min-w-[640px] max-w-[768px] mx-auto">
      <Header />
      <Content />
      <Footer />
    </div>
  </>
);
}
export default App;
