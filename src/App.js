import './App.css';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <NavBar />
      <h3>Feelin Hot Hot Hot!</h3>
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/photos/:id" element={<Photo />} />
          <Route path="/upload" element={<UploadForm />} />
          <Route path="*" element={<Home />} />
        </Routes> */}
    </div>
  );
}

export default App;
