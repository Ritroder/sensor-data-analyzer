import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar"; // Adjust the import as per your directory structure
import SensorChart from "./screens/SensorDataChart";
import Settings from "./screens/Settings"; // Import your Settings component
import ManageSensors from "./screens/ManageSensors"; // Import your ManageSensors component

const App = () => {
  return (
    <Router>
      <Header />
      <Sidebar />
      <main className="py-3">
        <Routes>
          <Route path="/" element={<SensorChart />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/manage-sensors" element={<ManageSensors />} />
          {/* Add other Routes as needed */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
