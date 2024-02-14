import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloWorld from "./pages/HelloWorld";
import EncryptTest from "./pages/EncryptTest";
import ImageUpload from "./components/ImageUpload";
import "./App.css"
import LSBDecrypt from "./pages/LSB/Decrypt";

function Home(){
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<HelloWorld />} />
        <Route path="/HelloWorld" element={<HelloWorld />} />
        <Route path="/EncryptTest" element={<EncryptTest />} />
        <Route path="/ImageUpload" element={<ImageUpload />} />
        <Route path="/LSBDecrypt" element={<LSBDecrypt />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Home;