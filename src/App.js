import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component.jsx';
import Home from './routes/home/home.component';
import About from './routes/about/about.component.jsx';
import Works from './routes/works/works.component.jsx';
import Contact from './routes/contact/contact.component.jsx';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} /> 
        <Route path='works' element={<Works />} /> 
        <Route path='contact' element={<Contact />} /> 
      </Route>
    </Routes>
  );
};

export default App;
