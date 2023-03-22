import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page2 from './pages/Page2';
import { Preloader } from './pages/Preloader';
import Art from './pages/projects/art/Art';
import PingP from './pages/projects/pingpong/PingP';
import SNEAKERSS from './pages/projects/sneakers/SNEAKERSS';

const App: React.FC = () => {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Preloader />} />
        <Route path='/tv' element={<Page2 />} />
        <Route path='/tv/proj1' element={<PingP />} />
        <Route path='/tv/proj2/*' element={<SNEAKERSS />} />
        <Route path='/tv/proj3' element={<Art />} />
      </Routes>
    </div>
  );
}

export default App;
