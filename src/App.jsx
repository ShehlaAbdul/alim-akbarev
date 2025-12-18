import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MainLayout from "./layout/MainLayout";
import AboutPage from "./pages/AboutPage/AboutPage";
import ChancerTypes from "./pages/ChancerTypes/ChancerTypes";

function App() {
  return (
    <>
      {/* home */}
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/chancer-types" element={< ChancerTypes/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
