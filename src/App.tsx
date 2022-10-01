import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Event from './pages/Event';
import Create from './pages/Create';
import EditDate from './pages/EditDate';
import EditLocation from './pages/EditLocation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/event/date/edit" element={<EditDate/>}/>
        <Route path="/event/location/edit" element={<EditLocation/>}/>
      </Routes>
    </div>
  );
}

export default App;
