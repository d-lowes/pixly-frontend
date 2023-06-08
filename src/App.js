import './App.css';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Photos from './Photos';
import UploadForm from './UploadForm';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          {/* // <Route path="/photos/:id" element={<Photo />} /> */}
          // <Route path="/upload" element={<UploadForm />} />
          {/* // <Route path="*" element={<Home />} /> */}
        </Routes>
    </div>
  );
}

export default App;
