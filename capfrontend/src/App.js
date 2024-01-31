import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloWorld from "./pages/HelloWorld";
import EncryptTest from "./pages/EncryptTest";

function Home(){
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<HelloWorld />} />
        <Route path="/HelloWorld" element={<HelloWorld />} />
        <Route path="/EncryptTest" element={<EncryptTest />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Home;