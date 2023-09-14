
import { Login, Register } from "./components/pages";
import Home from "./components/Home";
import { Routes, Route} from "react-router-dom";
import Profile from "./components/profile";







function App() {

  return (
    
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/app" element={<Profile />} />
        
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />
      </Routes>
    
  );
}

export default App;
