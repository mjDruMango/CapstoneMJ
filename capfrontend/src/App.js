import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
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
