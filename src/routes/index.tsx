import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Work from '../pages/Work';

const AppRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
     </Router>
    )
}

export default AppRoutes;