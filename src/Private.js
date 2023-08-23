import { Sidebar } from "./components/Sidebar";
import "./private.css";
import {
  Guruhlar,
  Oquvchilar,
  Bugalteriya,
  Sozlamalar,
  Yordam,
  Control,
} from "./pages_sitebar";
import { Routes, Route, Link } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

function Private() {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <Sidebar>
              <Routes>
                <Route path="/*" element={<Control />} />
                <Route path="/guruhlar" element={<Guruhlar />} />
                <Route path="/oquvchilar" element={<Oquvchilar />} />
                <Route path="/bugalteriya" element={<Bugalteriya />} />
                <Route path="/sozlamalar" element={<Sozlamalar />} />
                <Route path="/yordam" element={<Yordam />} />
              </Routes>
            </Sidebar>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<>Erro 404 bunaqa page topilmadi!!!!</>} />
      </Routes>
    </>
  );
}

export default Private;
