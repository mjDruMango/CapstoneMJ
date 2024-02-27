import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./pages/Layout";
import ImageUpload from "./components/ImageUpload";
import LSBDecrypt from "./pages/LSB/Decrypt";
import VigEncrypt from "./pages/Vigenere/Encrypt";
import VigDecrypt from "./pages/Vigenere/Decrypt";
import CaesarEncrypt from "./pages/Caesar/Encrypt";
import CaesarDecrypt from "./pages/Caesar/Decrypt";
import "./App.css"

function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          {/* <Route path="/Home" element={<Index />} /> */}
          <Route path="/ImageUpload" element={<ImageUpload />} />
          <Route path="/LSBDecrypt" element={<LSBDecrypt />} />
          <Route path="/VigEncrypt" element={<VigEncrypt />} />
          <Route path="/VigDecrypt" element={<VigDecrypt />} />
          <Route path="/CaesarEncrypt" element={<CaesarEncrypt />} />
          <Route path="/CaesarDecrypt" element={<CaesarDecrypt />} />
          <Route path="*" element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Home;