import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componenets/Navbar';
import {Home, About, Contact, Services} from './componenets/Pages'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Contanct' element={<Contact/>}/>
        <Route path='/Services' element={<Services/>}/>

      </Routes>
    </div>
  );
}

export default App;
