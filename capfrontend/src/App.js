import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloWorld from "./pages/HelloWorld";
import EncryptTest from "./pages/EncryptTest";
import ImageUpload from "./components/ImageUpload";
import LSBDecrypt from "./pages/LSB/Decrypt";
import VigEncrypt from "./pages/Vigenere/Encrypt";
import VigDecrypt from "./pages/Vigenere/Decrypt";
import CaesarEncrypt from "./pages/Caesar/Encrypt";
import CaesarDecrypt from "./pages/Caesar/Decrypt";
import "./App.css"

function Home(){
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<HelloWorld />} />
        <Route path="/HelloWorld" element={<HelloWorld />} />
        <Route path="/EncryptTest" element={<EncryptTest />} />
        <Route path="/ImageUpload" element={<ImageUpload />} />
        <Route path="/LSBDecrypt" element={<LSBDecrypt />} />
        <Route path="/VigEncrypt" element={<VigEncrypt />} />
        <Route path="/VigDecrypt" element={<VigDecrypt />} />
        <Route path="/CaesarEncrypt" element={<CaesarEncrypt />} />
        <Route path="/CaesarDecrypt" element={<CaesarDecrypt />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Home;