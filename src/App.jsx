import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MainLayout from "./layout/MainLayout";
import AboutPage from "./pages/AboutPage/AboutPage";
import ChancerTypes from "./pages/ChancerTypes/ChancerTypes";
import MedicalInfo from "./pages/MedicalInfo/MedicalInfo";
import ContactPage from "./pages/ContactPage/ContactPage";
import OncologyInfo from "./pages/OncologyInfo/OncologyInfo";
import ChancerDetail from "./pages/ChancerDetail/ChancerDetail";

function App() {
  return (
    <>
      {/* home */}
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/chancer-types" element={<ChancerTypes />} />
            <Route path="/cancer-detail/:id" element={<ChancerDetail />} />
            <Route path="/medical-info" element={<MedicalInfo />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/oncology-info/:id" element={<OncologyInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
