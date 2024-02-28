import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import ImageSteganographyEncrypt from "./pages/ImageSteganography/ImageSteganographyEncrypt";
import ImageSteganographyDecrypt from "./pages/ImageSteganography/ImageSteganographyDecrypt";
import VigenereEncrypt from "./pages/Vigenere/VigenereEncrypt";
import VigenereDecrypt from "./pages/Vigenere/VigenereDecrypt";
import CaesarShiftEncrypt from "./pages/CaesarShift/CaesarShiftEncrypt";
import CaesarShiftDecrypt from "./pages/CaesarShift/CaesarShiftDecrypt";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/image-steganography">
              <Route path="encrypt" element={<ImageSteganographyEncrypt />} />
              <Route path="decrypt" element={<ImageSteganographyDecrypt />} />
            </Route>
            <Route path="/vigenere">
              <Route path="encrypt" element={<VigenereEncrypt />} />
              <Route path="decrypt" element={<VigenereDecrypt />} />
            </Route>
            <Route path="/caesar-shift">
              <Route path="encrypt" element={<CaesarShiftEncrypt />} />
              <Route path="decrypt" element={<CaesarShiftDecrypt />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

{/* <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          {/* <Route path="/Home" element={<Index />} /> *
          <Route path="/ImageUpload" element={<ImageUpload />} />
          <Route path="/LSBDecrypt" element={<LSBDecrypt />} />
          <Route path="/VigEncrypt" element={<VigEncrypt />} />
          <Route path="/VigDecrypt" element={<VigDecrypt />} />
          <Route path="/CaesarEncrypt" element={<CaesarEncrypt />} />
          <Route path="/CaesarDecrypt" element={<CaesarDecrypt />} />
          <Route path="*" element={<Index />} />
        </Route> */}
