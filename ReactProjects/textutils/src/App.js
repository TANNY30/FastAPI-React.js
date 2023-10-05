import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';





function App() {
  const [mode,setMode] =  useState('light'); //App state light/dark
  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled !", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled !", "success");
    }

  }

  const [alert,setAlert] =  useState(null);

  const showAlert =(message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);

  }



  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <div className='container my-3'>
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} toggleMode={toggleMode}/>
              </div>
          </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
