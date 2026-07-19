import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import ManagePost from './Pages/ManagePost';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<ManagePost />} />
          <Route path="/edit/:id" element={<ManagePost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;