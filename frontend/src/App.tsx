import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="relative min-h-screen w-screen bg-neutral-900 overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute inset-0 bg-fuchsia-400 opacity-20 blur-[120px]" />

      {/* App Content */}
      <div className="relative z-10 flex flex-col min-h-screen gap-6">
     
        <Router>
          <Routes>
            <Route path="/" element={<Home />} ></Route>
          </Routes>
        </Router>
        </div>


    </div>
  );
};

export default App;
