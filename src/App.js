import './App.css';
import Alerts from './Comonents/Alerts';
import About from './Comonents/About';
import Navbar from './Comonents/Navbar';
import TextForm from './Comonents/TextForm';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const[mode, setMode] = useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      }
      )
      setTimeout(()=>{
        setAlert(null);
      },2000);
    }

  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor ='#042743';
        showAlert("Dark mode has been enable", "success");
    }
    else {
        setMode('light');
        document.body.style.backgroundColor ='white';
        showAlert("Light mode has been enable", "success");
    }
};

  return (
    <>
    <Router>
    <Navbar title="TextUtils"  Abouttxt="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alerts alert={alert}/>
    <div className="container">
    <Routes>
          <Route exact path='/about'
            element={<About mode={mode}/>}>
          </Route>
          <Route exact path='/'
          element={<TextForm Heading="Enter text below to analyze" showAlert={showAlert} mode={mode}/>}>
          </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
