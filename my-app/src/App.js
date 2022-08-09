import logo from './logo.svg';
import { Route, Routes, useNavigate} from "react-router-dom";
import './App.css';
import './icon/style.css'
import HeaderComponent from './components/header-component';
import FooterSlaid from './components/footer';
import FooterSection1 from './components/footer1';

function App() {
  return (
    <div className="App"style={{margin:0+'px',padding:0+'px'}}>
      <HeaderComponent/>
      <FooterSlaid/>
      <FooterSection1/>
    
    </div>
  );
}

export default App;
