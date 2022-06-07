import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './App.css';
import ResponsiveAppBar from './Navbar';
import CustForm from './customerform';
import NameForm from './customerform';
import MenuAppBar from './Navbar';
import MyForm from './customerform';
function App() {
  return (
    <div className="main">
      <div>
      <MenuAppBar/>
    </div>
    <div >
        <MyForm/>
    </div>
  
    </div>
  );
}

export default App;
